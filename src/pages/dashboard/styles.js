import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  padding-top: 20px;
  max-width: 900px;
  margin: 0 auto;
`
export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`
export const Card = styled.li`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.03);
  transition: box-shadow 0.4s;
  &:hover {
    box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.1);
  }
`
export const CardHeader = styled.header`
  border-top-left-radius: 4px;
  height: 70px;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
`
export const CardBody = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 5px;
  font-weight: bold;
  text-align: justify;
  color: #666;
`
export const CardFooter = styled.div`
  background: #f9f9f9;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: space-between;
  button {
    margin: 7px 5px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 5px 15px;
    width: 100%;
    color: #666;
    transition: background 0.3s;
    background: #fff;
    &:hover {
      background: ${lighten(0.09, '#4da753')};
      svg {
        color: #fff;
      }
    }
  }
  button:first-child {
    &:hover {
      background: ${lighten(0.09, '#4da753')};
      svg {
        color: #fff;
      }
    }
  }
  button:last-child {
    cursor: ${props => (props.past ? 'not-allowed' : 'pointer')};
    &:hover {
      background: ${lighten(0.09, '#72191c')};
      svg {
        color: #fff;
      }
    }
  }
`
