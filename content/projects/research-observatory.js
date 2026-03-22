// research-observatory.js developed by Bob Tianqi Wei
module.exports = {
  slug: "research-observatory",
  title: "Research Observatory",
  type: "project",
  meta: "Research platform / lab infrastructure",
  date: "2026",
  summary:
    "A shared interface for tracking experiments, datasets, model versions, and open questions across a research group.",
  thumbnail: "assets/images/research-engineer-desk.jpg",
  thumbnailAlt: "Research Observatory",
  featured: true,
  selected: true,
  featuredOrder: 1,
  selectedOrder: 1,
  page: {
    headline:
      "A lab-facing workspace that makes technical progress, evidence, and research decisions easier to inspect.",
    focus:
      "Research infrastructure, developer tooling, and interface systems",
    stack: "React, TypeScript, experiment tracking, internal tools",
    role: "Research engineer and system designer",
    collaborators: "Example HCI and systems research group",
    quickLinks: [
      { label: "Live demo", href: "https://example.com" }
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Research Observatory is a template project for people who need to present serious technical work, not just polished screenshots.",
          "The interface brings together experiment status, notes, datasets, and implementation history so teams can understand what has been tried and what should happen next."
        ]
      },
      {
        title: "Why It Fits The Template",
        paragraphs: [
          "This example shows how Retroframe can support a realistic research engineering case study with enough room for context, process, and system design decisions.",
          "It stays compact, but it still feels credible because the content model supports roles, collaborators, methods, and links."
        ],
        image: {
          src: "assets/images/research-engineer-desk.jpg",
          alt: "Research Observatory interface inspiration",
          caption: "A strong project page should explain both the system and the research workflow around it."
        }
      }
    ]
  }
};
