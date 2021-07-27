import React from 'react';

import * as S from './styles';

interface CardProps {
  title: string;
  amount: string;
  lastTransactipon: string;
  type: 'up' | 'down' | 'total';
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
}

const Card = ({ title, amount, lastTransactipon, type }: CardProps) => {
  
  return (
    <S.Container type={type} >
      <S.Header>
        <S.Title type={type} >{title}</S.Title>
        <S.Icon name={icon[type]} type={type} />
      </S.Header>

      <S.Footer>
        <S.Amount type={type} >{amount}</S.Amount>
        <S.LastTransactipon type={type}>{lastTransactipon}</S.LastTransactipon>
      </S.Footer>
    </S.Container>

  )
};

export default Card;