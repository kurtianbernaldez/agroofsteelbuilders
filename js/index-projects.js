(function () {
  'use strict';

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }

  function loadRecentProjects() {
    var container = document.getElementById('recent-projects');
    if (!container || !window.PROJECTS_DATA) return;

    var recentProjects = window.PROJECTS_DATA.slice(0, 3);
    var html = '';

    recentProjects.forEach(function (project) {
      var imageUrl = project.images && project.images[0] ? project.images[0] : 'img/generated/project-industrial.webp';
      var truncatedDesc = truncateText(project.description, 100);
      html += '<article class="project-card fade-up">' +
        '<div class="project-card__media">' +
          '<img src="' + escapeHtml(imageUrl) + '" alt="' + escapeHtml(project.name) + '" loading="lazy">' +
        '</div>' +
        '<div class="project-card__details">' +
          '<h3>' + escapeHtml(project.name) + '</h3>' +
          '<p>' + escapeHtml(truncatedDesc) + '</p>' +
          '<a href="project.html?id=' + escapeHtml(project.id) + '" class="project-card__btn">View Project</a>' +
        '</div>' +
      '</article>';
    });

    container.innerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadRecentProjects);
  } else {
    loadRecentProjects();
  }
})();
