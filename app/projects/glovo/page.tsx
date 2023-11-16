import React from "react";

function Glovo() {
  return (
    <div className="mt-16 md:w-4/5 px-8 mx-auto">
      <h1 className="text-4xl font-medium text-center">Glovo</h1>
      <div className="bg-amber-50 text-black p-8 md:text-lg rounded-md my-8">
        <p>
          Glovo is a Spanish multinational technology company that specializes
          in last-mile logistics. It offers on-demand services from local
          restaurants, grocers, pharmacies, and retail stores via its mobile
          app. Users can order anything they need, from food and groceries to
          flowers and electronics, and Glovo will deliver it to their door in
          minutes.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 my-4 md:flex-row flex-col">
        <div className="bg-[url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex-1 bg-no-repeat bg-center bg-cover rounded-md p-8">
          <ul className="bg-amber-50 text-black p-4 rounded">
          <p className="md:mb-2 mb-2 font-bold">Projects</p>
            <li>Mobile App maintenance</li>
            <li>Published website frontend updates</li>
            <li>Helped in code review with developer teams</li>
            <li>Bug fixes</li>
          </ul>
        </div>
        <div className="bg-[url(https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex-1 bg-no-repeat bg-center bg-cover rounded-md p-8">
          <ul className="bg-amber-50 text-black p-4 rounded">
          <p className="md:mb-2 mb-2 font-bold">Languages and Tools</p>
            <li>Angular</li>
            <li>Next.js</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Swift</li>
            <li>Kotlin</li>
            <li>Oracle SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Glovo;
