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
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('Unable to load ' + url + ' (' + r.status + ')');
      return r.text();
    }).then(function (html) {
      el.innerHTML = html;
    }).catch(function (error) {
      renderPartialFallback(el, id);
      if (window.console && window.console.error) window.console.error(error);
    });
  }

  function renderPartialFallback(el, id) {
    if (id === 'utility-bar-placeholder') {
      el.innerHTML = '<div class="utility-bar"><div class="container"><div class="utility-bar__left"><a href="tel:+639912055087">+63 991 205 5087</a><a href="mailto:agroofsteel@yahoo.com">agroofsteel@yahoo.com</a></div></div></div>';
      return;
    }

    if (id === 'header-placeholder') {
      el.innerHTML = '<header class="site-header"><div class="container"><a href="/" class="site-logo" aria-label="A and G Roof Steel Builders home"><img src="img/logo.png?v=2" alt="A & G Roof Steel Builders"></a><button class="nav-toggle" id="navToggle" type="button" aria-label="Open navigation" aria-controls="mainNav" aria-expanded="false"><i class="fas fa-bars" aria-hidden="true"></i></button><nav class="main-nav" id="mainNav" aria-label="Primary navigation"><a href="/">Home</a><a href="about.html">About</a><a href="services.html">Services</a><a href="products.html">Products</a><a href="projects.html">Projects</a><a href="/#contact" class="nav-cta">Get a Quote</a></nav></div></header>';
      return;
    }

    if (id === 'footer-placeholder') {
      el.innerHTML = '<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><div class="footer-brand__identity"><img src="img/aglogobw.webp?v=1" alt="A&G Roof Steel Builders logo" class="footer-brand__logo" loading="lazy"></div><p>Premium steel roofing and building solutions. Trusted since 2012.</p></div><div class="footer-col"><h4>Quick Links</h4><ul><li><a href="/">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="services.html">Services</a></li><li><a href="products.html">Products</a></li><li><a href="projects.html">Projects</a></li></ul></div><div class="footer-col"><h4>Contact Us</h4><div class="footer-contact"><div class="footer-contact-item"><a href="tel:+639912055087">+63 991 205 5087</a></div><div class="footer-contact-item"><a href="mailto:agroofsteel@yahoo.com">agroofsteel@yahoo.com</a></div></div></div></div></div></footer>';
    }
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
        var isOpen = mainNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        var icon = navToggle.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        }
      });

      mainNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          if (window.innerWidth <= 768) {
            mainNav.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Open navigation');
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
  faqItems.forEach(function (item, index) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    if (question && answer) {
      var questionId = 'faq-question-' + (index + 1);
      var answerId = 'faq-answer-' + (index + 1);
      question.id = questionId;
      answer.id = answerId;
      question.setAttribute('aria-expanded', 'false');
      question.setAttribute('aria-controls', answerId);
      answer.setAttribute('role', 'region');
      answer.setAttribute('aria-labelledby', questionId);
      answer.hidden = true;
      question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');
        faqItems.forEach(function (fi) {
          fi.classList.remove('active');
          var fiQuestion = fi.querySelector('.faq-question');
          var fiAnswer = fi.querySelector('.faq-answer');
          if (fiQuestion) fiQuestion.setAttribute('aria-expanded', 'false');
          if (fiAnswer) fiAnswer.hidden = true;
        });
        if (!isActive) {
          item.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
          answer.hidden = false;
        }
      });
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
