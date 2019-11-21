import React,{useContext} from 'react'
import {ProjectContext} from '../../context/context'
import Work from './workWrappers'
import {WorksDiv, Top} from './css'
import { useTranslation } from "react-i18next";

export default function Works() {
    const { t } = useTranslation();
    let projects = useContext(ProjectContext)

    let deskColor =
    "#670000";
  let frontColor =
    "#0b4200";
  let backColor =
    "purple";
  let fullColor = "black";

    return (
        <WorksDiv>
            <Top>

                <h3 style={{background: deskColor, margin: '10px'}}>  Windows || Linux || Mac </h3> 
                <h3 style={{background: backColor, margin: '10px'}}> BackEnd </h3>  
                <h3  style={{background: frontColor, margin: '10px'}}> FrontEnd </h3> 
                <h3  style={{background: fullColor, margin: '10px'}}> FullStack </h3>

           
            </Top>

          {projects.map((project => <Work project={project}/>))}
          
        </WorksDiv>
    )
}
