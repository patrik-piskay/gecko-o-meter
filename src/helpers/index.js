const isNumber = (n) => {
    return typeof n === 'number' && Number.isFinite(n);
}

export const formatCurrencyValue = (value, unit) => {
    if (!isNumber(value)) {
        throw new TypeError(`Value ${value} is not a number`);
    }
    if (!unit) {
        throw new Error('Unit is not defined');
    }

    return value.toLocaleString('en', {
        style: 'currency',
        currency: unit,
        maximumFractionDigits: 0
    });
}

export const calculateDegree = (value, min, max) => {
    const degree = Math.round((180 / (max - min)) * (value - min));

    if (degree > 180) return 180;
    if (degree < 0) return 0;
    return degree;
}
