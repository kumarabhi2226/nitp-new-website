import React from 'react';

const FeeStructureTable = () => {
  const data = [
    {
     Downloads: "Advance Form",
     DLink: `${home}/staffForm/Advance form.pdf`,
     "Office order": "Medical Notice",
     OLink: `${home}/staffForm/Medical notice.pdf`,
    },
    {
     Downloads: "CEA Form",
     DLink: `${home}/staffForm/CEA form.pdf`,
     "Office order": "Office Order",
     OLink: `${home}/staffForm/office order.pdf`,
    },
    {
     Downloads: "CL Application",
     DLink: `${home}/staffForm/1.%20Casual%20Leave%20(CL),%20Restricted%20Leave%20(RH).pdf`,
     "Office order": "Bills/PDA form",
     OLink: `${home}/staffForm/Circular5c370f6512525.pdf`,
    },
    {
     Downloads: "Restricted Leave  (RH)",
     DLink: `${home}/staffForm/1.%20Casual%20Leave%20(CL),%20Restricted%20Leave%20(RH).pdf`,
     "Office order": "",
    },
    {
     Downloads: "El Form",
     DLink: `${home}/staffForm/2.%20Earned%20Leave%20(EL).pdf`,
     
    },
    {
     Downloads: "Child Care Leave (CCL) ",
     DLink: `${home}/staffForm/3.%20Child%20Care%20Leave.pdf`,
     "Office order": "Bill Format",
     OLink: `${home}/staffForm/bill%20format%20new%20bilingual.docx.pdf`,
    },
    {
     Downloads: "Commuted Leave",
     DLink: `${home}/staffForm/4.%20Commuted,%20HPL,%20Maternity,%20Paternity%20Leave.pdf`,
     "Office order": "",
    },
    {
     Downloads: "Half Pay Leave (HPL) ",
     DLink: `${home}/staffForm/4.%20Commuted,%20HPL,%20Maternity,%20Paternity%20Leave.pdf`,
     "Office order": "Guest House Requisition Form",
     OLink: `https://drive.google.com/file/d/1CLiYVUjw7VnOgFq4W-M6Ext7Ccu8XRz2/view`,
    },
    {
     Downloads: "Maternity Leave",
     DLink: `${home}/staffForm/4.%20Commuted,%20HPL,%20Maternity,%20Paternity%20Leave.pdf`,
     "Office order": "",
    },
    {
     Downloads: "Paternity Leave",
     DLink: `${home}/staffForm/4.%20Commuted,%20HPL,%20Maternity,%20Paternity%20Leave.pdf`,
     "Office order": "",
    },
    {
     Downloads: "Leave Encashment (LTC)",
     DLink: `${home}/staffForm/6.%20Leave%20Encashment%20(LTC).pdf`,
     "Office order": "",
    },
    {
     Downloads: "LTC Application Form",
     DLink: `${home}/staffForm/5.%20Application%20for%20LTC%20(Home%20town,%20All%20India).pdf`,
     "Office order": "LTC Claim Form",
     OLink: `${home}/staffForm/ltcclaim_updated.pdf`,
    },
    {
     Downloads: "Medical Claim Form",
     DLink: `${home}/staffForm/claim.pdf`,
     "Office order": "List of Hospitals",
     OLink: `${home}/staffForm/list_of_hospitals.pdf`,
    },
    {
     Downloads: "Medical Certificate (A)",
     DLink: `${home}/staffForm/Medical Certificate (A).pdf`,
     "Office order": "",
    },
    {
     Downloads: "Medical Certificate (B)",
     DLink: `${home}/staffForm/Medical Certificate (B).pdf`,
     "Office order": "",
    },
    {
     Downloads: "Medical Emergency Certificate",
     DLink: `${home}/staffForm/Emergency CERTIFICATE.pdf`,
     "Office order": "",
    },
    {
     Downloads: "Medical Nursing Certificate",
     DLink: `${home}/staffForm/Nursing CERTIFICATE.pdf`,
     "Office order": "",
    },
    {
     Downloads: "NPS Registration Form",
     DLink: `${home}/staffForm/Subscriber_Registration_Form_CSRF.pdf`,
     "Office order": "",
    },
    {
     Downloads: "T.A. For Expert",
     DLink: `${home}/staffForm/T.A. for expert.pdf`,
     "Office order": "",
    },
    {
     Downloads: "Travel Bill For Tour",
     DLink: `${home}/staffForm/travallbillfortour_updated.pdf`,
     "Office order": "",
    },
    {
     Downloads: "Vehicle Permission Form",
     DLink: `${home}/staffForm/Vehicle_Permission.pdf`,
     "Office order": "",
    },
    {
     Downloads: "Security Gate Pass",
     DLink: `${home}/staffForm/Security_gate_Pass.pdf`,
     "Office order": "",
    },
   ]

  return (
    <div className=" md:mx-auto px-4 py-8 w-4/5">
      <h1 className="text-3xl font-bold mb-6 text-red-800 text-center">Fee Structure</h1>
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Fee Structure</th>
            <th className="text-center px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="text-left px-4 py-2 border-b border-gray-300 text-black">{item.name}</td>
              <td className="text-center px-4 py-3 border-b border-gray-300">
                <a href={item.link} className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default FeeStructureTable;