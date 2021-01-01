import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('Componente principal', () => {
    describe('App-header', () => {
        it('Mostrar o nome do banco', () => {
            render(<App/>)
            expect(screen.getByText('ByteBank')).toBeInTheDocument()
        })
        test('Mostrar a cor verde', () => {
            const { debug } = render(<App/>)
            // debug()
        })

    })
})