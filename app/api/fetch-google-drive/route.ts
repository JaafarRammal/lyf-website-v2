import { CalendarEvent } from "@/lib/calendarEvent";

interface RawEvent {
    id: number;
    start: string; // Dates as human-readable strings
    end: string;   // Dates as human-readable strings
    title: string;
}

export const dynamic = "force-static"; // This ensures the route is treated as static
export const revalidate = 600; // Re-fetches data every 600 seconds = 10 minutes

export async function GET(): Promise<Response> {
    try {
        const fileId = "1XGWEnAb7ctssgYKYtiMm0qQoXVRFSlkI"; // Replace with your file ID
        const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch file from Google Drive");
        }

        // Parse raw JSON data
        const rawEvents: RawEvent[] = await response.json();

        console.log(rawEvents);

        // Map raw events to CalendarEvent[]
        const parsedEvents: CalendarEvent[] = rawEvents.map((event) => {
            const startDate = new Date(event.start);
            const endDate = new Date(event.end);

            return {
                id: event.id,
                start: startDate,
                end: endDate,
                title: event.title,
            };
        });

        console.log(parsedEvents);

        return new Response(JSON.stringify(parsedEvents), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: "Failed to fetch or parse events" }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}