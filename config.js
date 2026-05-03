const PORTFOLIO = {

  // ─── PERSONAL INFO ────────────────────────────────────────────────
  name: "Gokul",
  nameAlt: "கோகுல்",
  profession: "Aspiring Entreprenuer",
  tagline: "I craft experiences that linger.",
  bio: `Aspiring entrepreneur and builder. I have zero interest in "ticking boxes"—I’m here to take full-stack ownership of ideas and turn them into industrial reality. I believe every project should be as bold as it is beautiful. This is a living archive of my work before it becomes an industry.\n\nDocumenting my work`,
  avatar: "utils/myimage.png", // Optional: URL to your photo. Leave "" for initials avatar.

  // ─── SOCIAL & CONTACT ─────────────────────────────────────────────
  contact: {
    email: "gokul@thunivin.com",
    github: "https://github.com/goku03l",
    linkedin: "https://www.linkedin.com/in/goku03l",
    instagram: "",
    twitter: "",       // Leave "" to hide
  },

  // ─── SKILLS ───────────────────────────────────────────────────────
  skills: [
    { category: "Engineering",      items: ["Embedded Systems", "Automobile Engineering", "Vehice Dynamics"] },
    { category: "Tech",        items: ["AI/ML","GenAI","PLM","DS"] },
    
  ],

  // ─── PROJECTS ─────────────────────────────────────────────────────
  // featured: true   → pinned at top with a ★ badge (your "must-see" work)
  // featured: false  → listed below featured projects
  // tags             → used for audience filtering
  // youtube          → paste YouTube URL or YouTube video ID, leave "" if none
  // image            → URL to project thumbnail, leave "" for gradient placeholder
  // link             → external project URL, leave "" to hide button

  projects: [
    {
      title: "Prompt to CAD",
      description: "Prompt to 3D 👓.\n\nGet ready to ditch the manual sketches while IntelliCAD is here! 🚀✨\nWhy click and drag for hours when you can just talk to your design? I’ve built a tool that turns your \"what if\" into a 3D reality.\n\nThe IntelliCAD Vibe:\n\n💬 Prompt to CAD: Just type it, and watch the geometry appear.\n\n🤖 Chatbot Collab: Discuss your design ideas like you’re talking to a peer.\n\n📥 Download & Go: Export your files and drop them straight into your pro CAD tools.\n\nDesign at the speed of thought. Check out the demo below and let’s build something cool! 🛠️🔥",
      tags: ["GenAI","Industry Problem"],
      featured: true,
      youtube: "https://youtu.be/56AVSxNFZ3c?si=X4x83NZvaoZ85_z_",
      image: "",
      link: "https://intellicad-ap6znq2zrc7bw7zzxddkru.streamlit.app/",
    },
    {
      title: "DrawingDIFF: See the Shift. Skip the Squint.",
      description: "DrawingDIFF: See the Shift. Skip the Squint.\n\n" +
"Stop playing \"Spot the Difference\" with complex blueprints. DrawingDIFF instantly overlays your engineering revisions, highlighting every moved line and modified dimension in high-contrast detail.\n\n" +
"Pixel-Perfect Comparison: Instantly catch what the human eye misses.\n" +
"Auto-Generated Audit Trails: Every change is automatically tabularized into a clean, exportable report.\n" +
"Engineering Grade Precision: Built for the high-stakes world where a millimeter matters.\n\n" +
"Upload. Compare. Build with confidence.",
      tags: ["GenAI", "Industry Problem"],
      featured: true,
      youtube: "dQw4w9WgXcQ",   // You can also paste just the video ID
      image: "",
      link: "",
    },
    {
      title: "Tamil Nadu Political Sentiment Dashboard",
      description: "This dashboard presents an analysis of political sentiment in Tamil Nadu based on data collected from Twitter/X. The dataset reflects recent public discourse around elections and political activity, offering insights into how people are reacting online. While it provides a useful snapshot, it is important to note that social media data may include inherent platform and sampling biases.",
      tags: [ "Experimental"],
      featured: false,
      youtube: "",
      image: "utils/sm.png",
      link: "https://example.com",
    },

  ],

  // ─── YOUTUBE VIDEOS (dedicated section) ───────────────────────────
  // These appear in the standalone "Videos" section.
  // Paste the full YouTube URL or just the video ID.

  videos: [
    {
      title: "Rick Roll 1",
      description: "You are being RickRoled",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Rick Roll 2",
      description: "You are being RickRoled",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Rick Roll 3",
      description: "You are being RickRoled",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],

  // ─── BLOG POSTS ───────────────────────────────────────────────────
  // link: URL to the full article (Medium, Substack, your own blog, etc.)
  // date: written as a string, e.g. "May 2025"

  blogs: [
    {
      title: "Danke SEB!",
      excerpt: "Engineanalysing SEBs carrear",
      date: "July 30, 2022",
      link: "https://explaining-engineering-f1.blogspot.com/2022/07/danke-seb.html",
      tags: ["Formula 1"],
    },
    {
      title: "Aerodynamics are for winner",
      excerpt: "Victory isn't just about horsepower; it’s about how you carve through the air. In this post, we break down the invisible forces that separate the podium finishers from the rest of the pack. From active aero to the ground effect, learn why mastering the wind is the ultimate unfair advantage in modern motorsport",
      date: "September 6, 2020",
      link: "https://explaining-engineering-f1.blogspot.com/2020/09/aerodynamics-are-for-winners.html",
      tags: ["Formula 1", "Explaining Engineering"],
    },
    {
      title: "Tire Dynamics - The Dark Art",
      excerpt: "Forget everything you know about friction. In the realm of high-performance driving, the contact patch is a chaotic battlefield of heat, chemical bonding, and mechanical interlocking. This post pulls back the curtain on 'The Dark Art' exploring how slip angles, load sensitivity, and hysteresis determine whether a car sticks to the apex or slides into the barriers. Master the rubber, master the race",
      date: "August 23, 2020",
      link: "https://explaining-engineering-f1.blogspot.com/2020/08/tyre-dynamics-dark-art.html",
      tags: ["Automobile", "Explaining Engineering"],
    },
  ],

};
