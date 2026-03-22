// build.js developed by Bob Tianqi Wei
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const siteConfig = require(path.join(repoRoot, "content", "site.js"));
const projectsDir = path.join(repoRoot, "content", "projects");

function loadProjects() {
  return fs
    .readdirSync(projectsDir)
    .filter((fileName) => fileName.endsWith(".js") && !fileName.startsWith("_"))
    .sort()
    .map((fileName) => require(path.join(projectsDir, fileName)));
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeFile(relativePath, content) {
  const outputPath = path.join(repoRoot, relativePath);
  ensureDir(outputPath);
  fs.writeFileSync(outputPath, content);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getPrefix(relativePath) {
  const outputDir = path.dirname(path.join(repoRoot, relativePath));
  const relative = path.relative(outputDir, repoRoot).replace(/\\/g, "/");
  return relative || ".";
}

function resolveHref(relativePath, href) {
  if (/^(https?:|mailto:|#)/.test(href)) {
    return href;
  }

  const prefix = getPrefix(relativePath);
  return `${prefix}/${href}`.replace(/\/\.\//g, "/");
}

function resolveAsset(relativePath, assetPath) {
  const prefix = getPrefix(relativePath);
  return `${prefix}/${assetPath}`.replace(/\/\.\//g, "/");
}

function renderNav(relativePath) {
  return `<div class="nav">
${siteConfig.navLinks
  .map(
    (link) =>
      `  <a href="${escapeHtml(resolveHref(relativePath, link.href))}"${
        /^https?:/.test(link.href) ? ' target="_blank" rel="noreferrer"' : ""
      }>${escapeHtml(link.label)}</a>`
  )
  .join("\n")}
</div>`;
}

function renderTopbar() {
  return `    <div class="topbar">
      <span class="topbar-item"><a class="topbar-link" href="https://github.com/bobtianqiwei/retroframe" target="_blank" rel="noreferrer">Retroframe</a><span class="topbar-text">is built in San Francisco:</span><img class="topbar-icon" id="sf-weather-icon" src="https://cdn.jsdelivr.net/gh/basmilius/weather-icons/production/fill/all/partly-cloudy-day.svg" alt=""><span id="sf-status">loading...</span></span>
    </div>`;
}

function renderFooter(relativePath) {
  return `    <div class="footer">${escapeHtml(
    siteConfig.site.footerLabel
  )} <a href="${escapeHtml(
    resolveHref(relativePath, siteConfig.site.footerLinkHref)
  )}" target="_blank" rel="noreferrer">${escapeHtml(
    siteConfig.site.footerLinkLabel
  )}</a></div>`;
}

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
}

function renderList(items, className) {
  if (!Array.isArray(items) || !items.length) {
    return "";
  }

  return `<ul class="${escapeHtml(className)}">
${items.map((item) => `  <li>${escapeHtml(item)}</li>`).join("\n")}
</ul>`;
}

function renderIntroContent() {
  return `<div class="intro-copy">${renderParagraphs(siteConfig.introParagraphs || [])}</div>`;
}

function renderPublicationMeta(project) {
  if (project.type !== "publication" || !project.publication) {
    return "";
  }

  const publication = project.publication;

  return `<div class="publication-meta">
  ${publication.authors ? `<p><strong>Authors:</strong> ${escapeHtml(publication.authors)}</p>` : ""}
  ${publication.venue ? `<p><strong>Venue:</strong> ${escapeHtml(publication.venue)}</p>` : ""}
  ${publication.year ? `<p><strong>Year:</strong> ${escapeHtml(publication.year)}</p>` : ""}
  ${publication.doi ? `<p><strong>DOI:</strong> <a href="https://doi.org/${escapeHtml(publication.doi)}" target="_blank" rel="noreferrer">${escapeHtml(publication.doi)}</a></p>` : ""}
  ${publication.citation ? `<p><strong>Citation:</strong> ${escapeHtml(publication.citation)}</p>` : ""}
  ${publication.abstract ? `<p><strong>Abstract:</strong> ${escapeHtml(publication.abstract)}</p>` : ""}
</div>`;
}

function renderFigure(relativePath, image) {
  if (!image) {
    return "";
  }

  return `<figure class="project-figure">
  <img src="${escapeHtml(resolveAsset(relativePath, image.src))}" loading="lazy" alt="${escapeHtml(
    image.alt || ""
  )}" class="project-gallery-image">
  ${
    image.caption
      ? `<figcaption class="image-description">${escapeHtml(image.caption)}</figcaption>`
      : ""
  }
</figure>`;
}

function renderGallery(relativePath, items) {
  if (!Array.isArray(items) || !items.length) {
    return "";
  }

  return `<div class="classic-slider" data-classic-slider>
  <div class="classic-slider-frame">
${items
  .map(
    (item, index) => `    <div class="classic-slide${index === 0 ? " is-active" : ""}">
      <img src="${escapeHtml(resolveAsset(relativePath, item.src))}" loading="lazy" alt="${escapeHtml(
      item.alt || ""
    )}" class="project-gallery-image">
    </div>`
  )
  .join("\n")}
  </div>
  <button type="button" class="classic-slider-arrow classic-slider-prev" data-classic-slider-prev aria-label="Previous slide">&#8249;</button>
  <button type="button" class="classic-slider-arrow classic-slider-next" data-classic-slider-next aria-label="Next slide">&#8250;</button>
  <div class="classic-slider-dots">
${items
  .map(
    (_, index) =>
      `    <button type="button" class="classic-slider-dot${
        index === 0 ? " is-active" : ""
      }" data-classic-slider-dot="${index}" aria-label="Go to slide ${index + 1}"></button>`
  )
  .join("\n")}
  </div>
