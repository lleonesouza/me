import React from 'react'
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export default function Changei18() {
    const { t, i18n } = useTranslation();
    
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };


    return (
        <div>
               <button onClick={() => changeLanguage('de')}>de</button>
    <button onClick={() => changeLanguage('en')}>en</button>
        </div>
    )
}
