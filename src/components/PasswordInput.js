import styled from 'styled-components'

const PasswordInput = styled.input.attrs({
  type: props => 'password'
})`
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 0.5rem;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 3px;
  outline: none;
`;

export default PasswordInput