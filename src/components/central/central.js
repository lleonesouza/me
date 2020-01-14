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
          <Li> Welcome </Li>
          <Li>
            Here you can navigate into my open and non open source projects.
          </Li>

       

          <Li>I'm fullstack web and cross-plataform developer </Li>
          <Li>Writer of good and creative javascript code. </Li>
          <Li>
            If you are a company, check out the technology that i
            have been using.
          </Li>
          <Li>Use or like some of my projects? Make me a donation </Li>
          <Li>Do you want talk with me? go to contact </Li>
        </Top>
      </div>
    );
}
