import { CalendarEvent } from "./calendarEvent";

interface RawEvent {
    id: number;
    start: string; // Dates as human-readable strings
    end: string; // Dates as human-readable strings
    title: string;
}

const rawEvents: RawEvent[] = [
    {
        id: 6,
        start: "2025-01-05T18:00:00",
        end: "2025-01-05T21:00:00",
        title: "Jaafar's new event",
    },
    {
        id: 5,
        start: "2025-01-05T14:00:00",
        end: "2025-01-05T16:00:00",
        title: "Team Brainstorming",
    },
    {
        id: 4,
        start: "2025-01-02",
        end: "2025-01-04",
        title: "Multi-Day Conference",
    },
    {
        id: 3,
        start: "2024-12-31T18:00:00",
        end: "2025-01-01T00:00:00",
        title: "New Year Reflections",
    },
    {
        id: 2,
        start: "2024-12-30",
        end: "2024-12-30",
        title: "Full Day Workshop",
    },
    {
        id: 1,
        start: "2024-12-29T09:00:00",
        end: "2024-12-29T12:00:00",
        title: "Morning Meeting",
    },
];

export const events: CalendarEvent[] = rawEvents.map((event) => {
    const startDate = new Date(event.start);
    const endDate = new Date(event.end);

    return {
        id: event.id,
        start: startDate,
        end: endDate,
        title: event.title,
    };
});
