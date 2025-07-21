import {
  Users,
  Target,
  Calendar,
  Award,
  Building2,
  Lightbulb,
  TrendingUp,
  Network,
  BookOpen,
  Rocket,
  User,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Code,
  DollarSign,
  Globe,
  Briefcase,
  BarChart3,
  Brain,
  Settings,
  LineChart,
  PieChart
} from "lucide-react";

import eventsImage from "@/assets/events-conference.jpg";
import innovationImage from "@/assets/innovation-lab.jpg";
import teamImage from "@/assets/team-professional.jpg";

export const programs = [
  {
    icon: Rocket,
    title: "Startup Incubation Program",
    desc: "Comprehensive 6-month program for transforming ideas into viable businesses",
    duration: "6 Months",
    level: "Beginner to Intermediate",
    participants: "20-25 startups per batch",
    features: [
      "Dedicated mentorship from industry experts",
      "Seed funding opportunities up to ₹5 lakhs",
      "Legal and IP guidance",
      "Co-working space access",
      "Technical infrastructure support",
      "Market research assistance"
    ],
    benefits: [
      "Access to investor network",
      "Government scheme guidance",
      "Product development support",
      "Marketing and branding assistance",
      "Financial planning and accounting",
      "Pitch deck preparation"
    ],
    curriculum: [
      "Business Model Canvas Development",
      "Market Validation Techniques",
      "Financial Planning and Fundraising",
      "Legal Framework and Compliance",
      "Product Development Lifecycle",
      "Go-to-Market Strategy",
      "Investor Pitch Preparation",
      "Scaling and Growth Strategies"
    ],
    requirements: [
      "Original business idea or early-stage startup",
      "Commitment to full program duration",
      "Basic business knowledge",
      "Team of 2-4 members (preferred)"
    ],
    outcomes: [
      "Fully developed business plan",
      "Working prototype or MVP",
      "Investor-ready pitch deck",
      "Market validation data",
      "Legal entity establishment",
      "Potential seed funding"
    ]
  },
  {
    icon: TrendingUp,
    title: "Growth Accelerator Program",
    desc: "3-month intensive program for scaling existing startups to the next level",
    duration: "3 Months",
    level: "Intermediate to Advanced",
    participants: "15-20 startups per batch",
    features: [
      "Revenue optimization strategies",
      "Advanced digital marketing",
      "Investment readiness training",
      "International market expansion",
      "Partnership development",
      "Advanced analytics and metrics"
    ],
    benefits: [
      "Series A funding preparation",
      "Strategic partnership opportunities",
      "Advanced technology integration",
      "International market access",
      "Leadership development",
      "Exit strategy planning"
    ],
    curriculum: [
      "Advanced Growth Hacking Techniques",
      "Data-Driven Decision Making",
      "International Expansion Strategies",
      "Series A Fundraising",
      "Strategic Partnerships",
      "Advanced Digital Marketing",
      "Leadership and Team Scaling",
      "Exit Strategy Planning"
    ],
    requirements: [
      "Existing startup with minimum viable product",
      "Revenue generation (minimum ₹1 lakh/month)",
      "Team of 3+ members",
      "Growth potential demonstration"
    ],
    outcomes: [
      "100%+ revenue growth target",
      "Series A funding readiness",
      "International market entry plan",
      "Strategic partnerships established",
      "Advanced product features",
      "Scalable business processes"
    ]
  },
  {
    icon: BookOpen,
    title: "Entrepreneurship Foundation Course",
    desc: "8-week comprehensive course covering entrepreneurship fundamentals",
    duration: "8 Weeks",
    level: "Beginner",
    participants: "50-60 students per batch",
    features: [
      "Interactive online and offline sessions",
      "Case study analysis",
      "Guest lectures from successful entrepreneurs",
      "Hands-on project work",
      "Peer learning groups",
      "Industry exposure visits"
    ],
    benefits: [
      "Entrepreneurial mindset development",
      "Business opportunity identification",
      "Risk assessment capabilities",
      "Leadership skills enhancement",
      "Network building",
      "Career direction clarity"
    ],
    curriculum: [
      "Introduction to Entrepreneurship",
      "Opportunity Recognition and Evaluation",
      "Business Model Innovation",
      "Marketing and Customer Development",
      "Financial Management Basics",
      "Leadership and Team Building",
      "Risk Management",
      "Business Plan Development"
    ],
    requirements: [
      "Interest in entrepreneurship",
      "Basic English proficiency",
      "Commitment to attend all sessions",
      "No prior business experience required"
    ],
    outcomes: [
      "Entrepreneurship certificate",
      "Business idea validation",
      "Network of like-minded peers",
      "Basic business plan",
      "Industry exposure",
      "Career clarity"
    ]
  },
  {
    icon: Code,
    title: "Tech Startup Bootcamp",
    desc: "4-month intensive program focused on technology-driven startups",
    duration: "4 Months",
    level: "Intermediate",
    participants: "25-30 participants per batch",
    features: [
      "Technical product development",
      "AI/ML integration guidance",
      "Cloud infrastructure setup",
      "Cybersecurity best practices",
      "API development and integration",
      "Mobile app development"
    ],
    benefits: [
      "Technical expertise development",
      "Industry-standard development practices",
      "Cloud platform partnerships",
      "Technical mentorship",
      "Product development acceleration",
      "Technology trend insights"
    ],
    curriculum: [
      "Tech Stack Selection and Architecture",
      "MVP Development Methodologies",
      "AI/ML Integration for Startups",
      "Cloud Infrastructure and DevOps",
      "Cybersecurity for Startups",
      "Mobile-First Development",
      "API Design and Development",
      "Technology Scaling Strategies"
    ],
    requirements: [
      "Basic programming knowledge",
      "Tech startup idea or concept",
      "Laptop with development environment",
      "Commitment to technical learning"
    ],
    outcomes: [
      "Fully functional MVP",
      "Technical architecture documentation",
      "Cloud deployment capability",
      "Security implementation",
      "Mobile application",
      "Technical team building skills"
    ]
  },
  {
    icon: DollarSign,
    title: "FinTech Innovation Program",
    desc: "5-month specialized program for financial technology startups",
    duration: "5 Months",
    level: "Advanced",
    participants: "15-20 startups per batch",
    features: [
      "Regulatory compliance guidance",
      "Blockchain technology integration",
      "Payment gateway development",
      "Financial modeling expertise",
      "Banking partnership facilitation",
      "Regulatory sandbox access"
    ],
    benefits: [
      "Financial industry expertise",
      "Regulatory compliance assurance",
      "Banking sector partnerships",
      "Investment from FinTech VCs",
      "Technology infrastructure support",
      "Market entry facilitation"
    ],
    curriculum: [
      "FinTech Landscape and Opportunities",
      "Regulatory Framework and Compliance",
      "Blockchain and Cryptocurrency",
      "Payment Systems and Security",
      "Financial Data Analytics",
      "Banking APIs and Integration",
      "Investment and Funding in FinTech",
      "Risk Management in Financial Services"
    ],
    requirements: [
      "FinTech startup idea or existing solution",
      "Understanding of financial services",
      "Technical background preferred",
      "Regulatory compliance commitment"
    ],
    outcomes: [
      "Compliance-ready FinTech solution",
      "Banking partnerships established",
      "Regulatory approvals initiated",
      "Secure payment integration",
      "Investment readiness",
      "Market launch preparation"
    ]
  },
  {
    icon: Globe,
    title: "Social Impact Venture Program",
    desc: "6-month program for startups creating positive social and environmental impact",
    duration: "6 Months",
    level: "Intermediate",
    participants: "20-25 ventures per batch",
    features: [
      "Impact measurement frameworks",
      "Sustainable business model development",
      "Grant funding guidance",
      "CSR partnership facilitation",
      "Community engagement strategies",
      "Environmental impact assessment"
    ],
    benefits: [
      "Social impact measurement",
      "Grant funding access",
      "CSR partnership opportunities",
      "Sustainable scaling strategies",
      "Community network building",
      "Impact investor connections"
    ],
    curriculum: [
      "Social Entrepreneurship Fundamentals",
      "Impact Measurement and Management",
      "Sustainable Business Models",
      "Grant Writing and Funding",
      "Community Engagement and Partnerships",
      "Environmental Impact Assessment",
      "Policy Advocacy and Change",
      "Scaling Social Impact"
    ],
    requirements: [
      "Social or environmental impact focus",
      "Commitment to sustainable practices",
      "Community engagement experience",
      "Passion for social change"
    ],
    outcomes: [
      "Sustainable business model",
      "Impact measurement system",
      "Grant funding secured",
      "Community partnerships",
      "Policy influence capability",
      "Scalable social impact"
    ]
  }
];

