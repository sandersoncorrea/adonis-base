export function Formatter(tipo, valor) {
    if (typeof valor !== 'number') {
        return '0';
    } else if (tipo === 'P') {
        return `${valor.toFixed(2)}%`;
    } else if (tipo === 'N') {
        return valor.toFixed(2).replace('.', ',');
    } else if (tipo === 'M') {
        return (
            'R$ ' +
            valor
                .toFixed(2)
                .replace('.', ',')
                .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
        );
    } else {
        return valor.toFixed(2).replace('.', ',');
    }
}
