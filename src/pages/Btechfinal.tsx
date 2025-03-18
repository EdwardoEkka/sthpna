import React from 'react'

const Btechfinal = () => {

  const students = [
    { id: 1, regNo: "2102030002", name: "ANSHUMAN BEHERA" },
  { id: 2, regNo: "2102030003", name: "ADITYA NAIK" },
  { id: 3, regNo: "2102030004", name: "ANIKET PRADHAN" },
  { id: 4, regNo: "2102030005", name: "AYUSH PADHAN" },
  { id: 5, regNo: "2102030006", name: "KUMAR SWASTIK" },
  { id: 6, regNo: "2102030007", name: "BIJAYA MAJHI" },
  { id: 7, regNo: "2102030008", name: "SUKESH RANJAN DEY" },
  { id: 8, regNo: "2102030009", name: "RUDRA PRASAD PRAHARAJ" },
  { id: 9, regNo: "2102030010", name: "SASWAT SUBHANKAR NAYAK" },
  { id: 10, regNo: "2102030011", name: "PRIYANSHU BEHERA" },
  { id: 11, regNo: "2102030012", name: "ANURAG PANDA" },
  { id: 12, regNo: "2102030013", name: "RAMAKANTA KUMAR" },
  { id: 13, regNo: "2102030014", name: "PRANGYA PRIYADARSINI SAHOO" },
  { id: 14, regNo: "2102030015", name: "MOTIRANJAN JENA" },
  { id: 15, regNo: "2102030016", name: "JAGAT JYOTI DASH" },
  { id: 16, regNo: "2102030017", name: "BIRANCHI NARAYAN RAY" },
  { id: 17, regNo: "2102030018", name: "ADITYA PRASAD DHAUDIA" },
  { id: 18, regNo: "2102030019", name: "SWASTIKA MOHAPATRA" },
  { id: 19, regNo: "2102030020", name: "DIPTESH PRADHAN" },
  { id: 20, regNo: "2102030021", name: "ANKITA DASH" },
  { id: 21, regNo: "2102030022", name: "LIZA MOHAPATRA" },
  { id: 22, regNo: "2102030023", name: "SUPRAVA JENA" },
  { id: 23, regNo: "2102030024", name: "RAKESH KUMAR SAHU" },
  { id: 24, regNo: "2102030026", name: "TANMAY MOHANTY" },
  { id: 25, regNo: "2102030027", name: "JYASHASWY LENKA" },
  { id: 26, regNo: "2102030028", name: "RAHUL KUMAR BEHERA" },
  { id: 27, regNo: "2102030029", name: "SONALI PRAVA MUNDA" },
  { id: 28, regNo: "2102030030", name: "KSHIRABDHI TANAYA PATI" },
  { id: 29, regNo: "2102030031", name: "SATYA RANJAN MOHANTY" },
  { id: 30, regNo: "2102030032", name: "CHAYAN CHANDAN PADHAN" },
  { id: 31, regNo: "2102030033", name: "ANUBHAV SAHOO" },
  { id: 32, regNo: "2102030034", name: "MUSKAN MANJARI JENA" },
  { id: 33, regNo: "2102030035", name: "AYUSHI SASMAL" },
  { id: 34, regNo: "2102030036", name: "NITISH KUMAR TRIPATHY" },
  { id: 35, regNo: "2203030001", name: "ASUTOSH MAHARANA" },
  { id: 36, regNo: "2203030002", name: "JAMUNA NAYAK" },
  { id: 37, regNo: "2102030037", name: "ROOPESH KUMAR MANDAL" },
  { id: 38, regNo: "2102030038", name: "ABHIPSA PRADHAN" },
  { id: 39, regNo: "2102030039", name: "AMAR JYOTI SAHOO" },
  { id: 40, regNo: "2102030040", name: "CHANDRA SEKHAR MARNDI" },
  { id: 41, regNo: "2102030041", name: "MD SAHIL" },
  { id: 42, regNo: "2102030042", name: "B R SWADHIN" },
  { id: 43, regNo: "2102030043", name: "SUBHASHREE DAS" },
  { id: 44, regNo: "2102030044", name: "SOUMYA RANJAN BISWAL" },
  { id: 45, regNo: "2102030045", name: "AMLAN KUMAR SAHOO" },
  { id: 46, regNo: "2102030048", name: "DEEPIKA TIGGA" },
  { id: 47, regNo: "2102030049", name: "SATYA SWAROOP JENA" },
  { id: 48, regNo: "2102030050", name: "ASISH KUMAR BISWAL" },
  { id: 49, regNo: "2102030051", name: "ARYA SHANKAR NAYAK" },
  { id: 50, regNo: "2102030052", name: "PAREEKSHIT SAHU" },
  { id: 51, regNo: "2102030053", name: "SWASTIK SWARUP PRASAD" },
  { id: 52, regNo: "2102030055", name: "PRITISH KUMAR NAYAK" },
  { id: 53, regNo: "2102030056", name: "RITUPARNA BARAL" },
  { id: 54, regNo: "2102030057", name: "MANISH PRASAD" },
  { id: 55, regNo: "2102030058", name: "CHINMAYEE DALEI" },
  { id: 56, regNo: "2102030059", name: "SUBHAM KUMAR ROUT" },
  { id: 57, regNo: "2102030060", name: "SUBRAT KUMAR BEHERA" },
  { id: 58, regNo: "2102030061", name: "AKSHITA PATRA" },
  { id: 59, regNo: "2102030062", name: "PRATIKSHYA RANI PANDA" },
  { id: 60, regNo: "2102030063", name: "MANAV BIJAY" },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Sl No</th>
              <th className="py-3 px-6 text-left">Regd. No</th>
              <th className="py-3 px-6 text-left">Name of the Student</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="py-3 px-6">{student.id}</td>
                <td className="py-3 px-6">{student.regNo}</td>
                <td className="py-3 px-6">{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Btechfinal
