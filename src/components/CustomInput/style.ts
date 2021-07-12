import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${props => props.width + 'px'};
  max-height: 1000px;
  display: flex;
  flex-direction: row;
  padding-inline: 10px;
  align-items: center;
  background-color: ${props => props.color};
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const Input = styled.input`
  background-color: transparent;
  font-size: ${props => props.fontSize + 'px'};
  color: ${props => props.textColor};
  width: 100%;
  height: ${props => props.height + 'px'};
  margin-left: 5px;

  &::placeholder {
    color: ${props => props.color};
  }
`
