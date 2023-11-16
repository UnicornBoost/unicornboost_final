import React from "react";

function Ecobank() {
  return (
    <div className="mt-16 md:w-4/5 px-8 mx-auto">
      <h1 className="text-4xl font-medium text-center">Ecobank</h1>
      <div className="bg-amber-50 text-black p-8 md:text-lg rounded-md my-8">
        <p>
          Ecobank Transnational Incorporated (ETI), commonly known as Ecobank,
          is a pan-African banking conglomerate, with banking operations in 33
          African countries. It is the leading independent regional banking
          group in West Africa and Central Africa, serving wholesale and retail
          customers.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 my-4 md:flex-row flex-col">
        <div className="bg-[url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex-1 bg-no-repeat bg-center bg-cover rounded-md p-8">
          <ul className="bg-amber-50 text-black p-4 rounded">
          <p className="md:mb-2 mb-2 font-bold">Projects</p>
            <li>Customer Success</li>
            <li>Reply to customer emails</li>
            <li>Trained other team members on CRM software</li>
            <li>Analyses customer feedback and gives report</li>
          </ul>
        </div>
        <div className="bg-[url(https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex-1 bg-no-repeat bg-center bg-cover rounded-md p-8">
          <ul className="bg-amber-50 text-black p-4 rounded">
          <p className="md:mb-2 mb-2 font-bold">Tools</p>
            <li>Gmail</li>
            <li>Airtable</li>
            <li>Zen desk</li>
            <li>Trello</li>
            <li>Google sheet</li>
            <li>Tableau</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ecobank;
