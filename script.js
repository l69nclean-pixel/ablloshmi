const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

menuBtn?.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('quoteForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = `Demande de devis - ${data.get('nom')}`;
  const body = [
    `Nom : ${data.get('nom')}`,
    `Téléphone : ${data.get('telephone')}`,
    `E-mail : ${data.get('email') || ''}`,
    `Projet : ${data.get('projet')}`,
    '',
    `Message : ${data.get('message') || ''}`
  ].join('\n');

  // À remplacer par l'adresse e-mail réelle de l'entreprise.
  window.location.href =
    `mailto:contact@blloshmi-peinture.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  note.textContent = "Votre logiciel de messagerie va s’ouvrir pour envoyer la demande.";
});
