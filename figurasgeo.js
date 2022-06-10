
console.log("hola yeider")
console.group("cuadrado")
/*se creara una calculadora del perimetro y/o area del cuadrado*/

function perimetrocuadrado(lado) {
    var resultado = 4*lado;
    console.log(`los lados del cuadrado miden ${lado}`);
    console.log(`el perimetro del cuadrado es ${resultado}.cm`)
    return resultado;
};
// aun no se como exponer un numero a una potencia asi que 
//por ahora solo lo multiplicare por el mismo
function areacuadrado(ladocuadrado) { 
    var resultado =ladocuadrado * ladocuadrado;
    console.log(`los lados del cuadrado miden ${ladocuadrado}`);
    console.log(`el area del cuadrado es ${resultado}.cm^2`);
    return resultado;
};
console.groupEnd();

/* calcular el perimetro y area de un triangulo*/ 

console.group("triangulo");
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
console.groupEnd();

/*calular el perimetro y area de un circulo */

console.group("circulo");
function diametrocirculo (radiocirculo){
    const resultado = radiocirculo * 2;
    console.log(`el diametro del circulo es ${resultado}cm
el radio del circulo es ${radiocirculo}`);
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
console.groupEnd()