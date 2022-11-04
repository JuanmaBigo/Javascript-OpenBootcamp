const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const miFuncion = val => {
    if (typeof val === "number"){
    return 2*val
    }
    throw new Error("El valor debe ser de tipo numero")
}

const numero = 8;

try {
    // Codigo que puede fallar
    console.log("Esta ejecutandose de manera correcta")
    const doble = miFuncion(numera)
    console.log(doble)
} catch(e){
    // En caso de fallar, quiero que ejecutes
    logger.error("ERROR!");
    logger.error(`el valor de e es: ${e}`)
} finally {
    console.log("Esto siempre se ejecuta")
}