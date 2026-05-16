import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

type ContactItem = {
  label: string;
  description: string;
  href: string;
};

export const metadata: Metadata = {
  title: "যোগাযোগ | Blog with Rafi",
  description:
    "রাফির সাথে collaboration, coding discussion, আর professional যোগাযোগের জন্য যোগাযোগ করুন।",
};

const contactItems: ContactItem[] = [
  {
    label: "ইমেইল",
    description: "coding, project, বা collaboration নিয়ে সরাসরি message পাঠাও।",
    href: "https://example.com/email",
  },
  {
    label: "GitHub",
    description: "আমি যে code, project, আর repository বানাচ্ছি, সেগুলো দেখো।",
    href: "https://example.com/github",
  },
  {
    label: "LinkedIn",
    description:
      "পেশাদার আপডেট, collaboration, আর networking-এর জন্য যোগাযোগ করো।",
    href: "https://example.com/linkedin",
  },
  {
    label: "পোর্টফোলিও",
    description: "selected project আর work sample এক জায়গায় দেখো।",
    href: "https://example.com/portfolio",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-background" />
        <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-24 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="mx-auto max-w-6xl">
          <div className="rounded-4xl border border-border bg-linear-to-br from-surface via-surface-soft/80 to-background p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-border bg-surface-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                যোগাযোগ
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                যোগাযোগ
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                coding, প্রজেক্ট, collaboration, বা learning নিয়ে কথা বলতে চাইলে
                যোগাযোগ করতে পারো।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title="কীভাবে যোগাযোগ করবে"
            description="অনলাইনে আমাকে খুঁজে পাওয়ার কয়েকটা জায়গা।"
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-4xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  {item.label}
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                  {item.label}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {item.description}
                </p>
                <span className="mt-6 text-sm font-medium text-accent transition-colors duration-300 group-hover:text-primary">
                  লিংক খুলুন →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-4xl border border-border bg-surface-soft p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              নোট
            </p>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
              আপাতত email বা LinkedIn দিয়েই আমাকে সবচেয়ে ভালোভাবে পাওয়া যাবে।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
