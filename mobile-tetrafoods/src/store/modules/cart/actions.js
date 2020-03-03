export function addToCart(product) {
    return {
        type: 'ADD_TO_CART',
        product
    };
}

export function removeFromCart(codigo) {
    return {
        type: 'REMOVE_FROM_CART',
        codigo
    };
}

export function updateQuantidade(codigo, quantidade) {
    return {
        type: 'UPDATE_QUANTIDADE_CART',
        codigo,
        quantidade
    };
}

export function cleanCart() {
    return { type: 'CLEAN_CART' };
}
