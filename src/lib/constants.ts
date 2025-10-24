// Contact Information
export const CONTACT_INFO = {
  phone: "076-2458004",
  email: "info@prettytips.lk",
  address: {
    street: "",
    city: "Sri Lanka",
    state: "",
    zip: "",
    full: "Kadawatha Road, Wennappuwa, Sri Lanka",
    mapUrl:
      "https://maps.apple.com/place?address=Kadawatha%20Road,%20Sri%20Lanka&coordinate=7.335300,79.841600&name=Kadawatha%20Road&map=explore",
    lat: 7.3353,
    lng: 79.8416,
  },
  social: {
    instagram: "prettytips.lk",
    facebook: "Pretty tips by Sandali",
    tiktokUrl: "https://www.tiktok.com/@prettytips.lk?lang=en-GB",
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

// Navigation Items - Simplified for initial launch
export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Book Now", href: "/booking", isButton: true },
];

// Services Data - From Pretty Tips by Sandali Price List
export const SERVICES = [
  {
    category: "Full Set",
    items: [
      {
        name: "Normal Color",
        price: "Rs.900.00",
        duration: "90 min",
        description: "Complete nail set with normal color polish application.",
      },
      {
        name: "Gel Full Set",
        price: "Rs.4100.00",
        duration: "120 min",
        description: "Professional gel full set with long-lasting finish.",
      },
      {
        name: "Gel-X Full Set",
        price: "Rs.3000.00",
        duration: "120 min",
        description: "Modern Gel-X extension system for natural-looking nails.",
      },
      {
        name: "Gel Color",
        price: "Rs.1000.00",
        duration: "60 min",
        description: "Gel color application for vibrant, long-lasting nails.",
      },
      {
        name: "Soak-Off",
        price: "Rs.1200.00",
        duration: "45 min",
        description: "Safe and gentle removal of gel polish or extensions.",
      },
      {
        name: "Refill",
        price: "Rs.2000.00",
        duration: "90 min",
        description: "Maintenance and refill for existing nail extensions.",
      },
    ],
  },
  {
    category: "Add-ons",
    items: [
      {
        name: "Charms",
        price: "Rs.500.00",
        duration: "15 min",
        description: "Beautiful nail charms for added elegance.",
      },
      {
        name: "Glitter",
        price: "Rs.550.00",
        duration: "15 min",
        description: "Sparkling glitter finish for glamorous nails.",
      },
      {
        name: "Chrome",
        price: "Rs.450.00",
        duration: "20 min",
        description: "Mirror-like chrome finish for a modern look.",
      },
      {
        name: "3D Nail Art",
        price: "Rs.650.00",
        duration: "30 min",
        description: "Intricate 3D designs for unique nail art.",
      },
    ],
  },
  {
    category: "Pedi & Mani",
    items: [
      {
        name: "Pedicure",
        price: "Rs.1800.00",
        duration: "60 min",
        description: "Complete foot care with relaxing treatment.",
      },
      {
        name: "Pedicure with Gel Color",
        price: "Rs.2800.00",
        duration: "75 min",
        description: "Pedicure service with long-lasting gel color.",
      },
      {
        name: "Pedicure with French Art",
        price: "Rs.3250.00",
        duration: "90 min",
        description: "Classic pedicure with elegant French nail art.",
      },
      {
        name: "Manicure",
        price: "Rs.1650.00",
        duration: "45 min",
        description: "Professional hand care and nail shaping.",
      },
      {
        name: "Manicure with Gel Color",
        price: "Rs.2650.00",
        duration: "60 min",
        description: "Complete manicure with gel color application.",
      },
      {
        name: "Manicure with French Art",
        price: "Rs.3100.00",
        duration: "75 min",
        description: "Manicure service with classic French nail art.",
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

// Brand and external links
export const BRAND = {
  name: "Pretty Tips by Sandali",
};

export const WHATSAPP = {
  baseUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_URL ||
    "https://wa.me/94762458004",
  buildMessageLink: (message?: string) => {
    const url = new URL(
      process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_URL ||
        "https://wa.me/94762458004"
    );
    if (message && message.trim()) {
      // For wa.me links text must be added as query param
      // https://wa.me/<number>?text=<encoded_message>
      url.searchParams.set("text", message);
    }
    return url.toString();
  },
  buildServiceMessageLink: (serviceName?: string) => {
    const msg = serviceName
      ? `Hello, I'd like to book an appointment for: ${serviceName}.`
      : "Hello, I'd like to book an appointment.";
    return WHATSAPP.buildMessageLink(msg);
  },
};
