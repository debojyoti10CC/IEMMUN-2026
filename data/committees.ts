export interface ExecutiveBoardMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

export interface Committee {
  id: string;
  name: string;
  shortName: string;
  agenda: string;
  difficulty: "Novice" | "Intermediate" | "Advanced";
  image: string;
  cardBg?: string;
  type: "Offline" | "Online";
  overview: string;
  detailedAgenda: string;
  backgroundGuideUrl: string;
  portfolioMatrix: string[];
  executiveBoard: ExecutiveBoardMember[];
  resources: { title: string; url: string }[];
}

export const committees: Committee[] = [
  {
    id: "disec",
    name: "Disarmament and International Security Committee",
    shortName: "DISEC",
    agenda: "The Militarization of Low Earth Orbit and Anti-Satellite Weaponry",
    difficulty: "Intermediate",
    image: "/Committees/DISEC.png",
    cardBg: "/disec-bg.jpg",
    type: "Offline",
    overview: "As the First Committee of the General Assembly, DISEC deals with disarmament, global challenges, and threats to peace. This session centers on space security, focusing on preventing an arms race in outer space (PAROS) and establishing protocols for orbital asset protection.",
    detailedAgenda: "The reliance on orbital assets for communications, navigation, and defense has turned Low Earth Orbit (LEO) into a highly contested strategic front. The testing of anti-satellite (ASAT) weapons poses massive debris threats (Kessler Syndrome), endangering both peaceful space exploration and global infrastructure. Delegates will debate treaty updates to prevent space weaponization and create regulatory regimes for dual-use satellites.",
    backgroundGuideUrl: "/resources/guides/disec-background-guide.pdf",
    portfolioMatrix: [
      "United States", "China", "Russia", "India", "Japan", "United Kingdom", "France", "Germany",
      "Israel", "Canada", "Australia", "Brazil", "South Africa", "Italy", "South Korea"
    ],
    executiveBoard: [
      { name: "Alistair Thorne", role: "Chairperson" },
      { name: "Linnea Lindstrom", role: "Vice-Chairperson" }
    ],
    resources: [
      { title: "Outer Space Treaty of 1967", url: "https://www.unoosa.org" },
      { title: "UNIDIR Report on Space Security", url: "https://unidir.org" }
    ]
  },
  {
    id: "csw",
    name: "Commission on the Status of Women",
    shortName: "CSW",
    agenda: "Ensuring Female Representation in Transitional Governance and Post-Conflict Reconstruction",
    difficulty: "Intermediate",
    image: "/Committees/CSW.png",
    cardBg: "/csw-bg.jpg",
    type: "Offline",
    overview: "The CSW is the principal global intergovernmental body dedicated to the promotion of gender equality and the empowerment of women. This session focuses on securing women's systemic involvement in drafting new constitutions and managing post-war judicial transitions.",
    detailedAgenda: "Despite evidence showing peace agreements are more durable when women are involved in negotiations, women continue to be excluded from formal transitional authorities and reconstruction tables. The Commission will address constitutional quotas, financial aid tied to gender equity in governance, and mechanisms to prosecute gender-based violence during transitions.",
    backgroundGuideUrl: "/resources/guides/csw-background-guide.pdf",
    portfolioMatrix: [
      "United States", "United Kingdom", "France", "Sweden", "Canada", "Norway", "South Africa",
      "Rwanda", "Liberia", "Colombia", "Japan", "India", "Brazil", "Germany", "Mexico"
    ],
    executiveBoard: [
      { name: "Claire Dubois", role: "Executive Chair" },
      { name: "Dr. Naledi Dlamini", role: "Co-Chair" }
    ],
    resources: [
      { title: "UN Security Council Resolution 1325 (Women, Peace, and Security)", url: "https://www.un.org" }
    ]
  },
  {
    id: "ip",
    name: "International Press",
    shortName: "IP",
    agenda: "Journalistic Neutrality and Information Warfare in Combat Zones",
    difficulty: "Novice",
    image: "/Committees/IP.png",
    cardBg: "/ip-bg.jpg",
    type: "Offline",
    overview: "The International Press acts as the media coverage engine of IEMMUN 2026. Reporters will monitor other chambers, conduct press conferences, draft opinion pieces, and analyze the psychological dimension of information distribution.",
    detailedAgenda: "In modern warfare, information is as strategic as physical ammunition. The IP will investigate how media houses navigate censorship, state-sponsored propaganda, deepfakes, and coordinate ethical reporting in highly hostile territories.",
    backgroundGuideUrl: "/resources/guides/ip-background-guide.pdf",
    portfolioMatrix: [
      "Reuters", "BBC News", "Al Jazeera", "The New York Times", "Associated Press", "TASS", "Xinhua News Agency"
    ],
    executiveBoard: [
      { name: "Sophia Martinez", role: "Editor-in-Chief" },
      { name: "Benjamin Kael", role: "Chief Photojournalist" }
    ],
    resources: [
      { title: "Geneva Conventions on Protection of Journalists", url: "https://www.icrc.org" }
    ]
  },
  {
    id: "wbla",
    name: "West Bengal Legislative Assembly",
    shortName: "WBLA",
    agenda: "Evaluating Socio-Economic Reforms and State Resource Management",
    difficulty: "Advanced",
    image: "/Committees/WBLA.png",
    cardBg: "/wbla-bg.jpg",
    type: "Offline",
    overview: "The West Bengal Legislative Assembly simulation brings regional politics, legislative debate, and resource allocation protocols into focus. Delegates will tackle contemporary state policies and legislative drafts.",
    detailedAgenda: "This committee focuses on structural economic reforms within West Bengal, analyzing resource distribution, rural agricultural modernization, industrialization policy, and federal financial devolution within the Union of India.",
    backgroundGuideUrl: "/resources/guides/wbla-background-guide.pdf",
    portfolioMatrix: [
      "Chief Minister", "Leader of Opposition", "Minister of Finance", "MLA (Kolkata)", "MLA (Siliguri)", "MLA (Darjeeling)", "MLA (Howrah)"
    ],
    executiveBoard: [
      { name: "Hon'ble Speaker", role: "Moderator" },
      { name: "Shri Rajesh Banerjee", role: "Deputy Speaker" }
    ],
    resources: [
      { title: "Constitution of India - State List Provisions", url: "https://www.india.gov.in" }
    ]
  },
  {
    id: "knesset",
    name: "Knesset",
    shortName: "Knesset",
    agenda: "Navigating Coalition Governance and National Security Protocols",
    difficulty: "Advanced",
    image: "/Committees/KNESSET.png",
    cardBg: "/knesset-bg.jpg",
    type: "Offline",
    overview: "Simulating the parliament of Israel, this committee deals with coalition mechanics, legislative voting blocks, and internal security challenges under high external tension.",
    detailedAgenda: "Delegates will analyze the internal political structures, emergency defense budgeting, and the legislative constraints of maintaining stability in Knesset coalition cabinets during diplomatic negotiations.",
    backgroundGuideUrl: "/resources/guides/knesset-background-guide.pdf",
    portfolioMatrix: [
      "Prime Minister", "Defense Minister", "Foreign Minister", "Likud Leader", "Yesh Atid Leader", "Shas Representative", "Labor Leader"
    ],
    executiveBoard: [
      { name: "Avi Cohen", role: "Speaker of Knesset" },
      { name: "Dr. Tamar Levy", role: "Director General" }
    ],
    resources: [
      { title: "Basic Laws of Israel", url: "https://main.knesset.gov.il" }
    ]
  },
  {
    id: "wto",
    name: "World Trade Organization",
    shortName: "WTO",
    agenda: "Reforming Dispute Settlement Mechanisms and Digital Trade Tariffs",
    difficulty: "Intermediate",
    image: "/Committees/WTO.png",
    cardBg: "/wto-bg.jpg",
    type: "Online",
    overview: "The World Trade Organization regulates global commerce. This online chamber handles the modern rules of digital markets, cross-border data flows, and judicial reform of the appellate body.",
    detailedAgenda: "The WTO appellate division faces structural vacancies, blocking the resolution of major trade disputes. Concurrently, the moratorium on customs duties on electronic transmissions is expiring. Delegates will negotiate reforms to restore dispute resolution and create new rules for e-commerce tariffs.",
    backgroundGuideUrl: "/resources/guides/wto-background-guide.pdf",
    portfolioMatrix: [
      "United States", "European Union", "China", "India", "Brazil", "South Africa", "South Korea", "Singapore", "Canada"
    ],
    executiveBoard: [
      { name: "Director-General WTO", role: "Moderator" },
      { name: "Dr. Hans Schmidt", role: "Deputy Director" }
    ],
    resources: [
      { title: "WTO Moratorium on Electronic Transmissions", url: "https://www.wto.org" }
    ]
  }
];
