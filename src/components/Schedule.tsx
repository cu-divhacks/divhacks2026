"use client";

import React, { useState } from "react";

export type EventCategory =
  | "ceremony"
  | "workshop"
  | "logistics"
  | "social"
  | "food";

export type ScheduleItem = {
  time: string;
  title: string;
  category: EventCategory;
  location?: string;
  speaker?: string;
  description?: string;
  track?: string;
};

export type TimeBlock = {
  time: string;
  events: ScheduleItem[];
};

const day1Schedule: TimeBlock[] = [
  {
    time: "9 AM",
    events: [
      {
        time: "9 – 10 AM",
        title: "Check-In",
        category: "logistics",
        location: "Lerner Roone Auditorium",
        description: "Pick up your badge, swag, and stickers before heading in.",
      },
    ],
  },
  {
    time: "10 AM",
    events: [
      {
        time: "10 – 11 AM",
        title: "Opening Ceremony",
        category: "ceremony",
        location: "Lerner Roone Auditorium",
        description:
          "Weekend overview, track explanations, sponsor intros, and prize reveals. Hear from our keynote speakers, MLH, Ripple, Tavily, Cursor, and get ready to hack!",
      },
    ],
  },
  {
    time: "11 AM",
    events: [
      {
        time: "11 – 11:30 AM",
        title: "MLH 1 Workshop",
        category: "workshop",
        speaker: "TBA",
        location: "Lerner 568",
        description: "TBA",
      },
    ],
  },
  {
    time: "11:30 AM",
    events: [
      {
        time: "11:30 AM – 12:30 PM",
        title: "LinkedIn Branding 101",
        category: "workshop",
        speaker: "Skyler Basco",
        location: "Lerner Broadway Room",
        description: "A hands-on intensive workshop (with giveaways from Skyler Basco) to help DivHacks builders leverage their projects for visibility, opportunities, and job offers on LinkedIn.",
      },
      {
        time: "11:30 AM – 12 PM",
        title: "MLH 2 Workshop",
        category: "workshop",
        speaker: "TBA",
        location: "Lerner 568",
        description: "TBA",
      },
      {
        time: "11:30 AM – 12 PM",
        title: "DeepSpace SDK Workshop",
        category: "workshop",
        speaker: "DeepSpace",
        location: "Lerner 477",
        description: "DeepSpace platform exploration & ecosystem briefing.",
      },
    ],
  },
  {
    time: "12 PM",
    events: [
      {
        time: "12 – 1 PM",
        title: "Build Your Entire Internship Application Stack in 30 Minutes Workshop",
        category: "workshop",
        speaker: "SpaceXAI",
        location: "Lerner Satow",
        description: "Automate your job hunting, portfolio, and tracking tools.",
      },
      {
        time: "12 – 12:30 PM",
        title: "MLH 3 Workshop",
        category: "workshop",
        speaker: "TBA",
        location: "Lerner 568",
        description: "TBA",
      },
      {
        time: "12 – 12:30 PM",
        title: "Prototyping Edge AI & Low-Power Hardware Workshop",
        category: "workshop",
        speaker: "Akash Mahtani",
        location: "Lerner 477",
        description:
          "Hands-on architectural patterns for deploying low-power edge neural nets.",
      },
    ],
  },
  {
    time: "12:30 PM",
    events: [
      {
        time: "12:30 – 1 PM",
        title: "Tavily Workshop",
        category: "workshop",
        speaker: "TBA",
        location: "Lerner 477",
        description: "TBA",
      },
    ],
  },
  {
    time: "1 PM",
    events: [
      {
        time: "1 – 2 PM",
        title: "Lunch",
        category: "food",
        location: "Lerner Roone Auditorium",
        description: "Mid-day meal & hydration break.",
      },
    ],
  },
  {
    time: "2 PM",
    events: [
      {
        time: "2 – 2:45 PM",
        title: "Software Engineering in an AI Native World Workshop",
        category: "workshop",
        speaker: "Siddartha Mishra",
        location: "Lerner Satow",
        description: "The shifting paradigm of SWE and LLM-assisted dev workflows.",
      },
      {
        time: "2 – 2:30 PM",
        title: "Build Your AI Second Brain with Claude Code and Notion",
        category: "workshop",
        speaker: "Vanchhit Khare",
        location: "Lerner 477",
        description: "TBA",
      },
    ],
  },
  {
    time: "2:30 PM",
    events: [
      {
        time: "2:30 – 3 PM",
        title: "Build a Live iMessage AI Agent with Photon",
        category: "workshop",
        speaker: "TBA",
        location: "Lerner 477",
        description: "TBA",
      },
    ],
  },
  {
    time: "3 PM",
    events: [
      {
        time: "3 – 3:30 PM",
        title: "Build, Ship & Demo Workshop",
        category: "workshop",
        speaker: "Siddarth Reddy",
        location: "Lerner Satow",
        description: "How to craft a standout hackathon presentation.",
      },
    ],
  },
  {
    time: "3:30 PM",
    events: [
      {
        time: "3:30 – 4 PM",
        title: "Judges Meet & Greet",
        category: "social",
        location: "Lerner Satow",
        description:
          "Introduce yourself and talk ideas with our industry judges. Ask about their academic or career experience and advice.",
      },
    ],
  },
  {
    time: "6 PM",
    events: [
      {
        time: "6 – 7 PM",
        title: "Dinner",
        category: "food",
        location: "Lerner Roone Auditorium",
        description: "Evening dinner service.",
      },
    ],
  },
  {
    time: "11 PM",
    events: [
      {
        time: "11 PM – 12 AM",
        title: "Late Night Ramen",
        category: "food",
        location: "Carleton Commons",
        description: "Fuel up and test your spice tolerance!",
      },
    ],
  },
];

