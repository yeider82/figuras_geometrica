
console.log("hola yeider")
/*se creara una calculadora del perimetro y/o area del cuadrado*/

function perimetrocuadrado(lado) {
    var resultado = 4*lado;
    console.log(`los lados del cuadrado miden ${lado}`);
    console.log(`el perimetro del cuadrado es ${resultado}.cm`)
    return resultado;
};

//MEJORAR______________________________________________________
// var perimetro = (lado) => lado * 4
// console.log(perimetro(4));
//MEJORAR______________________________________________________

// aun no se como exponer un numero a una potencia asi que 
//por ahora solo lo multiplicare por el mismo
function areacuadrado(ladocuadrado) { 
    var resultado =ladocuadrado * ladocuadrado;
    console.log(`los lados del cuadrado miden ${ladocuadrado}`);
    console.log(`el area del cuadrado es ${resultado}.cm^2`);
    return resultado;
};

/* calcular el perimetro y area de un triangulo*/ 

function perimetrotriangulo(lado1,lado2,lado3) {
    var resultado = (lado1 + lado2 + lado3); 
    console.log(`los lados del triangulo son:
lado1: ${lado1} lado2: ${lado2}, lado3 ${lado3}`);
console.log(`el perimetro del triangulo es ${resultado}cm`);
    return resultado;
}
function areatriangulo (basetriangulo,alturatriangulo){
    var resultado = (basetriangulo * alturatriangulo)/2;
    console.log(`el area del triangulo es ${resultado}cm`);
    return resultado;
}

/*calular el perimetro y area de un circulo */

function diametrocirculo (x){
    const resultado = x * 2;
    console.log(`el diametro del circulo es ${resultado}cm
el radio del circulo es ${x}`);
    return resultado;
};

function perimetrocirculo (radiocirculo){
    const pi = Math.PI;
    const diametro = diametrocirculo(radiocirculo);
    const resultado = diametro*pi
    console.log(`el perimetro del circulo es ${resultado}cm`);
    return resultado;
};

function areacirculo(radiocirculo){
    const pi = Math.PI;
    const resultado = pi*(radiocirculo*radiocirculo);
    console.log(`el area del circulo ${resultado}cm`);
    console.log(`pi vale ${pi}`);
    return resultado;
};

//cuadrado inicio
function calculoperimetrocuadrado(){
    const input = document.getElementById("inputcuadrado");
    const valor = input.value;
    const perimetro = perimetrocuadrado(valor);
    alert(perimetro);

};

function calculoareacuadrado(){
    console.group("calculos_cuadrado")
    const input = document.getElementById("inputcuadrado");
    const valor = input.value;
    const area = areacuadrado(valor);
    console.log(area);

};
//cuadrado final
//triangulo inicio
function calculoPerimetroTriangulo(){
    const value1 = document.getElementById("lado_1");
    const lado1 = parseInt(value1.value);
    const value2 = document.getElementById("lado_2");
    const lado2 = parseInt(value2.value);
    const value3 = document.getElementById("lado_3");
    const lado3 = parseInt(value3.value);
    const perimetro = perimetrotriangulo(lado1,lado2,lado3);
    console.log(perimetro);
};

function calculoAreaTriangulo(){
    const value1 = document.getElementById("basetriangulo");
    const baseT = parseInt(value1.value);
    const value2 = document.getElementById("alturatriangulo");
    const alturaT = parseInt(value2.value);
    const area = areatriangulo(baseT,alturaT)
    console.log(area);
};
//fin area del triangulo
//area circulo
function calculoperimetrocirculo(){
    const value1 = document.getElementById("radiocirculo");
    const radio = parseInt(value1.value);
    const perimetro = perimetrocirculo(radio)
    console.log(perimetro);
};
function calcularareaciculo(){
    const value1 = document.getElementById("radiocirculo");
    const radio = parseInt(value1.value);
    const perimetro = areacirculo(radio)
    console.log(perimetro);
};
//fin area del circulo