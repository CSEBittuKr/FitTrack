document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-menu-actions .btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('is-open');
      if (isOpen) {
        mobileMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      } else {
        mobileMenu.classList.add('is-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        mobileMenu.setAttribute('aria-hidden', 'false');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }

  const demoTabs = document.querySelectorAll('.demo-tab');
  const demoPanels = document.querySelectorAll('.demo-panel');

  demoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      demoTabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });

      demoPanels.forEach(p => {
        p.classList.remove('is-active');
      });

      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(`panel${targetTab.charAt(0).toUpperCase() + targetTab.slice(1)}`);
      if (targetPanel) {
        targetPanel.classList.add('is-active');
      }
    });
  });

  const heroHabitCheckboxes = document.querySelectorAll('#heroHabitsList .habit-checkbox');
  const heroHabitsCount = document.getElementById('heroHabitsCount');

  function updateHeroHabits() {
    if (!heroHabitsCount || heroHabitCheckboxes.length === 0) return;
    const total = heroHabitCheckboxes.length;
    let checked = 0;
    heroHabitCheckboxes.forEach(cb => {
      if (cb.checked) checked++;
    });
    const pct = Math.round((checked / total) * 100);
    heroHabitsCount.textContent = `${checked} of ${total} completed (${pct}%)`;
  }

  heroHabitCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateHeroHabits);
  });

  const demoHabitCards = document.querySelectorAll('#interactiveHabitsList .demo-habit-card');
  const demoHabitsStatus = document.getElementById('demoHabitsStatus');

  function updateDemoHabitsStatus() {
    if (!demoHabitsStatus || demoHabitCards.length === 0) return;
    const total = demoHabitCards.length;
    let completed = 0;
    demoHabitCards.forEach(card => {
      if (card.classList.contains('is-completed')) {
        completed++;
      }
    });
    const pct = Math.round((completed / total) * 100);
    demoHabitsStatus.textContent = `${completed} of ${total} Completed (${pct}%)`;
  }

  demoHabitCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const isCompleted = card.classList.contains('is-completed');
      const btn = card.querySelector('.demo-check-btn');
      const streak = card.querySelector('.demo-streak-tag');

      if (isCompleted) {
        card.classList.remove('is-completed');
        if (btn) btn.textContent = '';
        if (streak && streak.classList.contains('tag-pending')) {
          streak.textContent = 'Pending';
        }
      } else {
        card.classList.add('is-completed');
        if (btn) btn.textContent = '✓';
        if (streak && streak.classList.contains('tag-pending')) {
          streak.textContent = '🔥 1d';
        }
      }
      updateDemoHabitsStatus();
    });
  });

  const revealElements = document.querySelectorAll('.showcase-card, .feature-card, .step-card');
  revealElements.forEach(el => el.classList.add('reveal-on-scroll'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  const brandLogo = document.getElementById('brandLogo');
  const easterEggToast = document.getElementById('easterEggToast');
  let clickCount = 0;
  let clickTimer = null;

  if (brandLogo && easterEggToast) {
    brandLogo.addEventListener('click', (e) => {
      clickCount++;

      if (clickCount === 1) {
        clickTimer = setTimeout(() => {
          clickCount = 0;
        }, 1200);
      } else if (clickCount === 3) {
        clearTimeout(clickTimer);
        clickCount = 0;

        easterEggToast.classList.add('is-visible');
        setTimeout(() => {
          easterEggToast.classList.remove('is-visible');
        }, 4000);
      }
    });
  }
});
