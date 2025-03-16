import React from 'react';
import { Events } from '../types';

type EventsProps = {
    event: Events;
};

const Event = ({ event }: EventsProps) => {
  return (
    <div>
        <div className="bg-white bg-opacity-0 shadow-lg rounded-2xl overflow-hidden p-4 
                        flex flex-col items-center text-center backdrop-blur-md ">
            <img
              src={event.img}
              alt={event.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-gray-300"
            />
            <button>{event.btn}</button>
        </div>
    </div>
  );
};

const EventList = () => {
    return (
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Our Coordinators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Events.map((event, index) => (
              <Event key={index} event={event} />
            ))}
          </div>
        </div>
      );
};

export default EventList;
