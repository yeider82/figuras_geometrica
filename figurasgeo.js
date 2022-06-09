
console.log("hola yeider")
console.group("cuadrado")
/*se creara una calculadora del perimetro y/o area del cuadrado*/
const ladocuadrado = 5;
console.log(`los lados del cuadrado miden ${ladocuadrado}`);
const perimetrocuadrado = 4*ladocuadrado;
// aun no se como exponer un numero a una potencia asi que 
//por ahora solo lo multiplicare por el mismo
const areacuadrado = ladocuadrado * ladocuadrado;
console.log(`el perimetro del cuadrado es ${perimetrocuadrado}.cm`)
console.log(`el area del cuadrado es ${areacuadrado}.cm^2`)
console.groupEnd()

/* calcular el perimetro y area de un triangulo*/ 
console.group("triangulo")
const lado1 = 4;
const lado2 = 5;
const lado3 = 6;
const basetriangulo = 6;
const alturatriangulo = 10;
const perimetrotriangulo = (lado1 + lado2 + lado3)
const areatriangulo = ((basetriangulo * alturatriangulo)/2)
console.log(`los lados del cuadrado son:
lado1: ${lado1} lado2: ${lado2}, lado3 ${lado3}
la altura es ${alturatriangulo} y la base es ${basetriangulo}`)
console.log(`el area del triangulo es ${areatriangulo}cm
el perimetro del triangulo es ${perimetrotriangulo}cm`)
console.groupEnd();

/*calular el perimetro y area de un circulo */
console.group("circulo")
const diametrocirculo= 10;
const radiocirculo = 7;
const pi = Math.PI;
const perimetrocirculo = diametrocirculo * pi;
const areacirculo = (pi * (radiocirculo*radiocirculo));
console.log(`el diametro dl circulo es ${diametrocirculo}cm
el radio del circulo es ${radiocirculo}
y pi vale ${pi}`)
console.log(`el perimetro del circulo es ${perimetrocirculo}cm
el area del circulo ${areacirculo}cm`);
console.groupEnd()