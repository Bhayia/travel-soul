
export interface TripPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  departureDate: string;
}

export interface TravelPartner {
  id: string;
  name: string;
  age: number;
  interests: string[];
  plannedDestination: string;
  avatar: string;
  bio: string;
}

export interface AIPlanResponse {
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  estimatedBudget: string;
  essentialGear: string[];
}