</div>`;
}

function renderCollectionRows(relativePath, items, showThumbnails) {
  return items
    .map((project) => {
      if (showThumbnails) {
        return `                <tr>
                  <td class="thumb"><a href="${escapeHtml(
                    resolveHref(relativePath, `projects/${project.slug}/index.html`)
                  )}"><img src="${escapeHtml(resolveAsset(relativePath, project.thumbnail))}" alt="${escapeHtml(
          project.thumbnailAlt
        )}"></a></td>
                  <td>
                    <p class="project-title"><a href="${escapeHtml(
                      resolveHref(relativePath, `projects/${project.slug}/index.html`)
                    )}">${escapeHtml(project.title)}</a></p>
                    <p class="project-meta">${escapeHtml(project.meta)}</p>
                    <p>${escapeHtml(project.summary)}</p>
                  </td>
                </tr>`;
      }

      return `                <tr>
                  <td><p class="project-title"><a href="${escapeHtml(
                    resolveHref(relativePath, `projects/${project.slug}/index.html`)
                  )}">${escapeHtml(project.title)}</a></p><p class="project-meta">${escapeHtml(project.meta)}</p>${
                    project.publication
                      ? `<p class="project-submeta">${escapeHtml(
                          [project.publication.authors, project.publication.venue]
                            .filter(Boolean)
                            .join(" | ")
                        )}</p>`
                      : ""
                  }<p>${escapeHtml(project.summary)}</p></td>
                </tr>`;
    })
    .join("\n");
}

function renderHome(relativePath, projects) {
  const featuredProjects = projects
    .filter((project) => project.featured && project.type !== "publication")
    .sort((a, b) => a.featuredOrder - b.featuredOrder);
  const featuredPublications = projects
    .filter((project) => project.featured && project.type === "publication")
    .sort((a, b) => a.featuredOrder - b.featuredOrder);
  const selectedProjects = projects
    .filter((project) => project.selected && project.type !== "publication")
    .sort((a, b) => a.selectedOrder - b.selectedOrder);
  const selectedPublications = projects
    .filter((project) => project.selected && project.type === "publication")
    .sort((a, b) => a.selectedOrder - b.selectedOrder);
  const moreWorkItems = selectedPublications
    .slice(featuredPublications.length)
    .concat(selectedProjects.slice(featuredProjects.length));

  return `<!-- index.html developed by Bob Tianqi Wei -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(siteConfig.site.metaTitle)}</title>
  <meta name="description" content="${escapeHtml(siteConfig.site.metaDescription)}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="${escapeHtml(resolveAsset(relativePath, "assets/css/retroframe.css"))}" rel="stylesheet" type="text/css">
