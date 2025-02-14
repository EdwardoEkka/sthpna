import React from 'react';
import { Faculty } from '../types';

type FacultyProfileProps = {
  faculty: Faculty;
};

const FacultyProfile: React.FC<FacultyProfileProps> = ( {faculty} ) => {
  return (
    <section className="flex justify-center items-center py-10 bg-gray-900">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <img
            src={faculty.image_url}
            alt={faculty.name}
            className="w-32 h-32 rounded-full border-2 border-black shadow-lg mx-auto sm:mx-0"
          />
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <h2 className="text-2xl font-bold text-gray-800">{faculty.name}</h2>
            <p className="text-lg text-gray-600">{faculty.designation}</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700"><strong>Qualification:</strong> {faculty.qualification}</p>
              <p className="text-gray-700"><strong>Specialization:</strong> {faculty.specialization}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {faculty.phone_no}</p>
              <p className="text-gray-700"><strong>Email:</strong> {faculty.email.join(', ')}</p>
              <p className="text-gray-700"><strong>Date of Birth:</strong> {faculty.date_of_birth}</p>
              <p className="text-gray-700"><strong>Date of Joining:</strong> {faculty.date_of_joining}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyProfile;
