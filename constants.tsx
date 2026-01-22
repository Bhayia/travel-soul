
import React from 'react';
import { TripPackage, TravelPartner } from './types';

export const TRIPS: TripPackage[] = [
  {
    id: '1',
    title: 'Kedarkantha Winter Trek',
    location: 'Uttarakhand, India',
    duration: '6 Days / 5 Nights',
    price: 8500,
    imageUrl: 'https://images.unsplash.com/photo-1544735745-b89b57c01f61?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    tags: ['Adventure', 'Trek', 'Snow'],
    departureDate: '15th Dec'
  },
  {
    id: '2',
    title: 'Spiti Valley Winter Expedition',
    location: 'Himachal Pradesh, India',
    duration: '9 Days / 8 Nights',
    price: 24000,
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    tags: ['Cultural', 'Expedition', 'Winter'],
    departureDate: '10th Jan'
  },
  {
    id: '3',
    title: 'Hampi Backpacking Trip',
    location: 'Karnataka, India',
    duration: '3 Days / 2 Nights',
    price: 5500,
    imageUrl: 'https://images.unsplash.com/photo-1582208119445-934c9c636f02?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    tags: ['History', 'Solo Friendly', 'Backpacking'],
    departureDate: '22nd Dec'
  },
  {
    id: '4',
    title: 'Kasol & Tosh Weekend',
    location: 'Parvati Valley, India',
    duration: '3 Days / 2 Nights',
    price: 4999,
    imageUrl: 'https://images.unsplash.com/photo-1596395817188-4444533039d5?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    tags: ['Relax', 'Mountains', 'Budget'],
    departureDate: 'Fri Every Week'
  }
];

export const PARTNERS: TravelPartner[] = [
  {
    id: 'p1',
    name: 'Aravind Swamy',
    age: 26,
    interests: ['Photography', 'Hiking', 'Cuisine'],
    plannedDestination: 'Manali',
    avatar: 'https://picsum.photos/seed/p1/200',
    bio: 'Looking for a chill buddy to explore old Manali cafés.'
  },
  {
    id: 'p2',
    name: 'Priya Sharma',
    age: 24,
    interests: ['Music', 'Yoga', 'Solo Travels'],
    plannedDestination: 'Varkala',
    avatar: 'https://picsum.photos/seed/p2/200',
    bio: 'Traveling south for some beach vibes and surfing!'
  }
];
