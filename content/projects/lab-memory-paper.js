// lab-memory-paper.js developed by Bob Tianqi Wei
module.exports = {
  slug: "lab-memory-paper",
  title: "Retrieval as Memory Support for Research Teams",
  type: "publication",
  meta: "Publication / CSCW 2025",
  date: "2025",
  summary:
    "A paper on how retrieval interfaces help research teams recover context, revisit decisions, and reduce duplicated work.",
  thumbnail: "assets/images/open-book.jpg",
  thumbnailAlt: "Retrieval as Memory Support for Research Teams",
  featured: true,
  selected: true,
  featuredOrder: 3,
  selectedOrder: 3,
  publication: {
    venue: "CSCW 2025",
    year: "2025",
    authors: "Jianyu Chen, Priya Narang, and Daniel Wu",
    doi: "10.1145/0000000.0000001",
    citation:
      "Chen, J., Narang, P., and Wu, D. Retrieval as Memory Support for Research Teams. CSCW 2025.",
    abstract:
      "This article studies how retrieval interfaces help research teams recover context, revisit earlier experiments, and maintain continuity across long-running technical work."
  },
  page: {
    headline:
      "A journal-style publication entry focused on knowledge retrieval, research memory, and everyday lab workflow.",
    focus:
      "Information retrieval, knowledge work, and human-computer interaction",
    stack: "Interviews, prototype evaluation, workflow analysis",
    role: "Lead author",
    collaborators: "Knowledge Interfaces Group",
    quickLinks: [
      { label: "Read abstract", href: "https://example.com/publication" }
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Research teams often forget why a decision was made, where a key note lives, or whether an experiment was already attempted. This paper frames that problem as one of memory support.",
          "The work combines interviews, task analysis, and prototype evaluation to show how retrieval systems can support continuity across long-running projects."
        ]
      },
      {
        title: "Template Fit",
        paragraphs: [
          "This example demonstrates how Retroframe can support academic publication entries without requiring a separate publication engine.",
          "A few well-structured fields are enough to make a paper page feel complete and useful."
        ],
        image: {
          src: "assets/images/open-book.jpg",
          alt: "Publication preview image",
          caption: "A concise paper page can still feel substantial when the metadata is clear."
        }
      }
    ]
  }
};