</head>
<body data-page="home">
  <div class="page">
${renderTopbar()}
    <div class="banner">
      <h1>${escapeHtml(siteConfig.banner.title)}</h1>
      <p>${escapeHtml(siteConfig.banner.subtitle)}</p>
    </div>
${renderNav(relativePath)}
    <div class="best-viewed" aria-live="polite">
      <span class="best-viewed-label">News</span>
      <span class="best-viewed-text" id="news-ticker">Loading updates...</span>
    </div>
    <table class="content">
      <tr>
        <td class="sidebar">
          <div class="box" id="profile">
            <div class="box-title">Profile</div>
            <div class="box-body">
              <img class="profile-photo" src="${escapeHtml(
                resolveAsset(relativePath, siteConfig.profile.image)
              )}" alt="${escapeHtml(siteConfig.profile.imageAlt)}">
              <p><strong>Name:</strong> ${escapeHtml(siteConfig.profile.name)}</p>
              <p><strong>Title:</strong> ${escapeHtml(siteConfig.profile.title || "")}</p>
              <p><strong>Affiliation:</strong> ${escapeHtml(siteConfig.profile.affiliation || "")}</p>
              <p><strong>Location:</strong> ${escapeHtml(siteConfig.profile.location || "")}</p>
              <p><strong>Focus:</strong> ${escapeHtml(siteConfig.profile.focus)}</p>
              <p><strong>Availability:</strong> ${escapeHtml(siteConfig.profile.availability)}</p>
            </div>
          </div>
          <div class="box">
            <div class="box-title">Quick Links</div>
            <div class="box-body">
              <ul class="plain-list">
${siteConfig.quickLinks
  .map(
    (item) =>
      `                <li><a href="${escapeHtml(resolveHref(relativePath, item.href))}"${
        /^https?:/.test(item.href) ? ' target="_blank" rel="noreferrer"' : ""
      }>${escapeHtml(item.label)}</a></li>`
  )
  .join("\n")}
              </ul>
            </div>
          </div>
          <div class="box">
            <div class="box-title">Contact</div>
            <div class="box-body">
${siteConfig.contact
  .map(
    (item) =>
      `              <p><strong>${escapeHtml(item.label)}:</strong> <a href="${escapeHtml(
        resolveHref(relativePath, item.href)
      )}"${
        /^https?:/.test(item.href) ? ' target="_blank" rel="noreferrer"' : ""
      }>${escapeHtml(item.value)}</a></p>`
  )
  .join("\n")}
            </div>
          </div>
        </td>
        <td class="main">
          <div class="box" id="about">
            <div class="box-title">About</div>
            <div class="box-body">
${renderIntroContent()}
            </div>
          </div>
          <div class="box" id="trusted">
            <div class="box-title">Affiliations</div>
            <div class="box-body">
              <div class="trust-grid">
${siteConfig.trustedBy
  .map(
    (item) => `                <a class="trust-item" href="${escapeHtml(
      resolveHref(relativePath, item.href)
    )}" target="_blank" rel="noreferrer"><img${
      item.imageClass ? ` class="${escapeHtml(item.imageClass)}"` : ""
    } src="${escapeHtml(resolveAsset(relativePath, item.image))}" alt="${escapeHtml(item.name)}"></a>`
  )
  .join("\n")}
              </div>
            </div>
          </div>
          <div class="box" id="publications">
            <div class="box-title">Selected Publications</div>
            <div class="box-body">
              <table class="project-table">
