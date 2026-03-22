// artifactor.js developed by Bob Tianqi Wei
module.exports = {
  slug: "situated-evaluation-paper",
  title: "Situated Evaluation for Human-AI Research",
  meta: "Publication / CHI 2026",
  date: "2026",
  summary:
    "A CHI-style paper on evaluating human-AI systems with task context, user intent, and longitudinal evidence instead of one-shot benchmarks alone.",
  thumbnail: "assets/images/paper-stack.jpg",
  thumbnailAlt: "Situated Evaluation paper cover image",
  featured: true,
  selected: true,
  featuredOrder: 3,
  selectedOrder: 3,
  page: {
    headline:
      "A publication example for explaining research questions, method design, and key findings in a compact portfolio format.",
    focus:
      "Evaluation methods, human-AI interaction, and empirical research",
    stack: "Mixed methods, benchmark design, user studies",
    quickLinks: [
      { label: "Paper PDF", href: "https://example.com/paper" }
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This publication argues that many human-AI systems are evaluated too narrowly. Reported benchmark gains often miss how people actually use these systems in practice.",
          "The paper proposes a situated evaluation framework that combines task traces, structured annotation, and user reflection over time."
        ]
      },
      {
        title: "Why Include Publications",
        paragraphs: [
          "A researcher portfolio often needs both systems work and publications. This template should support both without making papers feel like second-class content.",
          "Using the same layout for projects and publications keeps the site cohesive while still giving each item enough room."
        ],
        image: {
          src: "assets/images/paper-stack.jpg",
          alt: "Situated Evaluation paper illustration",
          caption: "Publications can be presented with the same structure as projects."
        }
      }
    ]
  }
};
