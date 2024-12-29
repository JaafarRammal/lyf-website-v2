"use client";

import { CalendarEvent } from "@/lib/calendarEvent";
import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define the type for the context
interface EventsContextType {
    events: CalendarEvent[] | null;
    error: string | null;
}

// Create the context with default value
const EventsContext = createContext<EventsContextType>({
    events: null,
    error: null,
});

// Define the provider component
interface EventsProviderProps {
    children: ReactNode;
}

export const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
    const [events, setEvents] = useState<CalendarEvent[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Load events when the app first loads
    useEffect(() => {
        fetch("/api/fetch-google-drive")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch events");
                }
                return response.json();
            })
            .then((json: CalendarEvent[]) => {
                // Ensure start and end are Date objects
                const parsedData = json.map((event) => ({
                    ...event,
                    start: new Date(event.start), // Ensure it's a Date object
                    end: new Date(event.end), // Ensure it's a Date object
                }));
                setEvents(parsedData);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    return (
        <EventsContext.Provider value={{ events, error }}>
            {children}
        </EventsContext.Provider>
    );
};

// Custom hook to consume the context
export const useEvents = (): EventsContextType => {
    const context = React.useContext(EventsContext);
    if (!context) {
        throw new Error("useEvents must be used within an EventsProvider");
    }
    return context;
};