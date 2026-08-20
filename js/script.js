// Adds a subtle shadow to the nav once the page scrolls past the hero top
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
// Adds a subtle shadow to the nav once the page scrolls past the hero top
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

// ===== Cursor / mouse drag-to-scroll =====
  const scrollBox = document.getElementById('teamScroll');
  let isDown = false;
  let startX;
  let scrollLeft;
 
  scrollBox.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollBox.classList.add('is-dragging');
    startX = e.pageX - scrollBox.offsetLeft;
    scrollLeft = scrollBox.scrollLeft;
  });
 
  scrollBox.addEventListener('mouseleave', () => {
    isDown = false;
    scrollBox.classList.remove('is-dragging');
  });
 
  scrollBox.addEventListener('mouseup', () => {
    isDown = false;
    scrollBox.classList.remove('is-dragging');
  });
 
  scrollBox.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollBox.offsetLeft;
    const walk = (x - startX) * 1.4; // drag speed
    scrollBox.scrollLeft = scrollLeft - walk;
  });
 
  // Trackpad / mouse wheel se bhi horizontal scroll ho jaye
  scrollBox.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      scrollBox.scrollLeft += e.deltaY;
    }
  }, { passive: false });




  // clinc==================================
  const track = document.getElementById('clinicsTrack');
  const slides = track.querySelectorAll('.clinic-card');
  const dotsWrap = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let current = 0;
  let autoTimer;
 
  // Build dots dynamically based on number of slides
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('button');
 
  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach(d => d.classList.remove('is-active'));
    dots[current].classList.add('is-active');
    restartAuto();
  }
 
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }
 
  function restartAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(next, 4000); // 4 second par next slide
  }
 
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
 
  restartAuto();



  // bloges+++++++++++++++++++++++++++
  // Optional: agar aap <a> tag ki jagah <div> use karna chahte ho, to yeh JS use karo
document.querySelectorAll('.blog-card').forEach(function (card) {
  card.addEventListener('click', function () {
    const url = card.getAttribute('data-url');
    if (url) {
      window.open(url, '_blank'); // naya tab mein khulega
    }
  });
});

// fqa++++++++++++++++++++++++++++++++
 const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // close all others (accordion behaviour)
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-icon').textContent = '→';
        }
      });

      // toggle current one
      const isActive = item.classList.contains('active');
      item.classList.toggle('active');
      item.querySelector('.faq-icon').textContent = isActive ? '→' : '↓';
    });
  });


  // frq+++++++++++++++++++++++++++++++++++++4
  // FAQ Accordion Toggle
// FAQ Accordion Toggle
document.addEventListener('DOMContentLoaded', function () {

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });

    // Sidebar Navigation Link Active Toggle
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

});