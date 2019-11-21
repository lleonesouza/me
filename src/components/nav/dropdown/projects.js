import React from 'react'
import {ProjectDiv, A, IconImg} from '../css'


export default function projects({project}) {

    let onClick = () => {
      
    }

    let { title, img, url } = project;
    return (
      <ProjectDiv>
        <A href={url}>
          <IconImg src={img} alt="icon" />
          <h3>{title}</h3>
        </A>
      </ProjectDiv>
    );
}
