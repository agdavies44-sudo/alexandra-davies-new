"use client";

import type { WorkItem } from "@/data/projects";
import { useModals } from "./ModalProvider";

type Props = { item: WorkItem };

export default function WorkCard({ item }: Props) {
  const { openViewer } = useModals();
  const portrait = item.aspect === "portrait";

  return (
    <article
      className={`group relative shrink-0 snap-start overflow-hidden bg-[#111] ${
        portrait
          ? "aspect-[9/16] basis-[clamp(180px,18.5vw,285px)] max-[700px]:basis-[min(62vw,250px)]"
          : "aspect-[16/10] basis-[clamp(320px,38vw,610px)] max-[700px]:basis-[min(86vw,520px)]"
      }`}
    >
      {item.poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-[#111]" />
      )}

      <button
        type="button"
        onClick={() => openViewer(item)}
        className="absolute inset-0 z-[5] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/15 to-black/55 p-[18px] text-center text-white transition-colors hover:from-black/5 hover:to-[rgba(114,43,61,0.68)]"
        aria-label={`Open ${item.title}`}
      >
        <span
          className={`relative z-[1] max-w-[90%] font-medium uppercase leading-none tracking-[0.13em] text-white ${
            portrait
              ? "text-[clamp(0.72rem,1.05vw,1rem)]"
              : "text-[clamp(0.84rem,1.45vw,1.45rem)]"
          }`}
          style={{ textShadow: "0 2px 18px rgba(0,0,0,.7)" }}
        >
          {item.brand}
        </span>
      </button>
    </article>
  );
}
