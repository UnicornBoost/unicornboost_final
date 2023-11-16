"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CodesandboxIcon,
  InfinityIcon,
  LineChartIcon,
  PauseCircleIcon,
  RecycleIcon,
  UserCog2Icon,
} from "lucide-react";

const ServiceSectionTwo = () => {
  return (
    <section className="text-amber-50 md:w-4/5 px-4 md:px-0 mx-auto py-16 space-y-8">
      <Tabs defaultValue="sdaas" className="w-full">
        <TabsList className="grid w-[300px] grid-cols-2 mx-auto">
          <TabsTrigger value="sdaas">SDAAS</TabsTrigger>
          <TabsTrigger value="aidaas">AIDAAS</TabsTrigger>
        </TabsList>
        <TabsContent value="sdaas" className="mt-8">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                UI/UX designs
              </h3>
            </div>
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                Web development
              </h3>
            </div>
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                Mobile App development
              </h3>
            </div>
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                Software Maintanance and support
              </h3>
            </div>
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                Software integration
              </h3>
            </div>
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">Custom software developments</h3>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="aidaas" className="mt-8">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                Machine Learning model development
              </h3>
            </div>
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                Data engineering
              </h3>
            </div>
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                Data analytics
              </h3>
            </div>
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                Computer Vision, NLP, LLM Tasks
              </h3>
            </div>
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                Model deployment
              </h3>
            </div>
            <div className="bg-gray-600 px-4 py-8 text-center rounded space-y-2">
              <h3 className="font-semibold md:text-base text-sm">
                Business Intelligence analysis
              </h3>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex items-center justify-center pt-4">
        <a
          href="#"
          className="bg-amber-50 text-black md:text-lg text-sm px-8 py-2 text-center rounded-full font-medium"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default ServiceSectionTwo;
