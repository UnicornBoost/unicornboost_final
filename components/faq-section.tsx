"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="bg-amber-50 text-black py-16">
      <h3 className="font-semibold text-lg text-center mb-8">FAQs</h3>
      <Tabs defaultValue="sdaas" className="w-full">
        <TabsList className="grid w-[300px] grid-cols-3 mx-auto">
          <TabsTrigger value="sdaas">SDAAS</TabsTrigger>
          <TabsTrigger value="aidaas">AIDAAS</TabsTrigger>
          <TabsTrigger value="csaas">CSAAS</TabsTrigger>
        </TabsList>
        <TabsContent
          value="sdaas"
          className="mt-8 md:w-4/5 px-4 md:px-0 mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why should I choose Unicornboost instead of hiring a full-time
                software eng.?
              </AccordionTrigger>
              <AccordionContent>
                Hiring a full-time software engineer costs $122,492 per year. Benefits and vacations excluded. UnicornBoost becomes your software team while
                you focus on business development and distribution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I request development?</AccordionTrigger>
              <AccordionContent>
                You first have to subscribe to a plan, or schedule a call and subscribe. We will contact you an create a
                slack channel for your company. That is where you can request unlimited data science, machine learning or AI task based on your plan.
                The process is simple. We design, you review the designs, we build and deploy.
                {/* Yes. It comes with default styles that matches the other
                components&apos; aesthetic. */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How fast is the work done?</AccordionTrigger>
              <AccordionContent>
                Designing or developing an MVP or a landing page takes 15 days. The period to finish other
                works is based on the nature and size of the project.
                {/* Yes. It&apos;s animated by default, but you can disable it if
                you prefer. */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is there a limit to the work I can request?
              </AccordionTrigger>
              <AccordionContent>
                No please. You can request unlimited softwares and designs as long as you are on subscription.
                 Based on the plan you select we choose to work on a project or two at a time.
                {/* Yes. It&apos;s animated by default, but you can disable it if
                you prefer. */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What if I only have one development task?
              </AccordionTrigger>
              <AccordionContent>
                Yes it sometimes happen. Select an active plan and let us make your dream come live.
                You can pulse subscription to resubscribe later when you want another task.
                Note that for your product to be maintained and updated periodically, you should be on subscription.
                You only enjoy software revision.
                {/* Yes. It&apos;s animated by default, but you can disable it if
                you prefer. */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What does it mean to pause my subscription?
              </AccordionTrigger>
              <AccordionContent>
                It means you may not be getting our services now until subscribe again. And, for your product to be maintained and updated periodically, you should be on subscription.
                You only enjoy product revision.
                {/* Yes. It&apos;s animated by default, but you can disable it if
                you prefer. */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Who are the developers?</AccordionTrigger>
              <AccordionContent>
                UnicornBoost is led by three world class design engineers with a combined experience for over 7+ years.
                Our clients span the globe including early-stage ventures, large scale businesses and creators.

                {/* Yes. It&apos;s animated by default, but you can disable it if
                you prefer. */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                What kind of work is a good fit?
              </AccordionTrigger>
              <AccordionContent>
                Any web app or software is good fit. If our solution is solely AI, check our AIaaS plans for what fits your needs.
                Or if it is a custom solution, just schedule a call and lets know it better.
                {/* Yes. It&apos;s animated by default, but you can disable it if
                you prefer. */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                How can I have daily contact with the developer?
              </AccordionTrigger>
              <AccordionContent>
                We have daily communications via Slack or Stork AI app. We give you 24 hour attention to learn better while building.
                {/* Yes. It&apos;s animated by default, but you can disable it if
                you prefer. */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                What if I do not like the completed project?
              </AccordionTrigger>
              <AccordionContent>
                This does not normally happen. But if it does, we refine the solution till it is better. Normally, reviews and suggestions are much required before we build the product. 
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent
          value="aidaas"
          className="mt-8 md:w-4/5 px-4 md:px-0 mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why should I choose Unicornboost instead of hiring a full-time
                software eng.?
              </AccordionTrigger>
              <AccordionContent>
              Hiring a full-time Machine learning engineer costs $160,140 per year. Benefits and vacations excluded. UnicornBoost becomes your software team while
                you focus on business development and distribution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I request AI development service?</AccordionTrigger>
              <AccordionContent>
              You first have to subscribe to a plan, or schedule a call and subscribe. We will contact you an create a
                slack channel for your company. That is where you can request unlimited data science, machine learning or AI task based on your plan.
                The process is simple. You bring multiple tasks if they are many, you select an active task, we work on the active task.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How fast is the work done?</AccordionTrigger>
              <AccordionContent>
             The period to finish a task is based on the nature and size of the project. If it an AI(OpenAI) web app, designing or developing an MVP or a landing page takes 15 days. 
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is there a limit to the work I can request?
              </AccordionTrigger>
              <AccordionContent>
              No please. You can request unlimited AI solutions as long as you are on subscription.
              Based on the plan you select we choose to work on a project or two at a time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What if I only have one AI/ML task?
              </AccordionTrigger>
              <AccordionContent>
              Yes it sometimes happen. Select an active plan and let us make your dream come live.
                You can pulse subscription to resubscribe later when you want another task.
                Note that for your product to be maintained and updated periodically, you should be on subscription.
                You only enjoy software revision.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What does it mean to pause my subscription?
              </AccordionTrigger>
              <AccordionContent>
              It means you may not be getting our services now until subscribe again. And, for your product to be maintained and updated periodically, you should be on subscription.
                You only enjoy product revision.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Who are the AI developers?</AccordionTrigger>
              <AccordionContent>
              UnicornBoost is led by two world class AI engineers and three design software engineers with a combined experience for over 9+ years.
                Our clients span the globe including early-stage ventures, large scale businesses and creators.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                What kind of work is a good fit?
              </AccordionTrigger>
              <AccordionContent>
              Any AI/ML related task is good fit. If you may not need an more AI services , check our SDaaS plans for what fits your needs.
                Or if it is a custom solution, just schedule a call and lets know it better.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                How can I have daily contact with the developer?
              </AccordionTrigger>
              <AccordionContent>
                We have daily communications via Slack or Stork AI app. We give you 24 hour attention to learn better while building.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
              What if I do not like the completed project?
              </AccordionTrigger>
              <AccordionContent>
              This does not normally happen. But if it does, we refine the solution till it is better. Normally, reviews and suggestions are much required before we build the product.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent
          value="csaas"
          className="mt-8 md:w-4/5 px-4 md:px-0 mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why should I choose Unicornboost instead of hiring a full-time
                software eng.?
              </AccordionTrigger>
              <AccordionContent>
              Hiring a full-time customer support specialist costs $53,732 per year. Benefits and vacations excluded. UnicornBoost becomes your software team while
                you focus on business development and distribution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is your approach for dealing with customers?</AccordionTrigger>
              <AccordionContent>
                First step in customer support is to know what the customers normally want so we start by learning about your company and products. 
                Through our workflow, we listen, empathize, draw immediate solutions and address the customer accordingly. We have also exercise emotional intelligence when dealing with customers.
                We address problems above us to company heads.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you work in different time zones?</AccordionTrigger>
              <AccordionContent>
                Yes. We work in all time Zones. Book a call and let us know your time zone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
               Which CRM softwares do yo work with?
              </AccordionTrigger>
              <AccordionContent>
                Zendesk, Asana, airtable, Trello etc.
                Our team members are highly trained to use CRM tools and tasks management tools so you don mot have to worry about long hours of training.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How qualified are you to help?
              </AccordionTrigger>
              <AccordionContent>
                Our customer support team has 6+ years experience cumulatively and are equipped to give you advanced reports on your customers behavior.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default FAQSection;
