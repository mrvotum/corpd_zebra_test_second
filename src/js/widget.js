export default class Widget {
  constructor(widgetId, objectId, svgId) {
    this.widget = document.querySelector(`[data-id=${widgetId}]`);
    this.tabTitles = this.widget.querySelector('[data-id=tab__titles]');
    this.svgDoc = document.getElementById(objectId);
    this.obj = svgId;
  }

  create() {
    this.addListener();
  }

  addListener() {
    const tabTitlesArr = this.widget.getElementsByClassName('tab-el__title');

    tabTitlesArr.forEach((element) => {
      element.addEventListener('click', (event) => {
        this.clickedElement = event.target;

        // Перекрасим элементы карты
        this.changeSvgColor(this.clickedElement.getAttribute('data-id'), this.widget.querySelector('[data-type=tab__content--active]').getAttribute('data-for'));
      });
    });
  }

  showNewTab() {
    console.log(this.clickedElement);

    const activeContent = this.widget.querySelector(`[data-for=${this.clickedElement.getAttribute('data-id')}]`);
    activeContent.setAttribute('data-type', 'tab__content--active');
    activeContent.classList.add('tab-el__content--active');

    this.clickedElement.setAttribute('data-type', 'tab--active');
    this.clickedElement.classList.add('tab-el__title--active');
  }

  hideOldTab() {
    const activedContent = this.widget.querySelector('[data-type=tab__content--active]');
    activedContent.setAttribute('data-type', 'tab__content');
    activedContent.classList.remove('tab-el__content--active');

    const activedTitle = this.widget.querySelector('[data-type=tab--active]');
    activedTitle.setAttribute('data-type', 'tab');
    activedTitle.classList.remove('tab-el__title--active');

    // Проявим нужную вкладку
    this.showNewTab();
  }

  changeSvgColor(oldTab, newTab, clickedElement) {
    if (clickedElement) {
      // Нужно для работы подобия API
      this.clickedElement = clickedElement;
    }

    const svg = this.svgDoc.contentDocument;
    const obj = svg.getElementById(this.obj);
    obj.getElementById(newTab).style.fill = '#004062';
    obj.getElementById(oldTab).style.fill = '#F39200';

    // Скроем вкладку, что уже была открыта
    this.hideOldTab();
  }
}
