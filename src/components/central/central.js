import React from 'react'
import {FirstDiv} from '../css'
import {Top , Li} from './css'
import { useTranslation } from "react-i18next";
import HedheDog from '../lottie/animals/hedgehog'

export default function Central() {
     const { t } = useTranslation();
    return (
       <div>
           
                <Top> 
                     <Li> {t('me.welcome')} </Li>
                <Li>{t('me.nav')} </Li>
                <Li>{t('me.writer')} </Li>
                   <Li> {t('me.asperger')} </Li>
           
                      <Li>{t('me.welcome1')} </Li>
                      <Li>   {t('me.techBio')}  </Li>
                      <Li>     {t('me.technology')}  </Li>
                 
                 
                      <Li> {t('me.donate')} </Li>
                      <Li>  {t('me.feedback')}  </Li>
             
           
                
           
                </Top>
                <HedheDog/>
       </div>
      
    )
}
