// Featured products for the homepage
export const featuredProducts = [
    {
      id: 1,
      title: "Flomindy",
      description: "App to improve cognitive performance and concentration through personalized exercises.",
      category: "Software",
      imageUrl: "/flomindy_home_.webp",
      slug: "flomindy"
    },
    {
      id: 2,
      title: "Super Flat Speakers",
      description: "Ultra-thin audio speakers with premium sound quality for a perfect listening experience.",
      category: "Audio",
      imageUrl: "/Super Flat Speaker_Home.webp",
      slug: "super-flat-speakers"
    },
    {
      id: 3,
      title: "Smart Looker",
      description: "Smart technology to monitor and manage your home with innovative and intuitive solutions.",
      category: "IoT",
      imageUrl: "/Smart_looker_home.webp",
      slug: "smart-looker"
    },
    {
      id: 4,
      title: "Smart Street Lamps",
      description: "Low-consumption urban lighting with motion sensors and remote control.",
      category: "Smart City",
      imageUrl: "/Smart Street lamps_home.webp",
      slug: "smart-street-lamps"
    }
  ];
  
  // Target segments for homepage
  export const targetSegments = [
    {
      id: 1,
      title: "For Users",
      description: "Discover our products designed to improve your daily life",
      imageUrl: "/users_home.webp",
      linkUrl: "/en/for-users"
    },
    {
      id: 2,
      title: "For Companies",
      description: "Advanced technological solutions for your business",
      imageUrl: "/Company_home.webp",
      linkUrl: "/en/for-companies"
    },
    {
      id: 3,
      title: "For Events",
      description: "Technical speeches and participation in fairs and events",
      imageUrl: "/AI_conference_Home.webp",
      linkUrl: "/en/for-events"
    }
  ];
  
  // Complete products
  export const allProducts = [
    // Includes featured products and adds others
    {
      id: 5,
      title: "Smart Trash Bins",
      description: "Innovations for intelligent urban waste management with analysis and optimization.",
      category: "Smart City",
      imageUrl: "/Smart Trash_home.webp",
      slug: "smart-trash-bins"
    },
    {
      id: 6,
      title: "Interactive Kiosks",
      description: "Autonomous and intuitive terminals for advanced digital interactions in public and commercial spaces.",
      category: "Display",
      imageUrl: "/Kiosk_Home_.webp",
      slug: "interactive-kiosks"
    },
  ];
  
  // Function to get all products
  export function getAllProducts() {
    return [...featuredProducts, ...allProducts.filter(p => !featuredProducts.some(fp => fp.id === p.id))];
  }