${featuredPublications
  .map(
    (project) => `                <tr>
                  <td><p class="project-title"><a href="${escapeHtml(
                    resolveHref(relativePath, `projects/${project.slug}/index.html`)
                  )}">${escapeHtml(project.title)}</a></p><p class="project-meta">${escapeHtml(project.meta)}</p>${
                    project.publication
                      ? `<p class="project-submeta">${escapeHtml(
                          [project.publication.authors, project.publication.venue]
                            .filter(Boolean)
                            .join(" | ")
                        )}</p>`
                      : ""
                  }<p>${escapeHtml(project.summary)}</p></td>
                </tr>`
  )
  .join("\n")}
              </table>
            </div>
          </div>
          <div class="box" id="projects">
            <div class="box-title">Selected Projects</div>
            <div class="box-body">
              <table class="feature-table">
${featuredProjects
  .map(
    (project) => `                <tr>
                  <td class="thumb"><a href="${escapeHtml(
                    resolveHref(relativePath, `projects/${project.slug}/index.html`)
                  )}"><img src="${escapeHtml(resolveAsset(relativePath, project.thumbnail))}" alt="${escapeHtml(
      project.thumbnailAlt
    )}"></a></td>
                  <td>
                    <p class="project-title"><a href="${escapeHtml(
                      resolveHref(relativePath, `projects/${project.slug}/index.html`)
                    )}">${escapeHtml(project.title)}</a></p>
                    <p class="project-meta">${escapeHtml(project.meta)}</p>
                    <p>${escapeHtml(project.summary)}</p>
                  </td>
                </tr>`
  )
  .join("\n")}
              </table>
            </div>
          </div>
          <div class="box">
            <div class="box-title">More Work</div>
            <div class="box-body">
              <table class="project-table">
${moreWorkItems
  .map(
    (project) => `                <tr>
                  <td><p class="project-title"><a href="${escapeHtml(
                    resolveHref(relativePath, `projects/${project.slug}/index.html`)
                  )}">${escapeHtml(project.title)}</a></p><p class="project-meta">${escapeHtml(project.meta)}</p>${
                    project.publication
                      ? `<p class="project-submeta">${escapeHtml(
                          [project.publication.authors, project.publication.venue]
                            .filter(Boolean)
                            .join(" | ")
                        )}</p>`
                      : ""
                  }<p>${escapeHtml(project.summary)}</p></td>
                </tr>`
  )
  .join("\n")}
              </table>
            </div>
          </div>
        </td>
      </tr>
    </table>
${renderFooter(relativePath)}
  </div>
  <script>window.retroframeNewsItems = ${JSON.stringify(siteConfig.newsItems)};</script>
  <script src="${escapeHtml(resolveAsset(relativePath, "assets/js/status-bar.js"))}" defer></script>
  <script src="${escapeHtml(resolveAsset(relativePath, "assets/js/home.js"))}" defer></script>
</body>
</html>
`;
}

function renderCollectionPage(relativePath, options) {
  const { title, description, items, kind } = options;
  const isPublicationPage = kind === "publications";
  const tableClass = isPublicationPage ? "project-table" : "feature-table";

  return `<!-- index.html developed by Bob Tianqi Wei -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(title)} | Retroframe</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="${escapeHtml(resolveAsset(relativePath, "assets/css/retroframe.css"))}" rel="stylesheet" type="text/css">
</head>
<body data-page="project" data-theme="slate-ice">
  <div class="page">
