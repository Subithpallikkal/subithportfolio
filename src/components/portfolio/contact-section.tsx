"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";
import { FadeIn } from "./fade-in";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Failed to send message.");
      }

      setStatusType("success");
      setStatusMessage("Message sent successfully. Thank you for reaching out.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatusType("error");
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl">
      <FadeIn className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/8 via-white/3 to-transparent p-6 ring-1 ring-inset ring-white/10 sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300/90">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something meaningful
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Have a project in mind, a role to discuss, or just want to connect? Send me an email and I&apos;ll
            reply as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-200">Your name</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-[#0b1120]/70 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-teal-400/60"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-200">Your email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-[#0b1120]/70 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-teal-400/60"
                placeholder="you@example.com"
              />
            </label>
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-medium text-zinc-200">Message</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                rows={5}
                className="w-full resize-y rounded-xl border border-white/10 bg-[#0b1120]/70 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-teal-400/60"
                placeholder="Tell me a little about your project..."
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-teal-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/25 transition hover:brightness-110"
              >
                {isSubmitting ? "Sending..." : `Send to ${site.contactEmail}`}
              </button>
            </div>
            {statusMessage ? (
              <p
                className={`text-sm sm:col-span-2 ${statusType === "success" ? "text-emerald-300" : "text-rose-300"}`}
                role="status"
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </FadeIn>
    </div>
  );
}
