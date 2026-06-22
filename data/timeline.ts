export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  active?: boolean;
}

export const timelineItems: TimelineItem[] = [
  {
    date: "June 15, 2026",
    title: "Priority Delegate Registration Opens",
    description: "Delegations can register under early-bird guidelines to select priority portfolios across all six committees.",
    active: true
  },
  {
    date: "July 10, 2026",
    title: "Background Study Guides Released",
    description: "Official study guides authored by the Committee Executive Boards will be released for all delegates.",
    active: false
  },
  {
    date: "August 01, 2026",
    title: "General Registration Closes",
    description: "Final deadline for all delegation lists and independent delegate registration requests.",
    active: false
  },
  {
    date: "August 15, 2026",
    title: "Position Paper Submissions Due",
    description: "Delegates must submit their position papers to their respective committee directors to be eligible for awards.",
    active: false
  },
  {
    date: "September 04 - 06, 2026",
    title: "IEMMUN 2026 Summit Days",
    description: "Three days of intensive debates, diplomatic negotiations, and crisis de-escalation simulations.",
    active: false
  }
];
