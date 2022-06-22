const pizza = [
    { id: 1, nombre: "MUZZARELLA", ingredientes: ["salsa", "muzzarela", "oregano"], precio: 400 },
    { id: 2, nombre: "NAPOLITANA", ingredientes: ["salsa", "muzzarela", "tomate", "ajo"], precio: 800 },
    { id: 3, nombre: "MORRON", ingredientes: ["salsa", "muzzarela", "jamon", "morron"], precio: 500 },
    { id: 4, nombre: "FUGAZZETA", ingredientes: ["muzzarela", "cebolla", "aceite de oliva"], precio: 600 },
    { id: 5, nombre: "CALABRESA", ingredientes: ["salsa", "muzzarela", "longaniza"], precio: 650 },
    { id: 6, nombre: "ANANA", ingredientes: ["salsa", "muzzarela", "ananá"], precio: 700 },
]

for (let i = 0; i < pizza.length; i++) {
    if (pizza[i].id % 2 != 0) {
        console.log(`A- La pizza de ${pizza[i].nombre} tiene un id impar.`);
    }
}

for (let i = 0; i < pizza.length; i++) {
    if (pizza[i].precio < 600) {
        console.log(`B- La pizza de ${pizza[i].nombre} vale menos de 600 pe.`);
    }
}

for (let i = 0; i < pizza.length; i++) {
    console.log(`C- la pizza ${pizza[i].id} es de ${pizza[i].nombre}`)
}

for (let i = 0; i < pizza.length; i++) {
    console.log(`D- $${pizza[i].precio}`)
}

for (let i = 0; i < pizza.length; i++) {
    console.log(`E- la pizza de ${pizza[i].nombre} vale ${pizza[i].precio} pe`)
}

for (let i = 0; i < pizza.length; i++) {
    console.log(`EXTRA- la pizza de ${pizza[i].nombre} tiene los siguientes ingredientes: ${pizza[i].ingredientes} y vale ${pizza[i].precio} pe`)
}

