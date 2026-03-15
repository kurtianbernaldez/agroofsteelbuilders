(function () {
  'use strict';

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }

  function getProjectImage(project) {
    if (project.images && project.images.length > 0) {
      return project.images[0];
    }
    return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80';
  }

  function renderProjects() {
    var container = document.getElementById('projects-container');
    if (!container || !window.PROJECTS_DATA) return;

    var projects = window.PROJECTS_DATA;
    var categories = {
      'Industrial': [],
      'Commercial': [],
      'Residential': []
    };

    for (var i = 0; i < projects.length; i++) {
      var p = projects[i];
      var cat = p.type || 'Industrial';
      if (!categories[cat]) cat = 'Industrial';
      categories[cat].push(p);
    }

    var html = '';
    var catOrder = ['Industrial', 'Commercial', 'Residential'];

    for (var c = 0; c < catOrder.length; c++) {
      var category = catOrder[c];
      var items = categories[category];
      if (items.length === 0) continue;

      html += '<div class="projects-category">';
      html += '<h3 class="projects-category-title">' + escapeHtml(category) + '</h3>';
      html += '<div class="projects-grid">';

      for (var j = 0; j < items.length; j++) {
        var project = items[j];
        var imgUrl = getProjectImage(project);
        html += '<div class="project-item">';
        html += '<img src="' + escapeHtml(imgUrl) + '" alt="' + escapeHtml(project.name) + '">';
        html += '<div class="project-overlay" style="opacity: 1;">';
        html += '<div class="project-details">';
        html += '<h3>' + escapeHtml(project.name) + '</h3>';
        html += '<p>' + escapeHtml(project.description) + '</p>';
        html += '<a href="project.html?id=' + escapeHtml(project.id) + '">View Details</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      }

      html += '</div>';
      html += '</div>';
    }

    container.innerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
  } else {
    renderProjects();
  }
})();
