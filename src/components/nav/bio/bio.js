import React from 'react'
import {Img} from '../css'
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export default function Bio({perfil}) {

    const { t } = useTranslation();


    return (
        <div>
           <figure>
            <Img src={perfil} alt="lleonesouza"/>
        </figure>

            
        </div>
    )
}
