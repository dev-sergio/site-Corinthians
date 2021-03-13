import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowPedaco = window.innerHeight * 0.8;

    // debounce serve para não acionar o mesmo evento tão rapidamente
    // 1. função, 2. tempo de espera
    this.checkDistancia = debounce(this.checkDistancia.bind(this), 50);
  }

  // pega distancia entre o topo do componente com o topo da pagina
  getDistancia() {
    this.distancia = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowPedaco),
      };
    });
  }

  // verifica a distancia em comparação com o scroll do site
  checkDistancia() {
    this.distancia.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistancia();
      this.checkDistancia();
      window.addEventListener('scroll', this.checkDistancia);
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistancia);
  }
}
