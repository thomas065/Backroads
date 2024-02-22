import { useState } from 'react';
import { data } from '../data/data';

function People() {
    const [people, setPeople] = useState(data);

    const removeItem = id => {
        setPeople(people.filter(person => person.id !== id));
    };

    return (
        <section>
            <div>
                {people.map(person => {
                    const { id, name } = person;

                    return (
                        <div key={id} className='mb-2'>
                            <h4>{name}</h4>
                            <button
                                type='button'
                                className='p-1 rounded-5'
                                onClick={() => removeItem(id)}
                            >
                                remove
                            </button>
                        </div>
                    );
                })}
                <button
                    type='button'
                    style={{ marginTop: '2rem' }}
                    className='btn'
                    onClick={() => setPeople([])}
                >
                    Clear All
                </button>
            </div>
        </section>
    );
}

export default People;
