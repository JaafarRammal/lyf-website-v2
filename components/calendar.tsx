"use client";

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

interface CalendarEvent {
    id: number;
    start: Date;
    end: Date;
    title: string;
}

interface CalendarProps {
    events: CalendarEvent[];
}

const MyCalendar = (props: CalendarProps) => (
    <div className="p-10 max-w-[95rem] mx-auto">
        <h1 className="text-3xl font-bold pb-10">Events calendar</h1>
        <div className='h-[70vh]'>
            <Calendar
                localizer={localizer}
                events={props.events}
            />
        </div>
    </div>
)

const events2: CalendarEvent[] = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    start: new Date(2024, 11, index % 28, 8, 0, 0),
    end: new Date(2024, 11, index % 28, 9, 0, 0),
    title: "Repeated event",
}));

export function EventsCalendar() {
    return <MyCalendar events={events2} />;
}
