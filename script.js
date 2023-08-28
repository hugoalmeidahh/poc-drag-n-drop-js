const box = document.getElementById('box');
const limitBox = document.getElementById('limit-box');

let isDragging = false;
let startX, startY;

box.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDrag);

function startDrag(e) {
  e.preventDefault();

  isDragging = true;
  startX = e.clientX - box.offsetLeft;
  startY = e.clientY - box.offsetTop;
}

function drag(e) {
  if (!isDragging) return;

  e.preventDefault();

  const x = e.clientX - startX;
  const y = e.clientY - startY;

  // Limitar a posição do box dentro do limite do limit-box
  const maxX = limitBox.offsetWidth - box.offsetWidth;
  const maxY = limitBox.offsetHeight - box.offsetHeight;
  
  const constrainedX = Math.max(0, Math.min(maxX, x));
  const constrainedY = Math.max(0, Math.min(maxY, y));

  box.style['margin-left'] = `${constrainedX}px`;
  box.style['margin-top'] = `${constrainedY}px`;
}

function stopDrag() {
  isDragging = false;
}
