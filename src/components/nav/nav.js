import React, { useState } from "react";
import { HideButton, NavDiv } from "./css";
import perfil from "./perfil.jpg";
import { Transition } from "react-spring/renderprops";

// Components
import Bio from "./bio/bio";
import Menu from "./menu/menu";
import Dropdown from "./dropdown/dropdown";

export default function Nav({ projects, routes }) {
  let [show, setMove] = useState(true);
  return (
 <div>
   <HideButton onClick={() => setMove(!show)}> Show/Hide </HideButton>
      <Transition
        items={show}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show &&
          (props => (
              <NavDiv 
              style={props} >
                <Dropdown projects={projects} />
   
                <Bio perfil={perfil} />
   
                <Menu routes={routes} />
   
                <br />
              </NavDiv>
          ))
        }
      </Transition>
 </div>
  );
}
