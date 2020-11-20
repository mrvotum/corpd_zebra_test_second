import Widget from './widget';

// data-id виджета, id объекта, содержащего svg, id самой svg
const widget = new Widget('tab');
widget.create();

setTimeout(() => {
  // Простенький API, если я всё правильно понял
  widget.changeSvgColor('32');
}, 200);

setTimeout(() => {
  // Простенький API, если я всё правильно понял
  widget.changeSvgColor('1');
}, 700);
