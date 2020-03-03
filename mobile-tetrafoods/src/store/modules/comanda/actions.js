export function addComandaRequest(codigo) {
    return {
        type: 'ADD_COMANDA_REQUEST',
        codigo
    };
}

export function addComandaSuccess(comanda) {
    console.tron.log({ comanda });
    return {
        type: 'ADD_COMANDA_SUCCESS',
        comanda
    };
}
