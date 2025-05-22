
import { Button } from '@/components/ui/button';
import { Twitter } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="w-full bg-twitter-extraLightGray rounded-lg overflow-hidden shadow-md mb-8 animate-fade-in">
      <div className="h-40 bg-twitter-blue"></div>
      <div className="p-6 relative">
        <div className="absolute -top-16 left-6 border-4 border-white rounded-full overflow-hidden">
          <img 
            src="https://pbs.twimg.com/profile_images/1662889299457503232/8e5nKcQU_400x400.jpg" 
            alt="BellaBuysDips profile" 
            className="w-32 h-32 object-cover"
          />
        </div>
        <div className="mt-20 md:flex md:justify-between md:items-end">
          <div>
            <h1 className="text-2xl font-bold text-twitter-black">BellaBuysDips</h1>
            <p className="text-twitter-darkGray">@bellabuysdips</p>
            <p className="mt-2 text-twitter-black">
              Dip enjoyer. Mother Russia enthusiast. Crypto trader. Not financial advice.
            </p>
            <div className="flex items-center mt-3 space-x-4">
              <span className="text-twitter-darkGray">
                <span className="font-bold text-twitter-black">3.2k</span> Following
              </span>
              <span className="text-twitter-darkGray">
                <span className="font-bold text-twitter-black">12.8k</span> Followers
              </span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              className="bg-twitter-blue hover:bg-twitter-blue/90 text-white flex items-center gap-2"
              onClick={() => window.open("https://x.com/bellabuysdips", "_blank")}
            >
              <Twitter className="h-4 w-4" />
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