${renderTopbar()}
${renderNav(relativePath)}
    <table class="content">
      <tr>
        <td class="sidebar">
          <div class="box">
            <div class="box-title">Browse</div>
            <div class="box-body mini-nav">
              <a href="${escapeHtml(resolveHref(relativePath, "index.html#about"))}">About</a>
              <a href="${escapeHtml(resolveHref(relativePath, "about/index.html"))}">About Page</a>
              <a href="${escapeHtml(resolveHref(relativePath, "publications/index.html"))}">Publications</a>
              <a href="${escapeHtml(resolveHref(relativePath, "projects/index.html"))}">Projects</a>
              <a href="${escapeHtml(resolveHref(relativePath, "index.html#profile"))}">Contact</a>
            </div>
          </div>
          <div class="box">
            <div class="box-title">Profile</div>
            <div class="box-body">
              <p><strong>Name:</strong> ${escapeHtml(siteConfig.profile.name)}</p>
              <p><strong>Title:</strong> ${escapeHtml(siteConfig.profile.title || "")}</p>
              <p><strong>Affiliation:</strong> ${escapeHtml(siteConfig.profile.affiliation || "")}</p>
              <p><strong>Focus:</strong> ${escapeHtml(siteConfig.profile.focus)}</p>
            </div>
          </div>
          <div class="box">
            <div class="box-title">Quick Links</div>
            <div class="box-body">
              <ul class="plain-list">
                <li><a href="${escapeHtml(resolveHref(relativePath, "index.html"))}">Back to Home</a></li>
${siteConfig.quickLinks
  .map(
    (item) =>
      `                <li><a href="${escapeHtml(resolveHref(relativePath, item.href))}"${
        /^https?:/.test(item.href) ? ' target="_blank" rel="noreferrer"' : ""
      }>${escapeHtml(item.label)}</a></li>`
  )
  .join("\n")}
              </ul>
            </div>
          </div>
        </td>
        <td class="main">
          <div class="project-header">
            <h1 class="project-header-title">${escapeHtml(title)}</h1>
            <p class="project-header-headline">${escapeHtml(description)}</p>
          </div>
          <div class="box">
            <div class="box-title">${escapeHtml(title)}</div>
            <div class="box-body">
              <table class="${tableClass}">
${renderCollectionRows(relativePath, items, !isPublicationPage)}
              </table>
            </div>
          </div>
        </td>
      </tr>
    </table>
${renderFooter(relativePath)}
  </div>
  <script src="${escapeHtml(resolveAsset(relativePath, "assets/js/status-bar.js"))}" defer></script>
</body>
</html>
`;
}

function renderAboutPage(relativePath) {
  const aboutConfig = siteConfig.aboutPage || { headline: "", sections: [] };
  const anchorLinks = (aboutConfig.sections || []).map((section, index) => ({
    id: section.id || `section-${index + 1}`,
    title: section.title
  }));

  return `<!-- index.html developed by Bob Tianqi Wei -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>About | Retroframe</title>
  <meta name="description" content="${escapeHtml(siteConfig.site.metaDescription)}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="${escapeHtml(resolveAsset(relativePath, "assets/css/retroframe.css"))}" rel="stylesheet" type="text/css">
</head>
<body data-page="project" data-theme="slate-ice">
  <div class="page">
${renderTopbar()}
${renderNav(relativePath)}
    <table class="content">
      <tr>
        <td class="sidebar">
          <div class="box">
            <div class="box-title">Browse</div>
            <div class="box-body mini-nav">
              <a href="${escapeHtml(resolveHref(relativePath, "index.html"))}">Home</a>
