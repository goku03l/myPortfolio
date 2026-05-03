const PORTFOLIO = {

  // ─── PERSONAL INFO ────────────────────────────────────────────────
  name: "Gokul Kumar",
  profession: "Aspiring Entreprenuer",
  tagline: "I craft experiences that linger.",
  bio: `Aspiring entrepreneur and builder. I have zero interest in "ticking boxes"—I’m here to take full-stack ownership of ideas and turn them into industrial reality. I believe every project should be as bold as it is beautiful. This is a living archive of my work before it becomes an industry.\n\nDocumenting my work`,
  avatar: "utils/myimage.png", // Optional: URL to your photo. Leave "" for initials avatar.

  // ─── SOCIAL & CONTACT ─────────────────────────────────────────────
  contact: {
    email: "kgokul371c@gmail.com",
    github: "https://github.com/goku03l",
    linkedin: "https://www.linkedin.com/in/goku03l",
    instagram: "https://instagram.com/goku03l",
    twitter: "",       // Leave "" to hide
  },

  // ─── SKILLS ───────────────────────────────────────────────────────
  skills: [
    { category: "Design",      items: ["Brand Identity", "UI/UX", "Motion Design", "Typography", "Art Direction"] },
    { category: "Tech",        items: ["AI/ML","GenAI","PLM"] },
    
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
      title: "DrawingDIFF",
      description: "A 12-minute film tracing the journey of a family recipe across four generations. Shot on 16mm, edited in a week.",
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
      image: "",
      link: "https://example.com",
    },
    {
      title: "Campaign — Nomad Collective",
      description: "Social campaign for a travel brand targeting Gen Z adventurers. 3.2M organic impressions in 6 weeks.",
      tags: ["Campaign", "Social"],
      featured: false,
      youtube: "",
      image: "",
      link: "",
    },
  ],

  // ─── YOUTUBE VIDEOS (dedicated section) ───────────────────────────
  // These appear in the standalone "Videos" section.
  // Paste the full YouTube URL or just the video ID.

  videos: [
    {
      title: "Behind the Solstice Brand",
      description: "A 5-minute process video walking through the full brand development from first sketch to final delivery.",
      youtube: "dQw4w9WgXcQ",
    },
    {
      title: "My Creative Process",
      description: "How I go from a blank page to a finished concept — tools, rituals, and rabbit holes included.",
      youtube: "dQw4w9WgXcQ",
    },
    {
      title: "Filmmaking on a Budget",
      description: "Everything I wish I knew before shooting Heirloom. Gear, mistakes, and what actually matters.",
      youtube: "dQw4w9WgXcQ",
    },
  ],

  // ─── BLOG POSTS ───────────────────────────────────────────────────
  // link: URL to the full article (Medium, Substack, your own blog, etc.)
  // date: written as a string, e.g. "May 2025"

  blogs: [
    {
      title: "Why I Still Shoot on Film in 2025",
      excerpt: "Digital is efficient. Film is honest. Here's what three years of analog photography taught me about slowing down and seeing clearly.",
      date: "April 2025",
      link: "https://example.com/blog/film",
      tags: ["Photography", "Reflection"],
    },
    {
      title: "The Rebrand That Almost Broke Me",
      excerpt: "A brutally honest account of taking on a project three sizes too big — what I learned, what I'd do differently, and why I'd do it again.",
      date: "February 2025",
      link: "https://example.com/blog/rebrand",
      tags: ["Branding", "Lessons"],
    },
    {
      title: "Designing for Feeling, Not Function",
      excerpt: "Most design education teaches you to solve problems. Nobody teaches you to make someone feel something. Here's how I think about emotion-first design.",
      date: "December 2024",
      link: "https://example.com/blog/emotion",
      tags: ["Design", "Philosophy"],
    },
  ],

};
