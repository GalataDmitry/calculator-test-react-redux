
export const firstValueFunc = (value) => {
    return {
        type: 'FIRST_VALUE',
        payload: value
    }
}

export const secondValueFunc = (value) => {
    return {
        type: 'SECOND_VALUE',
        payload: value
    }
}

export const operatorFunc = (operator) => {
    return {
        type: 'CHANGE_OPERATOR',
        payload: operator
    }
}

export const calculate = () => {
    return {
        type: 'CALCULATE'
    }
}