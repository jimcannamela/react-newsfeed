//NewsFeed.js

// import React from 'react';
import NewsFeedItem from './NewsFeedItem';

function NewsFeed() {

    const messages = [
        {
          id: 'ea242f1a-3c68-4cd0-bc3c-0df1a5ac378c',
          username: 'mittensTheCat',
          reposts: 342,
          text: "I'm feeling peckish, does anyone have any MeowMix for me?"
        },
        {
          id: 'a62ed34e-e5c8-440a-89d6-2b83feed9575',
          username: 'miniTiger',
          reposts: 93,
          text: "Funny how the humans think they are in control of the house."
        },
        {
          id: 'fe17c95f-0128-43a6-bec5-8dfd314be09a',
          username: 'dustpawTom',
          reposts: 832,
          text: "The new scratching posts are out!  Keep an eye out for my latest reviews."
        }
      ]

    return(
        <div className="news-feed">
        {
            messages.map(msg => <NewsFeedItem 
                key={msg.id} 
                message={msg}
            />)
        }
        </div>
    )
}

export default NewsFeed;