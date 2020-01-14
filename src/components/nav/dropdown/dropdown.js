import React, {useState, Fragment} from 'react'
import {DropLi, DropUl, DropDiv} from '../css'
import Project from './projects'
import { Transition } from "react-spring/renderprops";
import Arrows from './arrows'

export default function Dropdown({projects}) {
    let [drop, setDrop] = useState(false)

    return (
      <div>
        <DropUl>
          <DropLi onMouseOver={() => setDrop(true)}>Recent Projects <Arrows/> </DropLi>
        </DropUl>

        <Transition
        items={drop}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {drop =>
          drop &&
          (props => (

        
          <DropDiv   style={props} onMouseLeave={() => setDrop(false)}>
            {projects.map(project => (
             project.recently ?  <Project project={project} /> : null
            ))}
    
          </DropDiv>
       

        ))
        }
        </Transition>
      </div>
    );
}
