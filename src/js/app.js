import Widget from './widget';

// data-id виджета, id объекта, содержащего svg, id самой svg
window.widget = new Widget('tab', 'object-map', 'Layer_1');
window.widget.create();

setTimeout(() => {
  // Простенький API, если я всё правильно понял
  widget.changeSvgColor('tab_1', 'tab_5');
}, 200);
