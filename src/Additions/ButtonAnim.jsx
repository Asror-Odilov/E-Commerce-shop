import { ArrowRightAlt } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { tablet } from '../responsive'

const ButtonAnim = ({value}) => {
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

export default ButtonAnim


const Slide = styled.span`
  position: relative;
  background-color: rgb(3, 190, 190);
  width: 200px;
  height: 50px;
  border-radius: 2px;
  /* transform: translate(-80%, 0);
  opacity: 0; */
  transition: all 0.4s ease-in-out;
`

const Arrow = styled.span`
  border-radius: 50%;
  text-align: center;
  font-size: 2rem;
  height: 50px;
  padding: 1rem;
  margin-top: -15px;
  margin-left: -8rem;
  position: absolute;
  transition: all 0.3s ease-in-out;
  ${tablet({ 
    fontSize: '1.5rem',
    marginLeft: '-5rem',
    marginTop: '-5px',
  })}
`
const Text = styled.span`
  position: absolute;
  margin-left: 0.4rem;
  transition: all 0.4s ease-in-out;
  font-size: 1.2rem;
  ${tablet({ 
    fontSize: '0.8rem',
    marginLeft: '1rem'
  })}
`
const Container = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  padding: 4px 0px;
  transition: all 0.7s ease;
  
  &:hover ${Slide}{
    background-color: rgb(2, 156, 156);
    opacity: 1;
  }
  &:hover ${Text}{
    color: #ffffff;
    margin-left: 2.2rem;
    transition: all 0.4s ease-in-out;
  }
  &:hover ${Arrow}{
    color: rgb(255, 255, 255);
    transform: scale(2);
    margin-left: -6rem;
    margin-top: -2.1rem;
  }

  ${tablet({ 
    width: '120px',
    padding: '0px',
    height: '40px',
    left: '-0.7rem'
  })}
`

