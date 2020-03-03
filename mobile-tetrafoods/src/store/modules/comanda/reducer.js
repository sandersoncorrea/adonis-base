export default function comanda(
    state = { comanda: { codigo: 0, emissao: new Date().toISOString() } },
    action
) {
    switch (action.type) {
        case 'ADD_COMANDA_SUCCESS':
            return action;
        default:
            return state;
    }
}
