const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");


const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");


/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */


canvasOOP.height = "200";//window_height;
canvasOOP.width = "300"//window_width;
canvasRandom.height = "200";//window_height;
canvasRandom.width = "300"//window_width;
canvasMultiple.height = "200";//window_height;
canvasMultiple.width = "300"//window_width;

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "F0DCA5";
canvasMultiple.style.background = "#7DB3C7";



class Circle {
    // carga los  valores predeterminados del objeto
    constructor(x, y, radius, color, text, backcolor) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.backcolor = backcolor;

    }

    // metodo para renderizar 
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

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, 'red', 'Tec', 'Blue');
miCirculo.draw(ctx);

let randomRadius = Math.floor(Math.random() * 25 + 30); // Radio aleatorio entre 30 y 40

// Asegúrate de que el círculo no se salga de los bordes del canvas
let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;

let miCirculoRandom = new Circle(randomX, randomY, randomRadius, 'Red', 'Tec', 'Blue');
miCirculoRandom.draw(ctxRandom);


let arrayCircle = [];
for (let i = 0; i < 10; i++) {
    let randomRadius = Math.floor(Math.random() * 10 + 30);
    let randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
    let randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;
    
    let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "blue", i + 1, "yellow");

    arrayCircle.push(miCirculoMultiple);

    arrayCircle[i].draw(ctxMultiple);
}
