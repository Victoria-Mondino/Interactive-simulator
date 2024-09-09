// Función para calcular el costo del viaje
function calcularCostoViaje(distancia, tipoVehiculo, valorLitroNafta, autonomia) {
    let consumoPorKm;

    // Validar tipo de vehículo
    switch (tipoVehiculo) {
        case 'auto':
        case 'moto':
        case 'camioneta':
            consumoPorKm = 1 / autonomia; // Consumo en litros por kilómetro
            break;
        default:
            alert("Ingreso no válido: Tipo de vehículo no válido.");
            return;
    }

    // Calcular costo total
    let costoTotal = distancia * consumoPorKm * valorLitroNafta;
    return `El costo total del viaje es: $${costoTotal.toFixed(2)}`;
}

// Pedir al usuario los valores necesarios con validación
let distancia;
do {
    distancia = parseFloat(prompt("¿Cuál es la distancia del viaje en kilómetros?"));
    if (isNaN(distancia) || distancia <= 0) {
        alert("Ingreso no válido: Debe ingresar una distancia válida!");
    }
} while (isNaN(distancia) || distancia <= 0);

let tipoVehiculo;
do {
    tipoVehiculo = prompt("¿Cuál es el tipo de vehículo? (auto, moto, camioneta)").toLowerCase();
    if (tipoVehiculo !== 'auto' && tipoVehiculo !== 'moto' && tipoVehiculo !== 'camioneta') {
        alert("Ingreso no válido: Tipo de vehículo no válido!");
    }
} while (tipoVehiculo !== 'auto' && tipoVehiculo !== 'moto' && tipoVehiculo !== 'camioneta');

let valorLitroNafta;
do {
    valorLitroNafta = parseFloat(prompt("¿Cuál es el valor del litro de nafta?"));
    if (isNaN(valorLitroNafta) || valorLitroNafta <= 0) {
        alert("Ingreso no válido: Debe ingresar un valor válido para el litro de nafta!");
    }
} while (isNaN(valorLitroNafta) || valorLitroNafta <= 0);

let autonomia;
do {
    autonomia = parseFloat(prompt("¿Cuál es la autonomía de tu vehículo (km por litro)?"));
    if (isNaN(autonomia) || autonomia <= 0) {
        alert("Ingreso no válido: Debe ingresar una autonomía válida!");
    }
} while (isNaN(autonomia) || autonomia <= 0);

// Calcular y mostrar el costo del viaje si todos los datos son válidos
let costo = calcularCostoViaje(distancia, tipoVehiculo, valorLitroNafta, autonomia);

if (costo) { 
    alert(costo);
    console.log(costo);
    alert("¡Gracias por utilizar nuestro servicio de cálculo de costos!");
}