${anchorLinks
  .map((item) => `              <a href="#${escapeHtml(item.id)}">${escapeHtml(item.title)}</a>`)
  .join("\n")}
              <a href="${escapeHtml(resolveHref(relativePath, "publications/index.html"))}">Publications</a>
              <a href="${escapeHtml(resolveHref(relativePath, "projects/index.html"))}">Projects</a>
            </div>
          </div>
          <div class="box">
            <div class="box-title">Profile</div>
            <div class="box-body">
              <img class="profile-photo" src="${escapeHtml(
                resolveAsset(relativePath, siteConfig.profile.image)
              )}" alt="${escapeHtml(siteConfig.profile.imageAlt)}">
              <p><strong>Name:</strong> ${escapeHtml(siteConfig.profile.name)}</p>
              <p><strong>Title:</strong> ${escapeHtml(siteConfig.profile.title || "")}</p>
              <p><strong>Affiliation:</strong> ${escapeHtml(siteConfig.profile.affiliation || "")}</p>
              <p><strong>Location:</strong> ${escapeHtml(siteConfig.profile.location || "")}</p>
            </div>
          </div>
          <div class="box">
            <div class="box-title">Quick Links</div>
            <div class="box-body">
              <ul class="plain-list">
                <li><a href="${escapeHtml(resolveHref(relativePath, "index.html"))}">Back to Home</a></li>
${siteConfig.quickLinks
  .map(
    (item) =>
      `                <li><a href="${escapeHtml(resolveHref(relativePath, item.href))}"${
        /^https?:/.test(item.href) ? ' target="_blank" rel="noreferrer"' : ""
      }>${escapeHtml(item.label)}</a></li>`
  )
  .join("\n")}
              </ul>
            </div>
          </div>
        </td>
        <td class="main">
          <div class="project-header">
            <h1 class="project-header-title">About</h1>
            <p class="project-header-headline">${escapeHtml(aboutConfig.headline || "")}</p>
          </div>
${(aboutConfig.sections || [])
  .map((section, index) => {
    const sectionId = section.id || `section-${index + 1}`;
    return `          <div class="box" id="${escapeHtml(sectionId)}">
            <div class="box-title">${escapeHtml(section.title)}</div>
            <div class="box-body">
              <div class="project-richtext">${renderParagraphs(section.paragraphs || [])}</div>
            </div>
          </div>`;
  })
  .join("\n")}
        </td>
      </tr>
    </table>
${renderFooter(relativePath)}
  </div>
  <script src="${escapeHtml(resolveAsset(relativePath, "assets/js/status-bar.js"))}" defer></script>
</body>
</html>
`;
}

function renderProjectPage(project) {
  const relativePath = `projects/${project.slug}/index.html`;
  const anchorLinks = project.page.sections.map((section, index) => ({
    id: section.id || `section-${index + 1}`,
    title: section.title
  }));

  return {
    relativePath,
    html: `<!-- index.html developed by Bob Tianqi Wei -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(project.title)} | Retroframe</title>
  <meta name="description" content="${escapeHtml(project.summary)}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="${escapeHtml(resolveAsset(relativePath, "assets/css/retroframe.css"))}" rel="stylesheet" type="text/css">
</head>
<body data-page="project" data-theme="slate-ice">
  <div class="page">
${renderTopbar()}
${renderNav(relativePath)}
    <table class="content">
      <tr>
        <td class="sidebar">
          <div class="box">
            <div class="box-title">Site Menu</div>
            <div class="box-body mini-nav">
              <a href="${escapeHtml(resolveHref(relativePath, "index.html"))}">Home</a>
