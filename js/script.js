// reference svg element inside <object> element and change one of its paths' fill color

const object = document.querySelector('object');
const path = object.contentDocument.querySelector('path#yellow');
path.style.fill = 'red';

// create a repeating transition from yellow to red and back

const transition = path.animate([
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
