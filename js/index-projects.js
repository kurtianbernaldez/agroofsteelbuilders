(function () {
  'use strict';

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  }

  function loadRecentProjects() {
    var container = document.getElementById('recent-projects');
    if (!container || !window.PROJECTS_DATA) return;

    var recentProjects = window.PROJECTS_DATA.slice(0, 3);
    var html = '';

    recentProjects.forEach(function (project) {
      var imageUrl = project.images && project.images[0] ? project.images[0] : 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80';
      var truncatedDesc = truncateText(project.description, 100);
      html += '<article class="project-card fade-up">' +
        '<img src="' + imageUrl + '" alt="' + project.name + '">' +
        '<div class="project-card__overlay" style="opacity: 1;">' +
          '<div class="project-card__details">' +
            '<h3>' + project.name + '</h3>' +
            '<p>' + truncatedDesc + '</p>' +
            '<a href="project.html?id=' + project.id + '" class="project-card__btn">View Project</a>' +
          '</div>' +
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
