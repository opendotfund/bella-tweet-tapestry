
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Repeat, Share } from "lucide-react";

export interface Tweet {
  id: string;
  content: string;
  date: string;
  likes: number;
  retweets: number;
  replies: number;
  image?: string;
}

interface TweetCardProps {
  tweet: Tweet;
}

const TweetCard = ({ tweet }: TweetCardProps) => {
  return (
    <Card className="mb-4 overflow-hidden hover:shadow-md transition-shadow animate-fade-up">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <img 
            src="https://pbs.twimg.com/profile_images/1662889299457503232/8e5nKcQU_400x400.jpg" 
            alt="BellaBuysDips profile" 
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-twitter-black">BellaBuysDips</span>
              <span className="text-twitter-darkGray">@bellabuysdips</span>
              <span className="text-twitter-darkGray">·</span>
              <span className="text-twitter-darkGray text-sm">{tweet.date}</span>
            </div>
            <p className="mt-1 text-twitter-black whitespace-pre-line">{tweet.content}</p>
            {tweet.image && (
              <div className="mt-3">
                <img 
                  src={tweet.image} 
                  alt="Tweet image" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            )}
            <div className="flex justify-between mt-4 text-twitter-darkGray">
              <div className="flex items-center gap-1 hover:text-twitter-blue transition cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{tweet.replies}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-green-500 transition cursor-pointer">
                <Repeat className="w-4 h-4" />
                <span className="text-sm">{tweet.retweets}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-red-500 transition cursor-pointer">
                <Heart className="w-4 h-4" />
                <span className="text-sm">{tweet.likes}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-twitter-blue transition cursor-pointer">
                <Share className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TweetCard;
