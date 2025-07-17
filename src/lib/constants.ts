// Contact Information
export const CONTACT_INFO = {
  phone: "(555) 123-4567",
  email: "info@prettytips.com",
  address: {
    street: "123 Beauty Lane",
    city: "City",
    state: "State",
    zip: "12345",
    full: "123 Beauty Lane, City, State 12345",
  },
  social: {
    instagram: "#",
    facebook: "#",
  },
};

// Business Hours
export const BUSINESS_HOURS = {
  monday: "9:00 AM - 7:00 PM",
  tuesday: "9:00 AM - 7:00 PM",
  wednesday: "9:00 AM - 7:00 PM",
  thursday: "9:00 AM - 7:00 PM",
  friday: "9:00 AM - 7:00 PM",
  saturday: "9:00 AM - 6:00 PM",
  sunday: "10:00 AM - 5:00 PM",
};

// Navigation Items
export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Book Now", href: "/booking", isButton: true },
];

// Services Data
export const SERVICES = [
  {
    category: "Manicure",
    items: [
      {
        name: "Classic Manicure",
        price: "$25",
        duration: "45 min",
        description:
          "Traditional nail care with cuticle care, shaping, and polish application.",
      },
      {
        name: "Gel Manicure",
        price: "$35",
        duration: "60 min",
        description:
          "Long-lasting gel polish that maintains shine for up to 3 weeks.",
      },
      {
        name: "French Manicure",
        price: "$30",
        duration: "50 min",
        description:
          "Elegant classic French tips with natural or colored base.",
      },
    ],
  },
  {
    category: "Pedicure",
    items: [
      {
        name: "Classic Pedicure",
        price: "$40",
        duration: "60 min",
        description: "Relaxing foot treatment with exfoliation and massage.",
      },
      {
        name: "Spa Pedicure",
        price: "$55",
        duration: "75 min",
        description:
          "Luxurious treatment with extended massage and premium products.",
      },
      {
        name: "Gel Pedicure",
        price: "$50",
        duration: "70 min",
        description: "Long-lasting gel polish for your toes.",
      },
    ],
  },
  {
    category: "Extensions & Art",
    items: [
      {
        name: "Gel Extensions",
        price: "$55",
        duration: "90 min",
        description: "Professional nail extensions for length and strength.",
      },
      {
        name: "Nail Art",
        price: "From $15",
        duration: "30-60 min",
        description: "Custom designs and artistic decorations.",
      },
      {
        name: "Nail Repair",
        price: "$15",
        duration: "30 min",
        description: "Fix broken or damaged nails.",
      },
    ],
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    review:
      "Sandali is absolutely amazing! Her attention to detail is incredible, and my nails always look perfect. The spa is so clean and relaxing.",
    rating: 5,
    service: "Gel Manicure",
  },
  {
    name: "Emily Chen",
    review:
      "I've been coming here for over a year and I'm never disappointed. The nail art designs are stunning and last for weeks!",
    rating: 5,
    service: "Nail Art",
  },
  {
    name: "Maria Rodriguez",
    review:
      "Best pedicure I've ever had! Sandali is so professional and the atmosphere is perfect for relaxation. Highly recommend!",
    rating: 5,
    service: "Spa Pedicure",
  },
  {
    name: "Jessica Park",
    review:
      "The gel extensions look so natural and beautiful. Sandali really knows her craft. I get compliments on my nails everywhere I go!",
    rating: 5,
    service: "Gel Extensions",
  },
];
