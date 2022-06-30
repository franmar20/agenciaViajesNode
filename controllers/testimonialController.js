import {Testimonio} from '../models/Testimonios.js'

const guardarTestimonios = async (req, res) => {

    const {nombre, correo, mensaje} = req.body;

    const errores = [];
    
    //validar el formulario
    if (nombre.trim() === '') {
        errores.push({mensaje:'El nombre está vacío'});
    }
    if (correo.trim() === '') {
        errores.push({mensaje:'El correo está vacío'});
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje:'El mensaje está vacío'});
    }

    if(errores.length > 0){

        //Consultar testimonios existentes
        const testimonios = await Testimonio.findAll();

        //Mostrar la vista con errores
        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje,
            testimonios
        });
    }else{

        //Almacenarlo en la base de datos
        try {
            await Testimonio.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimonios');
        } catch (error) {
            console.log(error)
        }

    }

}

export {
    guardarTestimonios
};