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
    time: "9:00 AM",
    events: [
      {
        time: "9:00 AM",
        title: "Check-in",
        category: "logistics",
        location: "CU Main Gate + Roone Auditorium",
        description: "Pick up your badge, swag, and stickers before heading in.",
      },
    ],
  },
  {
    time: "10:00 AM",
    events: [
      {
        time: "10:00 AM",
        title: "Opening Ceremony",
        category: "ceremony",
        location: "Roone Auditorium",
        description:
          "Weekend overview, track explanations, sponsor intros, and prize reveals. Hear from our keynote speakers, MLH, Ripple, Tavily, Cursor, Telora, and get ready to hack!",
      },
    ],
  },
  {
    time: "11:00 AM",
    events: [
      {
        time: "11:00 AM",
        title: "LinkedIn 101 Workshop",
        category: "workshop",
        track: "Sponsor + Health Track",
        speaker: "Skyler Basco",
        location: "Lerner Satow",
        description: "Learn PHRI's track details and expectations.",
      },
    ],
  },
  {
    time: "All Day",
    events: [
      {
        time: "All Day",
        title: "SpaceX Photobooth",
        category: "social",
        location: "Lerner Hall",
        description: "Stop by anytime during the day to take team photos.",
      },
    ],
  },
  {
    time: "12:00 – 12:30 PM",
    events: [
      {
        time: "12:00 – 12:30 PM",
        title: "DeepSpace",
        category: "workshop",
        location: "Lerner Broadway",
        description: "DeepSpace platform exploration & ecosystem briefing.",
      },
    ],
  },
  {
    time: "12:30 – 1:00 PM",
    events: [
      {
        time: "12:30 – 1:00 PM",
        title: "Prototyping Edge AI & Low-Power Hardware",
        category: "workshop",
        location: "Lerner Satow",
        description:
          "Hands-on architectural patterns for deploying low-power edge neural nets.",
      },
    ],
  },
  {
    time: "1:00 – 2:00 PM",
    events: [
      {
        time: "1:00 – 2:00 PM",
        title: "Build Your Entire Internship Application Stack in 30 Minutes",
        category: "workshop",
        location: "Lerner 555",
        description: "Automate your job hunting, portfolio, and tracking tools.",
      },
    ],
  },
  {
    time: "2:00 – 2:40 PM",
    events: [
      {
        time: "2:00 – 2:40 PM",
        title: "Software Engineering in an AI-Native World",
        category: "workshop",
        speaker: "Siddartha Mishra (AP & OS TA; prev intern @ Riot Games, Microsoft, & Meta)",
        location: "Lerner Satow",
        description: "The shifting paradigm of SWE and LLM-assisted dev workflows.",
      },
    ],
  },
  {
    time: "2:00 – 3:00 PM",
    events: [
      {
        time: "2:00 – 3:00 PM",
        title: "Lunch",
        category: "food",
        location: "Roone Auditorium",
        description: "Mid-day meal & hydration break.",
      },
    ],
  },
  {
    time: "3:00 – 4:00 PM",
    events: [
      {
        time: "3:00 – 4:00 PM",
        title: "Build, Ship & Demo Workshop",
        category: "workshop",
        speaker: "Siddarth Reddy",
        location: "Lerner Satow",
        description: "How to craft a standout hackathon presentation.",
      },
    ],
  },
  {
    time: "4:00 – 5:00 PM",
    events: [
      {
        time: "4:00 – 5:00 PM",
        title: "Judges Meet & Greet",
        category: "social",
        location: "Lerner Satow",
        description: "Introduce yourself and talk ideas with our industry judges. Ask about their academic or career expereience and advice. Due to limited space, the doors will close at 4:05 PM!",
      },
    ],
  },
  {
    time: "4:30 – 5:00 PM",
    events: [
      {
        time: "4:30 – 5:00 PM",
        title: "Build Your AI Second Brain with Claude Code and Notion",
        category: "workshop",
        speaker: "Vanchhit Khare",
        location: "Lerner Satow",
        description: "TBA",
      },
    ],
  },
  {
    time: "5:00 – 5:30 PM",
    events: [
      {
        time: "5:00 – 5:30 PM",
        title: "TBA",
        category: "workshop",
        speaker: "",
        location: "",
        description: "",
      },
    ],
  },
  {
    time: "5:30 – 5:45 PM",
    events: [
      {
        time: "5:30 – 5:45 PM",
        title: "LinkedIn Speed Dating",
        category: "social",
        location: "Roone Auditorium",
        description: "Quick-fire networking to connect with fellow hackers.",
      },
    ],
  },
  {
    time: "6:00 – 6:30 PM",
    events: [
      {
        time: "6:00 – 6:30 PM",
        title: "Dinner",
        category: "food",
        location: "Roone Auditorium",
        description: "Evening dinner service.",
      },
    ],
  },
  {
    time: "7:00 – 7:30 PM",
    events: [
      {
        time: "7:00 – 7:30 PM",
        title: "TBA",
        category: "workshop",
        location: "",
        description: "",
      },
    ],
  },
  {
    time: "7:00 PM",
    events: [
      {
        time: "7:00 PM",
        title: "Sponsor Session",
        category: "workshop",
        location: "Lerner Satow",
        description: "Technical Q&A and bounty track office hours.",
      },
    ],
  },
  {
    time: "8:00 PM",
    events: [
      {
        time: "8:00 PM",
        title: "Just Dance Break",
        category: "social",
        location: "Roone Auditorium",
        description: "Step away from the screen and dance it out.",
      },
    ],
  },
  {
    time: "9:00 PM",
    events: [
      {
        time: "9:00 PM",
        title: "Late Night Snack: Spicy Ramen Challenge",
        category: "food",
        location: "Roone Auditorium",
        description: "Fuel up and test your spice tolerance!",
      },
    ],
  },
];

