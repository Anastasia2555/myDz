const buyItem = (itemName, quantity, moneySpent) => ({
    type: BUY_ITEM,
    payload: { itemName, quantity, moneySpent }
});