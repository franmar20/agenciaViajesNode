import {Viaje} from '../models/Viajes.js'
import { Testimonio } from '../models/Testimonios.js';

const paginaInicio = async (req, res) => {

    //consultar 3 viajes del modelo viaje
    //consultar 3 testimonios del modelo viaje

    const promiseDB = [];

    promiseDB.push( Viaje.findAll({limit: 3}) );
    promiseDB.push( Testimonio.findAll({limit: 3}) );

    try {
        const resultado = await Promise.all( promiseDB );
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {

    //consultar db
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

//muestra una pagina viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { detalleViaje } = req.params;
    try {
        const resultado = await Viaje.findOne({where : {slug : detalleViaje}});
        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimonios = async (req, res) => {

    try {
        const testimonios = await Testimonio.findAll();

        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonios
        });
    } catch (error) {
        console.log(error);
    }
    
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimonios
}