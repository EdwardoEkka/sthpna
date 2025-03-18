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
  { "id": 61, "regNo": "2102030064", "name": "SUBHASMITA SAHOO" },
    { "id": 62, "regNo": "2102030065", "name": "MADHUSMITA SAHOO" },
    { "id": 63, "regNo": "2102030067", "name": "PRITHVIRAJ SINGH BABU" },
    { "id": 64, "regNo": "2102030069", "name": "NIKITA SINGH" },
    { "id": 65, "regNo": "2102030070", "name": "ILESH SARANGI" },
    { "id": 66, "regNo": "2102030071", "name": "SUBHRANSHU SEKHAR BHUTIA" },
    { "id": 67, "regNo": "2102030072", "name": "SAI UPASANA CHAUDHURY" },
    { "id": 68, "regNo": "2002030005", "name": "PRATHAM PARIDA" },
    { "id": 69, "regNo": "2203030003", "name": "MRUTYUNJAYA BARIK" },
    { "id": 70, "regNo": "2203030004", "name": "DIBYAJYOTI PARIDA" },
    { "id": 71, "regNo": "2102030074", "name": "ALIVA DEEPALI SETHI" },
    { "id": 72, "regNo": "2102030075", "name": "JAGADAMBA MOHAPATRA" },
    { "id": 73, "regNo": "2102030076", "name": "PRINCE ANKITA BARLA" },
    { "id": 74, "regNo": "2102030077", "name": "ASHUTOSH RANA" },
    { "id": 75, "regNo": "2102030080", "name": "JAY PRAKASH MURMU" },
    { "id": 76, "regNo": "2102030081", "name": "RAJIB KISHAN" },
    { "id": 77, "regNo": "2102030082", "name": "SONU LAKRA" },
    { "id": 78, "regNo": "2102030083", "name": "SURYA NARAYAN BHOI" },
    { "id": 79, "regNo": "2102030085", "name": "DEBABRATA MOHANTY" },
    { "id": 80, "regNo": "2102030086", "name": "AYANXA RATH" },
    { "id": 81, "regNo": "2102030087", "name": "ANSHUMAN NAYAK" },
    { "id": 82, "regNo": "2102030088", "name": "ROHIT KUMAR JENA" },
    { "id": 83, "regNo": "2102030090", "name": "ALTAMASH ANSARI" },
    { "id": 84, "regNo": "2102030091", "name": "R. MADHAB ACHARY" },
    { "id": 85, "regNo": "2102030092", "name": "SARTHAK SAHOO" },
    { "id": 86, "regNo": "2102030094", "name": "ANUBHAB SAHU" },
    { "id": 87, "regNo": "2102031095", "name": "MOHIT MOHANTA" },
    { "id": 88, "regNo": "2102031098", "name": "ANANYA TRIPATHY" },
    { "id": 89, "regNo": "2102031099", "name": "AMRIT KUMAR BEHERA" },
    { "id": 90, "regNo": "2102031101", "name": "SOUMYARANJAN MAJHI" },
    { "id": 91, "regNo": "2102031103", "name": "AHWAN SWAIN" },
    { "id": 92, "regNo": "2102031104", "name": "NIRMALYA DIKSHIT" },
    { "id": 93, "regNo": "2102031106", "name": "SIDDHARTH KUMAR PATJOSHI" },
    { "id": 94, "regNo": "2102031107", "name": "PRATIKSHYA MOHANTY" },
    { "id": 95, "regNo": "2102031108", "name": "SRUJAN KUMAR PANDA" },
    { "id": 96, "regNo": "2203030005", "name": "REBATI MEHER" },
    { "id": 97, "regNo": "2203030006", "name": "SURINA KISAN" },
    { "id": 98, "regNo": "2203030007", "name": "HRUDAYANANDA SAHOO" },
    { "id": 99, "regNo": "2203030008", "name": "AMARNATH SABAR" },
    { "id": 100, "regNo": "2102031110", "name": "PAYAL SAHOO" },
    { "id": 101, "regNo": "2102031111", "name": "RAKESH RANJAN SABAR" },
    { "id": 102, "regNo": "2102031112", "name": "BAIBHAV RAJ MAHARANA" },
    { "id": 103, "regNo": "2102031114", "name": "TAPAS KUMAR MURMU" },
    { "id": 104, "regNo": "2102031115", "name": "SWAYANPRAJNA BHARATI" },
    { "id": 105, "regNo": "2102031116", "name": "CHANDAN KUMAR SAHU" },
    { "id": 106, "regNo": "2102031117", "name": "MITRABHANU DAS" },
    { "id": 107, "regNo": "2102031118", "name": "ANUSHKA SINGH" },
    { "id": 108, "regNo": "2102031119", "name": "SUBHASHIS SATYABRATA BEHERA" },
    { "id": 109, "regNo": "2102031120", "name": "ANSHUMAN SATAPATHY" },
    { "id": 110, "regNo": "2102031121", "name": "LISHA PRASAD" },
    { "id": 111, "regNo": "2102031122", "name": "PRATYUSH PRADHAN" },
    { "id": 112, "regNo": "2102031123", "name": "SURAJ TUDU" },
    { "id": 113, "regNo": "2102032127", "name": "PHERNAKI M NONGBET" },
    { "id": 114, "regNo": "2203031009", "name": "TALAT ZABEEN" },
    { "id": 115, "regNo": "2203031010", "name": "SUBHASHISH SINHA" },
    { "id": 116, "regNo": "2203030011", "name": "ROJALIN OJHA" },
    { "id": 117, "regNo": "2002030084", "name": "ABHISEK NAIK" },
    { "id": 118, "regNo": "2002030160", "name": "ANKITA DASH" },
    { "id": 119, "regNo": "2002030075", "name": "SUBHRAJEET BEHERA" },
    { "id": 120, "regNo": "2104030001", "name": "PRALIPTA KUMAR SAHOO" },
    { "id": 121, "regNo": "2104030003", "name": "NIKHIL SAHU" },
    { "id": 122, "regNo": "2104030005", "name": "SWETALINA NAYAK" },
    { "id": 123, "regNo": "2104030008", "name": "ISITA NAIK" },
    { "id": 124, "regNo": "2104030012", "name": "ABHIJIT BARAL" },
    { "id": 125, "regNo": "2104030016", "name": "ADITI DORA" },
    { "id": 126, "regNo": "1904030017", "name": "RACHANA PRADHAN" },
    { "id": 127, "regNo": "2004030010", "name": "KAJAL SAHOO" },
    { "id": 128, "regNo": "2104030004", "name": "GUNAPRIYA KUSULIA" },
    { "id": 129, "regNo": "2104030006", "name": "ROHINI BEHERA" },
    { "id": 130, "regNo": "2104030009", "name": "SHREEYA PARIDA" },
    { "id": 131, "regNo": "2104030010", "name": "PRAMOD KUMAR PARHI" },
    { "id": 132, "regNo": "2104030011", "name": "MANASWINEE PRADHAN" },
    { "id": 133, "regNo": "2104030014", "name": "ROSHAN NAYAK" },
    { "id": 134, "regNo": "2104030015", "name": "RAJ PRATYUSH KAR" },
    { "id": 135, "regNo": "2104030017", "name": "DAMAYANTI PATRA" }
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

export default Btechfinal
