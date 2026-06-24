/* ==========================================================================
   Olow — Interactions
   ========================================================================== */
(function () {
  'use strict';

  /* ---- Sticky navbar state ---- */
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
    });
    document.querySelectorAll('.mobile-menu a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Animated counters ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var dur = 1700;
    var start = null;
    function ease(t) { return 1 - Math.pow(1 - t, 3); }
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var val = target * ease(p);
      el.textContent = val.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-target]');
  if ('IntersectionObserver' in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-target'); });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var ans = item.querySelector('.faq-a');
      var isOpen = item.classList.contains('open');
      // optional: close siblings
      var group = q.closest('.faq-list');
      if (group) {
        group.querySelectorAll('.faq-item.open').forEach(function (other) {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.faq-a').style.maxHeight = null;
            other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          }
        });
      }
      if (isOpen) {
        item.classList.remove('open');
        ans.style.maxHeight = null;
        q.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        ans.style.maxHeight = ans.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---- Contact form (demo handling) ---- */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.querySelector('#form-success');
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }

  /* ---- Legal TOC scroll-spy ---- */
  var tocLinks = document.querySelectorAll('.legal-toc a');
  if (tocLinks.length) {
    var sections = [];
    tocLinks.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var sec = document.getElementById(id);
      if (sec) sections.push({ link: link, sec: sec });
    });
    window.addEventListener('scroll', function () {
      var pos = window.scrollY + 140;
      var current = null;
      sections.forEach(function (s) { if (s.sec.offsetTop <= pos) current = s; });
      tocLinks.forEach(function (l) { l.classList.remove('active'); });
      if (current) current.link.classList.add('active');
    }, { passive: true });
  }

  /* ---- Tabs ---- */
  document.querySelectorAll('.tabs').forEach(function (group) {
    var btns = group.querySelectorAll('.tab-btn');
    var panels = group.querySelectorAll('.tab-panel');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        btns.forEach(function (b) { b.classList.toggle('active', b === btn); });
        panels.forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-panel') === target); });
      });
    });
  });

  /* ---- One-page scroll-spy (highlight nav link for section in view) ---- */
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  if (spyLinks.length) {
    var spyMap = spyLinks
      .map(function (link) {
        var sec = document.getElementById(link.getAttribute('href').slice(1));
        return sec ? { link: link, sec: sec } : null;
      })
      .filter(Boolean);
    var spy = function () {
      var pos = window.scrollY + (window.innerHeight * 0.32);
      var active = null;
      spyMap.forEach(function (s) { if (s.sec.offsetTop <= pos) active = s; });
      spyLinks.forEach(function (l) { l.classList.remove('current'); });
      if (active) active.link.classList.add('current');
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy();
  }

  /* ---- Current year ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
