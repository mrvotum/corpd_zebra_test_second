export default class Widget {
  constructor() {
    this.widget = document.querySelector('[data-id=widget--tab]');
    this.tabTitles = this.widget.querySelector('[data-id=tab__titles]');
  }

  create() {
    this.addListener();
    // this.createTabsWidth();
  }

  addListener() {
    this.tabTitles.addEventListener('click', (event) => {
      const clickedElement = event.target;
      // Проверяем, что кликнули на вкладку
      if (clickedElement.getAttribute('data-type') === 'tab') {
        // Перекрасим элементы карты
        this.kek(clickedElement.getAttribute('data-id'), this.widget.querySelector('[data-type=tab__content--active]').getAttribute('data-for'));

        // Скроем вкладку, что уже была открыта
        this.hideOldTab();

        // Проявим нужную вкладку
        this.showNewTab(clickedElement);
      }
    });
  }

  showNewTab(clickedElement) {
    const activeContent = this.widget.querySelector(`[data-for=${clickedElement.getAttribute('data-id')}]`);
    activeContent.setAttribute('data-type', 'tab__content--active');
    activeContent.classList.add('tab-el__content--active');

    clickedElement.setAttribute('data-type', 'tab--active');
    clickedElement.classList.add('tab-el__title--active');
  }

  hideOldTab() {
    const activedContent = this.widget.querySelector('[data-type=tab__content--active]');
    activedContent.setAttribute('data-type', 'tab__content');
    activedContent.classList.remove('tab-el__content--active');

    const activedTitle = this.widget.querySelector('[data-type=tab--active]');
    activedTitle.setAttribute('data-type', 'tab');
    activedTitle.classList.remove('tab-el__title--active');
  }

  createTabsWidth() {
    for (let i = 0; i < this.tabTitles.childElementCount; i += 1) {
      const element = this.tabTitles.children[i];
      element.style.width = `calc(100% / ${this.tabTitles.childElementCount})`;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  kek(oldTab, newTab) {
    console.log(oldTab, newTab);
    const svgDoc = document.getElementById('object-map');
    const svg = svgDoc.contentDocument;
    const obj = svg.getElementById('Layer_1');
    obj.getElementById(newTab).style.fill = '#004062';
    obj.getElementById(oldTab).style.fill = '#F39200';
  }
}
