import Lottie from 'react-lottie'
import * as animationData from './arrows.json'
import React from 'react'
import styled from '@emotion/styled'

export default function arrows() {
    let Wrapper = styled.div({
        height: '50px',
        width: '50px',
        marginLeft: '25px',
        opacity: '1'
    })

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    return (
        <Wrapper>
             <Lottie options={defaultOptions}
              height={50}
              width={50}
              isStopped={false}
              isPaused={false}/>
        </Wrapper>
    )
}
