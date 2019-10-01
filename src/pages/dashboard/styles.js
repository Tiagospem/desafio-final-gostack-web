import styled from 'styled-components'

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
  transition: filter 0.4s;

  &:hover {
    filter: grayscale(1);
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
  height: 100px;
`
export const CardFooter = styled.div`
  padding: 10px;
  background: #f9f9f9;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`
