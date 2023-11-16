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

const ServiceSection = () => {
  return (
    <section className="text-amber-50 md:w-4/5 md:px-0 px-4 mx-auto py-16 space-y-8">
      <Tabs defaultValue="sdaas" className="w-full">
        <TabsList className="grid w-[300px] grid-cols-3 mx-auto">
          <TabsTrigger value="sdaas">SDAAS</TabsTrigger>
          <TabsTrigger value="aidaas">AIDAAS</TabsTrigger>
          <TabsTrigger value="csaas">CSAAS</TabsTrigger>
        </TabsList>
        <TabsContent value="sdaas" className="mt-8">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <InfinityIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Infinite Software requests
              </h3>
              <p className="md:text-sm text-xs">
                Easily submit and track software tasks through Slack or stork AI ensuring a seamless workflow from start to finish.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <RecycleIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Unlimited Revision
              </h3>
              <p className="md:text-sm text-xs">
                Our affordable pricing model offers unlimited revisions without
                ever worrying about the scope, giving you full freedom to try
                different ideas
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <PauseCircleIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Cancel or pause anytime
              </h3>
              <p className="md:text-sm text-xs">
                Enjoy the freedom to cancel your subscription anytime without
                any long-term commitments or hassle.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <UserCog2Icon />
              <h3 className="font-semibold md:text-base text-sm">
                Senior software engineer at your fingertips
              </h3>
              <p className="md:text-sm text-xs">
                Think of us as your external software department, ready to jump
                in anytime.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <LineChartIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Growth-ready Solutions
              </h3>
              <p className="md:text-sm text-xs">
                As you scale, we adapt, ensuring your software always match your
                pace.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <CodesandboxIcon />
              <h3 className="font-semibold md:text-base text-sm">
                One-Stop Solutions
              </h3>
              <p className="md:text-sm text-xs">
                From A to Z, we&apos;ve got all your software needs covered.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="aidaas" className="mt-8">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <InfinityIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Infinite AI/ML solutions requests
              </h3>
              <p className="md:text-sm text-xs">
                Easily submit and track data science and ML tasks through Slack or Stork AI ensuring a seamless workflow from start to
                finish.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <RecycleIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Unlimited Revision
              </h3>
              <p className="md:text-sm text-xs">
                Our affordable pricing model offers unlimited revisions without
                ever worrying about the scope, giving you full freedom to try
                different ideas
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <PauseCircleIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Cancel or pause anytime
              </h3>
              <p className="md:text-sm text-xs">
                Enjoy the freedom to cancel your subscription anytime without
                any long-term commitments or hassle.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <UserCog2Icon />
              <h3 className="font-semibold md:text-base text-sm">
                Senior ML engineer at your fingertips
              </h3>
              <p className="md:text-sm text-xs">
                Think of us as your external Data or AI department, ready to
                jump in anytime.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <LineChartIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Growth-ready Solutions
              </h3>
              <p className="md:text-sm text-xs">
                As you scale, we adapt, ensuring your ML and AI systems always
                match your pace.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <CodesandboxIcon />
              <h3 className="font-semibold md:text-base text-sm">
                One-Stop Solutions
              </h3>
              <p className="md:text-sm text-xs">
                From A to Z, we&apos;ve got all your Data needs covered. Data
                science, ML, data analysis etc
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="csaas" className="mt-8">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <InfinityIcon />
              <h3 className="font-semibold md:text-base text-sm">
                24/7 availability
              </h3>
              <p className="md:text-sm text-xs">
                Always available to respond to customer complaint.
                We have immense Experience working with customer service tools like Zendesk.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <RecycleIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Unlimited tickets
              </h3>
              <p className="md:text-sm text-xs">
                Based on your package, we help you track problems and solutions.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <PauseCircleIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Cancel or pause anytime
              </h3>
              <p className="md:text-sm text-xs">
                Enjoy the freedom to cancel your subscription anytime without
                any long-term commitments or hassle.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <UserCog2Icon />
              <h3 className="font-semibold md:text-base text-sm">
                Customer support at your fingertips
              </h3>
              <p className="md:text-sm text-xs">
                Think of us as your external customer support department,
                readily available anytime. 
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <LineChartIcon />
              <h3 className="font-semibold md:text-base text-sm">
                Growth-ready Solutions
              </h3>
              <p className="md:text-sm text-xs">
                As your customers, we adapt, ensuring your support systems
                always match your pace. Only focus on the hardest part of your business.
              </p>
            </div>
            <div className="bg-gray-600 p-4 rounded space-y-2">
              <CodesandboxIcon />
              <h3 className="font-semibold md:text-base text-sm">
                One-Stop Solutions
              </h3>
              <p className="md:text-sm text-xs">
                From the skills to new technologies in customer support
                we&apos;ve got all your Data needs covered.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex items-center justify-center pt-4">
        <a
          href="https://cal.com/unicornboost/30min"
          className="bg-amber-50 text-black text-sm md:text-lg px-8 py-2 text-center rounded-full font-medium"
        >
          Schedule a call
        </a>
      </div>
    </section>
  );
};

export default ServiceSection;
