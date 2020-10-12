import React from 'react';
import { render } from '@testing-library/react';
import Transacao from './Transacao';

describe('Componente de transação do extrato', () => {
  it('O snapshot do component deve permanecer sempre o mesmo', () => {
    const { container } = render(<Transacao
      data="08/09/2020"
      tipo="saque"
      valor="20.00"
    />)

    expect(container.firstChild).toMatchSnapshot();
  })
})
