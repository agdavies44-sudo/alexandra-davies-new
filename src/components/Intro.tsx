"use client";

import { useModals } from "./ModalProvider";

export default function Intro() {
  const { openEmail } = useModals();

  return (
    <section className="grid grid-cols-1 items-center gap-4 bg-white px-[2.35%] py-[clamp(18px,2.8vw,32px)] md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-x-6 lg:gap-x-10">
      <h1 className="m-0 text-[clamp(1.85rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.04em] text-ink">
        Capture. Create.
        <br />
        Sell a story.
      </h1>
      <p className="m-0 max-w-[36rem] text-[clamp(0.92rem,1.15vw,1.05rem)] leading-[1.45] text-[#444] md:max-w-none">
        Looking to turn ideas into content? Happy to help,
        <br className="hidden md:inline" />
        from conception to final cut and beyond.
      </p>
      <div className="md:justify-self-end">
        <button
          type="button"
          onClick={openEmail}
          className="whitespace-nowrap border border-ink bg-ink px-[18px] py-[9px] text-[0.7rem] uppercase tracking-[0.1em] text-white transition-colors hover:bg-transparent hover:text-ink"
        >
          Get in touch
        </button>
      </div>
    </section>
  );
}
