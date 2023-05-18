//NewsFeedItem.js

// import React from 'react';

const handleRepostButtonClick = (message) => {
    alert(`you reposted a message by ${message.username}`)
};

function NewsFeedItem({ message }) {
    return (
        <>
        <h2>@{message.username}</h2>
        <span>Reposts:&nbsp;{message.reposts}</span>
        <p>{message.text}</p>
        <button onClick={() => handleRepostButtonClick(message)}> Re-post </button>
        <hr/>
        </>
    )
}

export default NewsFeedItem;