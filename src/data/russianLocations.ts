
export interface Location {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const russianLocations: Location[] = [
  {
    id: "1",
    name: "Saint Basil's Cathedral",
    description: "An Orthodox church in Red Square in Moscow, and is one of the most recognizable symbols of Russia. The cathedral was built from 1555 to 1561 on orders from Ivan the Terrible.",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=2149"
  },
  {
    id: "2",
    name: "Winter Palace",
    description: "The official residence of the Russian Emperors from 1732 to 1917. Today, the palace and its precincts form the Hermitage Museum in Saint Petersburg.",
    image: "https://images.unsplash.com/photo-1556610961-2fecc5927173?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "3",
    name: "Lake Baikal",
    description: "The world's deepest and oldest freshwater lake, containing 20% of the world's unfrozen freshwater. It is also among the clearest lakes in the world.",
    image: "https://images.unsplash.com/photo-1551845041-63e8e76836ce?auto=format&fit=crop&q=80&w=2089"
  },
  {
    id: "4",
    name: "Moscow Kremlin",
    description: "A fortified complex in the center of Moscow, overlooking the Moskva River. It is the best known of the kremlins, and includes five palaces, four cathedrals, and the enclosing Kremlin Wall with towers.",
    image: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "5",
    name: "Trans-Siberian Railway",
    description: "The longest railway line in the world, connecting Moscow with the Russian Far East and the Sea of Japan. It has connected Moscow with Vladivostok since 1916.",
    image: "https://images.unsplash.com/photo-1582485352538-6d77cebe5b11?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "6",
    name: "Peterhof Palace",
    description: "A series of palaces and gardens known as the 'Russian Versailles'. The palace-ensemble along with the city center is a UNESCO World Heritage Site.",
    image: "https://images.unsplash.com/photo-1604335078732-2d9749bf0c0c?auto=format&fit=crop&q=80&w=2070"
  }
];
