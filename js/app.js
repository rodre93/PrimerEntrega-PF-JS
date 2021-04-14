let nombre = prompt("Hola, ingresa tu nombre");



alert("Bienvenido a StoreARG " + nombre);

const productos = [];

productos.push(new rBuzo("Adidas", 65, "L", "Negro", 34, "Si"));
productos.push(new rBuzo("Nike", 35, "M", "Blanco", 34));
productos.push(new rBuzo("New Balance", 22, "XL", "Gris y azul", 25));
productos.push(new rBuzo("Stussy", 98, "L", "Amarillo", 25, "Si"));
productos.push(new rBuzo("Supreme", 150, "XS", "Blanco y rojo", 34));

for (const rBuzo of productos) {
    console.log(rBuzo.marca);
    console.log(rBuzo.precio);
    console.log(rBuzo.talle);
    console.log(rBuzo.color);
    console.log(rBuzo.envio);
    console.log(rBuzo.disponibilidad);
}

for (const rBuzo of productos)
    rBuzo.sumaImp();

for (const rBuzo of productos)    
    rBuzo.sumaEnvio();

let filtroBuzo = prompt("Ordenar por: Marca - Precio - Talle - Color (Colocar 'No buscar' si no desea realizar una busqueda");

while ( filtroBuzo != "No buscar") {

    switch (filtroBuzo) {
        
        case "Marca":
            
        break;
        
        case "Precio":
            productos.sort(function (a, b) {
                if (a.precio > b.precio){
                    return 1;
                }
                if (a.precio < b.precio) {
                  return -1;
                }
                return 0;
              });
            console.log(productos);
                
            break;

        case "Talle":
            const buscarTalle = productos.find(rBuzo => rBuzo.talle === "L");
            console.log(buscarTalle);
                 
        break;

        case "Color":
            
                 
        break;

        default:
            console.log("Ingresar un filtro con la primera letra mayuscula")
            alert("Ordenar por: Marca - Precio - Talle - Color (Colocar 'No buscar' si no desea realizar una busqueda")
            break;
    }
    filtroBuzo = prompt("Ordenar por: Marca - Precio - Talle - Color (Colocar 'No buscar' si no desea realizar una busqueda");
}   