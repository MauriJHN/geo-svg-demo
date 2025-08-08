// reference svg element inside <object> element and change one of its paths' fill color

const svgObj = document.querySelector('object#svg-obj');
const yellowPath = svgObj.contentDocument.querySelector('path#yellow');
yellowPath.style.fill = 'red';

// create a repeating transition from yellow to red and back

const transition = yellowPath.animate([
  { fill: 'yellow' },
  { fill: '#fff' },
  { fill: 'yellow' },
  { fill: 'rgba(0,0,0,0)' },
  { strokeWidth: '4px' },
  { stroke: 'yellow' },
], {
  duration: 10000,
  iterations: Infinity
});
