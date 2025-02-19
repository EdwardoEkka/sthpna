import React from 'react'
import { Coordinator } from '../types'
import Coordinators from '../data/coordinator'

type CoordinatorProps = {
    coordinator: Coordinator;
}

const CoordinatorCard = ({ coordinator }: CoordinatorProps) => {
    return (
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col items-center text-center">
        <img
          src={coordinator.img_url}
          alt={coordinator.name}
          className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-gray-300"
        />
        <h3 className="text-xl font-semibold text-black">{coordinator.name}</h3>
        <p className="text-lg text-black">{coordinator.position}</p>

      </div>
    );
};

const CoordinatorsList = () => {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Our Coordinators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Coordinators.map((coordinator, index) => (
            <CoordinatorCard key={index} coordinator={coordinator} />
          ))}
        </div>
      </div>
    );
};

export default CoordinatorsList;
