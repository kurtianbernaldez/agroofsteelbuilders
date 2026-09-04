(function () {
  'use strict';

  function getQueryParam(name) {
    var match = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    if (!match) return null;
    try {
      return decodeURIComponent(match[1].replace(/\+/g, ' '));
    } catch (error) {
      return null;
    }
  }

  function getAbsoluteUrl(path) {
    var link = document.createElement('a');
    link.href = path;
    return link.href;
  }

  function updateMetadata(project) {
    var pageTitle = project.name + ' | A & G Roof Steel Builders';
    var description = project.description;
    var image = project.images && project.images[0] ? project.images[0] : 'img/generated/project-industrial.webp';
    var canonical = getAbsoluteUrl('project.html?id=' + encodeURIComponent(project.id));
    var structuredData = document.getElementById('structured-data');

    document.title = pageTitle;
    document.getElementById('meta-description').setAttribute('content', description);
    document.getElementById('meta-robots').setAttribute('content', 'index, follow');
    document.getElementById('og-title').setAttribute('content', pageTitle);
    document.getElementById('og-description').setAttribute('content', description);
    document.getElementById('og-image').setAttribute('content', getAbsoluteUrl(image));
    document.getElementById('og-url').setAttribute('content', canonical);
    document.getElementById('canonical-url').setAttribute('href', canonical);

    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.name,
      description: project.description,
      image: project.images.map(getAbsoluteUrl),
      location: project.location
    });
  }

  function findProject(id) {
    if (!window.PROJECTS_DATA) return null;
    for (var i = 0; i < window.PROJECTS_DATA.length; i++) {
      if (window.PROJECTS_DATA[i].id === id) return window.PROJECTS_DATA[i];
    }
    return null;
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderProject(project) {
    var breadcrumb = document.getElementById('project-breadcrumb');
    var content = document.getElementById('project-content');
    var notFound = document.getElementById('project-not-found');

    if (breadcrumb) {
      breadcrumb.innerHTML = '<a href="index.html">Home</a> &rarr; <a href="projects.html">Projects</a> &rarr; ' + escapeHtml(project.name);
    }

    var title = document.getElementById('project-title');
    if (title) title.textContent = project.name;

    var locationEl = document.getElementById('project-location');
    if (locationEl) locationEl.textContent = project.location;

    var typeEl = document.getElementById('project-type');
    if (typeEl) typeEl.textContent = project.type;

    var clientEl = document.getElementById('project-client');
    if (clientEl) clientEl.textContent = project.client;

    var scopeEl = document.getElementById('project-scope');
    if (scopeEl) scopeEl.textContent = project.scope;

    var areaItem = document.getElementById('project-area-item');
    var areaTypeEl = document.getElementById('project-area-type');
    var areaValueEl = document.getElementById('project-area-value');
    if (project.area && project.area.value && areaItem && areaTypeEl && areaValueEl) {
      areaTypeEl.textContent = project.area.type;
      areaValueEl.textContent = project.area.value;
      areaItem.style.display = 'block';
    }

    var statusEl = document.getElementById('project-status');
    if (statusEl) statusEl.textContent = project.status;

    var descEl = document.getElementById('project-description');
    if (descEl) descEl.innerHTML = '<p>' + escapeHtml(project.description) + '</p>';

    var mainImg = document.getElementById('project-main-image');
    var gallery = document.getElementById('project-gallery');
    
    if (project.images && project.images.length > 0) {
      if (mainImg) {
        mainImg.src = project.images[0];
        mainImg.alt = project.name;
        mainImg.onerror = function () {
          mainImg.style.display = 'none';
        };
      }
      
      if (gallery && project.images.length > 1) {
        gallery.innerHTML = '';
        project.images.forEach(function (imgSrc, index) {
          var thumb = document.createElement('button');
          thumb.type = 'button';
          thumb.className = 'project-gallery-thumb';
          thumb.setAttribute('aria-label', 'Show ' + project.name + ' image ' + (index + 1));
          thumb.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
          var img = document.createElement('img');
          img.src = imgSrc;
          img.alt = project.name + ' image ' + (index + 1);
          img.onerror = function () { this.style.display = 'none'; };
          thumb.appendChild(img);
          
          thumb.addEventListener('click', function () {
            if (mainImg) {
              mainImg.src = imgSrc;
              var thumbs = gallery.querySelectorAll('.project-gallery-thumb');
              thumbs.forEach(function (t) {
                t.classList.remove('active');
                t.setAttribute('aria-pressed', 'false');
              });
              thumb.classList.add('active');
              thumb.setAttribute('aria-pressed', 'true');
            }
          });
          
          if (index === 0) thumb.classList.add('active');
          gallery.appendChild(thumb);
        });
      }
    }

    if (content) content.style.display = 'block';
    if (notFound) notFound.style.display = 'none';
    updateMetadata(project);
  }

  function showNotFound() {
    var content = document.getElementById('project-content');
    var notFound = document.getElementById('project-not-found');
    if (content) content.style.display = 'none';
    if (notFound) notFound.style.display = 'block';
    document.title = 'Project Not Found - A & G Roof Steel Builders';
    document.getElementById('meta-robots').setAttribute('content', 'noindex, nofollow');
    window.location.replace('not-found');
  }

  var id = getQueryParam('id');
  if (!id) {
    showNotFound();
    return;
  }

  var project = findProject(id);
  if (project) {
    renderProject(project);
  } else {
    showNotFound();
  }
})();
