import { ArrowRightAlt } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const NavAnimation = ({value}) => {
  return (
    <div>
        <Container style={{ margin: 'auto',}}>
            <Slide></Slide>
            <Arrow>
                <ArrowRightAlt />
            </Arrow>
            <Text>
                {value}
            </Text>
        </Container>
    </div>
  )
}

export default NavAnimation

const Slide = styled.span`
  position: relative;
  background-color: rgb(3, 190, 190);
  width: 135px;
  height: 35px;
  border-radius: 2px;
  transform: translate(-80%, 0);
  opacity: 0;
  transition: all 0.4s ease-in-out;
`

const Arrow = styled.span`
  border-radius: 50%;
  text-align: center;
  font-size: 2rem;
  height: 50px;
  padding: 1rem;
  margin-top: -15px;
  margin-left: -6rem;
  position: absolute;
  transition: all 0.3s ease-in-out;
  opacity: 0;
`
const Text = styled.span`
  position: absolute;
  margin-left: 0.4rem;
  transition: all 0.4s ease-in-out;
  font-size: 1.2rem;
`
const Container = styled.div`
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  padding: 4px 0px;
  transition: all 0.7s ease;
  
  &:hover ${Slide}{
    transform: translate(0, 0);
    opacity: 1;
  }
  &:hover ${Text}{
    color: #ffffff;
    margin-left: 1.9rem;
    transition: all 0.4s ease-in-out;
  }
  &:hover ${Arrow}{
    color: rgb(255, 255, 255);
    transform: scale(1.2);
    margin-left: -5rem;
    margin-top: -1.2rem;
    opacity: 1;
  }

  
`

