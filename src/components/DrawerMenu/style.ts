import styled from 'styled-components'

interface ToggleProps {
  position?: number
}

export const DrawerContainer = styled.div`
  background-color: #353b48;
  width: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: width 0.2s ease;
  overflow: hidden;

  &:hover {
    width: 175px;
    align-items: flex-end;
    padding-right: 20px;
  }
`
export const DrawerIconsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`
export const DrawerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  transition: all 0.5s ease;
  cursor: pointer;
`
export const DrawerOptionTitle = styled.p`
  color: #00a8ff;
  position: absolute;
  right: 65px;
  cursor: pointer;
`

export const DarkModeToggle = styled.div`
  background-color: #2f3640;
  width: 40px;
  height: 20px;
  margin-bottom: 10px;
  border-radius: 20px;
  align-self: center;
  box-shadow: rgba(200, 200, 200, 0.2) 0px 30px 60px -12px inset,
    rgba(200, 200, 200, 0.2) 0px 18px 36px -18px inset;
`
export const Toggle = styled.div<ToggleProps>`
  background-color: #353b48;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: scale(0.9);
  position: relative;
  transition: all 0.2s ease-in-out;
  left: ${props => props.position + 'px'};
`
