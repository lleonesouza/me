import styled from '@emotion/styled'

let WrapperLottie =styled.div({
    height: '100px',
    width: '100px',
    borderRadius: '50px',
})

let IconImg = styled.img({
    height: '100px',
    width: '100px',
    borderRadius: '50px',
})

let TechWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px'
})


let ModalDiv = styled.div({
    width: '70vw',
    height: '90vh',
    top: '5vh',
    position: 'absolute',   
    left: '25vw',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 30px -1px rgba(0,0,0,0.8)',
    borderRadius: '20px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    marign: 'auto',
    overflowY: 'scroll',
    zIndex: -1,
    '@media(max-width: 520px)':{
        left: '5vw',
        width: '85vw',
    }
    
})

export { ModalDiv, IconImg, TechWrapper, WrapperLottie }