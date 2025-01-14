//holaMundo();
//sumar(2, 3);
//leerDatos();
//escribirDatos();
//sobrescribirDatos();
//eliminarArchivo();
//crearCarpeta();
//eliminarCarpeta();
//leerEnBloques();
//copiarContenido();
//copiarConPipe();
//crearCarpetaSiNoExiste();

const fs = require('fs');

//2.
function holaMundo() {
    console.log("¡Hola, Mundo!")
}

//3. 
function sumar(x, y) {
    console.log(x + y)
}

//4.
function leerDatos() {
    fs.readFile("./data.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    });
}

//5.
function escribirDatos() {
    fs.writeFile("./output.txt", "¡Hola, Mundo!", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Archivo creado");
    });
}

//6.
function sobrescribirDatos() {
    fs.writeFile("./log.txt", "Actualización completada", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Archivo sobrescrito");
    });
}

//7.
function eliminarArchivo() {
    const exists = fs.existsSync("./temp.txt");
    if (!exists) {
        console.log("El archivo no existe");
        return;
    }
    fs.unlink("./temp.txt", (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Archivo eliminado");
    });
}

//8.
function crearCarpeta() {
    const exists = fs.existsSync("./nuevaCarpeta");
    if (exists) {
        console.log("La carpeta ya existe");
        return;
    }
    fs.mkdir("./nuevaCarpeta", (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Carpeta creada");
    });
}

//9.
function eliminarCarpeta() {
    const exists = fs.existsSync('./carpetaAntigua');
    if (!exists) {
        console.log("La carpeta no existe");
        return;
    }
    fs.rmdir("./carpetaAntigua", (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Carpeta eliminada");
    });
}

//10.
function leerEnBloques() {
    const fs = require("fs");
    const exists = fs.existsSync("./largeData.txt");
    if (!exists) {
        console.log("El archivo no existe");
        return;
    }

    let num = 1;

    const stream = fs.createReadStream("./largeData.txt", { encoding: "utf8", highWaterMark: 128 });

    stream.on("data", (bloque) => {
        console.log("--- Bloque Nº" + num + " ---");
        console.log(bloque + "\n");
        num++;
    });

    stream.on("error", (err) => {
        console.error("Error al leer el archivo:", err);
    });

    stream.on("end", () => {
        console.log("Lectura completada");
    });
}

//11.
function copiarContenido() {
    fs.copyFile("./source.txt", "./destination.txt", (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Archivo copiado");
    });
}

//12.
function copiarConPipe() {
    const fs = require("fs");

    const exists = fs.existsSync("./entrada.txt");

    if (!exists) {
        console.log("El archivo no existe");
        return;
    }

    const read = fs.createReadStream("./entrada.txt");
    const write = fs.createWriteStream("./salida.txt");

    read.pipe(write);

    read.on("error", (err) => {
        console.error("Error al leer el archivo:", err);
    });

    write.on("error", (err) => {
        console.error("Error al escribir el archivo:", err);
    });

    write.on("finish", () => {
        console.log("Archivo copiado");
    });
}

//13.
function crearCarpetaSiNoExiste() {
    const exists = fs.existsSync("./backup ");
    if (exists) {
        console.log("La carpeta ya existe");
        return;
    }
    fs.mkdir("./backup ", (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Carpeta creada");
    });
}
