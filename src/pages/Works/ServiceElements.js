
import styled from 'styled-components'

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  transform: translateY(-250px);
  overflow: hidden;
  @media screen and (max-width: 850px) {
    
    transform: translateY(25px);
  }

  
 `
export const ServicesWrapper = styled.div`
    max-width: 1500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 40px;
    transform: scale(0.7);
  
    @media screen and (max-width: 1000px) {
      
    transform: scale(0.6);
    grid-gap: 5px;
  }

    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;


    transform: scale(0.55);
  }
`
export const ServicesCard = styled.div`
  /*background: #fff;*/
  background-image: url(./images/paper2.jpg);
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 600px;
  padding:  100px;
  width: 450px;

  transform: scale(.92);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 120px;
  width: 120px;

  margin-top: 15px;
  margin-bottom: 25px;

`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  
  margin-bottom: -150px;
  @media screen and (max-width: 850px) {
      
  }


`
export const ServicesH2 = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 25px;
`

export const ServicesP = styled.p`
  font-size: 1.5rem;
 
  text-align: center;
`


