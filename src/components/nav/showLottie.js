import Lottie from 'react-lottie'
import * as animationData from './show.json'
import React from 'react'

export default function show() {


    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    return (
      
             <Lottie options={defaultOptions}
              height={'100%'}
              width={'100%'}
              isStopped={false}
              isPaused={false}/>
       
    )
}
