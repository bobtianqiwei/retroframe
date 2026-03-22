// situated-agents-paper.js developed by Bob Tianqi Wei
module.exports = {
  slug: "situated-agents-paper",
  title: "Situated Evaluation for Agentic Research Systems",
  type: "publication",
  meta: "Publication / CHI 2026",
  date: "2026",
  summary:
    "A conference paper on evaluating agentic research systems with task context, human oversight, and longitudinal evidence.",
  thumbnail: "assets/images/paper-stack.jpg",
  thumbnailAlt: "Situated Evaluation for Agentic Research Systems",
  featured: true,
  selected: true,
  featuredOrder: 2,
  selectedOrder: 2,
  publication: {
    venue: "CHI 2026",
    year: "2026",
    authors: "Jianyu Chen, Mira Patel, Evan Brooks, and Lina Zhao",
    doi: "10.1145/0000000.0000000",
    citation:
      "Chen, J., Patel, M., Brooks, E., and Zhao, L. Situated Evaluation for Agentic Research Systems. CHI 2026.",
    abstract:
      "This paper argues that agentic systems should be evaluated with attention to task context, human oversight, and repeated use over time rather than only isolated benchmark scores."
  },
  page: {
    headline:
      "A publication page format for explaining a research question, method, and contribution without feeling overly formal.",
    focus:
      "Evaluation methods, human-AI interaction, and empirical research",
    stack: "Mixed methods, benchmark design, observational studies",
    role: "First author",
    collaborators: "Example University HCI Group",
    quickLinks: [
      { label: "Paper PDF", href: "https://example.com/paper" }
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This publication asks how agentic systems should be assessed when they are used inside real research workflows rather than short isolated tasks.",
          "The proposed framework combines interaction traces, qualitative review, and longitudinal task evidence to better capture practical utility."
        ]
      },
      {
        title: "Why Include Publications",
        paragraphs: [
          "A researcher portfolio often needs papers and systems to live side by side. This template supports both without making one feel secondary to the other.",
          "The page structure stays simple, but it still gives room for an abstract, citation, DOI, and supporting links."
        ],
        image: {
          src: "assets/images/paper-stack.jpg",
          alt: "Publication illustration",
          caption: "Publication pages should prioritize clear metadata and concise explanation."
        }
      }
    ]
  }
};
