import React, { useEffect, useRef } from 'react';

interface EmbeddedTweetProps {
  tweetId: string;
}

const EmbeddedTweet: React.FC<EmbeddedTweetProps> = ({ tweetId }) => {
  const tweetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widget script if it hasn't been loaded yet
    if (!window.twttr) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }

    // Create tweet embed once script is loaded
    const embedTweet = () => {
      if (window.twttr && tweetRef.current) {
        tweetRef.current.innerHTML = '';
        window.twttr.widgets.createTweet(
          tweetId,
          tweetRef.current,
          {
            theme: 'light',
            dnt: true,
            align: 'center'
          }
        );
      }
    };

    // If Twitter widget is already loaded, embed tweet immediately
    if (window.twttr) {
      embedTweet();
    } else {
      // Otherwise wait for script to load
      const onLoad = () => {
        embedTweet();
      };
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, [tweetId]);

  return (
    <div className="tweet-embed-container my-6">
      <div ref={tweetRef} className="flex justify-center"></div>
    </div>
  );
};

export default EmbeddedTweet;
