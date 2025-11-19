import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Apple-inspired spacing scale (8pt grid system)
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Apple-inspired typography scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.0125em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.0125em' }],
        'xl': ['1.25rem', { lineHeight: '1.875rem', letterSpacing: '-0.0125em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          900: "var(--primary-900)",
          800: "var(--primary-800)",
          700: "var(--primary-700)",
          600: "var(--primary-600)",
          500: "var(--primary-500)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        dark: {
          900: "var(--dark-900)",
          800: "var(--dark-800)",
          700: "var(--dark-700)",
          600: "var(--dark-600)",
          500: "var(--dark-500)",
        },
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      // Apple-inspired backdrop blur
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      // Apple-inspired box shadows
      boxShadow: {
        'apple-sm': '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
        'apple': '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        'apple-lg': '0 8px 32px 0 rgba(0, 0, 0, 0.16)',
        'apple-xl': '0 16px 64px 0 rgba(0, 0, 0, 0.24)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-12px)"
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(24px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        fadeInLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-24px)"
          },
          to: {
            opacity: "1",
            transform: "translateX(0)"
          },
        },
        fadeInRight: {
          from: {
            opacity: "0",
            transform: "translateX(24px)"
          },
          to: {
            opacity: "1",
            transform: "translateX(0)"
          },
        },
        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.95)"
          },
          to: {
            opacity: "1",
            transform: "scale(1)"
          },
        },
        slideDown: {
          from: {
            opacity: "0",
            transform: "translateY(-8px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "accordion-up": "accordion-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        float: "float 8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        fadeInUp: "fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        fadeInLeft: "fadeInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        fadeInRight: "fadeInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        scaleIn: "scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        slideDown: "slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      // Apple-inspired transition timing
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'apple-smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
