import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users'; //GitHub users

function Values() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch(url);
                const users = await response.json();
                setUsers(users.slice(0,5)); // retrieves only 5 users
            } catch (error) {
                console.log('ERROR with fetch data!');
            }
        }
        getUsers();
    }, []);

    return (
        <section>
            <div>
                <h1>GitHub Users: </h1>
                <ul className='users'>
                    {users.map(user => {
                        const { id, login, avatar_url, html_url } = user;
                        return (
                            <li key={id}>
                                <img src={avatar_url} alt={login} />
                                <div>
                                    <h5>{login}</h5>
                                    <a href={html_url}>profile</a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Values;
