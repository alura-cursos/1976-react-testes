import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "../App";


describe('Component principal', () => {

    describe('Ao abrir o app', () => {
        test('o nome é exibido', () => {
            render(<App />);
            const text = screen.getByText('ByteBank');
            expect(text).toBeInTheDocument();
        });

        test('o saldo é exibido', () => {
            render(<App />);
            expect(screen.getByText(/Saldo:/i)).toBeInTheDocument();
        });

        test('o botao de realizar transacao é exibido', () => {
            render(<App />);
            expect(screen.getByText(/Realizar operação/i)).toBeInTheDocument()
        })
    })

});


