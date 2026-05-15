import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

type ContactItem = {
  label: string;
  description: string;
  href: string;
};

export const metadata: Metadata = {
  title: "Contact | Blog with Rafi",
  description:
    "Get in touch with Rafi for collaboration, coding discussions, and professional connections.",
};

const contactItems: ContactItem[] = [
  {
    label: "Email",
    description:
      "Send a message directly about coding, projects, or collaboration.",
    href: "https://example.com/email",
  },
  {
    label: "GitHub",
    description: "View code, projects, and the repositories I am building.",
    href: "https://example.com/github",
  },
  {
    label: "LinkedIn",
    description:
      "Connect for professional updates, collaboration, and networking.",
    href: "https://example.com/linkedin",
  },
  {
    label: "Portfolio",
    description: "Explore selected projects and work samples in one place.",
    href: "https://example.com/portfolio",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="bg-linear-to-b from-slate-50 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            Contact
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Contact
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Want to connect, collaborate, or talk about coding?
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="Ways to reach me"
            description="A few places where you can find me online."
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-medium uppercase tracking-widest text-blue-600">
                  {item.label}
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 group-hover:text-blue-700">
                  {item.label}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
                <span className="mt-6 text-sm font-medium text-blue-700 transition-colors group-hover:text-blue-800">
                  Open link →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Note
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              For now, the best way to contact me is through email or LinkedIn.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
