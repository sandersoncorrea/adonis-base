import produce from 'immer';
import { Formatter } from '../../../utils/str';

export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    p => p.codigo === action.product.codigo
                );

                if (productIndex >= 0) {
                    draft[productIndex].quantidade += 1;
                    const subtotal =
                        parseFloat(draft[productIndex].custo) *
                        parseInt(draft[productIndex].quantidade);
                    draft[productIndex].subtotal = Formatter('M', subtotal);
                } else {
                    draft.push({
                        ...action.product,
                        quantidade: 1,
                        subtotal: Formatter('M', action.product.custo),
                        detalhes: []
                    });
                }
            });
        case 'REOVE_FROM_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    p => p.codigo === action.codigo
                );
                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        default:
            return state;
    }
}
