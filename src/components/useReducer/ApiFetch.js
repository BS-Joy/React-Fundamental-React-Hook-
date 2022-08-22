import React from 'react';

const ApiFetch = () => {
    const [posts, setPost] = React.useState({});

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                setPost(json);
            })
    }, []);

    return (
        <div>
            <p>{posts.userId}</p>
        </div>
    );
}

export default ApiFetch;
