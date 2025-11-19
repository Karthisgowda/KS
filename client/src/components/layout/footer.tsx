export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 py-12 md:py-16 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4">
          <p className="text-gray-500 text-sm md:text-base">
            © {currentYear} Karthik S Gowda. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs md:text-sm">
            Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
