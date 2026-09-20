"use client";

type Props = {
  onClose: () => void;
  onSwitchToEmail: () => void;
};

export default function PhoneModal({ onClose, onSwitchToEmail }: Props) {
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
        aria-labelledby="phone-heading"
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
        <p className="text-[0.85rem] text-muted">Get in touch</p>
        <h2
          id="phone-heading"
          className="mt-3.5 mb-6 text-[2.2rem] leading-[1.1] tracking-[-0.04em]"
        >
          Call Alexandra.
        </h2>
        <p className="mb-5 text-[#333]">
          A private call-forwarding number will appear here once it has been
          connected.
        </p>
        <button
          type="button"
          onClick={onSwitchToEmail}
          className="bg-accent px-5 py-3 text-white hover:bg-accent/90"
        >
          Send a message instead
        </button>
      </div>
    </div>
  );
}
