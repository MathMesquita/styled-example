import styled, { css, keyframes } from 'styled-components'

const spinFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const loader = css`
  color: transparent; 

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    border: 3px solid ${props => props.theme.button.textColor};
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -10px;
    margin-left: -10px;
    animation: ${spinFrames} 0.3s linear infinite;
  }
`

export default styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.button.bgColor};
  color: ${props => props.theme.button.textColor};
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
  position: relative;

  ${props => props.loading && loader}
`