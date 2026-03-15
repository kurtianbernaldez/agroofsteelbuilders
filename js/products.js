(function () {
  'use strict';

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }

  function getCategoryInfo(categoryKey) {
    var categoryDescriptions = {
      'roofing': 'Super Rib, Super Corr, Super Tile, Super Crimp profiles.',
      'decking': 'Super Deck - 1 and Super Deck - 2 structural systems.',
      'bended': 'Gutters, flashings, fascia, moulding, wall angles, furring, louvers.',
      'spandrel': 'REL, Rib Perforated, Corr, and Plainsheet panels.',
      'cladding': 'Plainsheet and longspan cladding for walls and roofing.',
      'cpurlins': 'Structural C-sections: 2" x 3", 2" x 4", 2" x 6".',
      'hardware': 'Tekscrews, rivets, sealant, drill bits, PE foam insulation.'
    };
    var categoryIcons = {
      'roofing': 'fa-home',
      'decking': 'fa-layer-group',
      'bended': 'fa-wrench',
      'spandrel': 'fa-th-large',
      'cladding': 'fa-columns',
      'cpurlins': 'fa-bars',
      'hardware': 'fa-screwdriver-wrench'
    };
    return {
      description: categoryDescriptions[categoryKey] || '',
      icon: categoryIcons[categoryKey] || 'fa-box'
    };
  }

  function renderCategories() {
    var container = document.getElementById('category-grid');
    if (!container || !window.PRODUCTS_DATA) return;

    var categories = window.PRODUCTS_DATA.categories;
    var products = window.PRODUCTS_DATA.products;

    var categoryOrder = ['roofing', 'decking', 'bended', 'spandrel', 'cladding', 'cpurlins', 'hardware'];
    var bgIndex = 1;
    var html = '';

    for (var i = 0; i < categoryOrder.length; i++) {
      var catKey = categoryOrder[i];
      var catName = categories[catKey];
      if (!catName) continue;

      var count = 0;
      for (var j = 0; j < products.length; j++) {
        if (products[j].category === catKey) count++;
      }

      var info = getCategoryInfo(catKey);
      var bgNum = ((i % 7) + 1);

      html += '<a href="products-' + catKey + '.html" class="category-block fade-up" style="opacity: 1;">';
      html += '<div class="category-block__bg category-block__bg--' + bgNum + '">';
      html += '<div class="category-block__content">';
      html += '<div class="category-block__icon"><i class="fas ' + info.icon + '"></i></div>';
      html += '<h3 class="category-block__title">' + escapeHtml(catName) + '</h3>';
      html += '<p class="category-block__desc">' + escapeHtml(info.description) + '</p>';
      html += '<span class="category-block__btn">' + count + ' Products <i class="fas fa-arrow-right"></i></span>';
      html += '</div>';
      html += '</div>';
      html += '</a>';
    }

    container.innerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCategories);
  } else {
    renderCategories();
  }
})();
