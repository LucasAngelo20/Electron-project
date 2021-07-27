import styled from 'styled-components'

export const Container = styled.div`
  margin: 10px;
  border-radius: 5px;
  padding: 5px;
  padding-inline: 10px;
  background-color: #475261;
  display: flex;
  width: 100%;

  &:placeholder {
    color: #fff;
  }

  input {
    background-color: #475261;
    color: #909090;
    width: 100%;
  }
`
