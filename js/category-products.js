(function () {
  'use strict';

  var categoryKey = document.body.getAttribute('data-product-category');
  var categoryProducts = [];

  function getElement(id) {
    return document.getElementById(id);
  }

  function getProductImage(product) {
    var categoryImages = {
      bended: 'img/products/bended/bendedaccs.jpg',
      cladding: 'img/products/cladding/wallcladding.jpg',
      hardware: 'img/products/hardware/hardwareaccs.jpg'
    };

    if (categoryImages[categoryKey]) return categoryImages[categoryKey];
    if (categoryKey === 'cpurlins') return product.thumbnailImage || product.image;
    return product.image;
  }

  function getRoofingColorImage(product, colorName) {
    var folderName = product.id.replace(/-/g, '_');
    var colorFileName = colorName.toLowerCase().replace(/\s+/g, '');
    return 'img/products/roofing/' + folderName + '/' + product.id + '-' + colorFileName + '.webp';
  }

  function setActiveTab(activeTab) {
    var tabs = document.querySelectorAll('.filter-tab');
    Array.prototype.forEach.call(tabs, function (tab) {
      var isActive = tab === activeTab;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });
  }

  function renderTabs() {
    var tabsContainer = getElement('filter-tabs');
    var display = getElement('product-filter-display');
    if (!tabsContainer) return;

    tabsContainer.textContent = '';
    tabsContainer.setAttribute('role', 'tablist');
    tabsContainer.setAttribute('aria-label', 'Products');
    if (display) display.setAttribute('role', 'tabpanel');

    categoryProducts.forEach(function (product, index) {
      var tab = document.createElement('button');
      tab.type = 'button';
      tab.id = 'product-tab-' + product.id;
      tab.className = 'filter-tab' + (index === 0 ? ' active' : '');
      tab.textContent = product.name;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      tab.setAttribute('aria-controls', 'product-filter-display');
      tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
      tab.addEventListener('click', function () {
        setActiveTab(tab);
        renderProduct(product.id);
      });
      tab.addEventListener('keydown', function (event) {
        var tabs = Array.prototype.slice.call(tabsContainer.querySelectorAll('.filter-tab'));
        var tabIndex = tabs.indexOf(tab);
        var nextIndex = null;

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (tabIndex + 1) % tabs.length;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (tabIndex - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;
        if (nextIndex === null) return;

        event.preventDefault();
        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      });
      tabsContainer.appendChild(tab);
    });
  }

  function renderColors(product) {
    var colorsSection = getElement('filter-colors-section');
    var colorList = getElement('filter-color-list');
    if (!colorsSection || !colorList) return;

    colorList.textContent = '';
    if (!product.colors || product.colors.length === 0) {
      colorsSection.style.display = 'none';
      return;
    }

    colorsSection.style.display = 'block';
    product.colors.forEach(function (color, index) {
      var item = document.createElement(categoryKey === 'roofing' ? 'button' : 'div');
      var swatch = document.createElement('span');
      var name = document.createElement('span');

      item.className = 'filter-color-item' + (categoryKey === 'roofing' ? ' filter-color-item--button' : '');
      swatch.className = 'filter-color-swatch';
      swatch.style.backgroundColor = color.hex;
      swatch.setAttribute('aria-hidden', 'true');
      name.className = 'filter-color-name';
      name.textContent = color.name;

      if (categoryKey === 'roofing') {
        item.type = 'button';
        item.setAttribute('aria-label', 'Show ' + product.name + ' in ' + color.name);
        item.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
        item.addEventListener('click', function () {
          var colorButtons = colorList.querySelectorAll('.filter-color-item--button');
          Array.prototype.forEach.call(colorButtons, function (button) {
            button.setAttribute('aria-pressed', button === item ? 'true' : 'false');
          });
          setProductImage(getRoofingColorImage(product, color.name), product.name + ' - ' + color.name);
        });
      }

      item.appendChild(swatch);
      item.appendChild(name);
      colorList.appendChild(item);
    });
  }

  function setProductImage(src, alt) {
    var image = getElement('filter-product-image');
    if (!image) return;
    image.style.display = 'block';
    image.src = src;
    image.alt = alt;
    image.onerror = function () {
      image.style.display = 'none';
    };
  }

  function renderSpecifications(product) {
    var specsSection = getElement('filter-product-specs');
    var specsBody = getElement('filter-specs-body');
    if (!specsSection || !specsBody) return;

    specsBody.textContent = '';
    if (!product.specs || Object.keys(product.specs).length === 0) {
      specsSection.style.display = 'none';
      return;
    }

    specsSection.style.display = 'block';
    Object.keys(product.specs).forEach(function (key) {
      var row = document.createElement('tr');
      var label = document.createElement('th');
      var value = document.createElement('td');
      label.className = 'spec-label';
      label.scope = 'row';
      label.textContent = key;
      value.className = 'spec-value';
      value.textContent = product.specs[key];
      row.appendChild(label);
      row.appendChild(value);
      specsBody.appendChild(row);
    });
  }

  function renderProduct(productId) {
    var product = null;
    categoryProducts.forEach(function (candidate) {
      if (candidate.id === productId) product = candidate;
    });
    if (!product) return;

    setProductImage(getProductImage(product), product.name);

    var name = getElement('filter-product-name');
    var description = getElement('filter-product-desc');
    var display = getElement('product-filter-display');
    if (name) name.textContent = product.name;
    if (description) description.textContent = product.description;
    if (display) display.setAttribute('aria-labelledby', 'product-tab-' + product.id);

    renderColors(product);
    renderSpecifications(product);
  }

  function init() {
    if (!categoryKey || !window.PRODUCTS_DATA || !window.PRODUCTS_DATA.products) return;

    window.PRODUCTS_DATA.products.forEach(function (product) {
      if (product.category === categoryKey) categoryProducts.push(product);
    });

    renderTabs();
    if (categoryProducts.length > 0) renderProduct(categoryProducts[0].id);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
