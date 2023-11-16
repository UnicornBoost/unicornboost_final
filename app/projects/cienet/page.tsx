import React from "react";

function Cienet() {
  return (
    <div className="mt-16 md:w-4/5 px-8 mx-auto">
      <h1 className="text-4xl font-medium text-center">CIeNET</h1>
      <div className="bg-amber-50 text-black p-8 md:text-lg rounded-md my-8">
        <p>
          CIeNET is a global information technology software development,
          consulting, and solutions company. It was founded in 2000 and is
          headquartered in Beijing, China. CIeNET has offices in North America,
          Europe, and Asia, and its customers include Fortune 500 companies and
          other leading organizations.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 my-4 md:flex-row flex-col">
        <div className="bg-[url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex-1 bg-no-repeat bg-center bg-cover rounded-md p-8">
          <ul className="bg-amber-50 text-black p-4 rounded">
          <p className="md:mb-2 mb-2 font-bold">Projects</p>
            <li>UI designs for clients different</li>
            <li>built 6 webs apps</li>
            <li>built 6 webs apps 3 mobile apps</li>
            <li>maintenance - bug fixes</li>
            <li>Database management for CIENET clients</li>
          </ul>
        </div>
        <div className="bg-[url(https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex-1 bg-no-repeat bg-center bg-cover rounded-md p-8">
          <ul className="bg-amber-50 text-black p-4 rounded">
          <p className="md:mb-2 mb-2 font-bold">Languages and tools</p>
            <li>Java</li>
            <li>Ruby on Rails</li>
            <li>PhP</li>
            <li>Azure</li>
            <li>Figma for U/UX</li>
            <li>Electron.js</li>
            <li>Flutter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cienet;
