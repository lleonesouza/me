import React from 'react'
import { IconImg, TechWrapper, WrapperLottie} from './css'

export default function mapTech({tech}) {
    let { icon, title, Lottie } = tech
    return (
        <TechWrapper>
            {title}


            {Lottie ? <WrapperLottie> <Lottie/> </WrapperLottie>  : <IconImg src={icon}/>}
           
        </TechWrapper>
    )
}
