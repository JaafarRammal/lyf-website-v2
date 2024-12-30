"use client";

import { Skeleton } from "./ui/skeleton";
import { CalendarEvent } from "@/lib/calendarEvent";
import { events } from "@/lib/events";
import { monthToText } from "@/lib/utils";
import { format } from "date-fns";

// Add helper function
const groupEventsByMonth = (events: CalendarEvent[]) => {
    return events?.reduce((groups, event) => {
        const month = format(new Date(event.start), "MMMM yyyy");
        if (!groups[month]) {
            groups[month] = [];
        }
        groups[month].push(event);
        return groups;
    }, {} as Record<string, CalendarEvent[]>);
};

// Add Month component
const Month = ({ month, events }: { month: string; events: CalendarEvent[] }) => (
    <div className="">
        <h3 className="text-xl font-semibold mb-4 ">{month}</h3>
        <div className="flex flex-col gap-2">
            {events.map((event) => (
                <Event key={event.id} event={event} />
            ))}
        </div>
    </div>
);

export function UpcomingEvents() {

    const latestEvents = events
        ?.filter((event) => event.start.getTime() >= new Date().setHours(0, 0, 0, 0))
        .sort((a, b) => a.start.getTime() - b.start.getTime())
        .slice(0, 20);

    return (
        <div className="max-w-[95rem] mx-auto p-10 md:px-40 flex flex-col gap-8">
            <h2 className="font-bold text-3xl flex gap-4 items-center">Upcoming Events</h2>
            {events == null && (
                <>
                    <LoadingEvent />
                    <LoadingEvent />
                    <LoadingEvent />
                    <LoadingEvent />
                </>
            )}
            <div className="flex flex-row flex-wrap md:gap-32 gap-16">
                {Object.entries(groupEventsByMonth(latestEvents || [])).map(([month, events]) => (
                    <Month key={month} month={month} events={events} />
                ))}
            </div>
        </div>
    );
}

function Event({ event }: { event: CalendarEvent }) {
    return (
        <div className="flex items-center space-x-4">
            <div className="size-16 font-bold rounded-full bg-primary text-white flex flex-col items-center justify-center">
                <div>{event.start.getDate()}</div>
                <div>{monthToText(event.start.getMonth()).slice(0, 3)}</div>
            </div>
            <div className="space-y-2 w-fit">
                <p className="font-bold">{event.title}</p>
                <p>
                    {event.start.toLocaleDateString()} - {event.end.toLocaleDateString()}<br />
                    {event.start.toLocaleTimeString()} - {event.end.toLocaleTimeString()}
                </p>
            </div>
        </div>
    );
}

function LoadingEvent() {
    return (
        <div className="flex items-center space-x-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
            </div>
        </div>
    );
}
