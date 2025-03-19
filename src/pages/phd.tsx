import React from 'react'

const Phd = () => {

  const students = [
    { "id": 1, "regNo": "2210031007", "name": "Subhashree Rout" },
    { "id": 2, "regNo": "2210031002", "name": "Sucharita Kujur" },
    { "id": 3, "regNo": "2210031013", "name": "Sandipak Choudhury" },
    { "id": 4, "regNo": "1910031002", "name": "Aparajita Radhakrishnan" },
    { "id": 5, "regNo": "2110031004", "name": "Suvam Kumar Naath" },
    { "id": 6, "regNo": "2210031009", "name": "Calvin Ahmed" },
    { "id": 7, "regNo": "2210031017", "name": "Diptangit Rout" },
    { "id": 8, "regNo": "1810031010", "name": "Akankshya" },
    { "id": 9, "regNo": "1810031005", "name": "Kusik Subhadarshini" },
    { "id": 10, "regNo": "2210031004", "name": "Manoranjan Dash" },
    { "id": 11, "regNo": "2010031015", "name": "Swagatika Salini" },
    { "id": 12, "regNo": "2110031015", "name": "Rajajita Das" },
    { "id": 13, "regNo": "2110031002", "name": "Anjana Khamari" },
    { "id": 14, "regNo": "2110031002", "name": "Moutusree Sarangi" },
    { "id": 15, "regNo": "2210031026", "name": "Anshuman Mishra" },
    { "id": 16, "regNo": "1710031003", "name": "Pradrinee Samal" },
    { "id": 17, "regNo": "1810021017", "name": "Ambicapriyadarshini Moh" },
    { "id": 18, "regNo": "2210031008", "name": "Krittika Bhoi" },
    { "id": 19, "regNo": "2410021008", "name": "Prithinarayan Sahu" },
    { "id": 20, "regNo": "0910032008", "name": "Monali Pradhan" },
    { "id": 21, "regNo": "2210031015", "name": "Prabhakar Sethy" },
    { "id": 22, "regNo": "2110031014", "name": "Deepak Kumar Mohanty" },
    { "id": 23, "regNo": "1710031001", "name": "Bibhupada Keshari" },
    { "id": 24, "regNo": "2910031011", "name": "Neha Sharma" },
    { "id": 25, "regNo": "2910031012", "name": "Priyansh Priyadarshi" },
    { "id": 26, "regNo": "2310031015", "name": "Maxumeet Artt" },
    { "id": 27, "regNo": "1810031008", "name": "Soumya Sidhda" },
    { "id": 28, "regNo": "1910031003", "name": "Hemalata Kumar Behera" },
    { "id": 29, "regNo": "2110031013", "name": "Niharika Patra" },
    { "id": 30, "regNo": "2110031017", "name": "Shraddhanjali Pradhan" },
    { "id": 31, "regNo": "2410031009", "name": "Ashutosh Nanda" },
    { "id": 32, "regNo": "2210031019", "name": "Sanjiv Ku Parhi" },
    { "id": 33, "regNo": "2210031061", "name": "Laxman Satpathy" },
    { "id": 34, "regNo": "2010031004", "name": "Pritikrishna Das" },
    { "id": 35, "regNo": "1910031001", "name": "Abhay Mayank" },
    { "id": 36, "regNo": "2110031001", "name": "Sima Tjmulayan" },
    { "id": 37, "regNo": "2410031000", "name": "Pratyush Panda" }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Sl No</th>
              <th className="py-3 px-4 text-left">Regd. No</th>
              <th className="py-3 px-4 text-left">Name of the Student</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 text-sm sm:text-base">{student.id}</td>
                <td className="py-3 px-4 text-sm sm:text-base">{student.regNo}</td>
                <td className="py-3 px-4 text-sm sm:text-base">{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Phd;
