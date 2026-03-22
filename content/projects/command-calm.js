// command-calm.js developed by Bob Tianqi Wei
module.exports = {
  slug: "command-calm",
  title: "Command Calm",
  type: "project",
  meta: "Research engineering / developer tool",
  date: "2026",
  summary:
    "A terminal tool that makes long-running research and engineering tasks easier to monitor and interpret.",
  thumbnail: "assets/images/retro-lab-desk.jpg",
  thumbnailAlt: "Command Calm",
  featured: false,
  selected: true,
  featuredOrder: 99,
  selectedOrder: 4,
  page: {
    headline:
      "A lightweight terminal interface that reduces log noise and makes iterative technical work easier to follow.",
    focus: "CLI interaction design, developer tooling, and workflow clarity",
    stack: "Python, terminal UI, lightweight automation",
    role: "Designer and developer",
    collaborators: "Independent project",
    quickLinks: [
      { label: "Project link", href: "https://example.com" }
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Command Calm starts from a simple observation: terminal workflows are powerful, but long-running tasks often produce output that is difficult to scan and reason about.",
          "The project adds lightweight structure so logs, task progress, and checkpoints remain readable during research and engineering work."
        ]
      },
      {
        title: "Why It Works In This Template",
        paragraphs: [
          "This example shows how Retroframe can present a practical developer tool with enough context to feel real, without requiring a full-length case study.",
          "It is a useful default for internal tools, research systems, and technical prototypes."
        ],
        image: {
          src: "assets/images/retro-lab-desk.jpg",
          alt: "Command Calm screenshot",
          caption: "Tools pages benefit from a compact summary, one image, and a few key sections."
        }
      }
    ]
  }
};
