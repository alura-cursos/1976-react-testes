import React from 'react';
import { render, screen } from "@testing-library/react"
import App from './App';

describe('Componente principal', () => {
	describe('Quando eu abro o app do banco', () => {
		it('o nome é exibido', () => {
			render(<App />);

			expect(screen.getByText('ByteBank')).toBeInTheDocument();
		})
		it('o saldo é exibido', () => {
			render(<App />);
			
			expect(screen.getByText('Saldo:')).toBeInTheDocument();
		})
		it('O botão de realizar operação é exibido', () => {
			render(<App />);

			expect(screen.getByText('Realizar operação')).toBeInTheDocument();
		})
	})
})

/*
getByText -- BUSCAR PELO TEXTO DESEJADO

toBeInTheDocument -- QUERO SABER SE ELE ESTÁ NO DOCUMENTO.

it pode ser substituido por test

*/