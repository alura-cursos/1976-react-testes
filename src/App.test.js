import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom"

import App from './App'

afterEach(cleanup);

describe('Componente principal', () => {
    describe('App-header', () => {
        it('Mostrar o nome do banco', () => {
            render(<App/>)
            const NomeBanco = screen.getByText('ByteBank')
            expect(NomeBanco).toBeInTheDocument()
        })
        it('Verificando os estilos do texto', () => {
            render(<App/>)
            const EstiloNomeBanco = screen.getByText('ByteBank')
            expect(EstiloNomeBanco).toHaveStyle(`
                display: block;
                font-size: 2em;
                font-weight: bold;
          `)
        })
    })
})