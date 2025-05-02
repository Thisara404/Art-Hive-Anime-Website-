// Categories
export const CATEGORIES = [
  { id: 1, name: "Digital Art", slug: "digital-art" },
  { id: 2, name: "Comic Books", slug: "comic-books" },
  { id: 3, name: "Wall Arts", slug: "wall-arts" },
  { id: 4, name: "Anime Books", slug: "anime-books" },
  { id: 5, name: "Anime Arts", slug: "anime-arts" },
  { id: 6, name: "Sketch Arts", slug: "sketch-arts" }
];

// Mock Products
export const PRODUCTS = [
  {
    id: 1,
    title: "Premium Landscape Digital Art Pack",
    slug: "premium-landscape-digital-art",
    description: "A collection of 10 high-resolution digital landscape artworks perfect for framing or web display.",
    price: 6500, // Price in LKR
    thumbnail: "/placeholder.svg",
    category: "Digital Art",
    tags: ["landscape", "digital", "art"],
    creatorId: 1,
    rating: 4.7,
    reviewCount: 32,
    featured: true
  },
  {
    id: 2,
    title: "Business Plan Template Bundle",
    slug: "business-plan-template-bundle",
    description: "Professional business plan templates with financial models for entrepreneurs and startups.",
    price: 3900, // Price in LKR
    thumbnail: "/placeholder.svg",
    category: "Templates",
    tags: ["business", "template", "startup"],
    creatorId: 2,
    rating: 4.5,
    reviewCount: 18,
    featured: true
  },
  {
    id: 3,
    title: "Modern Web Design Course",
    slug: "modern-web-design-course",
    description: "Complete web design course covering UI/UX principles, HTML, CSS, and responsive design techniques.",
    price: 12000, // Price in LKR
    thumbnail: "/placeholder.svg",
    category: "Courses",
    tags: ["web design", "programming", "ui/ux"],
    creatorId: 3,
    rating: 4.9,
    reviewCount: 75,
    featured: true
  },
  {
    id: 4,
    title: "Ambient Music Collection",
    slug: "ambient-music-collection",
    description: "Royalty-free ambient music tracks perfect for videos, podcasts, and creative projects.",
    price: 4500, // Price in LKR
    thumbnail: "/placeholder.svg",
    category: "Music",
    tags: ["ambient", "music", "royalty-free"],
    creatorId: 4,
    rating: 4.6,
    reviewCount: 24,
    featured: false
  },
  {
    id: 5,
    title: "Essential Stock Photo Pack",
    slug: "essential-stock-photo-pack",
    description: "100+ high-quality stock photos covering business, nature, and lifestyle themes.",
    price: 7800, // Price in LKR
    thumbnail: "/placeholder.svg",
    category: "Photography",
    tags: ["stock photos", "business", "lifestyle"],
    creatorId: 5,
    rating: 4.8,
    reviewCount: 41,
    featured: true
  },
  {
    id: 6,
    title: "3D Character Models for Game Development",
    slug: "3d-character-models",
    description: "Set of 5 fully rigged low-poly character models ready for game development.",
    price: 9000, // Price in LKR
    thumbnail: "/placeholder.svg",
    category: "3D Models",
    tags: ["3d", "game development", "characters"],
    creatorId: 6,
    rating: 4.4,
    reviewCount: 16,
    featured: false
  },
  {
    id: 7,
    title: "Personal Finance E-book",
    slug: "personal-finance-ebook",
    description: "Comprehensive guide to personal finance, savings strategies, and investment fundamentals.",
    price: 2500, // Price in LKR
    thumbnail: "/placeholder.svg",
    category: "E-books",
    tags: ["finance", "personal development", "investment"],
    creatorId: 7,
    rating: 4.5,
    reviewCount: 28,
    featured: false
  },
  {
    id: 8,
    title: "Social Media Marketing Video Tutorial Series",
    slug: "social-media-marketing-tutorials",
    description: "Step-by-step video tutorials on how to create effective social media marketing campaigns.",
    price: 8500, // Price in LKR
    thumbnail: "/placeholder.svg",
    category: "Video Content",
    tags: ["marketing", "social media", "tutorial"],
    creatorId: 8,
    rating: 4.7,
    reviewCount: 36,
    featured: true
  }
];

// Mock Users
export const USERS = [
  {
    id: 1,
    name: "Ajith Fernando",
    username: "ajithcreatives",
    avatar: "/placeholder.svg",
    bio: "Digital artist specializing in landscape and conceptual art",
    isAdmin: true
  },
  {
    id: 2,
    name: "Priya Sharma",
    username: "priyabusiness",
    avatar: "/placeholder.svg",
    bio: "Business consultant and template designer",
    isAdmin: false
  }
];

// Mock Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    content: "Create & Trade has transformed how I sell my digital art. The platform is intuitive and the community is incredibly supportive.",
    author: "Nimal Perera",
    role: "Digital Artist",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    content: "I've been able to reach so many more customers through Create & Trade than I ever could on my own. The sales tools are fantastic!",
    author: "Chamari Silva",
    role: "E-book Author",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    content: "As someone who creates educational content, I appreciate how Create & Trade makes it easy for me to showcase my courses to interested learners.",
    author: "Ashan Jayawardena",
    role: "Course Creator",
    avatar: "/placeholder.svg"
  }
];
