export default class Widget {
  constructor(widgetId) {
    this.widget = document.querySelector(`[data-id=${widgetId}]`);
    this.tabTitles = this.widget.querySelector('[data-id=tab__titles]');
    this.map = this.widget.querySelector('svg');
  }

  create() {
    this.addListener();
  }

  addListener() {
    const tabTitlesArr = this.widget.getElementsByClassName('tab-el__title');

    tabTitlesArr.forEach((element) => {
      element.addEventListener('click', (event) => {
        const clickedElement = event.currentTarget;

        // Перекрасим элементы карты
        this.changeSvgColor(clickedElement.getAttribute('data-id'));
      });
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

  changeSvgColor(clickedTab) {
    const openedTab = this.widget.querySelector('[data-type=tab__content--active]').getAttribute('data-for');

    this.map.querySelector(`[id=${openedTab}]`).classList.remove('map__coutnry--active');
    this.map.querySelector(`[id=${clickedTab}]`).classList.add('map__coutnry--active');

    // Скроем вкладку, что уже была открыта
    this.hideOldTab();

    setTimeout(() => {
      // Проявим нужную вкладку
      this.showNewTab(this.widget.querySelector(`[data-id=${clickedTab}]`));
    }, 100);
  }
}
