// Toggle the mobile navigation menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex', !isHidden);
  menuBtn.setAttribute('aria-expanded', String(!isHidden));
});

// Close the mobile menu after choosing a link
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});
