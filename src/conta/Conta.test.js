import React from  'react';
import { render, screen, fireEvent }  from '@testing-library/react';
import Conta from './Conta';

describe('Componente de conta', () => {
  it('Exibir o saldo da conta como valor monetário', () => {
    render(<Conta saldo={1000} />)
    
    const saldo = screen.getByTestId('saldo-conta');

    expect(saldo.textContent).toBe('R$ 1000');
  })

  it('Chama a função de realizar transação, quando o botão é clicado', () => {
    const funcaoRealizarTransação = jest.fn()

    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransação} />)

    fireEvent.click(screen.getByText('Realizar operação'));

    expect(funcaoRealizarTransação).toHaveBeenCalled()
  })
})