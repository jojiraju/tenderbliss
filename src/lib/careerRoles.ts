import { Briefcase, ChefHat, GraduationCap, User, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CareerRole = {
  title: string;
  slug: string;
  location: string;
  summary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  icon: LucideIcon;
};

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const careerRoles: CareerRole[] = [
  {
    title: "Receptionist (Female)",
    slug: slugify("Receptionist (Female)"),
    location: "Mampad, Nilambur",
    summary: "Warm, professional front-desk support with basic accounting knowledge.",
    description:
      "As the first point of contact for guests, the receptionist provides welcoming support, handles inquiries, manages scheduling, and assists with basic administrative and billing tasks.",
    responsibilities: [
      "Greet guests and answer phone calls with a warm, professional tone.",
      "Manage appointment scheduling and registration for new and returning clients.",
      "Handle basic billing, invoicing, and record-keeping tasks.",
      "Coordinate with team members to ensure smooth guest arrivals and departures."
    ],
    qualifications: [
      "Prior receptionist or front-desk experience preferred.",
      "Strong communication and organizational skills.",
      "Comfortable using phone systems and basic office software.",
      "A calm, compassionate attitude toward new mothers and families."
    ],
    icon: User
  },
  {
    title: "PRO (Male)",
    slug: slugify("PRO (Male)"),
    location: "Mampad, Nilambur",
    summary: "Experienced public relations officer with health sector exposure.",
    description:
      "The PRO represents TenderBliss to external agencies, government bodies, and healthcare partners while supporting licensing, compliance, and internal communication.",
    responsibilities: [
      "Manage relationships with health authorities, vendors, and partner organizations.",
      "Support documentation, approvals, and operational compliance.",
      "Coordinate hospital and community outreach efforts.",
      "Ensure clear communication across teams and external stakeholders."
    ],
    qualifications: [
      "Experience in public relations, liaison, or healthcare administration.",
      "Strong communication and relationship-building skills.",
      "Knowledge of local regulations and documentation procedures.",
      "Professional, confident presence in both written and verbal communication."
    ],
    icon: Briefcase
  },
  {
    title: "Experienced Cook (Female)",
    slug: slugify("Experienced Cook (Female)"),
    location: "Mampad, Nilambur",
    summary: "Skilled in Ayurvedic nutrition and both veg + non-veg meal preparation.",
    description:
      "Prepare nourishing postnatal meals using Ayurvedic principles while maintaining high hygiene standards and adapting to each mother's dietary needs.",
    responsibilities: [
      "Prepare balanced meals that support postpartum recovery and lactation.",
      "Maintain hygiene, kitchen safety, and ingredient quality standards.",
      "Support menu planning and adapt meals for dietary needs.",
      "Coordinate with service staff to ensure timely meal delivery."
    ],
    qualifications: [
      "Experienced cook with knowledge of Ayurvedic and nourishing home-style cuisine.",
      "Skilled in both vegetarian and non-vegetarian meal preparation.",
      "Strong cleanliness and kitchen safety habits.",
      "Ability to follow recipes and adapt meals to individual needs."
    ],
    icon: ChefHat
  },
  {
    title: "Ayurvedic Therapist (Female)",
    slug: slugify("Ayurvedic Therapist (Female)"),
    location: "Mampad, Nilambur",
    summary: "Skilled in postnatal massage and holistic therapy techniques.",
    description:
      "Deliver trusted Ayurvedic therapies designed to support postpartum healing, relaxation, and restoration for new mothers.",
    responsibilities: [
      "Provide personalized postpartum massages and therapies.",
      "Assess client needs and recommend appropriate treatment plans.",
      "Maintain a calming therapy environment and high hygiene standards.",
      "Track progress and communicate care recommendations to clients."
    ],
    qualifications: [
      "Certified Ayurvedic therapist with postnatal experience.",
      "Strong hands-on massage and therapy skills.",
      "Compassionate, patient-focused service delivery.",
      "Ability to explain treatments and guide recovery effectively."
    ],
    icon: GraduationCap
  },
  {
    title: "Guest Experience Specialist",
    slug: slugify("Guest Experience Specialist"),
    location: "Mampad, Nilambur",
    summary: "Deliver warm hospitality and ensure every mother feels cared for.",
    description:
      "Create a seamless and comforting stay for guests, handling service requests, comfort needs, and the details that make TenderBliss feel like home.",
    responsibilities: [
      "Welcome guests and assist with every comfort need.",
      "Coordinate room readiness, amenities, and follow-up service.",
      "Listen actively to guest preferences and respond proactively.",
      "Work closely with care and kitchen teams to deliver a premium experience."
    ],
    qualifications: [
      "Excellent hospitality or customer service experience.",
      "Strong interpersonal and attention-to-detail skills.",
      "A warm, caring attitude with good communication.",
      "Able to manage multiple requests calmly and efficiently."
    ],
    icon: Heart
  }
];

export const getCareerBySlug = (slug: string) => careerRoles.find((role) => role.slug === slug);
export const getCareerSlugs = () => careerRoles.map((role) => ({ slug: role.slug }));
export const getCareerTitles = () => careerRoles.map((role) => role.title);
