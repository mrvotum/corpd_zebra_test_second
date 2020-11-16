import Widget from './widget';

// data-id виджета, id объекта, содержащего svg, id самой svg
const widget = new Widget('tab', 'object-map', 'Layer_1');
widget.create();

setTimeout(() => {
  const clickedElement = document.querySelector('[data-id=tab_1]');
  // Простенький API, если я всё правильно понял
  widget.changeSvgColor('tab_5', 'tab_1', clickedElement);
}, 500);
