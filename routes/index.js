import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaDetalleViaje, 
    paginaTestimonios
} from '../controllers/paginasController.js';

import { 
    guardarTestimonios
} from '../controllers/testimonialController.js';

const router = express.Router();

//req lo que enviamos
//res lo que express nos responde
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:detalleViaje', paginaDetalleViaje);

router.get('/testimonios', paginaTestimonios);

router.post('/testimonios', guardarTestimonios);

export default router;