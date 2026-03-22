// ekphrasis.js developed by Bob Tianqi Wei
module.exports = {
  slug: "retrieval-memory-support",
  title: "Retrieval as Memory Support in Lab Work",
  meta: "Publication / CSCW journal article",
  date: "2025",
  summary:
    "A journal-style paper on how retrieval tools can help research teams revisit prior experiments, recover context, and reduce duplicated work.",
  thumbnail: "assets/images/open-book.jpg",
  thumbnailAlt: "Retrieval as Memory Support in Lab Work",
  featured: true,
  selected: true,
  featuredOrder: 2,
  selectedOrder: 2,
  page: {
    headline:
      "A publication example focused on knowledge retrieval, research memory, and the everyday workflow of technical teams.",
    focus:
      "Information retrieval, knowledge work, and human-computer interaction",
    stack: "Literature review, interviews, prototype evaluation",
    quickLinks: [
      { label: "Read abstract", href: "https://example.com/publication" }
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Research teams often forget why a past decision was made, which experiment already failed, or where a critical note lives. This paper studies that problem as a memory issue rather than a storage issue.",
          "It combines interviews, prototype probes, and task analysis to show how retrieval systems can support continuity across long-running technical work."
        ]
      },
      {
        title: "Template Fit",
        paragraphs: [
          "This example makes the template useful for faculty candidates, PhD students, research engineers, and applied scientists who need to present publications next to shipped systems.",
          "The same content structure can hold a paper summary, one representative image, and a few external links without needing a separate publication engine."
        ],
        image: {
          src: "assets/images/open-book.jpg",
          alt: "Retrieval as Memory Support paper image",
          caption: "A short paper entry can still feel substantial with a clear summary and one image."
        }
      }
    ]
  }
};
