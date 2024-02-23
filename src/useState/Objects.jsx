import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Objects() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [person, setPerson] = useState({
        name: 'Peter',
        age: 24,
        hobby: 'reading books',
    });

    const displayPerson = () => {
        setPerson({
            ...person,
            name: 'Sarah',
            age: '12',
            hobby: 'arts and crafts',
        });
    };

    return (
        <>
            <section>
                <h3>{person.name}</h3>
                <h3>{person.age}</h3>
                <h3>Enjoys: {person.hobby}</h3>
                <button type='button' className='btn' onClick={handleShow}>
                    Display
                </button>
            </section>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{person.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Age: {person.age}</Modal.Body>
                <Modal.Body>Enjoys: {person.hobby}</Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={displayPerson}>
                        Show Sarah
                    </Button>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// return (
//
// );

export default Objects;
// onClick={displayPerson}
