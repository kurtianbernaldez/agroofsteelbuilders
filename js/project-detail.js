(function () {
  'use strict';

  function getQueryParam(name) {
    var match = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match ? decodeURIComponent(match[1]) : null;
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

    var yearEl = document.getElementById('project-year');
    if (yearEl) yearEl.textContent = project.year;

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
          var thumb = document.createElement('div');
          thumb.className = 'project-gallery-thumb';
          var img = document.createElement('img');
          img.src = imgSrc;
          img.alt = project.name + ' image ' + (index + 1);
          img.onerror = function () { this.style.display = 'none'; };
          thumb.appendChild(img);
          
          thumb.addEventListener('click', function () {
            if (mainImg) {
              mainImg.src = imgSrc;
              var thumbs = gallery.querySelectorAll('.project-gallery-thumb');
              thumbs.forEach(function (t) { t.classList.remove('active'); });
              thumb.classList.add('active');
            }
          });
          
          if (index === 0) thumb.classList.add('active');
          gallery.appendChild(thumb);
        });
      }
    }

    content.style.display = 'block';
    notFound.style.display = 'none';
    document.title = project.name + ' - A & G Roof Steel Builders';
  }

  function showNotFound() {
    var content = document.getElementById('project-content');
    var notFound = document.getElementById('project-not-found');
    if (content) content.style.display = 'none';
    if (notFound) notFound.style.display = 'block';
    document.title = 'Project Not Found - A & G Roof Steel Builders';
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
