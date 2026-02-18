
import { Property, UserStats, InvestorStats } from './types';

export const BRAND_NAME = "TRENDYVILLE";

export const MOCK_USER_STATS: UserStats = {
  activeBookings: 2,
  savedProperties: 14,
  totalSpent: 12450,
  walletBalance: 850.50
};

export const MOCK_INVESTOR_STATS: InvestorStats = {
  portfolioValue: 1250000,
  totalEarnings: 84200,
  averageRoi: '11.4%',
  activeInvestments: 4
};

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Skyline Penthouse',
    description: 'Ultra-modern 3-bedroom penthouse with panoramic city views and private terrace.',
    price: 2450000,
    location: 'Downtown Manhattan, NY',
    category: 'BUY',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    beds: 3,
    baths: 3.5,
    sqft: 2800,
    amenities: ['Private Elevator', 'Smart Home', 'Concierge']
  },
  {
    id: '2',
    title: 'Azure Beach Villa',
    description: 'Premium short-term rental property with direct beach access and infinity pool.',
    price: 850,
    location: 'Malibu, CA',
    category: 'AIRBNB',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    beds: 4,
    baths: 4,
    sqft: 3200,
    amenities: ['Pool', 'Ocean View', 'Chef Kitchen']
  },
  {
    id: '3',
    title: 'Silicon Valley Tech Hub',
    description: 'Prime commercial/residential investment opportunity in high-growth district.',
    price: 4800000,
    location: 'Palo Alto, CA',
    category: 'INVESTMENT',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    beds: 0,
    baths: 0,
    sqft: 12000,
    roi: '12.5% Annually',
    yield: '6.8%',
    amenities: ['High-speed Fiber', 'Sustainable Tech', 'Expansion Potential']
  },
  {
    id: '4',
    title: 'Modern Loft in Arts District',
    description: 'Chic industrial loft perfect for urban professionals. Long-term lease available.',
    price: 4200,
    location: 'Chicago, IL',
    category: 'RENT',
    image: 'https://images.unsplash.com/photo-1536376074432-bc7158d2c632?auto=format&fit=crop&w=800&q=80',
    beds: 1,
    baths: 1,
    sqft: 950,
    amenities: ['Exposed Brick', 'Roof Deck', 'Parking']
  },
  {
    id: '5',
    title: 'Multi-Family Portfolio',
    description: 'Set of 4 townhouses with 100% occupancy rate. Ideal for long-term hold.',
    price: 3200000,
    location: 'Austin, TX',
    category: 'INVESTMENT',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    beds: 8,
    baths: 8,
    sqft: 6400,
    roi: '9.2% Annually',
    yield: '7.1%',
    amenities: ['Maintenance-free', 'Near University', 'Upgraded HVAC']
  }
];
