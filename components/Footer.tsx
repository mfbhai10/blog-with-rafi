import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { label: "হোম", href: "/" },
    { label: "ব্লগ", href: "/blog" },
    { label: "ভিডিও", href: "/videos" },
    { label: "আমার সম্পর্কে", href: "/about" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com", icon: "GH" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "LI" },
    { label: "YouTube", href: "https://youtube.com", icon: "YT" },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-tight text-primary">
              Blog with Rafi
            </h3>
            <p className="text-sm leading-6 text-muted">
              web development, AI lab project, coding note, আর learning journey
              নিয়ে রাফির personal dev log।
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-tight text-primary">
              দ্রুত লিংক
            </h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-tight text-primary">
              যোগাযোগ
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-soft text-xs font-bold text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-border pt-8 text-center">
          <p className="text-xs leading-6 text-muted">
            Next.js, Tailwind CSS, আর curiosity দিয়ে বানানো।
          </p>
          <p className="mt-2 text-xs text-muted/80">
            © {new Date().getFullYear()} Blog with Rafi. সব অধিকার সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
