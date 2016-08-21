export const formatCurrencyValue = (value, unit) => {
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
