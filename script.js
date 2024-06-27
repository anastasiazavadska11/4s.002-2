// const inpResizer = document.querySelector('.slider__input');
// const image = document.querySelector('.slider__image');
// image.setAttribute('width', inpResizer.value);

// function resize (event) {
//     image.setAttribute('width', event.target.value)
// }

// inpResizer.addEventListener('input', _.debounce(resize,
// 300,
// {
//     leading: true,
//     trailing: false,
// }));
const box = document.getElementById('box');
box.addEventListener('mousedown', onMouseDown);

 function onMouseDown (event) {

  box.style.position = 'absolute';
  box.style.zIndex = 1000;

  document.body.append(box);

  function moveAt(pageX, pageY) {
    box.style.left = pageX - box.offsetWidth / 2 + 'px';
    box.style.top = pageY - box.offsetHeight / 2 + 'px';
  }

  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  let throttled =  _.throttle(onMouseMove, 100);

  document.addEventListener('mousemove', throttled);

  document.addEventListener('mouseup', onMouseUp)

  function onMouseUp() {
    document.removeEventListener('mousemove', throttled);
  };


};