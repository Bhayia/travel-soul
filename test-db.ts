
import { db } from './db';
import { tripItineraries } from './db/schema';
import { count } from 'drizzle-orm';

async function testConnection() {
    try {
        const result = await db.select({ value: count() }).from(tripItineraries);
        console.log("Connection successful! Row count:", result[0].value);
    } catch (error) {
        console.error("Connection failed:", error);
    }
}

testConnection();
