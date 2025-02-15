"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { CalendarEvent } from "@/lib/calendarEvent";
import React from "react";
import { Spinner } from "./spinner";
import { events } from "@/lib/events";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

interface CalendarProps {
    events: CalendarEvent[] | null;
}

const MyCalendar = (props: CalendarProps) => (
    <div className="p-10 max-w-[95rem] mx-auto md:px-40">
        <h1 className="text-3xl font-bold pb-10 flex gap-4 items-center">Events calendar {props.events == null && <Spinner />}</h1>
        <div className="h-[70vh]">
            <Calendar localizer={localizer} events={props.events ?? []} />
        </div>
    </div>
);

export function EventsCalendar() {

    return (
        <div>
            <MyCalendar events={events} />
        </div>
    );
}

