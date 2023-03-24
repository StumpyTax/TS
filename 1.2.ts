document.addEventListener('click', (e) => {
  //Полей posX и posY в MouseEvent нет, но можно предположить что искались координаты мыши на странице. 
  //Не указан тип переменной.
  const coords:number[] = [e.pageX, e.pageY];
  console.log(`Point is ${coords[0]}, ${coords[1]}`);
});