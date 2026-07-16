document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-button');
const mainMenu = document.querySelector('.main-nav');

function closeMenu() {
  if (!menuButton || !mainMenu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  mainMenu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

if (menuButton && mainMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mainMenu.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  mainMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const copyButton = document.querySelector('[data-copy]');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const text = copyButton.dataset.copy;
    const feedback = copyButton.parentElement.querySelector('.copy-feedback');
    try {
      await navigator.clipboard.writeText(text);
      feedback.textContent = 'Chave copiada.';
    } catch {
      feedback.textContent = 'Selecione e copie a chave acima.';
    }
    window.setTimeout(() => { feedback.textContent = ''; }, 3200);
  });
}

const shareButton = document.querySelector('.share-button');
if (shareButton) {
  shareButton.addEventListener('click', async () => {
    const shareData = {
      title: 'Instituto Baktaran Irmãs Coragem',
      text: 'Conheça o trabalho do IBIC e descubra como ajudar.',
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        shareButton.firstChild.textContent = 'Link copiado ';
        window.setTimeout(() => { shareButton.firstChild.textContent = 'Compartilhar esta página '; }, 2500);
      }
    } catch (error) {
      if (error.name !== 'AbortError') console.error(error);
    }
  });
}

const animals = [
  { name: 'Alegria', type: 'cachorro', image: 'assets/animais/alegria.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '7 anos' },
  { name: 'Amanda', type: 'cachorro', image: 'assets/animais/amanda.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '10 anos' },
  { name: 'Boiadeira', type: 'cachorro', image: 'assets/animais/boiadeira.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '4 anos' },
  { name: 'Branquinha', type: 'cachorro', image: 'assets/animais/branquinha.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '8 anos', note: 'Em vários tratamentos' },
  { name: 'Caju', type: 'cachorro', image: 'assets/animais/caju.png', sex: 'Macho', sexIcon: 'fa-mars', age: '15 anos' },
  { name: 'Carrabas', type: 'cachorro', image: 'assets/animais/carrabas.png', sex: 'Macho', sexIcon: 'fa-mars', age: '4 anos' },
  { name: 'Chocolate', type: 'cachorro', image: 'assets/animais/chocolate.png', sex: 'Macho', sexIcon: 'fa-mars', age: '9 anos', note: 'PNE' },
  { name: 'Clarinha', type: 'cachorro', image: 'assets/animais/clarinha.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '4 anos' },
  { name: 'Eufrates', type: 'cachorro', image: 'assets/animais/eufrates.png', sex: 'Macho', sexIcon: 'fa-mars', age: '5 anos' },
  { name: 'Forever', type: 'cachorro', image: 'assets/animais/forever.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '6 anos' },
  { name: 'Grey', type: 'cachorro', image: 'assets/animais/grey.png', sex: 'Macho', sexIcon: 'fa-mars', age: '9 anos', note: 'Em vários tratamentos' },
  { name: 'Guerreiro', type: 'cachorro', image: 'assets/animais/guerreiro.png', sex: 'Macho', sexIcon: 'fa-mars', age: '4 anos' },
  { name: 'Ingrid', type: 'cachorro', image: 'assets/animais/ingrid.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '7 anos' },
  { name: 'Jacaré', type: 'cachorro', image: 'assets/animais/jacaré.png', sex: 'Macho', sexIcon: 'fa-mars', age: '8 anos' },
  { name: 'Katito', type: 'cachorro', image: 'assets/animais/katito.png', sex: 'Macho', sexIcon: 'fa-mars', age: '5 anos' },
  { name: 'Lifer', type: 'cachorro', image: 'assets/animais/lifer.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '6 anos' },
  { name: 'Lotus', type: 'cachorro', image: 'assets/animais/lotus.png', sex: 'Macho', sexIcon: 'fa-mars', age: '4 anos' },
  { name: 'Major Pabla', type: 'cachorro', image: 'assets/animais/major pabla.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '6 anos' },
  { name: 'Mexicana', type: 'cachorro', image: 'assets/animais/mexicana.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '5 anos', note: 'Fez cirurgia nas orelhas' },
  { name: 'Mocinha', type: 'cachorro', image: 'assets/animais/mocinha.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '6 anos', note: 'Fez tratamento nos olhos' },
  { name: 'Myway', type: 'cachorro', image: 'assets/animais/myway.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '5 anos' },
  { name: 'Nevinha', type: 'cachorro', image: 'assets/animais/nevinho.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '8 anos' },
  { name: 'Pastora', type: 'cachorro', image: 'assets/animais/pastora.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '5 anos' },
  { name: 'Plutão', type: 'cachorro', image: 'assets/animais/plutao.png', sex: 'Macho', sexIcon: 'fa-mars', age: '7 anos', note: 'Problema renal' },
  { name: 'Pretinha', type: 'cachorro', image: 'assets/animais/pretinha.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '7 anos', note: 'PNE' },
  { name: 'Princeso', type: 'cachorro', image: 'assets/animais/princeso.png', sex: 'Macho', sexIcon: 'fa-mars', age: '4 anos' },
  { name: 'Sansão', type: 'cachorro', image: 'assets/animais/sansao.png', sex: 'Macho', sexIcon: 'fa-mars', age: '8 anos' },
  { name: 'Tamanquinho', type: 'cachorro', image: 'assets/animais/tamanquinho.png', sex: 'Macho', sexIcon: 'fa-mars', age: '5 anos' },
  { name: 'Tamisa', type: 'cachorro', image: 'assets/animais/tamisa.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '6 anos' },
  { name: 'Vaqueira', type: 'cachorro', image: 'assets/animais/vaqueira.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '4 anos' },
  { name: 'Calandre', type: 'gato', image: 'assets/animais/calandre.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '2 anos' },
  { name: 'Chico', type: 'gato', image: 'assets/animais/chico.png', sex: 'Macho', sexIcon: 'fa-mars', age: '4 anos' },
  { name: 'Dominó', type: 'gato', image: 'assets/animais/dominó.png', sex: 'Macho', sexIcon: 'fa-mars', age: '3 anos' },
  { name: 'Estrelinha', type: 'gato', image: 'assets/animais/estrelinha.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '3 anos' },
  { name: 'Eternity', type: 'gato', image: 'assets/animais/eternity.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '2 anos' },
  { name: 'Kiss', type: 'gato', image: 'assets/animais/kiss.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '2 anos', note: 'PNE' },
  { name: 'Mexerica e Laranjinha', type: 'gato', image: 'assets/animais/mexirica e laranjinha.png', sex: 'Machos', sexIcon: 'fa-mars', age: '7 meses' },
  { name: 'Nina', type: 'gato', image: 'assets/animais/nina.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '3 anos' },
  { name: 'Tigresa', type: 'gato', image: 'assets/animais/tigresa.png', sex: 'Fêmea', sexIcon: 'fa-venus', age: '3 anos' }
];

const animalsGrid = document.querySelector('[data-animals-grid]');
const animalFilterButtons = document.querySelectorAll('[data-animal-filter]');
const animalsViewport = document.querySelector('[data-animals-viewport]');
const animalScrollButtons = document.querySelectorAll('[data-animal-scroll]');
const animalImageVersion = '20260715-2';

function animalCardTemplate(animal, index) {
  const message = encodeURIComponent(`Olá, quero saber mais sobre o apadrinhamento de ${animal.name}.`);
  const note = animal.note
    ? `<span><i class="fa-solid fa-circle-info" aria-hidden="true"></i> ${animal.note}</span>`
    : '';

  return `
    <article class="animal-card reveal" data-animal-type="${animal.type}">
      <figure class="animal-poster">
        <img src="${animal.image}?v=${animalImageVersion}" width="1080" height="1920" loading="${index < 4 ? 'eager' : 'lazy'}" alt="Post de apadrinhamento de ${animal.name}, ${animal.sex.toLowerCase()}, ${animal.age}" />
        <span class="animal-photo-fade" aria-hidden="true"></span>
      </figure>
      <div class="animal-card-copy">
        <span class="animal-kicker">Disponível para apadrinhamento</span>
        <h3>${animal.name}</h3>
        <div class="animal-meta" aria-label="Informações de ${animal.name}">
          <span><i class="fa-solid ${animal.sexIcon}" aria-hidden="true"></i> ${animal.sex}</span>
          <span><i class="fa-solid fa-cake-candles" aria-hidden="true"></i> ${animal.age}</span>
          ${note}
        </div>
        <a class="animal-sponsor-button" href="https://wa.me/556182348486?text=${message}" target="_blank" rel="noopener noreferrer">Quero apadrinhar <span>↗</span></a>
      </div>
    </article>
  `;
}

if (animalsGrid) {
  animalsGrid.innerHTML = animals.map(animalCardTemplate).join('');
}

function updateAnimalNav() {
  if (!animalsViewport || !animalScrollButtons.length) return;

  const maxScroll = animalsViewport.scrollWidth - animalsViewport.clientWidth;
  const hasOverflow = maxScroll > 2;

  animalScrollButtons.forEach((button) => {
    const direction = button.dataset.animalScroll;
    const isPrevDisabled = direction === 'prev' && animalsViewport.scrollLeft <= 2;
    const isNextDisabled = direction === 'next' && animalsViewport.scrollLeft >= maxScroll - 2;
    button.disabled = !hasOverflow || isPrevDisabled || isNextDisabled;
  });
}

if (animalsViewport && animalScrollButtons.length) {
  animalScrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.animalScroll === 'next' ? 1 : -1;
      animalsViewport.scrollBy({
        left: direction * animalsViewport.clientWidth,
        behavior: 'smooth'
      });
    });
  });

  animalsViewport.addEventListener('scroll', updateAnimalNav, { passive: true });
  window.addEventListener('resize', updateAnimalNav);
  window.requestAnimationFrame(updateAnimalNav);
}

if (animalFilterButtons.length && animalsGrid) {
  animalFilterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.animalFilter;

      animalFilterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      animalsGrid.querySelectorAll('[data-animal-type]').forEach((card) => {
        card.hidden = filter !== 'todos' && card.dataset.animalType !== filter;
      });

      if (animalsViewport) {
        animalsViewport.scrollTo({ left: 0, behavior: 'smooth' });
        window.requestAnimationFrame(updateAnimalNav);
      }
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const yearElement = document.querySelector('[data-current-year]');
if (yearElement) yearElement.textContent = new Date().getFullYear();
