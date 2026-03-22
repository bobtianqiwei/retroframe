// _template.js developed by Bob Tianqi Wei
module.exports = {
  slug: "new-project",
  title: "New Project",
  type: "project",
  meta: "Product category / project type",
  date: "2026",
  summary:
    "A short homepage summary that explains what the project is and why it matters.",
  thumbnail: "assets/images/projects/example-thumbnail.jpg",
  thumbnailAlt: "New Project thumbnail",
  featured: false,
  selected: true,
  featuredOrder: 99,
  selectedOrder: 99,
  publication: {
    venue: "",
    year: "",
    authors: "",
    doi: "",
    citation: "",
    abstract: ""
  },
  page: {
    headline:
      "A one-sentence project headline for the detail page header.",
    focus: "Main focus area, domain, or discipline",
    stack: "Main tools, technologies, or methods",
    role: "Your role on the project or paper",
    collaborators: "Collaborators, lab, or coauthors",
    quickLinks: [
      { label: "Live demo", href: "https://example.com" }
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Use short paragraphs here. The template is optimized for concise writing with a strong point of view.",
          "If the project needs more depth, add more sections instead of one oversized text block."
        ]
      },
      {
        title: "Visual Notes",
        paragraphs: [
          "Add one image or a gallery if the project benefits from more visual documentation."
        ],
        image: {
          src: "assets/images/projects/example-detail.jpg",
          alt: "Example project image",
          caption: "Optional caption text."
        }
      }
    ]
  }
};
