export type MediaKind = "youtube" | "instagram" | "image" | "external";

export type WorkItem = {
  id: string;
  title: string;
  brand: string;
  kind: MediaKind;
  url: string;
  youtubeId?: string;
  poster?: string;
  aspect: "portrait" | "landscape";
};

export type CarouselSection = {
  id: string;
  heading: string;
  items: WorkItem[];
};

function yt(
  id: string,
  brand: string,
  title: string,
  aspect: "portrait" | "landscape" = "landscape",
  poster?: string,
): WorkItem {
  return {
    id: `yt-${id}`,
    brand,
    title,
    kind: "youtube",
    url: `https://www.youtube.com/watch?v=${id}`,
    youtubeId: id,
    poster: poster ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    aspect,
  };
}

function ig(
  code: string,
  brand: string,
  title: string,
  kind: "reel" | "p" = "reel",
): WorkItem {
  return {
    id: `ig-${code}`,
    brand,
    title,
    kind: "instagram",
    url: `https://www.instagram.com/${kind}/${code}/`,
    poster: undefined,
    aspect: "portrait",
  };
}

function local(
  id: string,
  brand: string,
  title: string,
  poster: string,
  aspect: "portrait" | "landscape",
  url?: string,
): WorkItem {
  return {
    id,
    brand,
    title,
    kind: "image",
    url: url ?? "#",
    poster,
    aspect,
  };
}

/** Social videos — portrait carousel (SPEC titles + BRIEF links) */
export const socialVideos: WorkItem[] = [
  yt("l8sfb1Henmg", "W Hotels", "W Hotel Manchester Event Recap", "portrait", "/media/social/w-hotel-manchester.jpg"),
  ig("Db73O9yK4Rx", "Borough Market", "Borough Market reel"),
  yt("IC-LhuzDrjk", "Missoni", "Moonstone Interiors by Missoni", "portrait", "/media/social/missoni.jpg"),
  ig("C0epaNJtyk2", "5DB Media", "5DB Media", "p"),
  yt("mO8JyfzeT-s", "Liquid Opulence", "Liquid Opulence — Three Reasons", "portrait", "/media/social/liquid-opulence.jpg"),
  ig("Dbu-vcZs6Jv", "Borough Market", "Borough Market reel 2"),
  local("social-focaccia", "5DB Media", "5DB Canteen — Focaccia", "/media/social/focaccia.jpg", "portrait"),
  ig("DakQSTJI3lm", "Lunch With…", "Lunch With… Instagram"),
  yt("f9O46xz4MDE", "Made For Grownups", "Made For Grownups", "portrait", "/media/social/made-for-grownups.jpg"),
  ig("DbsZUhGMngR", "Borough Market", "Borough Market reel 3"),
  yt("_4YwKbZqako", "Buy Association", "Buy Association — Fountain Court", "portrait", "/media/social/buy-association.jpg"),
  local("social-bread", "5DB Media", "5DB Canteen — Bread teaser", "/media/social/bread-teaser.jpg", "portrait"),
  yt("WtveWDLhJ0Y", "Cinnabons", "Cinnabon teaser", "portrait", "/media/social/cinnabon-teaser.jpg"),
  yt("XrDDNarmJ0M", "The Silk Yard", "The Silk Yard Property Ad", "portrait", "/media/social/silk-yard.jpg"),
  yt("sZvf3_eF2Kg", "Snap Cookies", "Snap cookies", "portrait", "/media/social/snap-cookies.jpg"),
  yt("rnrffy_E3U0", "Fincar", "Fincar Ad", "portrait", "/media/social/fincar.jpg"),
  yt("tH2jxV5vetY", "Harp Song", "Harp Song", "portrait", "/media/social/harp-song.jpg"),
  yt("PkWmZVphFQs", "5DB Media", "5DB — Band performance teaser", "portrait"),
  yt("yrAIbY1d-po", "5DB Media", "5DB — Band on Tour", "portrait"),
  yt("TFrwlGIHLfI", "5DB Media", "5DB — Meet the team", "portrait"),
  yt("46-0H0KQPLg", "5DB Media", "5DB — Gig round-up", "portrait"),
  yt("1nFfoj0aZgw", "5DB Media", "5DB — Interview cutdown", "portrait"),
];

