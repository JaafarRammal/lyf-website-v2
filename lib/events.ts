import { CalendarEvent } from "./calendarEvent";

interface RawEvent {
    id: number;
    start: string; // Dates as human-readable strings
    end: string; // Dates as human-readable strings
    title: string;
}

const rawEvents: RawEvent[] = [
    {
        id: 21,
        start: "2025-03-29T18:00:00",
        end: "2025-03-29T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 20,
        start: "2025-03-28T18:00:00",
        end: "2025-03-28T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 19,
        start: "2025-03-27T18:00:00",
        end: "2025-03-27T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 18,
        start: "2025-03-23T18:00:00",
        end: "2025-03-23T20:00:00",
        title: "Volunteer Iftar",
    },
    {
        id: 17,
        start: "2025-03-20",
        end: "2025-03-20",
        title: "Shahadat Imam Ali AS",
    },
    {
        id: 16,
        start: "2025-03-22T18:00:00",
        end: "2025-03-22T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 15,
        start: "2025-03-21T18:00:00",
        end: "2025-03-21T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 14,
        start: "2025-03-20T18:00:00",
        end: "2025-03-20T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 13,
        start: "2025-03-22T18:00:00",
        end: "2025-03-22T23:30:00",
        title: "Night 3",
    },
    {
        id: 12,
        start: "2025-03-20T18:00:00",
        end: "2025-03-20T23:30:00",
        title: "Night 2",
    },
    {
        id: 11,
        start: "2025-03-18T18:00:00",
        end: "2025-03-18T23:30:00",
        title: "Night 1",
    },
    {
        id: 10,
        start: "2025-03-16T18:00:00",
        end: "2025-03-16T20:00:00",
        title: "LYF Event",
    },
    {
        id: 9,
        start: "2025-03-15",
        end: "2025-03-15",
        title: "Wiladat Imam Hassan AS",
    },
    {
        id: 8,
        start: "2025-03-15T18:00:00",
        end: "2025-03-15T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 7,
        start: "2025-03-14T18:00:00",
        end: "2025-03-14T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 6,
        start: "2025-03-13T18:00:00",
        end: "2025-03-13T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 5,
        start: "2025-03-10",
        end: "2025-03-10",
        title: "Wiladat Sayyida Khadija",
    },
    {
        id: 4,
        start: "2025-03-09T18:00:00",
        end: "2025-03-09T20:00:00",
        title: "Youth Iftar",
    },
    {
        id: 3,
        start: "2025-03-08T18:00:00",
        end: "2025-03-08T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 2,
        start: "2025-03-07T18:00:00",
        end: "2025-03-07T20:00:00",
        title: "Mosque Iftar",
    },
    {
        id: 1,
        start: "2025-03-06T18:00:00",
        end: "2025-03-06T20:00:00",
        title: "Mosque Iftar",
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
