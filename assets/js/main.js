/**
 * Main JavaScript file for C# Learning Resources
 * Handles animations, interactions, and dynamic content
 */

(function () {
  'use strict';

  // Initialize when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initApp);

  /**
   * Main initialization function
   */
  function initApp() {
    setCurrentYear();
    setupSmoothScrolling();
    setupCTATracking();
    setupCardAnimations();
    setupCTAButtonAnimation();
  }

  /**
   * Set the current year in the footer copyright
   */
  function setCurrentYear() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  }

  /**
   * Setup smooth scrolling for anchor links
   */
  function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * Setup CTA button click tracking
   */
  function setupCTATracking() {
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('click', function () {
        console.log('CTA clicked - would track analytics in production');
        // In a real implementation, you would add analytics tracking here
      });
    }
  }

  /**
   * Setup card animations using Intersection Observer
   */
  function setupCardAnimations() {
    const cards = document.querySelectorAll('.resource-card');

    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add a slight delay between each card animation
            const index = Array.from(cards).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('card-visible');
            }, index * 100);

            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Set initial state and observe each card
      cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
      });
    } else {
      // Fallback for browsers that don't support Intersection Observer
      cards.forEach(card => {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      });
    }
  }

  /**
   * Setup CTA button animation
   */
  function setupCTAButtonAnimation() {
    const ctaButton = document.getElementById('cta-button');
    if (!ctaButton) return;

    // Function to add pulse animation
    const animateCTAButton = () => {
      ctaButton.classList.add('pulse');
      setTimeout(() => {
        ctaButton.classList.remove('pulse');
      }, 1000);
    };

    // Initial animation after 2 seconds
    setTimeout(animateCTAButton, 2000);

    // Set interval for repeated animation
    const pulseInterval = setInterval(animateCTAButton, 8000);

    // Pause animation when page is not visible to save resources
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(pulseInterval);
      } else {
        // Restart the interval when page becomes visible again
        clearInterval(pulseInterval); // Clear any existing interval
        setTimeout(animateCTAButton, 1000); // Immediate animation
        setInterval(animateCTAButton, 8000); // Restart interval
      }
    });

    // Add hover effect to stop animation
    ctaButton.addEventListener('mouseenter', () => {
      clearInterval(pulseInterval);
      ctaButton.classList.remove('pulse');
    });

    // Resume animation when mouse leaves
    ctaButton.addEventListener('mouseleave', () => {
      setTimeout(animateCTAButton, 2000);
      setInterval(animateCTAButton, 8000);
    });
  }
})();