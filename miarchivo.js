const vehiculos = [
    { tipo: 'auto', autonomia: 15 },
    { tipo: 'moto', autonomia: 40 },
    { tipo: 'camioneta', autonomia: 10 }
];

// Función para calcular el costo del viaje
function calcularCostoViaje(distancia, tipoVehiculo, valorLitroNafta) {
    // Buscar el vehículo por tipo en el array
    let vehiculo = vehiculos.find(v => v.tipo === tipoVehiculo);
    
    if (!vehiculo) {
        alert("Ingreso no válido: Tipo de vehículo no válido.");
        return;
    }

    // Obtener la autonomía del vehículo seleccionado
    let consumoPorKm = 1 / vehiculo.autonomia; // Consumo en litros por kilómetro

    // Calcular costo total
    let costoTotal = distancia * consumoPorKm * valorLitroNafta;
    return `El costo total del viaje es: $${costoTotal.toFixed(2)}`;
}

// Filtrar vehículos con una autonomía mayor a un valor dado
function filtrarVehiculosPorAutonomia(minAutonomia) {
    return vehiculos.filter(v => v.autonomia > minAutonomia);
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
    if (!vehiculos.some(v => v.tipo === tipoVehiculo)) {  // Usamos some() para validar si el tipo existe en el array
        alert("Ingreso no válido: Tipo de vehículo no válido!");
    }
} while (!vehiculos.some(v => v.tipo === tipoVehiculo));

let valorLitroNafta;
do {
    valorLitroNafta = parseFloat(prompt("¿Cuál es el valor del litro de nafta?"));
    if (isNaN(valorLitroNafta) || valorLitroNafta <= 0) {
        alert("Ingreso no válido: Debe ingresar un valor válido para el litro de nafta!");
    }
} while (isNaN(valorLitroNafta) || valorLitroNafta <= 0);

// Calcular y mostrar el costo del viaje si todos los datos son válidos
let costo = calcularCostoViaje(distancia, tipoVehiculo, valorLitroNafta);

if (costo) { 
    alert(costo);
    console.log(costo);
    alert("¡Gracias por utilizar nuestro servicio de cálculo de costos!");
}

// Filtrar vehículos con autonomía mayor a un valor
let minAutonomia = parseFloat(prompt("Ingrese la autonomía mínima para filtrar vehículos:"));
let vehiculosFiltrados = filtrarVehiculosPorAutonomia(minAutonomia);

if (vehiculosFiltrados.length > 0) {
    alert("Vehículos con autonomía mayor a " + minAutonomia + " km/l:");
    vehiculosFiltrados.forEach(v => alert(v.tipo + " con autonomía de " + v.autonomia + " km/l"));
} else {
    alert("No se encontraron vehículos con esa autonomía.");
}