/* ==========================================================================
   NomConciergerie — main.js
   Comportements partagés par toutes les pages du site.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- menu mobile ---------- */
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  /* ---------- apparition au scroll ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: .15 });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- configurateur "durée d'absence" ----------
     Slider générique (aucune donnée client) : fait évoluer un tarif
     indicatif et débloque progressivement une checklist de prestations. */
  const durationRange = document.getElementById('durationRange');
  const durationVal = document.getElementById('durationVal');
  const priceVal = document.getElementById('priceVal');
  const checkItems = document.querySelectorAll('#checkList li');

  const TIERS = [
    { label: 'Pack Essentiel',    price: '39 €/mois' },
    { label: 'Pack Confort',   price: '69 €/mois' },
    { label: 'Pack "à la carte"',  price: 'Tarif sur demande' }
  ];

  function updateConfig() {
    const tier = parseInt(durationRange.value, 10);
    durationVal.textContent = TIERS[tier].label;
    priceVal.textContent = TIERS[tier].price;
    checkItems.forEach((li) => {
      const req = parseInt(li.dataset.tier, 10);
      li.classList.toggle('unlocked', tier >= req);
    });
  }

  if (durationRange) {
    durationRange.addEventListener('input', updateConfig);
    updateConfig();
  }

  /* ---------- accordéon FAQ ---------- */
  document.querySelectorAll('.faq-item button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- formulaire de contact (placeholder) ----------
     Pas d'envoi réel : à brancher sur un backend / service tiers. */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('formFeedback');
      if (feedback) {
        feedback.textContent = 'Formulaire de démonstration — à connecter à un service d\'envoi.';
      }
    });
  }

});
