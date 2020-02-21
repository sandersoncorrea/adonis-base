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
                } else {
                    draft.push({
                        ...action.product,
                        quantidade: 1,
                        detalhes: []
                    });
                }
            });

        case 'REMOVE_FROM_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    p => p.codigo === action.codigo
                );
                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case 'UPDATE_QUANTIDADE_CART':
            if (action.quantidade <= 0) {
                return state;
            }
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    p => p.codigo === action.codigo
                );
                if (productIndex >= 0) {
                    draft[productIndex].quantidade = action.quantidade;
                }
            });

        default:
            return state;
    }
}
