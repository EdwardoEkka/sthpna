import React, { useState } from 'react';
import { Guest } from '../types';
import Guests from '../data/guest';


type GuestProps = {
  event: Guest;
};

const GuestCard = ({ event }: GuestProps) => {

  return (
    <div className="bg-white bg-opacity-0 shadow-lg  overflow-hidden  flex flex-col items-center text-center ring-red-500 w-full sm:w-72 md:w-80 lg:w-96">
      <img
        src={event.img}
        alt={event.name}
        className=" object-contain h-full"
      />
      <div className='px-4 py-4'>
      <h3 className="text-white text-xl sm:text-2xl mb-4">{event.name}</h3>
      <div className="flex flex-wrap justify-center gap-3">
      </div>
    </div>
    </div>
  );
};

const GuestList = () => {
  return (
    <div className="container mx-auto p-6">
  <h2 className="text-3xl sm:text-5xl font-bold text-center mb-20">Guest & Speaker Event</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center mt-10">
    {Guests.map((guest, index) => (
      <GuestCard key={index} event={guest} />
    ))}
  </div>
</div>

  );
};

export default GuestList;