import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const plusOne = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    const minusOne = () => {
        setCounter(counter - 1);
    };

    return (
        <section>
            <h1>Counter:</h1>
            <h2>{counter}</h2>
            <button type='button' className='btn' onClick={plusOne}>
                Increase
            </button>
            <span>&nbsp;</span>
            <button type='button' className='btn' onClick={minusOne}>
                Decrease
            </button>
        </section>
    );
};

export default Counter;
