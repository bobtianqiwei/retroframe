// anything.js developed by Bob Tianqi Wei
module.exports = {
  slug: "systems-atlas",
  title: "Systems Atlas",
  meta: "Research platform / lab infrastructure",
  date: "2026",
  summary:
    "A lab-facing workspace for organizing experiments, datasets, implementation notes, and evaluation status in one readable interface.",
  thumbnail: "assets/images/research-engineer-desk.jpg",
  thumbnailAlt: "Systems Atlas",
  featured: true,
  selected: true,
  featuredOrder: 1,
  selectedOrder: 1,
  page: {
    headline:
      "A unified workspace for research groups that need to keep prototypes, experiments, and evidence connected.",
    focus:
      "Research infrastructure, developer tooling, and interface systems",
    stack: "React, TypeScript, retrieval systems, data tooling",
    quickLinks: [
      { label: "Live demo", href: "https://example.com" }
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Systems Atlas is written like a realistic research engineering project. It combines experiment tracking, paper-oriented note taking, and implementation detail in one interface.",
          "The main goal is clarity. Experiments, implementation notes, and open questions should sit side by side without forcing readers into a long formal report."
        ]
      },
      {
        title: "Why It Fits The Template",
        paragraphs: [
          "This example shows how Retroframe can support a more realistic professor or research engineer site instead of only a startup product showcase.",
          "The layout stays retro and opinionated, but the content model remains simple: one file, one thumbnail, and a few concise sections."
        ],
        image: {
          src: "assets/images/research-engineer-desk.jpg",
          alt: "Systems Atlas interface inspiration",
          caption: "Use one thumbnail and a few short sections to explain a system clearly."
        }
      }
    ]
  }
};
