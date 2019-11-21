import React from 'react'
import {FieldUl, FieldLi} from '../css'
import {NavLink} from 'react-router-dom'

export default function menu({ routes }) {
  return (
    <div>
      <FieldUl>
        {routes.map(route => (
          <NavLink style={{textDecoration: 'none'}}to={route.url}>  <FieldLi>  {route.title} </FieldLi> </NavLink>
        ))}
      </FieldUl>
    </div>
  );
}
