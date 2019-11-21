import Lottie from 'react-lottie'
import * as animationData from '../json/turtle.json'
import React from 'react'
import styled from '@emotion/styled'
import './keyframes.css'


export default function turtle() {

  
    let Wrapper = styled.div({
        height: '300px',
        width: '300px',
        position: 'absolute',
        zIndex: -1,
        opacity: '0.3'
    })

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    return (
       
         <Wrapper className="swim"> 
             <Lottie options={defaultOptions}
              height={'100%'}
              width={'100%'}
              isStopped={false}
              isPaused={false}/>
        </Wrapper>
            
     
       
    )
}
