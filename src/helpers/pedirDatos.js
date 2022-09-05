import { data } from '../data/data'

export const pedirDatos = () => {
    const error = false;
    return new Promise((resolve, reject) => {
        //cuerpo de la promesa
        setTimeout(() => {
            if (!error) {
                resolve(data)
            } else {
                reject("Hubo un error")
            }
        }, 1000)
    })
}