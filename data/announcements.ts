export interface Announcement {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

export const announcements: Announcement[] = [
  {
    id: "registrations-open",
    title: "Priority Delegate Registrations Officially Open for IEMMUN 2026",
    category: "REGISTRATION",
    date: "June 15, 2026",
    excerpt: "Institutional and individual registrations are now open. Secure your delegation's priority access to select preferred committee portfolios."
  },
  {
    id: "unsc-agenda-reveal",
    title: "Executive Board Releases Cyber Warfare Agenda Focus for UNSC",
    category: "COMMITTEES",
    date: "June 10, 2026",
    excerpt: "The United Nations Security Council releases details on the post-quantum cryptography defense and global digital sovereignty agenda."
  },
  {
    id: "secretariat-recruitment",
    title: "Applications Open for the IEMMUN 2026 Organizing Secretariat",
    category: "RECRUITMENT",
    date: "June 05, 2026",
    excerpt: "Join the executive team managing logistics, operations, public relations, and delegate relations for our largest international summit."
  },
  {
    id: "background-guides-release",
    title: "Official Committee Background Study Guides Released",
    category: "RESOURCES",
    date: "May 28, 2026",
    excerpt: "Prepare your research with study resources compiled by our Directors. All files are available in the delegate resources database."
  }
];
