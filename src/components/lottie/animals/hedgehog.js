import Lottie from 'react-lottie'
import * as animationData from '../json/hedgehog.json'
import React from 'react'
import styled from '@emotion/styled'

export default function hedgehog() {
    let Wrapper = styled.div({
        position: 'absolute',
        right: '100px',
        bottom: '2px'
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
              width={300}
              isStopped={false}
              isPaused={false}/>
        </Wrapper>
    )
}
