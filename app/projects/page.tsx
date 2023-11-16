import Image from "next/image";
import React from "react";

function Project() {
  return (
    <main className="mt-16 mx-auto md:w-1/2 px-8 md:px-0">
      <div className="space-y-8">
        <h4 className="text-sm font-medium text-center">Selected Projects</h4>
        <h1 className="text-4xl font-medium text-center">Our Case Studies</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8 my-16">
        <a
          href="/projects/cienet"
          className="bg-amber-50 rounded-md p-4 space-y-4"
        >
          <div className="flex items-start">
            <p className="font-medium bg-violet-500 p-2 rounded-md text-sm">
              Software and UI/UX
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/cienet.png"
              alt="cienet"
              width={150}
              height={150}
            />
          </div>
        </a>
        <a href="/projects/glovo" className="bg-amber-50 rounded-md p-4 space-y-4">
          <div className="flex items-start">
            <p className="font-medium bg-violet-500 p-2 rounded-md text-sm">
              Customer Suppport
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/glovo.png"
              alt="cienet"
              width={150}
              height={150}
            />
          </div>
        </a>
        <a
          href="/projects/lernexe"
          className="bg-amber-50 rounded-md p-4 space-y-4"
        >
          <div className="flex items-start">
            <p className="font-medium bg-violet-500 p-2 rounded-md text-sm">
              AI system delopment
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/Lernexe.png"
              alt="cienet"
              width={150}
              height={150}
            />
          </div>
        </a>
        <a
          href="/projects/ecobank"
          className="bg-amber-50 rounded-md p-4 space-y-4"
        >
          <div className="flex items-start">
            <p className="font-medium bg-violet-500 p-2 rounded-md text-sm">
              Customer Technical Support
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/ecobank.png"
              alt="cienet"
              width={150}
              height={150}
            />
          </div>
        </a>
      </div>
    </main>
  );
}

export default Project;
