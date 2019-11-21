import React from 'react'
import {WorksWrapper, Img, A, Title} from './css'

export default function workWrappers({ project }) {
  let { title, img, type, status, url } = project;

  let deskColor =
    "#670000";
  let frontColor =
    "#0b4200";
  let backColor =
    "purple";
  let fullColor = "black";

  let bg =
    type === "desktop"
      ? deskColor
      : type === "frontend"
      ? frontColor
      : fullColor;

  return (
   
      <WorksWrapper style={{ background: bg }}>
        <A href={url}> 
            <Title>{title}</Title>
        <Img src={img} />
        </A>

        
      </WorksWrapper>

  );
}
