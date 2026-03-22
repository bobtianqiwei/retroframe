// sensor-atlas.js developed by Bob Tianqi Wei
module.exports = {
  slug: "sensor-atlas",
  title: "Sensor Atlas",
  type: "project",
  meta: "Research prototype / interactive system",
  date: "2025",
  summary:
    "A prototype interface for turning physical sensing input into structured visual feedback and experiment records.",
  thumbnail: "assets/images/retro-lab-desk.jpg",
  thumbnailAlt: "Sensor Atlas",
  featured: false,
  selected: true,
  featuredOrder: 100,
  selectedOrder: 5,
  page: {
    headline:
      "A research prototype page for experimental systems that combine sensing, visualization, and iterative testing.",
    focus: "Interactive systems, physical sensing, and experimental prototyping",
    stack: "Physical computing, interface prototyping, data visualization",
    role: "Prototype designer and builder",
    collaborators: "Interactive systems studio",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Sensor Atlas is a generic research prototype example. It shows how to present work that combines hardware, sensing, and interface experimentation.",
          "The page uses the built-in gallery slider so the template can support richer documentation when one image is not enough."
        ]
      },
      {
        title: "Gallery",
        paragraphs: [
          "If a project has multiple images, keep them in one section and let the slider handle the rest. That keeps the content files readable while still supporting richer documentation."
        ],
        gallery: [
          {
            src: "assets/images/retro-lab-desk.jpg",
            alt: "Sensor Atlas image 1"
          },
          {
            src: "assets/images/research-engineer-desk.jpg",
            alt: "Sensor Atlas image 2"
          },
          {
            src: "assets/images/open-book.jpg",
            alt: "Sensor Atlas image 3"
          }
        ]
      }
    ]
  }
};