const day2Schedule: TimeBlock[] = [
  {
    time: "8:00 AM",
    events: [
      {
        time: "8:00 AM",
        title: "Breakfast",
        category: "food",
        location: "Roone Auditorium",
        description: "Menu to be announced. Fuel up for the final day of hacking and presentations.",
      },
    ],
  },
  {
    time: "11:00 AM",
    events: [
      {
        time: "11:00 AM",
        title: "Submissions Close",
        category: "ceremony",
        description: "Hard project deadline on Devpost — no extensions!",
      },
    ],
  },
  {
    time: "11:00 AM – 12:00 PM",
    events: [
      {
        time: "11:00 AM – 12:00 PM",
        title: "Lunch",
        category: "food",
        location: "Roone Auditorium",
        description: "Pre-expo lunch service.",
      },
    ],
  },
  {
    time: "1:00 PM",
    events: [
      {
        time: "1:00 PM",
        title: "Expo Begins",
        category: "ceremony",
        location: "Roone Auditorium",
        description: "Each team gets a table, and 1 member must be present at all times. Members are free to walk around to view other projects. Be prepared to demo and pitch your final product to our sponsors, judges, mentors. Some of our sponsors are looking to hire talent. Each table will be seen by a miniumum of 3 judges to ensure fair evaluation. A 15-min break is imposed to ensure judging + presentation quality remains consistent for both judges and participants. ",
      }, 
    ],
  },
  {
    time: "2:00 PM",
    events: [
      {
        time: "2:00 PM",
        title: "Judging Deliberation Break",
        category: "logistics",
        description: "15-minute scoring break window.",
      },
    ],
  },
  {
    time: "2:15 – 3:00 PM",
    events: [
      {
        time: "2:15 – 3:00 PM",
        title: "Expo Resumes",
        category: "ceremony",
        location: "Roone Auditorium",
      },
    ],
  },
  {
    time: "3:00 - 3:30 PM",
    events: [
      {
        time: "3:00 - 3:30 PM",
        title: "Scoring Period",
        category: "logistics",
        location: "Roone Auditorium",
        description: "Ratings will be collected and averaged to determine top performing teams to move on to the finalist round. Be prepared to present a 2-min walkthrough of your project followed by 2-min questions from the judge panel. There will be 6 finalists selected to qualify for top 3 overall. Projects not selected to be finalists will still be considered for general + sponsor tracks winners.",
      },
    ],
  },
  {
    time: "3:30 PM",
    events: [
      {
        time: "3:30 PM",
        title: "Finalists Announced",
        category: "ceremony",
        location: "Roone Auditorium",
      },
    ],
  },
  {
    time: "3:40 – 4:20 PM",
    events: [
      {
        time: "3:40 – 4:20 PM",
        title: "Finalists Presentations",
        category: "ceremony",
        location: "Lerner Satow",
        description: "6 selected finalists present a 2-min walkthrough followed by 2-min Q&A to compete for top 3 overall.",
      },
    ],
  },
  {
    time: "4:20 – 5:00 PM",
    events: [
      {
        time: "4:20 – 5:00 PM",
        title: "Presentations",
        category: "ceremony",
        location: "Roone Auditorium",
        description: "Judges will delibrate on overall winners and finalize scoring across overall, general, and sponsor track categories.",
        }
    ],
  },
  {
    time: "5:00 PM",
    events: [
      {
        time: "5:00 PM",
        title: "Closing Ceremony",
        category: "ceremony",
        location: "Roone Auditorium",
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

function EventCard({ item }: { item: ScheduleItem }) {
  const config = CATEGORY_CONFIG[item.category];

  return (
    <div
      className={`rounded-2xl border border-zinc-800 border-l-[8px] ${config.cardBorder} ${config.cardBg} p-6 backdrop-blur-sm transition-all duration-200 hover:bg-zinc-900/80 md:grid md:grid-cols-[160px_1fr_240px] md:items-center md:gap-6`}
    >
      {/* 1. Time Column */}
      <div className="flex flex-col items-center justify-center border-b border-zinc-800/80 pb-3 text-center md:border-b-0 md:border-r md:border-zinc-800/80 md:py-2 md:pr-6">
        <span className="font-mono text-xl font-black tracking-wide text-normalyellow lg:text-2xl">
          {item.time}
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
        <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
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
            className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-zinc-200 transition-colors hover:text-normalyellow md:hidden"
          >
            <span className="text-base text-normalyellow">📍</span>
            <span className="underline decoration-zinc-600 underline-offset-4 group-hover:decoration-normalyellow">
              {item.location}
            </span>
          </Link>
        )}
      </div>

      {/* 3. Location Column (Desktop): Internal /map Button Card */}
      <div className="hidden flex-col items-end justify-center pl-2 md:flex">
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
  const currentSchedule = activeTab === "day1" ? day1Schedule : day2Schedule;

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
          {currentSchedule.map((block, idx) => (
            <div key={idx} className="space-y-3">
              {block.events.map((event, eIdx) => (
                <EventCard key={`${idx}-${eIdx}`} item={event} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}