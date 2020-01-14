import styled from '@emotion/styled'


let Top = styled.ul({
    // border: '1px white solid',
    position: 'absolute',
    left: '250px',
    top: '5vh',
    height: 'auto',
    width: 'auto',
    margin: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
})

let Li = styled.li({
    // border: '1px white solid',
    minHeight: '50px',
    height: 'auto',
    width: 'auto',
    padding: '10px',
    listStyle: 'none',
    background: 'rgba(255,255,255,0.1)',
    color: 'white',
    fontSize: '23px',
    letterSpacing: '0.5px'
})

let Tech = styled.div({

})

let Software = styled.div({

})

let Donate = styled.div({
    position: 'absolute',
    right: '0px',
    top: '10vh',
})

let FeedBack = styled.div({

})


let FieldUl = styled.ul({
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    overflowY: 'scroll'
})


let FieldLi = styled.li({
    padding: '10px',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    listStyle: 'none'
})

let CloseButton = styled.div({
    position: 'absolute',
    cursor: 'pointer',
    top: '2px',
    left: '2px'
})




export {  CloseButton, Top, FieldUl, FieldLi, Li }