/** Corporate — landscape carousel */
export const corporate: WorkItem[] = [
  local(
    "corp-core",
    "Core Productions",
    "Core Productions — Home Page Sizzle",
    "/media/corporate/core-agency-sizzle.jpg",
    "landscape",
    "https://www.coreagency.uk",
  ),
  local(
    "corp-stanley",
    "Stanley’s Stick",
    "Stanley’s Stick — Portfolio Excerpt",
    "/media/corporate/stanleys-stick-preview.jpg",
    "landscape",
  ),
  yt("4dr2xTe6-QA", "PensionBee", "PensionBee — James’s Story", "landscape"),
  local(
    "corp-honor",
    "Honor Oak",
    "Honor Oak",
    "/media/corporate/honor-oak.jpg",
    "landscape",
  ),
  local(
    "corp-missoni",
    "Missoni",
    "Missoni",
    "/media/corporate/missoni-16x9.jpg",
    "landscape",
  ),
  yt("TQT7WDvhB6c", "PensionBee", "PensionBee — Sarah’s Story", "landscape"),
  local(
    "corp-buy",
    "Buy Association",
    "Buy Association — Fountain Court",
    "/media/corporate/buy-association-16x9.jpg",
    "landscape",
  ),
  local(
    "corp-monta",
    "Monta Capital",
    "Monta Capital",
    "/media/corporate/monta-capital.jpg",
    "landscape",
  ),
  yt("Zt9eCXeBx34", "Corporate Film", "Corporate Film", "landscape"),
  local(
    "corp-fincar",
    "Fincar",
    "Fincar",
    "/media/corporate/fincar-16x9.jpg",
    "landscape",
  ),
  local(
    "corp-rothmore",
    "Rothmore",
    "Rothmore — Tobacco Warehouse",
    "/media/corporate/rothmore-tobacco-warehouse.jpg",
    "landscape",
  ),
  local(
    "corp-one",
    "The One Residence",
    "The One Residence",
    "/media/corporate/the-one-residence.jpg",
    "landscape",
  ),
  yt("5RmVsiePsII", "Waterhouse Gardens", "Waterhouse Gardens", "landscape", "/media/corporate/waterhouse-gardens.jpg"),
  yt("ExfVTBCSIZg", "Core Productions", "Core Productions — Partnership highlight", "landscape"),
  yt("thC5ePQJ7CE", "Core Productions", "Core Productions — Founders pitching investors", "landscape"),
  yt("5YQCAJnYLzk", "5DB Media", "5DB — Full interview", "landscape"),
  yt("Dv8yn-BHGGk", "5DB Media", "5DB — Artists in Residence band intro", "landscape"),
  yt("bCHP3dBWUew", "Rothmore", "Rothmore Property Ad", "landscape"),
  yt("RaLuIC3Qcag", "Buy Association", "Buy Association Property Ad", "landscape"),
  yt("rQnwyMlZ3r0", "Look Optic", "Look Optic — Creator edit", "portrait"),
  yt("mTb3NOj8QcQ", "Look Optic", "Look Optic — Creator edit two", "portrait"),
  yt("9TCi5HsuUJ8", "Look Optic", "Look Optic — Model film", "portrait"),
  yt("tkHTbjjOg4U", "Creative Image", "Creative Image Productions — Wedding edit", "landscape"),
];

/** Podcasts */
export const podcasts: WorkItem[] = [
  local(
    "pod-eitik",
    "EITIK",
    "EITIK Podcast — Episode 1",
    "/media/podcasts/eitik-episode-1-preview.jpg",
    "landscape",
  ),
  yt("1WHRf51uFrA", "Lunch With…", "Lunch With… Ballin’ Jacks", "landscape"),
  yt("9Khabl3tBVM", "Lunch With…", "Lunch With… Stepbrother", "landscape"),
  yt("iorwk_22ync", "Lunch With…", "Lunch With… Us", "landscape"),
];

/** Live productions */
export const lives: WorkItem[] = [
  yt("NZIhqhNe-5k", "Lunch With…", "Lunch With… Mohan Evans", "landscape"),
  yt("AsMuHbMUARE", "Lunch With…", "Lunch With… Ren Harvieu", "landscape"),
  yt("5inJCJizU-c", "Lunch With…", "Lunch With… Poppy Daniels", "landscape"),
  yt("iwnXJ4laxXs", "Lunch With…", "Lunch With… Raquel Martins", "landscape"),
];

export const workSections: CarouselSection[] = [
  { id: "social", heading: "Social videos", items: socialVideos },
  { id: "corporate", heading: "Corporate", items: corporate },
  { id: "podcasts", heading: "Podcasts", items: podcasts },
  { id: "lives", heading: "Live productions", items: lives },
];
