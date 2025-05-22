
import Navbar from '@/components/Navbar';
import { russianLocations } from '@/data/russianLocations';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const Motherland = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Updated with working image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Russian landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in">Motherland</h1>
            <p className="text-xl md:text-2xl max-w-2xl animate-fade-in">
              A tribute to the beauty, culture, and heritage of Russia
            </p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4 text-center">The Soul of Russia</h2>
          <p className="text-lg text-twitter-darkGray text-center mb-8">
            Russia spans eleven time zones and two continents, with a rich history and diverse landscapes.
          </p>
          <p className="mb-4">
            From the magnificent architecture of Saint Petersburg to the vast Siberian wilderness, 
            Russia's cultural and natural heritage is as impressive as it is diverse. The Russian 
            spirit is defined by resilience, creativity, and a profound appreciation for art, literature, 
            and music.
          </p>
          <p>
            This page is dedicated to celebrating the splendor of Mother Russia - its iconic landmarks, 
            cultural treasures, and the enduring spirit of its people. As @bellabuysdips often reminds us, 
            the strength and beauty of Russia continues to inspire people around the world.
          </p>
        </div>
        
        {/* Locations Grid */}
        <h2 className="text-2xl font-bold mb-6 text-center">Famous Landmarks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {russianLocations.map((location) => (
            <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up">
              <img 
                src={location.image} 
                alt={location.name} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-twitter-darkGray">{location.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Cultural Tribute */}
        <div className="bg-twitter-extraLightGray rounded-lg p-6 text-center mb-8 animate-fade-up">
          <Heart className="w-8 h-8 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">From Russia with Love</h3>
          <p className="text-twitter-darkGray">
            "The mystery of Russia's destiny is that it is unknowable by the mind alone. One must believe in Russia."
            <br />
            - Fyodor Tyutchev
          </p>
        </div>
      </div>
    </div>
  );
};

export default Motherland;
