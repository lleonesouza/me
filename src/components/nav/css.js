import styled from '@emotion/styled'


let HideButton = styled.button({
    position: 'absolute',
    left: '10px',
    bottom: '10px',
    height: '25px',
    width: '100px',
    zIndex: 100,
    background: 'rgba(255,255,255,0.3)',
    border: 'none'
})

let FieldLi = styled.li({
    padding: '10px',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    listStyle: 'none',
    color: 'white',
    transition: 'all 0.5s',
    ":hover, :focus":{
        background: 'white',
        color: 'black'
    }
})

let FieldUl = styled.ul({
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
})


let DropUl = styled.ul({
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
})


let DropLi = styled.li({
    padding: '10px',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    listStyle: 'none',
    background: 'rgba(255,255,255,0.2)',
    cursor: 'pointer',
    ":hover, :focus":{
        background: 'rgba(255,255,255,0.8)',
        color: 'black'
    }
})




let Img = styled.img({
    marginLeft: '30px',
    width: '100px',
    borderRadius: '100px',
    border: '1px black solid',
    boxShadow: '0px 0px 30px -1px rgba(255,255,255,0.2)',
})


let NavDiv = styled.div({
    width: '250px',
    height: '100vh',
    position: 'absolute',   
    top: '0vh',
    left: '0vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    boxShadow: '0px 0px 30px -1px rgba(0,0,0,0.8)',
    borderRadius: '0px',
    backgroundColor: 'rgba(0,0,0,0.95)',
    color: 'white',
    marign: 'auto',
    zIndex: 0
})

let DropDiv = styled.div({
    position: 'absolute',   
    top: '0vh',
    left: '250px',
    display: 'flex',
    flexWrap: 'wrap',
    boxShadow: '0px 0px 30px -1px rgba(0,0,0,0.8)',
    borderRadius: '0px 20px 20px 20px',
    backgroundColor: 'rgba(0,0,0,0.95)',
    color: 'white',
    width: '60vw',
    height: '70vh',
    marign: 'auto',
    zIndex: 10,
    padding: '25px',
    '@media(max-width: 520px)':{
        left: '0px',
        width: '85vw',
    }
})


let ProjectDiv = styled.div({
    margin: '5vh',
    marginBottom: '0px',
    width: '10vw',
    height: '20vh',
    cursor: 'pointer',
    transition: '0.5s all',
    ':hover,:focus':{
        transform: 'scale(1.2)',
        opacity: '0.3'
    }
})

let IconImg = styled.img({
    width: '100%',
    height: '70%'
})

let A = styled.a({
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center'
})

export { HideButton, A, IconImg, NavDiv,DropDiv, Img, DropLi, DropUl, FieldUl, FieldLi, ProjectDiv }