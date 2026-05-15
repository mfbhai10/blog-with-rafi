import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Videos", href: "/videos" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com", icon: "GH" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "LI" },
    { label: "YouTube", href: "https://youtube.com", icon: "YT" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900">Blog with Rafi</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A personal dev log about web development, AI lab projects, coding
              notes, and learning videos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors text-xs font-bold"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-slate-200 pt-8 text-center">
          <p className="text-xs text-slate-500">
            Built with Next.js, Tailwind CSS, and curiosity.
          </p>
          <p className="text-xs text-slate-400 mt-2">
            © {new Date().getFullYear()} Blog with Rafi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
