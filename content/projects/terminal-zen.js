// terminal-zen.js developed by Bob Tianqi Wei
module.exports = {
  slug: "quiet-shell",
  title: "Quiet Shell",
  meta: "Research engineering / developer tool",
  date: "2026",
  summary:
    "A terminal tool that turns noisy command-line work into a calmer, more readable workflow for research and engineering tasks.",
  thumbnail: "assets/images/retro-lab-desk.jpg",
  thumbnailAlt: "Quiet Shell",
  featured: false,
  selected: true,
  featuredOrder: 99,
  selectedOrder: 4,
  page: {
    headline:
      "A breathing guide that keeps the terminal aesthetic intact while making room for pause and rhythm inside a work session.",
    focus: "CLI interaction design, Python tooling, and conceptual product framing",
    stack: "Python, terminal UI, zero-dependency tooling",
    quickLinks: [
      { label: "Project link", href: "https://example.com" }
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Quiet Shell begins with a simple observation: engineers spend long hours in terminal windows that are efficient but often difficult to parse when tasks pile up.",
          "Instead of replacing the terminal, the tool adds lightweight structure so long-running commands, logs, and checkpoints stay readable."
        ]
      },
      {
        title: "Why It Works In This Template",
        paragraphs: [
          "This project demonstrates how Retroframe handles engineering tools that need more explanation than a single screenshot.",
          "It is a strong default for developer tools, internal systems, and experiments that need concise but credible documentation."
        ],
        image: {
          src: "assets/images/retro-lab-desk.jpg",
          alt: "Quiet Shell screenshot",
          caption: "Retroframe works well for tools, prototypes, and research projects with a strong point of view."
        }
      }
    ]
  }
};