const day2Schedule: TimeBlock[] = [
  {
    time: "8 AM",
    events: [
      {
        time: "8 – 9 AM",
        title: "Breakfast",
        category: "food",
        location: "Carleton Commons",
        description: "Fuel up for the final day of hacking and presentations.",
      },
    ],
  },
  {
    time: "11 AM",
    events: [
      {
        time: "11 AM – 12 PM",
        title: "Lunch",
        category: "food",
        location: "Lerner Roone Auditorium",
        description: "Mid-day meal & hydration break.",
      },
    ],
  },
  {
    time: "12 PM",
    events: [
      {
        time: "12 – 4 PM",
        title: "Judging",
        category: "ceremony",
        location: "Lerner 477",
        description: "Teams present their projects to judges, who then score and decide prizes.",
      },
    ],
  },
  {
    time: "4 PM",
    events: [
      {
        time: "4 – 5 PM",
        title: "Closing Ceremony",
        category: "ceremony",
        location: "Lerner Roone Auditorium",
        description: "Category winners announced, trophies, and closing remarks.",
      },
    ],
  },
];

// Bold, high-visibility themes for categories
const CATEGORY_CONFIG: Record<
  EventCategory,
  {
    label: string;
    cardBorder: string;
    cardBg: string;
    badge: string;
  }
> = {
  ceremony: {
    label: "Ceremony & Keynote",
    cardBorder: "border-l-amber-400 hover:border-amber-400/80",
    cardBg: "bg-amber-950/15",
    badge: "bg-amber-400 text-black font-extrabold shadow-sm shadow-amber-500/30",
  },
  workshop: {
    label: "Workshop",
    cardBorder: "border-l-cyan-400 hover:border-cyan-400/80",
    cardBg: "bg-cyan-950/15",
    badge: "bg-cyan-400 text-black font-extrabold shadow-sm shadow-cyan-500/30",
  },
  logistics: {
    label: "Logistics",
    cardBorder: "border-l-zinc-400 hover:border-zinc-400/80",
    cardBg: "bg-zinc-900/30",
    badge: "bg-zinc-700 text-white font-bold",
  },
  social: {
    label: "Activity & Social",
    cardBorder: "border-l-fuchsia-400 hover:border-fuchsia-400/80",
    cardBg: "bg-fuchsia-950/15",
    badge: "bg-fuchsia-500 text-white font-extrabold shadow-sm shadow-fuchsia-500/30",
  },
  food: {
    label: "Food & Drinks",
    cardBorder: "border-l-emerald-400 hover:border-emerald-400/80",
    cardBg: "bg-emerald-950/15",
    badge: "bg-emerald-400 text-black font-extrabold shadow-sm shadow-emerald-500/30",
  },
};

import Link from "next/link";

// Helper to create an anchor hash to the relevant section or pin on /map
function getInternalMapHref(location: string): string {
  const slug = location
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `/map#${slug}`;
}

// Parses a range like "11:30 AM – 12 PM" or "12 – 1 PM" into minutes after
// midnight. A single time ends when it starts. The start inherits the end's
// AM/PM when omitted; ranges past midnight end on the next day.
function parseTimeRange(time: string): { start: number; end: number } {
  const [startStr, endStr = startStr] = time.split("–").map((s) => s.trim());

  const parse = (s: string, fallbackMeridiem?: string) => {
    const match = s.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/);
    if (!match) return 0;
    const meridiem = match[3] ?? fallbackMeridiem;
    let hours = Number(match[1]) % 12;
    if (meridiem === "PM") hours += 12;
    return hours * 60 + Number(match[2] ?? 0);
  };

  let end = parse(endStr);
  let start = parse(startStr, endStr.match(/AM|PM/)?.[0]);
  // e.g. "11 – 12 PM": an inherited meridiem that puts start after end
  if (!/AM|PM/.test(startStr) && start > end) start -= 12 * 60;
  if (end < start) end += 24 * 60;
  return { start, end };
}

