
import { pgTable, serial, text, integer, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const tripItineraries = pgTable('trip_itineraries', {
  id: serial('id').primaryKey(),
  destination: text('destination').notNull(),
  days: integer('days').notNull(),
  vibe: text('vibe').notNull(),
  itinerary: jsonb('itinerary').notNull(),
  estimatedBudget: text('estimated_budget').notNull(),
  essentialGear: text('essential_gear').array().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const travelPartners = pgTable('travel_partners', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  interests: text('interests').array().notNull(),
  plannedDestination: text('planned_destination').notNull(),
  bio: text('bio').notNull(),
  avatar: text('avatar').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
