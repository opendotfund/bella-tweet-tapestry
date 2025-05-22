
import { useState, useEffect } from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import EmbeddedTweet from '@/components/EmbeddedTweet';

// Tweet IDs from the provided URLs
const tweetIds = [
  '1864142190861025413',
  '1919791693232033796',
  '1902864625559073062',
  '1880332667855729152',
  '1870711545790906704',
  '1864895712334418293',
  '1864875176711664101'
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTweetIds, setFilteredTweetIds] = useState(tweetIds);

  // Filter tweets based on ID for now (since we can't search content of embedded tweets)
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredTweetIds(tweetIds);
    } else {
      const filtered = tweetIds.filter(id => 
        id.includes(searchTerm)
      );
      setFilteredTweetIds(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <ProfileHeader />
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-twitter-darkGray" />
          </div>
          <Input 
            type="text" 
            placeholder="Filter tweets by ID..." 
            className="pl-10 border-twitter-lightGray focus:border-twitter-blue"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Embedded Tweets */}
        <div className="max-w-2xl mx-auto">
          {filteredTweetIds.length > 0 ? (
            filteredTweetIds.map(tweetId => (
              <EmbeddedTweet key={tweetId} tweetId={tweetId} />
            ))
          ) : (
            <div className="text-center py-8 text-twitter-darkGray">
              No tweets found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
