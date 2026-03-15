(function () {
  'use strict';

  function getPartialsBase() {
    var pathname = window.location.pathname;
    var dir = pathname.lastIndexOf('/') >= 0 ? pathname.substring(0, pathname.lastIndexOf('/') + 1) : '';
    return dir + 'partials/';
  }

  function loadPartial(id, file) {
    var el = document.getElementById(id);
    if (!el) return Promise.resolve();
    var url = getPartialsBase() + file;
    return fetch(url).then(function (r) { return r.text(); }).then(function (html) {
      el.innerHTML = html;
    }).catch(function () {});
  }

  function loadPartials() {
    return Promise.all([
      loadPartial('utility-bar-placeholder', 'utility-bar.html'),
      loadPartial('header-placeholder', 'header.html'),
      loadPartial('footer-placeholder', 'footer.html')
    ]);
  }

  function setActiveNav() {
    var path = window.location.pathname;
    var page = path.split('/').filter(Boolean).pop() || 'index.html';
    if (page === 'product.html') page = 'products.html';
    var nav = document.querySelector('.main-nav');
    if (!nav) return;
    nav.querySelectorAll('a:not(.nav-cta)').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      var linkPage = href.split('#')[0].split('/').filter(Boolean).pop() || 'index.html';
      link.classList.toggle('active', linkPage === page);
    });
  }

  function init() {
    // Mobile nav toggle
    var navToggle = document.getElementById('navToggle');
    var mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('is-open');
      var icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
    }

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
          mainNav.classList.remove('is-open');
          var icon = navToggle.querySelector('i');
          if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
          }
        }
      });
    });
  }

  // Sticky header shadow
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = header ? header.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Scroll-triggered fade-up animations
  var fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { observer.observe(el); });
  }

  // Counter animation
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var duration = 2000;
    var start = 0;
    var startTime = null;
    var suffix = el.textContent.replace(/[0-9]/g, '');

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  // FAQ accordion
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');
        faqItems.forEach(function (fi) { fi.classList.remove('active'); });
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // Contact form
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');
      if (name && email && message) {
        var subject = encodeURIComponent('Project Inquiry from ' + name.value);
        var body = encodeURIComponent(
          'Name: ' + name.value + '\n' +
          'Email: ' + email.value + '\n' +
          'Phone: ' + (form.querySelector('#phone') ? form.querySelector('#phone').value : '') + '\n' +
          'Service: ' + (form.querySelector('#service') ? form.querySelector('#service').value : '') + '\n\n' +
          message.value
        );
        window.location.href = 'mailto:info@agroofsteel.com?subject=' + subject + '&body=' + body;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var hasPlaceholders = document.getElementById('utility-bar-placeholder');
    if (hasPlaceholders) {
      loadPartials().then(function () {
        setActiveNav();
        init();
      });
    } else {
      setActiveNav();
      init();
    }
  });

})();