export const eventsData = [
  {
    id: 1,
    image: eventsImage,
    title: "Global Startup Pitch Championship 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "AMC Main Auditorium",
    description: "Present your revolutionary business ideas to a distinguished panel of industry leaders, VCs, and successful entrepreneurs. Compete for prizes worth ₹5 lakhs and secure potential seed funding for your startup.",
    attendees: 200,
    status: "registration-open" as const
  },
  {
    id: 2,
    image: innovationImage,
    title: "Entrepreneurship Masterclass Series",
    date: "March 22, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Innovation Lab",
    description: "Intensive workshop covering the complete entrepreneurial journey - from ideation to scaling. Learn directly from industry veterans who have built successful startups from the ground up.",
    attendees: 150,
    status: "upcoming" as const
  },
  {
    id: 3,
    image: teamImage,
    title: "Tech Startup Bootcamp - MVP Building",
    date: "April 10, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Hub",
    description: "Hands-on intensive workshop focused on rapid MVP development, UI/UX best practices, and effective pitching strategies. Perfect for aspiring tech founders ready to build their first product.",
    attendees: 100,
    status: "upcoming" as const
  },
  {
    id: 4,
    image: eventsImage,
    title: "Investor Connect Networking Night",
    date: "April 25, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "E-Cell Lounge",
    description: "Exclusive networking event connecting student entrepreneurs with angel investors, VCs, and successful alumni. An opportunity to showcase your startup and build valuable connections.",
    attendees: 80,
    status: "registration-open" as const
  },
  {
    id: 5,
    image: innovationImage,
    title: "Women in Entrepreneurship Summit",
    date: "May 8, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Conference Hall",
    description: "Celebrating and empowering women entrepreneurs through inspiring talks, panel discussions, and mentorship sessions with successful female business leaders.",
    attendees: 120,
    status: "upcoming" as const
  },
  {
    id: 6,
    image: teamImage,
    title: "Startup Funding Workshop",
    date: "May 20, 2024",
    time: "11:00 AM - 3:00 PM",
    location: "Seminar Hall",
    description: "Comprehensive workshop on funding strategies, investor relations, and financial planning for startups. Learn how to prepare for different funding rounds and pitch to investors.",
    attendees: 90,
    status: "upcoming" as const
  }
];

