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

  function updateMetadata(product) {
    var pageTitle = product.name + ' | A & G Roof Steel Builders';
    var description = product.description;
    var image = getCategoryImage(product.category) || product.image || 'img/generated/steel-products.webp';
    var canonical = getAbsoluteUrl('product.html?id=' + encodeURIComponent(product.id));
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
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: getAbsoluteUrl(image),
      brand: {
        '@type': 'Brand',
        name: 'A & G Roof Steel Builders'
      }
    });
  }

  function findProduct(id) {
    if (!window.PRODUCTS_DATA || !window.PRODUCTS_DATA.products) return null;
    for (var i = 0; i < window.PRODUCTS_DATA.products.length; i++) {
      if (window.PRODUCTS_DATA.products[i].id === id) return window.PRODUCTS_DATA.products[i];
    }
    return null;
  }

  function getCategoryName(slug) {
    return (window.PRODUCTS_DATA && window.PRODUCTS_DATA.categories && window.PRODUCTS_DATA.categories[slug]) ? window.PRODUCTS_DATA.categories[slug] : slug;
  }

  function getCategoryPage(slug) {
    var map = {
      roofing: 'products-roofing.html',
      decking: 'products-decking.html',
      bended: 'products-bended.html',
      cladding: 'products-cladding.html',
      cpurlins: 'products-cpurlins.html',
      hardware: 'products-hardware.html'
    };
    return map[slug] || 'products.html';
  }

  function getCategoryImage(slug) {
    var map = {
      bended: 'img/products/bended/bendedaccs.jpg',
      cladding: 'img/products/cladding/wallcladding.jpg',
      hardware: 'img/products/hardware/hardwareaccs.jpg'
    };
    return map[slug] || '';
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderProduct(product) {
    var breadcrumb = document.getElementById('product-breadcrumb');
    var content = document.getElementById('product-content');
    var notFound = document.getElementById('product-not-found');

    if (breadcrumb) {
      var catName = getCategoryName(product.category);
      var catPage = getCategoryPage(product.category);
      breadcrumb.innerHTML = '<a href="products.html">Products</a> &rarr; <a href="' + escapeHtml(catPage) + '">' + escapeHtml(catName) + '</a> &rarr; ' + escapeHtml(product.name);
    }

    var img = document.getElementById('product-image');
    if (img) {
      img.src = getCategoryImage(product.category) || product.image || '';
      img.alt = product.name;
      img.onerror = function () {
        img.style.display = 'none';
        var placeholder = img.nextElementSibling;
        if (placeholder && placeholder.classList && placeholder.classList.contains('product-gallery-placeholder')) {
          placeholder.style.display = 'flex';
        }
      };
    }

    var nameEl = document.getElementById('product-name');
    if (nameEl) nameEl.textContent = product.name;

    var descEl = document.getElementById('product-description');
    if (descEl) descEl.innerHTML = '<p>' + escapeHtml(product.description) + '</p>';

    var colorsWrap = document.getElementById('product-colors');
    var colorList = document.getElementById('product-color-list');
    if (product.colors && product.colors.length > 0 && colorList) {
      colorsWrap.style.display = 'block';
      colorList.innerHTML = '';
      product.colors.forEach(function (c) {
        var item = document.createElement('div');
        item.className = 'color-item';
        var swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = c.hex || '#ccc';
        swatch.setAttribute('title', c.name);
        var nameSpan = document.createElement('span');
        nameSpan.className = 'color-name';
        nameSpan.textContent = c.name;
        item.appendChild(swatch);
        item.appendChild(nameSpan);
        colorList.appendChild(item);
      });
    } else if (colorsWrap) {
      colorsWrap.style.display = 'none';
    }

    var specImgWrap = document.getElementById('product-spec-image-wrap');
    var specImg = document.getElementById('product-spec-image');
    if (product.specImage && specImg) {
      specImgWrap.style.display = 'block';
      specImg.src = product.specImage;
      specImg.alt = product.name + ' specification';
      specImg.onerror = function () { specImgWrap.style.display = 'none'; };
    } else if (specImgWrap) {
      specImgWrap.style.display = 'none';
    }

    var specsWrap = document.getElementById('product-specifications-wrap');
    var specsBody = document.getElementById('product-specs-body');
    if (product.specs && typeof product.specs === 'object' && Object.keys(product.specs).length > 0 && specsBody) {
      specsWrap.style.display = 'block';
      specsBody.innerHTML = '';
      for (var key in product.specs) {
        if (product.specs.hasOwnProperty(key)) {
          var tr = document.createElement('tr');
          var th = document.createElement('th');
          var td = document.createElement('td');
          th.className = 'spec-label';
          th.scope = 'row';
          th.textContent = key;
          td.className = 'spec-value';
          td.textContent = product.specs[key];
          tr.appendChild(th);
          tr.appendChild(td);
          specsBody.appendChild(tr);
        }
      }
    } else if (specsWrap) {
      specsWrap.style.display = 'none';
    }

    content.style.display = 'block';
    notFound.style.display = 'none';
    updateMetadata(product);
  }

  function showNotFound() {
    document.getElementById('product-content').style.display = 'none';
    document.getElementById('product-not-found').style.display = 'block';
    document.title = 'Product Not Found - A & G Roof Steel Builders';
    document.getElementById('meta-robots').setAttribute('content', 'noindex, nofollow');
    window.location.replace('not-found');
  }

  var id = getQueryParam('id');
  if (!id) {
    showNotFound();
    return;
  }

  var product = findProduct(id);
  if (product) {
    renderProduct(product);
  } else {
    showNotFound();
  }
})();
