import React from "react";

function Lernexe() {
  return (
    <div className="mt-16 md:w-4/5 px-8 mx-auto">
      <h1 className="text-4xl font-medium text-center">Lernexe</h1>
      <div className="bg-amber-50 text-black p-8 md:text-lg rounded-md my-8">
        <p>
          Lernexe is an AI powered productivity platform for students and
          content creators. It help students with their assignments and reports.
          Content creators can generate songs and poems with it. Lernexe is a US
          startup.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 my-4 md:flex-row flex-col">
        <div className="bg-[url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex-1 bg-no-repeat bg-center bg-cover rounded-md p-8">
          <ul className="bg-amber-50 text-black p-4 rounded">
          <p className="md:mb-2 mb-2 font-bold">Projects</p>
            <li>Machine learning architecture design</li>
            <li>Fine tuning existing LLM</li>
            <li>Text predictions</li>
            <li>Micro services deployment</li>
          </ul>
        </div>
        <div className="bg-[url(https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex-1 bg-no-repeat bg-center bg-cover rounded-md p-8">
          <ul className="bg-amber-50 text-black p-4 rounded">
          <p className="md:mb-2 mb-2 font-bold">Tools and frameworks</p>
            <li>PyTorch</li>
            <li>Tensor flow</li>
            <li>LLM - Llama</li>
            <li>LLM- OpenAI Text-Davinci</li>
            <li>R</li>
            <li>Docker</li>
            <li>FastAPI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Lernexe;
