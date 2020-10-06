import React from 'react';
import PropTypes from 'prop-types';

import './Transacao.css'


function Transacao({ data, tipo, valor }) {
    return (
        <div className="transacao-container">
            <p>{data}</p>
            <p>{tipo}</p>
            <p>R$ {valor}</p>
        </div>
    )
};

Transacao.defaultProps = {
    tipo: '',
    valor: '0',
    data: '',
}

Transacao.propTypes = {
    tipo: PropTypes.string,
    valor: PropTypes.string,
    data: PropTypes.string,
}

export default Transacao;