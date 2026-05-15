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
      <section className="bg-linear-to-b from-slate-50 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            যোগাযোগ
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            যোগাযোগ
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            coding, প্রজেক্ট, collaboration, বা learning নিয়ে কথা বলতে চাইলে
            যোগাযোগ করতে পারো।
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
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
                  লিংক খুলুন →
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
              নোট
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              আপাতত email বা LinkedIn দিয়েই আমাকে সবচেয়ে ভালোভাবে পাওয়া যাবে।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
