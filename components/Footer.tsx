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
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-tight text-slate-900">
              Blog with Rafi
            </h3>
            <p className="text-sm leading-6 text-slate-600">
              A personal dev log about web development, AI lab projects, coding
              notes, and learning videos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-tight text-slate-900">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-tight text-slate-900">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 transition-colors hover:bg-blue-100 hover:text-blue-600"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-slate-200 pt-8 text-center">
          <p className="text-xs leading-6 text-slate-500">
            Built with Next.js, Tailwind CSS, and curiosity.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            © {new Date().getFullYear()} Blog with Rafi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
