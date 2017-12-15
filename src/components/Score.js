import React from 'react';
import styled from 'styled-components';

export const StrengthBar = styled.div`
  width: 22%;
  height: 4px;
  background-color: #ddd;
`

export const PasswordStrengthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 130px;


  & > ${StrengthBar}:nth-last-child(${props => Math.min(props.score + 1, 4)}),
  & > ${StrengthBar}:nth-last-child(${props => Math.min(props.score + 1, 4)}) ~ ${StrengthBar} {
    background-color: ${props => props.theme.passwordStrength[Math.min(props.score, 3)]};
  }
`;

const Score = ({
  score
}) => {
  return (
    <PasswordStrengthWrapper score={score}>
      <StrengthBar />
      <StrengthBar />
      <StrengthBar />
      <StrengthBar />
    </PasswordStrengthWrapper>
  );
};

export default Score;
