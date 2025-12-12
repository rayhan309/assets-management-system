import React from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, HelpCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Upload & Organize",
      desc:
        "Upload images, videos, documents, or any digital assets. Use tags, folders, and metadata to keep everything organized.",
      delay: 0.05,
    },
    {
      title: "Manage & Collaborate",
      desc:
        "Share assets with your team, control permissions, track versions, and collaborate in real-time.",
      delay: 0.12,
    },
    {
      title: "Secure Storage & Fast Access",
      desc:
        "Your files are fully encrypted with cloud backup and optimized search so you can access anything instantly.",
      delay: 0.18,
    },
  ];

  return (
    <section className=" my-12 p-8 bg-white/20 rounded-2xl shadow-lg border border-gray-100">
      <header className="flex items-center gap-3 mb-6">
        <CheckCircle className="w-8 h-8 text-indigo-600" />
        <h2 className="text-3xl font-bold">How AssetsPro Works</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: s.delay }}
            className="p-6 rounded-xl shadow-sm bg-gray-50/60 border hover:shadow-md duration-200"
          >
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    {
      q: "What types of assets can I upload?",
      a: "Images, videos, documents, design files, audio files, and more — AssetsPro supports all major formats.",
    },
    {
      q: "How secure is AssetsPro?",
      a: "We provide enterprise-level security including encryption, backups, and permission-based file access.",
    },
    {
      q: "Can I manage team permissions?",
      a: "Yes. You can assign roles, set folder-level access, and track activity logs.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes, we offer a fully functional free plan suitable for individuals and small teams.",
    },
  ];

  return (
    <section className="my-12 p-8 bg-gray-50/30 rounded-2xl shadow-inner border border-gray-200">
      <header className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-7 h-7 text-emerald-600" />
        <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
      </header>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="p-5 bg-white/60 rounded-xl border cursor-pointer shadow-sm">
            <summary className="font-medium text-base text-gray-800">{f.q}</summary>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="my-12 p-8 bg-white/20 rounded-2xl shadow-lg border border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-3xl font-bold text-white/60">Ready to Streamline Your Asset Management?</h4>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            Get started with a free plan or contact our team for a personalized demo.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow hover:opacity-95"
          >
            <Mail className="w-4 h-4" /> Contact Sales
          </a>

          <a
            href="#signup"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-xl border font-medium"
          >
            Try Free
          </a>
        </div>
      </div>
    </section>
  );
}

export default function AssetsProExtras() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <HowItWorks />
        <FAQSection />
        <ContactCTA />
      </div>
    </main>
  );
}