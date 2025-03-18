import React from 'react'

const Btechprefinal = () => {

  const students = [
    { "id": 1, "regNo": "2102030001", "name": "MOHAMMED SYED AHETASHAM" },
    { "id": 2, "regNo": "2102030068", "name": "SUMAN KUMAR BISWAL" },
    { "id": 3, "regNo": "2102030078", "name": "RUPESH BASANT MAJHI" },
    { "id": 4, "regNo": "2202030001", "name": "SURYAKANT LUHA" },
    { "id": 5, "regNo": "2202030002", "name": "IVA SWAIN" },
    { "id": 6, "regNo": "2202030003", "name": "MANISH KUMAR SARANGI" },
    { "id": 7, "regNo": "2202030004", "name": "SWAYANSHU BEHERA" },
    { "id": 8, "regNo": "2202030005", "name": "MADHUSMITA PANDA" },
    { "id": 9, "regNo": "2202030006", "name": "PRATIKSHYA DAS" },
    { "id": 10, "regNo": "2202030007", "name": "PRATYUS SENAPATI" },
    { "id": 11, "regNo": "2202030008", "name": "SARGAM SAHU" },
    { "id": 12, "regNo": "2202030009", "name": "ELI INNOCENT KANDULNA" },
    { "id": 13, "regNo": "2202030010", "name": "ROHAN NAYAK" },
    { "id": 14, "regNo": "2202030011", "name": "SONALIKA BEHERA" },
    { "id": 15, "regNo": "2202030012", "name": "NISHAD KUMAR BEHERA" },
    { "id": 16, "regNo": "2202030013", "name": "SUMAN SOURAV DAS" },
    { "id": 17, "regNo": "2202030014", "name": "SUSREETA MAHAPATRA" },
    { "id": 18, "regNo": "2202030015", "name": "MANANGA DEBRAJ TAREI" },
    { "id": 19, "regNo": "2202030016", "name": "ANIKET PARIDA" },
    { "id": 20, "regNo": "2202030017", "name": "SAIKRISHNA BISWAL" },
    { "id": 21, "regNo": "2202030018", "name": "SASWAT PRADHAN" },
    { "id": 22, "regNo": "2202030019", "name": "PREETINANDA DASH" },
    { "id": 23, "regNo": "2202030020", "name": "PRATIK PADHAN" },
    { "id": 24, "regNo": "2202030021", "name": "ROHAN KUMAR BEHERA" },
    { "id": 25, "regNo": "2202030022", "name": "MALAYA RANJAN PRADHAN" },
    { "id": 26, "regNo": "2202030023", "name": "PRADEEP KUMAR PRADHAN" },
    { "id": 27, "regNo": "2202030024", "name": "SAMIKHYA MISHRA" },
    { "id": 28, "regNo": "2202030025", "name": "BIBEKANANDA NAYAK" },
    { "id": 29, "regNo": "2202030026", "name": "JYOTIRADITYA MOHANTY" },
    { "id": 30, "regNo": "2202030027", "name": "PRATYUSHI MOHAPATRA" },
    { "id": 31, "regNo": "2202030028", "name": "SUBRAT BHUKTA" },
    { "id": 32, "regNo": "2202030029", "name": "ASHUTOSH PRASAD SWAIN" },
    { "id": 33, "regNo": "2202030030", "name": "DIBYASWARUP DEHURY" },
    { "id": 34, "regNo": "2202030031", "name": "ASHUTOSH PRADHAN" },
    { "id": 35, "regNo": "2202030032", "name": "SATYAJIT RAJ BHAR" },
    { "id": 36, "regNo": "2202030033", "name": "ABHIJIT PADHY" },
    { "id": 37, "regNo": "2202030034", "name": "PRATYUSH RANJAN MALLICK" },
    { "id": 38, "regNo": "2202030035", "name": "SAUNDARYA SUNDAR MAHANAYAK" },
    { "id": 39, "regNo": "2202030036", "name": "TWINKLE PRUSTY" },
    { "id": 40, "regNo": "2202030037", "name": "RISNA MISHRA" },
    { "id": 41, "regNo": "2202030038", "name": "ABHIRAJ KUMAR" },
    { "id": 42, "regNo": "2202030039", "name": "TANMAYEE PATI" },
    { "id": 43, "regNo": "2202030040", "name": "RADHAGOBINDA NAYAK" },
    { "id": 44, "regNo": "2202030041", "name": "ADARSH TRIPATHY" },
    { "id": 45, "regNo": "2202030042", "name": "SURAJ BADEK" },
    { "id": 46, "regNo": "2202030043", "name": "ADYASHA PANDA" },
    { "id": 47, "regNo": "2202030044", "name": "AYUSH PANDA" },
    { "id": 48, "regNo": "2202030045", "name": "BHAGYASHREE PRADHAN" },
    { "id": 49, "regNo": "2202030046", "name": "SASWAT SINGH" },
    { "id": 50, "regNo": "2202030047", "name": "RUTURUPA TAPASWINI" },
    { "id": 51, "regNo": "2202030048", "name": "SANJAY SOREN" },
    { "id": 52, "regNo": "2202030049", "name": "RAJAT KUMAR PADHI" },
    { "id": 53, "regNo": "2202030050", "name": "SARAS SARANGI" },
    { "id": 54, "regNo": "2202030051", "name": "ABHISHEK KUMAR" },
    { "id": 55, "regNo": "2202030052", "name": "SMITARANI ROUT" },
    { "id": 56, "regNo": "2202030053", "name": "SHOBHAN BHOI" },
    { "id": 57, "regNo": "2202030054", "name": "SANCHITA ROUT" },
    { "id": 58, "regNo": "2202030055", "name": "SAMIKSHYA PRADHAN" },
    { "id": 59, "regNo": "2202030056", "name": "BARSHA KISPOTTA" },
    { "id": 60, "regNo": "2202030057", "name": "ABHINNO RAY" },
    { "id": 61, "regNo": "2202030058", "name": "AYUSH BHOI" },
    { "id": 62, "regNo": "2202030059", "name": "ARUNIMA PATTNAIK" },
    { "id": 63, "regNo": "2202030061", "name": "ANSHUMAN BEHERA" },
    { "id": 64, "regNo": "2202030062", "name": "HARSITA SAHU" },
    { "id": 65, "regNo": "2202030063", "name": "SUSHREE CHANDANA MISHRA" },
    { "id": 66, "regNo": "2202030064", "name": "MRUTYUNJAY PRADHAN" },
    { "id": 67, "regNo": "2202030065", "name": "SUBHASHREE NAHAK" },
    { "id": 68, "regNo": "2202030066", "name": "NIKHARB KUMAR PRADHAN" },
    { "id": 69, "regNo": "2202030067", "name": "MONALISA MISHRA" },
    { "id": 70, "regNo": "2202030068", "name": "SONUSAGAR MOHAPATRA" },
    { "id": 71, "regNo": "2202030069", "name": "SANDEEP KUMAR RANA" },
    { "id": 72, "regNo": "2202030070", "name": "DEBASISH MISHRA" },
    { "id": 73, "regNo": "2202030071", "name": "SWATISHREE BEHERA" },
    { "id": 74, "regNo": "2202030073", "name": "KIRANSMITA MAHAKUD" },
    { "id": 75, "regNo": "2202030074", "name": "PRIYANSHU JENA" },
    { "id": 76, "regNo": "2202030075", "name": "OMKAR MOHANTA" },
    { "id": 77, "regNo": "2202030076", "name": "AYUSH SRIRAMKA" },
    { "id": 78, "regNo": "2202030078", "name": "PRAGATI KRISHNA JENA" },
    { "id": 79, "regNo": "2303030001", "name": "SATYANARAYAN PANDA" },
    { "id": 80, "regNo": "2303030002", "name": "RASHMILATA NAYAK" },
    { "id": 81, "regNo": "2303030003", "name": "ANANYA MEHER" },
    { "id": 82, "regNo": "2303030004", "name": "PUSPANJALI SAHU" },
    { "id": 83, "regNo": "2303030005", "name": "SEKHAR PARIDA" },
    { "id": 84, "regNo": "2303030006", "name": "ASHIS KUMAR PANIGRAHI" },
    { "id": 85, "regNo": "2104030007", "name": "KSHIROD KUMAR MAJHI" },
    { "id": 86, "regNo": "2202030079", "name": "MONALI SETHI" },
    { "id": 87, "regNo": "2202030080", "name": "NIHARIKA MISHRA" },
    { "id": 88, "regNo": "2202030081", "name": "AMRIT SINHA" },
    { "id": 89, "regNo": "2202030082", "name": "ABINASH SINGH" },
    { "id": 90, "regNo": "2202030083", "name": "SOUMYA RANJAN GUMANSINGH" },
    { "id": 91, "regNo": "2202030084", "name": "ANANNYA IPSITA RATHA" },
    { "id": 92, "regNo": "2202030085", "name": "ASHUTOSH PRADHAN" },
    { "id": 93, "regNo": "2202030086", "name": "BISWARANJAN BHUYAN" },
    { "id": 94, "regNo": "2202030090", "name": "SILLA SHALINI" },
    { "id": 95, "regNo": "2202030091", "name": "DEBADUTTA SAURAV SAHU" },
    { "id": 96, "regNo": "2202030092", "name": "ISHA KUMARI SAHU" },
    { "id": 97, "regNo": "2202030093", "name": "MITALI RAM" },
    { "id": 98, "regNo": "2202030095", "name": "ALOK DEEP" },
    { "id": 99, "regNo": "2202030096", "name": "ASHOK KUMAR TUDU" },
    { "id": 100, "regNo": "2202030097", "name": "GYANARANJAN PARHI" },
    { "id": 101, "regNo": "2202030098", "name": "SUBHASMITA ROUT" },
    { "id": 102, "regNo": "2202030099", "name": "BANGAM HANSDAH" },
    { "id": 103, "regNo": "2202030100", "name": "SAMBIT PRADHAN" },
    { "id": 104, "regNo": "2202030101", "name": "RAJU RAY" },
    { "id": 105, "regNo": "2202030102", "name": "OMPRAKASH KISAN" },
    { "id": 106, "regNo": "2202030103", "name": "ASHUTOSH PANDA" },
    { "id": 107, "regNo": "2202030104", "name": "MINATI RATH" },
    { "id": 108, "regNo": "2202030105", "name": "SANTANU KUMAR ROUT" },
    { "id": 109, "regNo": "2202030106", "name": "TAPAS RANJAN SOREN" },
    { "id": 110, "regNo": "2202030107", "name": "ARPITA NAYAK" },
    { "id": 111, "regNo": "2202030108", "name": "KRISHNA HANSDAH" },
    { "id": 112, "regNo": "2202030109", "name": "SUNIL KUMAR BAL" },
    { "id": 113, "regNo": "2202030110", "name": "BIKRAM KUMAR PATRA" },
    { "id": 114, "regNo": "2202030111", "name": "PRAGYA PARAMITA PATTNAYAK" },
    { "id": 115, "regNo": "2202030112", "name": "RISHOB DEHURY" },
    { "id": 116, "regNo": "2202030113", "name": "ASHUTOSH NAYAK" },
    { "id": 117, "regNo": "2202030114", "name": "AYUSH ANSHUMAN" },
    { "id": 118, "regNo": "2202031118", "name": "AMITANSHU BEHERA" },
    { "id": 119, "regNo": "2202031119", "name": "SUJAY KUNDU" },
    { "id": 120, "regNo": "2202031121", "name": "BISWA BANDITA SWAIN" },
    { "id": 121, "regNo": "2202031123", "name": "LOKESH BEHERA" },
    { "id": 122, "regNo": "2202031124", "name": "ROJALIN ACHARYA" },
    { "id": 123, "regNo": "2202031125", "name": "KUNDAN UTHANSINGH" },
    { "id": 124, "regNo": "2202031127", "name": "NISHANT KUMAR SINGH" },
    { "id": 125, "regNo": "2202031128", "name": "SATYAM RAI" },
    { "id": 126, "regNo": "2202031130", "name": "CHINTAN PRADHAN" },
    { "id": 127, "regNo": "2202031131", "name": "B.NARASHIMA" },
    { "id": 128, "regNo": "2202031132", "name": "AYUSH MISHRA" },
    { "id": 129, "regNo": "2202031134", "name": "SURAJBHAN BHOI" },
    { "id": 130, "regNo": "2202031136", "name": "KALLOL BISWAS" },
    { "id": 131, "regNo": "2202031137", "name": "ANKITA GUPTA" },
    { "id": 132, "regNo": "2202031138", "name": "SATYAJIT PARIDA" },
    { "id": 133, "regNo": "2202031139", "name": "SASWATI BEHERA" },
    { "id": 134, "regNo": "2202031140", "name": "SAKSHI SINGH" },
    { "id": 135, "regNo": "2202031141", "name": "LOKESH SINGH" },
    { "id": 136, "regNo": "2202031142", "name": "KUNAL BANCHHOR" },
    { "id": 137, "regNo": "2202031144", "name": "SANJAN KUMAR BHAGAT" },
    { "id": 138, "regNo": "2202031145", "name": "SARANDEEP PATRA" },
    { "id": 139, "regNo": "2202031146", "name": "AYUSHMAN PADHI" },
    { "id": 140, "regNo": "2303030007", "name": "PRANJAL PRIYADARSINI" },
    { "id": 141, "regNo": "2303030008", "name": "SNEHA DASH" },
    { "id": 142, "regNo": "2303030009", "name": "TAPASWINI PRIYADARSHINI" },
    { "id": 143, "regNo": "2303031010", "name": "RUTUPARNA TAREI" },
    { "id": 144, "regNo": "2303031011", "name": "MUSKAN BEGUM" },
    { "id": 145, "regNo": "2303031012", "name": "KIRTI SAMPARNA PRADHAN" }
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

export default Btechprefinal
