import { useState, useEffect } from 'react';

function Values() {
    const [value, setValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    // useEffect(() => {
        
    //     console.log('Hello from useEFFECT');
    // }, []);

    return (
        <section>
            <div>
                <h1>1st Value: {value}</h1>
                <button className='btn' onClick={() => setValue(value + 1)}>
                    {' '}
                    click me
                </button>
            </div>
            <div>
                <h1>2nd Value: {secondValue}</h1>
                <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
                    {' '}
                    click me
                </button>
            </div>
        </section>
    );
}

export default Values;
