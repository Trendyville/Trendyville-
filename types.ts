
export type PropertyCategory = 'BUY' | 'RENT' | 'AIRBNB' | 'INVESTMENT';
export type AppMode = 'TRAVELER' | 'INVESTOR';
export type AppView = 'BROWSE' | 'DASHBOARD';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  category: PropertyCategory;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  roi?: string; 
  yield?: string; 
  amenities: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface UserStats {
  activeBookings: number;
  savedProperties: number;
  totalSpent: number;
  walletBalance: number;
}

export interface InvestorStats {
  portfolioValue: number;
  totalEarnings: number;
  averageRoi: string;
  activeInvestments: number;
}
