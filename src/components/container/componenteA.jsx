import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/componenteB';


const ComponenteA = () => {
    
    /** se instancia un contacto para pasarle al componente b */

    const defaultContacto = new Contacto ("Pablo", "Berlanga", "berlangajimenez@gmail.com", true);
    
    return (
        <div>
            <div><h1>Tus contactos:</h1></div>
            <ComponenteB contacto={defaultContacto}></ComponenteB>
        </div>

    );
};

export default ComponenteA;
