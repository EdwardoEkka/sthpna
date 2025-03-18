import React from 'react'

const Mtech = () => {

  const students = [
    { "id": 1, "regNo": "2305030001", "name": "LUGU HEMBRAM" },
    { "id": 2, "regNo": "2305030002", "name": "NAYANIKA JENA" },
    { "id": 3, "regNo": "2305030003", "name": "R LIPSA REDDY" },
    { "id": 4, "regNo": "2305030004", "name": "SHASHANKA SHEKHAR PUROHIT" },
    { "id": 5, "regNo": "2305030034", "name": "BALSIBANANDA DASH" },
    { "id": 6, "regNo": "2305030036", "name": "SHEETAL MOHAPATRA" },
    { "id": 7, "regNo": "2305030005", "name": "ABHIJEET MOHANKUDA" },
    { "id": 8, "regNo": "2305030006", "name": "AKHILESH NAYAK" },
    { "id": 9, "regNo": "2305030007", "name": "AKRUTI BEHERA" },
    { "id": 10, "regNo": "2305030008", "name": "AMRUTRAJ PUROHIT" },
    { "id": 11, "regNo": "2305030009", "name": "ARPITA TIGGA" },
    { "id": 12, "regNo": "2305030010", "name": "KSHIRABDHI TANAYA HOTA" },
    { "id": 13, "regNo": "2305030011", "name": "MONALISHA MAHAPATRA" },
    { "id": 14, "regNo": "2305030012", "name": "N DIVYASHREE" },
    { "id": 15, "regNo": "2305030013", "name": "NISHANT MOHANTY" },
    { "id": 16, "regNo": "2305030014", "name": "REECHA THUMB SAMANTA" },
    { "id": 17, "regNo": "2305030015", "name": "RIPAN KUMAR PRADHAN" },
    { "id": 18, "regNo": "2305030016", "name": "RUCHISMITA MAHAKHUD" },
    { "id": 19, "regNo": "2305030017", "name": "SHITIKANTHA MANGAL" },
    { "id": 20, "regNo": "2305030018", "name": "SIDDHANT DAS" },
    { "id": 21, "regNo": "2305030019", "name": "SOUMYA RANJAN TANDI" },
    { "id": 22, "regNo": "2305030020", "name": "SUBHRAMANYAM BEHERA" },
    { "id": 23, "regNo": "2305030023", "name": "RAJAT KUMAR MEHER" },
    { "id": 24, "regNo": "2305030021", "name": "SWARNA PRAVA DAS" },
    { "id": 25, "regNo": "2305030022", "name": "MANORANJAN BEHERA" },
    { "id": 26, "regNo": "2305030024", "name": "STUTEE PRIYA MAHARANA" },
    { "id": 27, "regNo": "2305030025", "name": "DEBASISH SAHOO" },
    { "id": 28, "regNo": "2305030035", "name": "SUCHITRA SAHU" },
    { "id": 29, "regNo": "2305030037", "name": "BISWA BANDITA BEHERA" },
    { "id": 30, "regNo": "2305030038", "name": "SADANAN BHOI" },
    { "id": 31, "regNo": "2305030039", "name": "ROSHINI BARIK" },
    { "id": 32, "regNo": "2305030040", "name": "SARBAPRATYUSH RANJAN NAYAK" },
    { "id": 33, "regNo": "2305030041", "name": "SALABEGA PADHAN" },
    { "id": 34, "regNo": "2305030042", "name": "MOHIT KUMAR PATEL" },
    { "id": 35, "regNo": "2305030043", "name": "PRABHAT KUMAR JENA" },
    { "id": 36, "regNo": "2305030026", "name": "ADITYA PRASAD PATRA" },
    { "id": 37, "regNo": "2305030027", "name": "AISMITA CHHATOI" },
    { "id": 38, "regNo": "2305030028", "name": "KAUSHIK NAYAK" },
    { "id": 39, "regNo": "2305030029", "name": "LAXMIPRIYA PATI" },
    { "id": 40, "regNo": "2305030030", "name": "SAMEER MEHER" },
    { "id": 41, "regNo": "2305030031", "name": "SNIGDHARUPA PRIYADARSHINI" },
    { "id": 42, "regNo": "2305030032", "name": "AKANKSHYA JENA" },
    { "id": 43, "regNo": "2305030033", "name": "AISWARYA DARUAN" }
  ]

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
  )
}

export default Mtech
