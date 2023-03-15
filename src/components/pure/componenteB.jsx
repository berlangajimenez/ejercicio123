import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = ({contacto}) => {
    return (
        <div>
            <h3>
                Nombre: { contacto.nombre }
            </h3>
            <h3>
                Descripción: { contacto.apellido }
            </h3>
            <h3>
                Nivel: { contacto.mail }
            </h3>
            <h3>
                Este contacto está: { contacto.conectado ? 'Contacto en línea': 'Contacto no disponible' }
            </h3>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
