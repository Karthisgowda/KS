import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const envFiles = [".env.local", ".env"];

function applyEnvLine(line: string) {
  const trimmed = line.trim();

  if (!trimmed || trimmed.startsWith("#")) {
    return;
  }

  const separatorIndex = trimmed.indexOf("=");
  if (separatorIndex === -1) {
    return;
  }

  const key = trimmed.slice(0, separatorIndex).trim();
  const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

  if (key && process.env[key] === undefined) {
    process.env[key] = value;
  }
}

export function loadServerEnv() {
  for (const file of envFiles) {
    const path = resolve(process.cwd(), file);

    if (!existsSync(path)) {
      continue;
    }

    const content = readFileSync(path, "utf8");
    content.split(/\r?\n/).forEach(applyEnvLine);
  }
}
