import React from 'react';
import { render, screen } from "@testing-library/react"
import App from './App';

describe('Componente principal', () => {
    it('Mostrar o nome do banco', () => {
        render(<App />);

        expect(screen.getByText('ByteBank')).toBeInTheDocument();
    })
})


/*

getByText -- BUSCAR PELO TEXTO DESEJADO

toBeInTheDocument -- QUERO SABER SE ELE ESTÁ NO DOCUMENTO.
   








*/