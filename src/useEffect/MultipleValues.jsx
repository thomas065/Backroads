import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://api.github.com/users/Thomas065';

function MultipleValues() {
    const [isLoading, setIsLoading] = useState(true); // boolean result
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const user = await response.json();
                setUser(user);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
            setIsLoading(false);
        }
        getUser();

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    if (isLoading) {
        return <h2>Loading....</h2>;
    }
    if (isError) {
        return <h2>Error loading Github User....</h2>;
    }
    return (
        <div className='card h-100' style={{ width: '18rem' }}>
            <img
                src={user.avatar_url}
                className='card-img-top'
                alt={user.name}
            />
            <div className='card-body'>
                <h5 className='card-title'>{user.name}</h5>
                <p className='card-text'>{user.bio}</p>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Portfolio</li>
                <li className='list-group-item'>
                    <a target='_blank' href={user.blog}>
                        {user.blog}
                    </a>
                </li>
            </ul>
            <div className='card-body'>
                <a
                    href='https://github.com/thomas065?tab=repositories'
                    target='_blank'
                    className='card-link'
                >
                    Repos
                </a>
                <a
                    href='https://blogsyblurbs.up.railway.app/'
                    target='_blank'
                    className='card-link'
                >
                    Blog
                </a>
            </div>
        </div>
    );
}

export default MultipleValues;