type PlacedEvent = {
  item: ScheduleItem;
  start: number;
  end: number;
  column: number;
};

// Groups events whose times overlap into clusters, and places each cluster's
// events into columns so back-to-back sessions stack in one column, keeping
// sessions in the same room together where possible.
function buildClusters(blocks: TimeBlock[]): PlacedEvent[][] {
  const events = blocks
    .flatMap((block) => block.events)
    .map((item) => ({ item, ...parseTimeRange(item.time), column: 0 }))
    .sort((a, b) => a.start - b.start || b.end - a.end);

  const clusters: PlacedEvent[][] = [];
  let clusterEnd = -Infinity;
  for (const event of events) {
    if (event.start >= clusterEnd) clusters.push([]);
    clusters[clusters.length - 1].push(event);
    clusterEnd = Math.max(clusterEnd, event.end);
  }

  for (const cluster of clusters) {
    const columns: PlacedEvent[] = []; // last event placed in each column
    const freeColumns = (event: PlacedEvent) =>
      columns
        .map((last, i) => ({ last, i }))
        .filter(({ last }) => last.end <= event.start);
    const place = (event: PlacedEvent, column: number) => {
      event.column = column;
      columns[column] = event;
    };

    for (const start of new Set(cluster.map((e) => e.start))) {
      const starting = cluster.filter((e) => e.start === start);
      // First pass: continue a column already used by the same room
      const unplaced = starting.filter((event) => {
        const sameRoom = freeColumns(event).find(
          ({ last }) => last.item.location === event.item.location,
        );
        if (sameRoom) place(event, sameRoom.i);
        return !sameRoom;
      });
      // Second pass: any free column, else a new one
      for (const event of unplaced) {
        place(event, freeColumns(event)[0]?.i ?? columns.length);
      }
    }
  }
  return clusters;
}

// Lays out a cluster of overlapping events as a grid: one column per track,
// one row per interval between start/end times, so a card spans rows in
// proportion to how long it runs. Below lg it collapses to a single column.
function EventCluster({ events }: { events: PlacedEvent[] }) {
  const times = [...new Set(events.flatMap((e) => [e.start, e.end]))].sort(
    (a, b) => a - b,
  );
  const columnCount = Math.max(...events.map((e) => e.column)) + 1;

  return (
    <div
      className="grid gap-3 lg:grid-cols-(--cols)"
      style={
        {
          "--cols": `repeat(${columnCount}, minmax(0, 1fr))`,
        } as React.CSSProperties
      }
    >
      {events.map((e) => (
        <div
          key={`${e.item.time}-${e.item.title}`}
          className="flex lg:col-start-(--col) lg:row-start-(--row-start) lg:row-end-(--row-end)"
          style={
            {
              "--col": e.column + 1,
              "--row-start": times.indexOf(e.start) + 1,
              "--row-end": times.indexOf(e.end) + 1,
            } as React.CSSProperties
          }
        >
          <EventCard item={e.item} compact />
        </div>
      ))}
    </div>
  );
}

