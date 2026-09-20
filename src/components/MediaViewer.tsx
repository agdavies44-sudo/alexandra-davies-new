"use client";

import type { WorkItem } from "@/data/projects";

type Props = {
  item: WorkItem;
  onClose: () => void;
};

export default function MediaViewer({ item, onClose }: Props) {
  const portrait = item.aspect === "portrait";

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-[#080808] px-[5vw] pb-6 pt-[78px] text-white max-[700px]:px-3.5 max-[700px]:pt-[68px]"
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
    >
      <button
        type="button"
        aria-label="Close viewer"
        onClick={onClose}
        className="absolute right-[2.5%] top-5 z-[3] h-11 w-11 text-[2.5rem] font-extralight leading-none text-white"
      >
        ×
      </button>

      <div className="grid flex-1 place-items-center">
        {item.kind === "youtube" && item.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={
              portrait
                ? "h-[min(76vh,760px)] w-[min(430px,78vw)] border-0 bg-black"
                : "h-[min(76vh,698px)] w-[min(88vw,1240px)] border-0 bg-black"
            }
          />
        ) : item.kind === "instagram" ? (
          <div className="flex max-w-md flex-col items-center gap-6 text-center">
            <p className="text-lg">This piece lives on Instagram.</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-ink"
            >
              Open on Instagram ↗
            </a>
          </div>
        ) : item.poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.poster}
            alt={item.title}
            className={
              portrait
                ? "max-h-[76vh] w-[min(430px,78vw)] object-contain"
                : "max-h-[76vh] max-w-[min(88vw,1240px)] object-contain"
            }
          />
        ) : item.url && item.url !== "#" ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 uppercase tracking-wider"
          >
            Open project ↗
          </a>
        ) : null}
      </div>

      <p className="mt-3 text-center text-[0.82rem] uppercase tracking-[0.08em] text-[#bcbcbc]">
        {item.title}
      </p>
    </div>
  );
}
