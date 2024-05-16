const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d"); //ctx=contexto
const ctxRandom = canvasRandom.getContext("2d"); 
const ctxMultiple = canvasMultiple.getContext("2d"); 

/*const window_height = window.innerHeight; //Ajusta tamaño de la pagina
const window_width = window.innerWidth;*/

canvasOOP.height = "200"; /*window_height; //el canvas tendra el ancho de la pantalla*/
canvasOOP.width = "300"; /*window_width;*/ // se escribe solo el numero sin el px
canvasRandom.height = "200"; /*window_height; //el canvas tendra el ancho de la pantalla*/
canvasRandom.width = "300"; /*window_width;*/ // se escribe solo el numero sin el px
canvasMultiple.height = "200"; /*window_height; //el canvas tendra el ancho de la pantalla*/
canvasMultiple.width = "300"; /*window_width;*/ // se escribe solo el numero sin el px

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "F0DCA5";
canvasMultiple.style.background = "#7DB3C7";

class Circle {

    // constructor que carga los valores determinados que carga el objeto
    constructor(x, y, radius, color, text, backcolor) { // x & y posicion que ocupara el circulo 
        this.posX = x; // con el this creamos propiedades
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.backcolor = backcolor;
    }

    //metodo para renderizar el objeto
    draw(context) {
        //rellena el objeto
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);  //dibujar un arco el false para ir como las manecillas del reloj
        context.fillStyle = this.backcolor;
        context.fill();

        //dibuja la linea del objeto
        context.lineWidth = 5; //ancho de linea
        context.strokeStyle = this.color;
        context.stroke();

        //dibuja el texto al centro del objeto
        context.textAlign = "center"; //alineacion horizontal 
        context.textBaseline = "middle"; // alineacion vertical 
        context.font = "bold 20px Arial"; // tamaño y tipo de letra
        context.fillStyle = 'white';
        //renderiza un texto en el centro del objeto
        context.fillText(this.text, this.posX, this.posY); // texto que se dibuja en una coordenada

        context.closePath();
    }
}

let randomRadius = Math.floor(Math.random() * 25 + 30); 

let miCirculo = new Circle(canvasOOP.width/2, canvasOOP.height/2, 50, 'red','Tec', 'blue'); //coordenadas iniciales no superan el tamaño del canvas
miCirculo.draw(ctx);

// Asegúrate de que el círculo no se salga de los bordes del canvas
let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;

let miCirculoRandom = new Circle(randomX, randomY,randomRadius,'red','Tec', 'blue'); //coordenadas iniciales no superan el tamaño del canvas
miCirculoRandom.draw(ctxRandom);

let arrayCircle =[];

for (let i = 0; i < 10; i++) {

    let randomX = Math.random() * (canvasMultiple.width-2 * randomRdius);
    let randomY = Math.random() * (canvasMultiple.height-2 * randomRdius);
    let randomRadius = Math.floor(Math.random() * 10 + 30);
  
    let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "blue", i + 1, 'yellow');
  
    arrayCircle.push(miCirculoMultiple);
    arrayCircle[i].draw(ctxMultiple);
  
  }
