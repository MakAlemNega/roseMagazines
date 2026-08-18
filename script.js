document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const body = document.body;
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const themeToggle = document.querySelector("#theme-toggle");
  const yearElements = document.querySelectorAll("[data-year]");

  /* ---------------------------------------------------------
     Current year
     --------------------------------------------------------- */
  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  /* ---------------------------------------------------------
     Mobile navigation
     --------------------------------------------------------- */
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      menuToggle.classList.toggle("is-active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      body.classList.toggle("nav-open", isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.classList.remove("is-active");
        menuToggle.setAttribute("aria-expanded", "false");
        body.classList.remove("nav-open");
      });
    });
  }

  /* ---------------------------------------------------------
     Header appearance on scroll
     --------------------------------------------------------- */
  const updateHeader = () => {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 40);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ---------------------------------------------------------
     Smooth scrolling
     --------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });
    });
  });

  /* ---------------------------------------------------------
     Theme toggle
     --------------------------------------------------------- */
  const savedTheme = localStorage.getItem("rose-magazines-theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  const updateThemeButton = () => {
    if (!themeToggle) return;

    const darkMode = body.classList.contains("dark-mode");

    themeToggle.setAttribute(
      "aria-label",
      darkMode ? "Switch to light mode" : "Switch to dark mode",
    );

    themeToggle.setAttribute("aria-pressed", String(darkMode));

    const icon = themeToggle.querySelector("[data-theme-icon]");

    if (icon) {
      icon.textContent = darkMode ? "☀" : "☾";
    }
  };

  if (themeToggle) {
    updateThemeButton();

    themeToggle.addEventListener("click", () => {
      const darkMode = body.classList.toggle("dark-mode");

      localStorage.setItem("rose-magazines-theme", darkMode ? "dark" : "light");

      updateThemeButton();
    });
  }

  /* ---------------------------------------------------------
     Product / magazine filtering
     --------------------------------------------------------- */
  const filterButtons = document.querySelectorAll("[data-filter]");
  const productItems = document.querySelectorAll("[data-category]");

  if (filterButtons.length && productItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((item) => {
          item.classList.toggle("active", item === button);
          item.setAttribute("aria-pressed", String(item === button));
        });

        productItems.forEach((item) => {
          const category = item.dataset.category;
          const shouldShow = filter === "all" || category === filter;

          item.hidden = !shouldShow;
          item.classList.toggle("is-hidden", !shouldShow);
        });
      });
    });
  }

  /* ---------------------------------------------------------
     Quick-look modal
     --------------------------------------------------------- */
  const modal = document.querySelector("#quick-look-modal");
  const modalTitle = document.querySelector("#modal-title");
  const modalDescription = document.querySelector("#modal-description");
  const modalImage = document.querySelector("#modal-image");
  const modalPrice = document.querySelector("#modal-price");
  const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

  let lastFocusedElement = null;

  const openModal = (trigger) => {
    if (!modal) return;

    lastFocusedElement = document.activeElement;

    const title = trigger.dataset.title || "Rose Magazine";
    const description =
      trigger.dataset.description ||
      "A beautifully curated Rose Magazines edition.";
    const image = trigger.dataset.image || "";
    const price = trigger.dataset.price || "";

    if (modalTitle) modalTitle.textContent = title;
    if (modalDescription) modalDescription.textContent = description;
    if (modalPrice) modalPrice.textContent = price;

    if (modalImage) {
      if (image) {
        modalImage.src = image;
        modalImage.alt = title;
        modalImage.hidden = false;
      } else {
        modalImage.hidden = true;
        modalImage.removeAttribute("src");
      }
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");

    const firstFocusable = modal.querySelector(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    if (firstFocusable) {
      window.setTimeout(() => firstFocusable.focus(), 50);
    }
  };

  const closeModal = () => {
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  };

  document.querySelectorAll("[data-quick-look]").forEach((trigger) => {
    trigger.addEventListener("click", () => openModal(trigger));
  });

  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("is-open")) {
      closeModal();
    }
  });

  /* ---------------------------------------------------------
     Newsletter form
     --------------------------------------------------------- */
  const newsletterForm = document.querySelector("[data-newsletter-form]");
  const newsletterMessage = document.querySelector("[data-newsletter-message]");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');

      if (!emailInput || !emailInput.checkValidity()) {
        if (emailInput) emailInput.reportValidity();
        return;
      }

      if (newsletterMessage) {
        newsletterMessage.textContent =
          "Thank you. You’re now part of the Rose Magazines club.";
        newsletterMessage.classList.add("is-visible");
      }

      newsletterForm.reset();
    });
  }

  /* ---------------------------------------------------------
     Contact / enquiry form
     --------------------------------------------------------- */
  const contactForm = document.querySelector("[data-contact-form]");
  const contactMessage = document.querySelector("[data-contact-message]");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      if (contactMessage) {
        contactMessage.textContent =
          "Thanks for getting in touch. We’ll get back to you shortly.";
        contactMessage.classList.add("is-visible");
      }

      contactForm.reset();
    });
  }

  /* ---------------------------------------------------------
     Scroll reveal
     --------------------------------------------------------- */
  const revealElements = document.querySelectorAll(
    ".reveal, .fade-up, [data-reveal]",
  );

  if ("IntersectionObserver" in window && revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("revealed");
    });
  }

  /* ---------------------------------------------------------
     Active navigation link
     --------------------------------------------------------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const currentId = `#${entry.target.id}`;

          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === currentId,
            );
          });
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-20% 0px -55% 0px",
      },
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  /* ---------------------------------------------------------
     Back-to-top button
     --------------------------------------------------------- */
  const backToTop = document.querySelector("[data-back-to-top]");

  if (backToTop) {
    const updateBackToTop = () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 600);
    };

    updateBackToTop();

    window.addEventListener("scroll", updateBackToTop, {
      passive: true,
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* ---------------------------------------------------------
     Prevent broken image icons
     --------------------------------------------------------- */
  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.classList.add("image-error");
      image.alt = image.alt || "Rose Magazines";
    });
  });

  /* ---------------------------------------------------------
     Modal focus trap
     --------------------------------------------------------- */
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Tab" || !modal || !modal.classList.contains("is-open")) {
      return;
    }

    const focusable = modal.querySelectorAll(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
});
