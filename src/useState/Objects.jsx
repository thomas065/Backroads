import { useState } from 'react';

function Objects() {
    const [person, setPerson] = useState({
        name: 'Peter',
        age: 24,
        hobby: 'read books',
    });

    const displayPerson = () => {
        setPerson({
            ...person,
            name: 'John',
        });
    };

    return (
        <section>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>Enjoys: {person.hobby}</h3>
            <button type='button' className='btn' onClick={displayPerson}>
                Show John
            </button>
        </section>
    );
}

export default Objects;