// Concurrent events are shown side by side in compact (stacked) cards
function EventCard({
  item,
  compact = false,
}: {
  item: ScheduleItem;
  compact?: boolean;
}) {
  const config = CATEGORY_CONFIG[item.category];

  return (
    <div
      className={`rounded-2xl border border-zinc-800 border-l-[8px] ${config.cardBorder} ${config.cardBg} backdrop-blur-sm transition-all duration-200 hover:bg-zinc-900/80 ${
        compact
          ? "flex w-full flex-col p-5"
          : "p-6 md:grid md:grid-cols-[160px_1fr_240px] md:items-center md:gap-6"
      }`}
    >
      {/* 1. Time Column */}
      <div
        className={
          compact
            ? "border-b border-zinc-800/80 pb-3"
            : "flex flex-col items-center justify-center border-b border-zinc-800/80 pb-3 text-center md:border-b-0 md:border-r md:border-zinc-800/80 md:py-2 md:pr-6"
        }
      >
        <span className="font-mono text-base font-black tracking-wide text-normalyellow lg:text-lg">
          {/* Non-breaking space keeps AM/PM on the same line as its number */}
          {item.time.replace(/ (AM|PM)/g, " $1")}
        </span>
      </div>

      {/* 2. Main Content Column */}
      <div className="flex flex-col justify-center py-2 md:py-0">
        {/* Badges */}
        <div className="mb-2.5 flex flex-wrap items-center gap-2.5">
          <span
            className={`rounded-md px-3 py-1 text-xs font-black uppercase tracking-wider ${config.badge}`}
          >
            {config.label}
          </span>
          {item.track && (
            <span className="rounded-md border border-purple-400/40 bg-purple-950/60 px-3 py-1 text-xs font-bold text-purple-200">
              {item.track}
            </span>
          )}
        </div>

        {/* Card Title */}
        <h3
          className={`font-black tracking-tight text-white ${
            compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          }`}
        >
          {item.title}
        </h3>

        {/* Speaker & Description */}
        {(item.speaker || item.description) && (
          <div className="mt-2.5 space-y-2">
            {item.speaker && (
              <p className="text-base font-bold text-zinc-100">
                <span className="font-semibold text-normalyellow">Speaker: </span>
                <span className="text-lg font-extrabold text-white">{item.speaker}</span>
              </p>
            )}
            {item.description && (
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                {item.description}
              </p>
            )}
          </div>
        )}

        {/* Mobile-only Location Link */}
        {item.location && (
          <Link
            href={getInternalMapHref(item.location)}
            className={`group mt-4 inline-flex items-center gap-2 text-sm font-bold text-zinc-200 transition-colors hover:text-normalyellow ${
              compact ? "" : "md:hidden"
            }`}
          >
            <span className="text-base text-normalyellow">📍</span>
            <span className="underline decoration-zinc-600 underline-offset-4 group-hover:decoration-normalyellow">
              {item.location}
            </span>
          </Link>
        )}
      </div>

      {/* 3. Location Column (Desktop): Internal /map Button Card */}
      <div
        className={`hidden flex-col items-end justify-center pl-2 ${
          compact ? "" : "md:flex"
        }`}
      >
        {item.location ? (
          <Link
            href={getInternalMapHref(item.location)}
            className="group flex items-center gap-2.5 rounded-xl border border-zinc-700/80 bg-black/60 px-4 py-2.5 text-right shadow-sm transition-all duration-200 hover:border-normalyellow/60 hover:bg-zinc-900/90 hover:shadow-md hover:shadow-normalyellow/10"
          >
            <span className="text-lg text-normalyellow transition-transform group-hover:scale-110">
              📍
            </span>
            <span className="text-base font-extrabold text-white transition-colors group-hover:text-normalyellow">
              {item.location}
            </span>
          </Link>
        ) : (
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            TBA / Remote
          </span>
        )}
      </div>
    </div>
  );
}

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState<"day1" | "day2">("day1");
  const clusters = buildClusters(
    activeTab === "day1" ? day1Schedule : day2Schedule,
  );

  return (
    <main className="min-h-screen bg-black px-4 py-12 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Header Component */}
        <div className="mb-12 flex flex-col gap-5 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
            {/* Scaled Page Title */}
            <h1 className="mt-1.5 text-5xl font-black uppercase tracking-[0.12em] text-white lg:text-6xl">
            Schedule
            </h1>
            <span className="text-sm font-black uppercase tracking-[0.3em] text-normalyellow">
            Event Lineup
            </span>
        </div>

        {/* Day Tabs */}
        <div className="flex rounded-xl border border-zinc-800 bg-zinc-950 p-1.5 shadow-inner">
            <button
            onClick={() => setActiveTab("day1")}
            className={`rounded-lg px-7 py-3 text-sm font-black uppercase tracking-wider transition-all duration-200 ${
                activeTab === "day1"
                ? "bg-normalyellow text-black shadow-lg shadow-normalyellow/20"
                : "text-zinc-400 hover:text-white"
            }`}
            >
            Day 1 (Sat)
            </button>
            <button
            onClick={() => setActiveTab("day2")}
            className={`rounded-lg px-7 py-3 text-sm font-black uppercase tracking-wider transition-all duration-200 ${
                activeTab === "day2"
                ? "bg-normalyellow text-black shadow-lg shadow-normalyellow/20"
                : "text-zinc-400 hover:text-white"
            }`}
            >
            Day 2 (Sun)
            </button>
        </div>
        </div>

        {/* Schedule Cards */}
        <div className="space-y-4">
          {clusters.map((cluster) =>
            cluster.length === 1 ? (
              <EventCard key={cluster[0].item.title} item={cluster[0].item} />
            ) : (
              <EventCluster
                key={`${cluster[0].item.time}-${cluster[0].item.title}`}
                events={cluster}
              />
            ),
          )}
        </div>
      </div>
    </main>
  );
}