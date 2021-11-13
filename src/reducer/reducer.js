const initialState = {
    firstValue: 0,
    secondValue: 0,
    operator: '',
    result: 0,
}

const reducer = (state = initialState, action) => {

    let firstValue = parseInt(state.firstValue)
    let secondValue = parseInt(state.secondValue)

    switch (action.type) {

        case 'CHANGE_OPERATOR':
            return {
                ...state,
                operator: action.payload
            }

        case 'FIRST_VALUE':
            return {
                ...state,
                firstValue: action.payload,
            }

        case 'SECOND_VALUE':
            return {
                ...state,
                secondValue: action.payload
            }

        case 'CALCULATE':
            if (state.operator === '+') {
                return {
                    ...state,
                    result: firstValue + secondValue
                }
            }
            if (state.operator === '-') {
                return {
                    ...state,
                    result: firstValue - secondValue
                }
            }
            if (state.operator === '*') {
                return {
                    ...state,
                    result: firstValue * secondValue
                }
            }
            if (state.operator === '/') {
                return {
                    ...state,
                    result: firstValue / secondValue
                }
            }
            break
        default:
            return state
    }

}

export default reducer