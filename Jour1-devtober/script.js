const cartes = document.querySelectorAll('.carte'); // récupère TOUTES les cartes

cartes.forEach(carte => { // on boucle sur chaque carte
  carte.addEventListener('click', () => {
    carte.classList.toggle('is-flipped'); // on flip seulement celle qu’on clique
  });
});