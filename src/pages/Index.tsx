
import { useState, useEffect } from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import TweetCard from '@/components/TweetCard';
import { tweets } from '@/data/tweets';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTweets, setFilteredTweets] = useState(tweets);

  useEffect(() => {
    const results = tweets.filter(tweet => 
      tweet.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTweets(results);
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
            placeholder="Search tweets..." 
            className="pl-10 border-twitter-lightGray focus:border-twitter-blue"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Tweet List */}
        <div className="max-w-2xl mx-auto">
          {filteredTweets.length > 0 ? (
            filteredTweets.map(tweet => (
              <TweetCard key={tweet.id} tweet={tweet} />
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
