
import { Button } from '@/components/ui/button';
import { Twitter } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="w-full bg-twitter-extraLightGray rounded-lg overflow-hidden shadow-md mb-8 animate-fade-in">
      <div className="h-40 bg-twitter-blue">
        <img 
          src="/lovable-uploads/db981cee-acc7-4204-afa0-6b56d77d4491.png" 
          alt="Bella banner" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 relative">
        <div className="absolute -top-16 left-6 border-4 border-white rounded-full overflow-hidden">
          <img 
            src="/lovable-uploads/db981cee-acc7-4204-afa0-6b56d77d4491.png" 
            alt="Bella profile" 
            className="w-32 h-32 object-cover"
          />
        </div>
        <div className="mt-20 md:flex md:justify-between md:items-end">
          <div>
            <h1 className="text-2xl font-bold text-twitter-black">Bella</h1>
            <p className="text-twitter-darkGray">@bellabuysdips</p>
            <p className="mt-2 text-twitter-black">
              I'm just a girl
            </p>
            <div className="flex items-center mt-3 space-x-4">
              <span className="text-twitter-darkGray">
                <span className="font-bold text-twitter-black">690</span> Following
              </span>
              <span className="text-twitter-darkGray">
                <span className="font-bold text-twitter-black">9,175</span> Followers
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
