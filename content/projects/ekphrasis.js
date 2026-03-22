// ekphrasis.js developed by Bob Tianqi Wei
module.exports = {
  slug: "studio-notes",
  title: "Studio Notes",
  meta: "Research prototype / learning system",
  date: "2025",
  summary:
    "A visual learning tool that helps design students compare drafts, interpret feedback, and build stronger critique vocabulary.",
  thumbnail: "assets/images/ekphrasis.jpg",
  thumbnailAlt: "Studio Notes",
  featured: true,
  selected: true,
  featuredOrder: 2,
  selectedOrder: 2,
  page: {
    headline:
      "A prototype for making design critique easier to understand, compare, and learn from over time.",
    focus:
      "Human-computer interaction, creative learning, and guided critique",
    stack: "Prototype design, frontend systems, AI-assisted feedback",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Studio Notes explores a familiar problem in design education: learners often receive feedback that is meaningful but hard to operationalize.",
          "The project turns critique into something more comparative and concrete, so people can revise with better confidence."
        ]
      },
      {
        title: "Interaction Logic",
        paragraphs: [
          "The system does not frame AI as the critic. Instead, it acts as a mediation layer that organizes comparisons, highlights patterns, and supports reflection.",
          "Retroframe works well for this kind of project because the page can carry both conceptual writing and lightweight visual proof."
        ],
        image: {
          src: "assets/images/ekphrasis.jpg",
          alt: "Studio Notes project image",
          caption: "The template supports straightforward visual documentation blocks."
        }
      }
    ]
  }
};
