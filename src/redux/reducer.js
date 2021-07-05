export default function increaseExpense(state = 0, action) {
    switch (action.type) {
        case 'EXPENSE':
            return state + action.payload;
        default:
            return state
    }
}

