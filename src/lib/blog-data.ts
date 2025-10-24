export type Post = {
  id: string;
  title: string;
  excerpt: string;
  category: "all" | "trends" | "tutorials" | "care" | "business";
  image: string;
  date: string; // ISO preferred for sorting: "2025-03-15"
  author: string;
  readTime: string;
  imageEmoji?: string;
  featured?: boolean;
};

export const CATEGORIES = [
  { id: "all", name: "All Posts" },
  { id: "trends", name: "Trends" },
  { id: "tutorials", name: "Tutorials" },
  { id: "care", name: "Nail Care" },
  { id: "business", name: "Behind the Scenes" },
] as const;

export const POSTS: Post[] = [
  {
    id: "spring-2025-nail-trends",
    title: "Spring 2025 Nail Color Trends You Need to Try",
    excerpt:
      "Discover the hottest nail colors and designs that are taking over this spring season.",
    category: "trends",
    date: "March 15, 2025",
    author: "Sandali",
    readTime: "5 min read",
    image: "🌸",
    featured: true,
  },
  {
    id: "manicure-last-longer",
    title: "7 Pro Tips to Make Your Manicure Last 2+ Weeks",
    excerpt:
      "Learn the secrets that nail technicians use to extend the life of your manicure.",
    category: "care",
    date: "March 10, 2025",
    author: "Sandali",
    readTime: "8 min read",
    image: "💅",
    featured: false,
  },
  {
    id: "nail-art-basics",
    title: "Nail Art for Beginners: Simple Designs You Can Do at Home",
    excerpt:
      "Start your nail art journey with these easy-to-follow designs and techniques.",
    category: "tutorials",
    date: "March 5, 2025",
    author: "Sandali",
    readTime: "10 min read",
    image: "🎨",
    featured: false,
  },
  {
    id: "nail-health-guide",
    title: "The Complete Guide to Healthy Nails: What You Need to Know",
    excerpt:
      "Everything about maintaining strong, healthy nails from cuticle care to nutrition.",
    category: "care",
    date: "February 28, 2025",
    author: "Sandali",
    readTime: "12 min read",
    image: "🌿",
    featured: false,
  },
  {
    id: "day-in-life-nail-tech",
    title: "A Day in the Life of a Nail Technician",
    excerpt:
      "Ever wondered what goes on behind the scenes at Pretty Tips? Take a peek!",
    category: "business",
    date: "February 20, 2025",
    author: "Sandali",
    readTime: "6 min read",
    image: "👩‍💼",
    featured: false,
  },
  {
    id: "gel-vs-regular-polish",
    title: "Gel Polish vs Regular Polish: Which is Right for You?",
    excerpt:
      "Compare the pros and cons of gel and regular polish to make the best choice.",
    category: "care",
    date: "February 15, 2025",
    author: "Sandali",
    readTime: "7 min read",
    image: "✨",
    featured: false,
  },
];
