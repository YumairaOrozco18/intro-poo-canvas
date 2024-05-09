const canvasOOP = document.getElementById("canvasOOP");
const ctx = canvasOOP.getContext("2d"); //ctx=contexto

/*const window_height = window.innerHeight; //Ajusta tamaño de la pagina
const window_width = window.innerWidth;*/

canvasOOP.height = "200"; /*window_height; //el canvas tendra el ancho de la pantalla*/
canvasOOP.width = "300"; /*window_width;*/ // se escribe solo el numero sin el px

canvasOOP.style.background = "#ff8";

class Circle {

    // constructor que carga los valores determinados que carga el objeto
    constructor(x, y, radius, color, text) { // x & y posicion que ocupara el circulo 
        this.posX = x; // con el this creamos propiedades
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }

    //metodo para renderizar el objeto
    draw(context) {
        context.beginPath();

        context.strokeStyle = this.color; //estilo de la linea, viene del color que ya esta cargado el objeto
        context.textAlign = "center"; //alineacion horizontal 
        context.textBaseline = "middle"; // alineacion vertical 
        context.font = "20px Arial"; // tamaño y tipo de letra

        //renderiza un texto en el centro del objeto
        context.fillText(this.text, this.posX, this.posY); // texto que se dibuja en una coordenada

        context.lineWidth = 2; //ancho de linea 
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);  //dibujar un arco el false para ir como las manecillas del reloj
        context.stroke();
        context.closePath();
    }
}
let randomX = Math.random() * canvasOOP.width; //
let randomY = Math.random() * canvasOOP.height; //
let randomRadius = Math.floor(Math.random() * 100 + 30); 

let miCirculo = new Circle(
    randomX, 
    randomY,
    randomRadius,
    'red',
    'Tec'); //coordenadas iniciales no superan el tamaño del canvas
miCirculo.draw(ctx);