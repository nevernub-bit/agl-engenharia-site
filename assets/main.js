/* AGL Engenharia — interações */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- nav: estado ao rolar ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('is-solid', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- menu mobile ---------- */
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    mobile.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  mobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080 && nav.classList.contains('is-open')) setMenu(false);
  });

  /* ---------- reveal no scroll ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- linha de progresso do processo ---------- */
  const progress = document.getElementById('processProgress');
  const processSection = document.getElementById('processo');
  if (progress && processSection) {
    let raf = null;
    const update = () => {
      raf = null;
      const rect = processSection.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.82;
      const total = rect.height * 0.55;
      const raw = (start - rect.top) / Math.max(total, 1);
      const pct = Math.min(Math.max(raw, 0), 1) * 100;
      progress.style.width = pct + '%';
    };
    const request = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
  }

  /* ---------- formulário → WhatsApp (sem backend) ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.nome.value.trim();
      const tipo = form.tipo.value;
      const msg = form.mensagem.value.trim();

      if (!name) {
        form.nome.focus();
        form.nome.style.borderColor = '#C8342B';
        return;
      }

      const lines = [
        `Olá, vim pelo site da AGL Engenharia.`,
        ``,
        `Nome: ${name}`,
        `Serviço: ${tipo}`,
      ];
      if (msg) lines.push(``, msg);

      const url = 'https://wa.me/5565992209399?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });

    form.nome.addEventListener('input', () => {
      form.nome.style.borderColor = '';
    });
  }

  /* ---------- ano do rodapé ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
