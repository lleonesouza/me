import Lottie from 'react-lottie'
import * as animationData from '../lottie/json/hedgehog2.json'
import React from 'react'
import styled from '@emotion/styled'

export default function loading() {
    let Wrapper = styled.div({
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
        <Wrapper>
             <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}/>
        </Wrapper>
    )
}
