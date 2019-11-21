import styled from "@emotion/styled";

let Title = styled.h2({
    fontShadow: '1px 1px 1px black',
    color: 'white'
})

let A = styled.a({
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center'
})

let Img = styled.img({
    width: '150px',
    height: '150px',
})

let WorksDiv = styled.div({
  position: "absolute",
  left: "25vw",
  padding: 0,
  height: "90vh",
  top: "5vh",
  width: "70%",
  display: 'flex',
  flexWrap: 'wrap'
});

let Top = styled.div({
    width: '100%',
    height: '15vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(27,4,4,0.3)',
    color: 'white'
})

let WorksWrapper = styled.div({
    zIndex: 100,
    padding: '10px',
    margin: 'auto',
    height: '50vh',
    width: "200px",
    border: "1px black solid",
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
    transition: '0.5s all',
    ':hover, :focus': {
        opacity: '0.3'
    }
  });



export { Title, A, WorksDiv, Top, WorksWrapper, Img }