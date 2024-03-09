const BUY_ITEM = 'BUY_ITEM';

const initialState = {
    kiosk: {
        beer: { quantity: 100, pricePerUnit: 2 },
        chips: { quantity: 50, pricePerUnit: 1.5 },
        chocolate: { quantity: 30, pricePerUnit: 3 }
    },
    cashRegister: 0,
    totalSpent: 0
};

const kioskReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ITEM:
            const { itemName, quantity, moneySpent } = action.payload;
            if (state.kiosk[itemName].quantity >= quantity && moneySpent >= quantity * state.kiosk[itemName].pricePerUnit) {
                return {
                    ...state,
                    kiosk: {
                        ...state.kiosk,
                        [itemName]: {
                            ...state.kiosk[itemName],
                            quantity: state.kiosk[itemName].quantity - quantity
                        }
                    },
                    cashRegister: state.cashRegister + moneySpent,
                    totalSpent: state.totalSpent + moneySpent
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};