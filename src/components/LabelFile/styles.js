import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  border: 1px dashed rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0 0 10px;
  width: 100%;
  height: 120px;
  transition: all 0.3s;
  ${props =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      svg {
        display: none;
      }
    `}
  &:hover {
    color: #333;
    border: 1px dashed rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  input {
    display: none;
  }
`
