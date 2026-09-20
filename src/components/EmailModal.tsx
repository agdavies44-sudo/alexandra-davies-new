"use client";

import { FormEvent, useMemo, useState } from "react";
import { site } from "@/data/site";

type Props = { onClose: () => void };

export default function EmailModal({ onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const valid = useMemo(() => {
    return (
      name.trim().length > 1 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
      message.trim().length > 2
    );
  }, [name, email, message]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    const subject = encodeURIComponent(`Enquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/84 backdrop-blur-[7px]" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-heading"
        className="relative w-[min(560px,calc(100%-32px))] max-h-[90vh] overflow-auto bg-white p-10 text-ink shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-[15px] top-[10px] text-[2rem] leading-none text-ink"
        >
          ×
        </button>
        <p className="text-[0.85rem] text-muted">Let’s work together</p>
        <h2
          id="email-heading"
          className="mt-3.5 mb-6 text-[2.2rem] leading-[1.1] tracking-[-0.04em]"
        >
          What have you got in mind?
        </h2>
        <form onSubmit={onSubmit}>
          <label className="mb-4 block text-[0.9rem]">
            Your name
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-[7px] block w-full border border-[#bbb] bg-[#fafafa] px-[11px] py-[11px]"
              autoComplete="name"
            />
          </label>
          <label className="mb-4 block text-[0.9rem]">
            Your email
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-[7px] block w-full border border-[#bbb] bg-[#fafafa] px-[11px] py-[11px]"
              autoComplete="email"
            />
          </label>
          <label className="mb-4 block text-[0.9rem]">
            Your message
            <textarea
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-[7px] block w-full resize-y border border-[#bbb] bg-[#fafafa] px-[11px] py-[11px]"
            />
          </label>
          <p className="mb-4 text-[0.8rem] text-muted">
            Email delivery will be enabled when the receiving address is
            connected.
          </p>
          <button
            type="submit"
            disabled={!valid}
            className="bg-accent px-5 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