${anchorLinks
  .map((item) => `              <a href="#${escapeHtml(item.id)}">${escapeHtml(item.title)}</a>`)
  .join("\n")}
            </div>
          </div>
          <div class="box">
            <div class="box-title">Work Info</div>
            <div class="box-body">
              <p><strong>Title:</strong> ${escapeHtml(project.title)}</p>
              <p><strong>Category:</strong> ${escapeHtml(project.type || "project")}</p>
              <p><strong>Type:</strong> ${escapeHtml(project.meta)}</p>
              <p><strong>Focus:</strong> ${escapeHtml(project.page.focus)}</p>
              ${
                project.page.role
                  ? `<p><strong>Role:</strong> ${escapeHtml(project.page.role)}</p>`
                  : ""
              }
              ${
                project.page.collaborators
                  ? `<p><strong>Collaborators:</strong> ${escapeHtml(project.page.collaborators)}</p>`
                  : ""
              }
            </div>
          </div>
          <div class="box">
            <div class="box-title">At A Glance</div>
            <div class="box-body">
              <p>${escapeHtml(siteConfig.profile.name)}</p>
              <p>${escapeHtml(project.page.stack)}</p>
              <p>${escapeHtml(project.date)}</p>
            </div>
          </div>
          ${
            project.type === "publication"
              ? `          <div class="box">
            <div class="box-title">Publication Details</div>
            <div class="box-body">
${renderPublicationMeta(project)}
            </div>
          </div>`
              : ""
          }
          <div class="box">
            <div class="box-title">Quick Links</div>
            <div class="box-body">
              <ul class="plain-list">
                <li><a href="${escapeHtml(resolveHref(relativePath, "index.html"))}">Back to Home</a></li>
${(project.page.quickLinks || [])
  .map(
    (item) =>
      `                <li><a href="${escapeHtml(resolveHref(relativePath, item.href))}"${
        /^https?:/.test(item.href) ? ' target="_blank" rel="noreferrer"' : ""
      }>${escapeHtml(item.label)}</a></li>`
  )
  .join("\n")}
              </ul>
            </div>
          </div>
        </td>
        <td class="main">
          <div class="project-header">
            <h1 class="project-header-title">${escapeHtml(project.title)}</h1>
            <p class="project-header-headline">${escapeHtml(project.page.headline)}</p>
          </div>
          <div class="project-hero-media">
            <figure class="project-figure">
              <img src="${escapeHtml(resolveAsset(relativePath, project.thumbnail))}" loading="lazy" alt="${escapeHtml(
      project.thumbnailAlt
    )}" class="project-gallery-image">
            </figure>
          </div>
${project.page.sections
  .map((section, index) => {
    const sectionId = section.id || `section-${index + 1}`;
    return `          <div class="box" id="${escapeHtml(sectionId)}">
            <div class="box-title">${escapeHtml(section.title)}</div>
            <div class="box-body">
              <div class="project-richtext">${renderParagraphs(section.paragraphs || [])}</div>
              ${section.image ? renderFigure(relativePath, section.image) : ""}
              ${section.gallery ? renderGallery(relativePath, section.gallery) : ""}
            </div>
          </div>`;
  })
  .join("\n")}
        </td>
      </tr>
    </table>
${renderFooter(relativePath)}
  </div>
  <script src="${escapeHtml(resolveAsset(relativePath, "assets/js/status-bar.js"))}" defer></script>
  <script src="${escapeHtml(resolveAsset(relativePath, "assets/js/project-page.js"))}" defer></script>
</body>
</html>
`
  };
}

function main() {
  const projects = loadProjects();
  const publications = projects.filter((project) => project.type === "publication");
  const projectItems = projects.filter((project) => project.type !== "publication");
  fs.rmSync(path.join(repoRoot, "projects"), { recursive: true, force: true });
  writeFile("index.html", renderHome("index.html", projects));
  writeFile("about/index.html", renderAboutPage("about/index.html"));
  writeFile(
    "publications/index.html",
    renderCollectionPage("publications/index.html", {
      title: "Publications",
      description:
        "A complete list of publications in the Retroframe template, presented in the same retro academic style.",
      items: publications,
      kind: "publications"
    })
  );
  writeFile(
    "projects/index.html",
    renderCollectionPage("projects/index.html", {
      title: "Projects",
      description:
        "A complete list of projects in the Retroframe template, including systems work, developer tools, and research prototypes.",
      items: projectItems,
      kind: "projects"
    })
  );

  projects.forEach((project) => {
    const page = renderProjectPage(project);
    writeFile(page.relativePath, page.html);
  });
}

main();
