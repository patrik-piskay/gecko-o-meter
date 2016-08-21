import React, { Component, PropTypes } from 'react';

import { calculateDegree, formatCurrencyValue } from './helpers';

const style = {
    wrapper: {
        backgroundColor: '#2a2a2a',
        color: '#dfdfdf',
        width: '400px',
        height: '350px'
    },
    value: {
        height: '130px',
        lineHeight: '130px',
        fontSize: '5rem',
        textAlign: 'center',
    },
    meter: {
        fontSize: '2rem',
        height: '150px',
        width: '300px',
        position: 'relative',
        margin: '0 auto',
        borderRadius: '150px 150px 0 0',
        border: '25px solid #dfdfdf',
        borderBottom: '0',
        boxSizing: 'border-box',
    },
    hand: {
        position: 'absolute',
        width: '156px',
        boxSizing: 'border-box',
        height: '25px',
        bottom: '-13px',
        left: '-31px',
        transform: 'rotate(0deg)',
        transformOrigin: 'right center 0px',
        backgroundColor: '#2a2a2a',
    },
    innerHand: {
        backgroundColor: '#d2d2d2',
        height: '7px',
        position: 'relative',
        top: '9px',
        left: '16px',
        borderRadius: '10px',
        width: '87%',
    },
    handEnd: {
        width: 10,
        height: 10,
        borderRadius: '10px 10px',
        border: '5px solid #dfdfdf',
        backgroundColor: '#2a2a2a',
        position: 'absolute',
        bottom: '-11px',
        left: '115px',
    },
    minValue: {
        position: 'absolute',
        bottom: '-43px',
        left: '-40px'
    },
    maxValue: {
        position: 'absolute',
        bottom: '-43px',
        right: '-43px'
    },
}

class GeckoOMeter extends Component {
    render() {
        const { value, min, max, unit } = this.props;

        return (
            <div style={style.wrapper}>
                <div style={style.value}>{formatCurrencyValue(value, unit)}</div>
                <div style={style.meter}>
                    <div style={{
                        ...style.hand,
                        transform: `rotate(${calculateDegree(value, min, max)}deg)`,
                    }}>
                        <div style={style.innerHand}></div>
                    </div>
                    <div style={style.handEnd}></div>
                    <div style={style.minValue}>{formatCurrencyValue(min, unit)}</div>
                    <div style={style.maxValue}>{formatCurrencyValue(max, unit)}</div>
                </div>
            </div>
        );
    }
}

GeckoOMeter.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    format: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired
};

export default GeckoOMeter;