export const faculty = [
  { name: "Dr. Nandeeswar S B", role: "Faculty Coordinator", dept: "HOD CSE AIML", initials: "NSB", phone: "9901377377", email: "hodcse.aiml@amceducation.in" },
  { name: "Prof. Swathi Srikanth", role: "Mentorship", dept: "Industry Expert", initials: "SS", phone: "9994220701", email: "swathishrikanth@gmail.com" }
];

export const coreTeam = [
  { name: "Ritesh N", role: "Team Lead", phone: "8660144040", email: "riturithesh66@gmail.com" },
  { name: "Pannaga JA", role: "Core Member", phone: "9741405534", email: "pannagajavisionx@gmail.com" },
  { name: "Shashank GS", role: "Core Member", phone: "9538926581", email: "shashankgsvisionx@gmail.com" },
  { name: "Ruthu Parinika", role: "Core Member", phone: "8105055869", email: "ruthuvnvisionex@gmail.com" },
  { name: "Sanath Naik", role: "Core Member", phone: "8971304009", email: "sanath.amc@gmail.com" },
  { name: "Praveen V", role: "Core Member", phone: "8152004373", email: "praveenvvisionex@gmail.com" },
  { name: "Poornima Hegde", role: "Core Member", phone: "7624931499", email: "poornima.narayan1905@gmail.com" }
];

export const signaturePrograms = [
  { icon: Award, title: "Startup Speaker Series", timing: "Monthly", desc: "Invite founders, alumni entrepreneurs, or investors to share their journey, mistakes, and insights with students.", outcome: "Inspires students + builds network." },
  { icon: Target, title: "Ideathon / Pitch & Win", timing: "Quarterly", desc: "A short 1–2 day event where students pitch early startup ideas.", outcome: "Judged by faculty, alumni, or real entrepreneurs." },
  { icon: BookOpen, title: "E-Cell Skill Bootcamps", timing: "Every 2 months", desc: "Skill-specific workshops: Pitching & storytelling, UI/UX & Product design, MVP building, Startup law & IP, Growth marketing 101." },
  { icon: Network, title: "Startup Internship Connect", timing: "Semester-wise", desc: "Partner with 5–10 early-stage startups and let students apply for internships directly through E-Cell.", outcome: "Bridge between student talent and startups." },
  { icon: Settings, title: "Build Something Hack Series", timing: "Monthly / Bi-monthly", desc: "Students team up to solve local problems or startup challenges. Helps create prototypes, apps, AI tools, and even social startups." },
  { icon: LineChart, title: "Startup of the Month Feature", timing: "", desc: "Spotlight one innovative startup every month through reels, carousel posts, and posters. Builds awareness and encourages networking." },
  { icon: Users, title: "Alumni Mentorship Circles", timing: "Bi-annual", desc: "Bring back 3–5 successful AMC alumni working in startups or product roles. Match them with groups of student founders for mentorship." },
  { icon: PieChart, title: "Mini Investment Simulation Program", timing: "", desc: "Teach students how VC/investor rounds work through a mock event — some students become 'investors', others pitch." },
  { icon: User, title: "Entrepreneur-in-Residence Program (EIR)", timing: "", desc: "Invite a local founder to 'reside' (virtually) for a week — students can ask questions, shadow their schedule, etc." },
  { icon: Calendar, title: "AMC Startup Demo Day", timing: "End of year", desc: "Let top student teams showcase their MVPs or ideas in front of the college, mentors, and local ecosystem players." }
];

export const navLinks = [
  { id: "home", label: "Home", type: "scroll" },
  { id: "about", label: "About", type: "scroll" },
  { id: "programs", label: "Programs", type: "link", path: "/programs" },
  { id: "events", label: "Events", type: "link", path: "/events" },
  { id: "team", label: "Team", type: "link", path: "/team" },
  { id: "initiatives", label: "Initiatives", type: "link", path: "/signature-programs" },
  { id: "contact", label: "Contact", type: "scroll" }
]; 