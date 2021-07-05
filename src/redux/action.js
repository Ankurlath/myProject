export function onExpense(range) {
    return {
       type: 'EXPENSE',
       payload: range,
    }
 }