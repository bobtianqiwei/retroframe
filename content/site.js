// site.js developed by Bob Tianqi Wei
module.exports = {
  site: {
    title: "Retroframe",
    metaTitle: "Retroframe | Classic Portfolio Template",
    metaDescription:
      "A classic portfolio template with a clean content system for software engineers, creative technologists, and digital makers.",
    footerLabel: "This page uses the Retroframe template by",
    footerLinkLabel: "github@bobtianqiwei",
    footerLinkHref: "https://github.com/bobtianqiwei/retroframe"
  },
  topbar: {
    prefix: "Template demo time:"
  },
  banner: {
    title: "Retroframe",
    subtitle:
      "A classic portfolio template for software engineers, creative technologists, and product builders."
  },
  navLinks: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "index.html#profile" },
    { label: "Works", href: "index.html#projects" },
    { label: "Resume", href: "https://example.com/resume" },
    { label: "GitHub", href: "https://github.com/example" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/example/" }
  ],
  newsItems: [
    "Replace this ticker in content/site.js with your own updates, release notes, or availability status.",
    "Retroframe keeps site-wide content in one file and project pages in one-folder-per-project data files.",
    "This demo is intentionally generic so the repository can be published as a reusable template."
  ],
  profile: {
    image: "assets/images/profile/demo-avatar.svg",
    imageAlt: "Retroframe demo profile avatar",
    name: "Alex Rowan",
    focus:
      "Frontend engineering, product design systems, creative tooling, and AI-assisted interfaces",
    availability: "Available for selected freelance and product collaborations"
  },
  quickLinks: [
    { label: "Resume PDF", href: "https://example.com/resume" },
    { label: "GitHub Profile", href: "https://github.com/example" },
    {
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/example/"
    },
    { label: "Email", href: "mailto:hello@example.com" }
  ],
  contact: [
    { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
    { label: "Website", value: "example.com", href: "https://example.com" },
    { label: "GitHub", value: "/example", href: "https://github.com/example" },
    {
      label: "LinkedIn",
      value: "/in/example",
      href: "https://www.linkedin.com/in/example/"
    }
  ],
  introCode: [
    'def hero_section():',
    '    title = "Building Useful Digital Products With Character"',
    '    author = "Alex Rowan"',
    '    description = """',
    '    Frontend engineer focused on product UI, creative tooling, and calm AI-native workflows.',
    '    I build web experiences that feel clear, reliable, and specific.',
    '    The goal is simple: make useful software feel memorable.',
    '    """',
    '    return title, author, description'
  ],
  trustedBy: [
    {
      name: "Northstar Lab",
      href: "https://example.com",
      image: "assets/images/logos/northstar-lab.svg"
    },
    {
      name: "Signal Foundry",
      href: "https://example.com",
      image: "assets/images/logos/signal-foundry.svg"
    },
    {
      name: "Field Notes Studio",
      href: "https://example.com",
      image: "assets/images/logos/field-notes-studio.svg"
    },
    {
      name: "Relay Systems",
      href: "https://example.com",
      image: "assets/images/logos/relay-systems.svg"
    },
    {
      name: "June Office",
      href: "https://example.com",
      image: "assets/images/logos/june-office.svg"
    },
    {
      name: "Paper Grid",
      href: "https://example.com",
      image: "assets/images/logos/paper-grid.svg"
    }
  ]
};
