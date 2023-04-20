//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

/*Al hacer clic en el botón "Click Me!" el color del fondo de body siempre cambia al mismo color, por ejemplo, amarillo*/

document.querySelector('button').addEventListener('click', function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('body').style.backgroundColor = randomColor;
});
