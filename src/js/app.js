import Widget from './widget';

// data-id виджета, id объекта, содержащего svg, id самой svg
const widget = new Widget('tab');
widget.create();

setTimeout(() => {
  // Простенький API, если я всё правильно понял
  widget.changeSvgColor('tab_3');
}, 200);

setTimeout(() => {
  // Простенький API, если я всё правильно понял
  widget.changeSvgColor('tab_1');
}, 700);
