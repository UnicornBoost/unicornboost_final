import FAQSection from "@/components/faq-section";
import PricingCard from "@/components/pricing-card";
import ServiceSection from "@/components/service-section";
import ServiceSectionTwo from "@/components/service-section-two";
import { LucideBadgeCheck } from "lucide-react";
import Image from "next/image";
import '../src/index.css'

export default function Home() {
  return (
    <main className="font-sora md:font-sora">
      <header className="flex flex-col items-center py-16 md:w-4/5 md:px-0 px-4 mx-auto">
        <div className="flex flex-col md:gap-6 gap-3 items-center justify-center">
          <h1 className="md:text-6xl text-2xl font-semibold md:text-center text-center">
            elevate your startup or company with UnicornBoost.
          </h1>
          <div className="space-y-4 md:text-left text-center">
            <h3 className="md:text-2xl text-base text-center">
            We are equipped to be your company software, ML or customer service team. Subscribe, cancel anytime. 
            </h3>
            {/* <h3 className="md:text-2xl text-base">
              AI/ML Development as a service (AIDaaS)
            </h3>
             Software Development as a service (SDaaS) | AI/ML Development as a service (AIDaaS) | Customer Support as a service (CSaaS)
            <h3 className="md:text-2xl text-base">
              Customer Support as a service (CSaaS)
            </h3> */}
          </div>
        </div>
        <div className="flex items-center justify-center py-2 ">
          <a
            href="https://cal.com/unicornboost/30min"
            className="bg-amber-50 text-black md:text-lg text-sm px-8 py-2 text-center rounded-full font-medium"
          >
            Schedule a call &#128197;
          </a>
        </div>
        <p className="text-red-300 text-sm md:text-red-300">2 spots left &#9201;&#65039;</p>
      </header>
      <section
        id="service"
        className="md:py-4 pb-16 space-y-8 md:w-4/5 px-4 md:px-0 mx-auto"
      >
        <h4 className="font-semibold text-center ">
          Choose one or more plan(s)
        </h4>
        <div className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-4 md:gap-0">
          <div className="bg-black/60 p-4 rounded flex flex-col gap-4 md:w-[300px]">
            <h3 className="md:text-xl">Software Development as a service</h3>
            <a
              href="/#plans"
              className="bg-amber-50 text-black px-4 py-2 text-center text-xs md:text-base rounded font-medium"
            >
              Subscribe
            </a>
          </div>
          <div className="bg-black/60 p-4 rounded flex flex-col gap-4 md:w-[300px]">
            <h3 className="md:text-xl">AI/ML Development as a service</h3>
            <a
              href="/#ai"
              className="bg-amber-50 text-black px-4 py-2 text-center rounded font-medium text-xs md:text-base"
            >
              Subscribe
            </a>
          </div>
          <div className="bg-black/60 p-4 rounded flex flex-col gap-4 md:w-[300px]">
            <h3 className="md:text-xl">Customer Support as a service</h3>
            <a
              href="/#cs"
              className="bg-amber-50 text-black px-4 py-2 text-center rounded font-medium text-xs md:text-base"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center py-4 ">
          <a
            href="/#plans"
            className="bg-amber-50 text-black md:text-lg text-sm px-8 py-2 text-center rounded-full font-medium"
          >
            Get started
          </a>
        </div>
      </section>
      <section className="bg-amber-50 text-black py-8">
        <div className="md:w-4/5 md:px-0 px-4 md:text-base text-sm mx-auto space-y-4">
          <p className="text-center font-bold">Why now?</p>
          <p>
            Our subscription based product, UnicornBoost allows you access to immense
            software development, ML systems development and customer support services replacing unreliable freelancers and
            expensive agencies for one flat monthly fee. We specialize and quality in product delivery.{" "}
            with our clients in an async nature. The annual cost of a full-time
              senior developer, ML engineer, customer support manager is twice
              or more than twice our subscription based prices, that&apos;s not
              including benefits!
          </p>
          <p className="text-violet-700 font-medium">
            You may not always have enough work to keep them busy and you
            can&apos;t easily stop paying them, not only is UnicornBoost cheaper
            over a 12 month period but you can cancel at any time!
          </p>
        </div>
      </section>
      <ServiceSection />
      <section className="bg-amber-50 text-amber-50 py-16">
        <div className="md:w-4/5 md:px-0 px-4 mx-auto md:space-y-16 space-y-12">
          <div className="bg-gray-600 p-16 rounded space-y-4">
            <h3 className="md:text-xl text-sm font-medium text-center">
              The unlimited software development subscription has revolutionized
              our workflow by providing extra aid to our team, allowing us to
              seamlessly materialize our UIs.
            </h3>
            <div className="text-center text-xs md:text-base">
              <p>Product Lead, Augustine Kan</p>
              <p className="text-xs">Glovo | SDaaS</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-medium md:text-lg text-sm text-center text-black">
              Our team has worked with the best companies and startups
            </p>
            <div className="flex md:flex-row flex-col justify-center items-center">
              <Image className="pd-0 md:pd:0"
                src="/images/glovo.png"
                alt="glovo"
                width={150}
                height={150}
                objectFit="cover"
                objectPosition="center"
              />
              <Image
                src="/images/ecobank.png"
                alt="glovo"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
              />
              <Image 
                src="/images/lernexe.png"
                alt="glovo"
                width={100}
                height={100}
                objectFit="cover"
                objectPosition="center"
              />
              <div className="pt-4 md:pl-3">
              <Image className="pl-5"
                src="/images/cienet.png"
                alt="glovo"
                width={100}
                height={100}
                objectFit="cover"
                objectPosition="center"
              />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceSectionTwo />
      <section className="bg-amber-50 text-black py-6">
        <div className="md:w-4/5 px-4 md:px-0 mx-auto space-y-8">
          <h3 className="font-semibold text-center text-lg p-0">
            How does it work
          </h3>
          <h2 className="md:text-2xl text-lg font-bold text-center">
            Unlimited projects, one fixed monthly rate
          </h2>
          <div className=" bg-violet-300 p-4 rounded flex md:flex-row flex-col items-center gap-16">
            <div className="space-y-4 md-10 flex-1">
              <div>
                <p className="md:text-sm text-orange-500"> This is for SDaaD and AIDaaS only. Book a call to learn more om CSaaS </p>
                <h4 className="font-bold mb-1 text-sm md:text-base">
                  Choose a plan
                </h4>
                <p className="md:text-base text-sm">
                  Subscribe to a plan, we will email you. Or schedule a call to Subscribe.
                  Request a task(software or ML task) via Slack/Stork AI.
                  You can request unlimited task but choose an active task.
                  The active task is our priority and it will be addressed before
                  other tasks.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-sm md:text-base">
                  Pdoduct development
                </h4>
                <p className="md:text-base text-sm">
                We first design the UI of the product for you to review or you can bring your UIs.
                We develop the fully tested functional product.
                Period of development depends on the active task. SaaS MVP takes 15days.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-sm md:text-base">
                  We deploy and maintain
                </h4>
                <p className="md:text-base text-sm">
                  We deploy to your preferred cloud service.
                  We maintain and update your product if you are still on subscription.
                  You can add another task for development.
                </p>
              </div>
            </div>
            <div className="md:w-[40%] flex items-center justify-center">
              <Image
                src="/images/bulk-mail.svg"
                alt="bulk mail"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="plans" className="py-10 w-4/5 mx-auto space-y-16">
        <div className="flex justify-center items-center">
          <h2 className="text-lg bg-white px-8 py-2 rounded-full text-black text-center">
            Plans
          </h2>
        </div>
        <div className="space-y-8">
          <h3 className="text-sm md:text-base">
            Software Development <br />
            as a service
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 place-items-center">
            <PricingCard
              title="Boost Basic"
              message="Best for early-stage startups and creators seeking a high-converting MVP or landing page."
              pricing="2,999"
              href="https://buy.stripe.com/4gw6qR74t9G43IsdQQ"
              days="Landing page/Website"
              social="Unlimited design/website requests"
              firstoption="15 days delivery"
              planInfo="Payment with stripe"
              deck="10 Maintenance Days per month"
              secondoption="Private Slack channel"
              thirdoption="2x world class design engineers"
              productype ="Pause or cancel anytime"
              additionalInfo="urgent/periodic updates"
            />
            <PricingCard
              title="Boost Standard"
              message="Ideal for those with a continuous demand for design and development services."
              pricing="3,999"
              href="https://buy.stripe.com/4gw7uV4WlaK892MaEF"
              planInfo="Payment with stripe"
              social="unlimited Design/Development requests"
              days="Web app/Mobile app"
              productype ="Pause or cancel anytime"
              firstoption="20 Maintenance Days per month"
              secondoption="Private Slack channel"
              thirdoption="3x world class design engineers"
              additionalInfo="urgent/periodic updates"
              paylevel="Pay for Standard"
              popular={true}
            />
            <PricingCard
              title="Boost Plus"
              message="Best for early-stage startups who need engineering and customer support team(optional)"
              pricing="6,999"
              href="https://buy.stripe.com/6oE6qR9cBg4s4Mw3ce"
              planInfo="Payment with stripe"
              days="Web/Mobile/Destop apps"
              social="unlimited Design/Development requests"
              productype ="Pause or cancel anytime"
              firstoption="2 active projects at a time"
              secondoption=" Get a customer support team(optional)"
              deck="30 Maintenance Days per month"
              thirdoption="4x world class design engineers"
              additionalInfo="maintenance + updates"
              csaas=" Private Slack channel"
            />
          </div>
        </div>
        <div id="ai" className="space-y-8">
          <h3 className="text-sm md:text-base">
            AI/ML Development <br />
            as a Service.
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 place-items-center">
            <PricingCard
              title="Boost Basic"
              message="Best for early-stage startups, researchers and companies seeking to build basic machine learning softwares and simulations"
              pricing="3,999"
              href="https://buy.stripe.com/8wM6qR9cB8C07YI5kn"
              days="AI web/mobile apps"
              social="Analytics/predictive models"
              firstoption="ML systems integrations"
              planInfo="cancel anytime"
              secondoption="Data cleaning tasks "
              thirdoption="OpenAI tools integration"
              productype =" Private slack channel"
              additionalInfo="ML system maintenance + updates"
              csaas="2x world class ML engineers"
              stripe="Payment with stripe"
            />
            <PricingCard
              title="Boost Standard"
              message="Best for early-stage startups and companies seeking to build advanced machine learning systems, softwares and APIs"
              pricing="4,999"
              href="https://buy.stripe.com/28o5mNgF35pO5QAfZ2"
              days="AI web/mobile/Destop apps"
              social="Predictive models/recommendation systems/chatbots"
              firstoption="ML systems integrations"
              planInfo="cancel anytime"
              secondoption="Computer Vision/NLP tasks"
              thirdoption="OpenAI tools integration"
              productype =" Private slack channel"
              csaas="4x world class ML engineers"
              additionalInfo="system maintenance + updates"
              stripe="Payment with stripe"
              popular={true}
            />
            <PricingCard
              title="Boost Plus"
              message="Best for early-stage startups and creators who need data and AI team"
              pricing="6,999"
              href="https://buy.stripe.com/00g6qRfAZ5pO92MaEJ"
              days="AI web/mobile/Destop apps"
              social="Predictive models/recommendation systems/chatbots"
              firstoption="ML systems integrations"
              planInfo="cancel anytime"
              secondoption="Computer Vision/NLP/LLM tasks"
              thirdoption="OpenAI tools integration"
              productype =" Private slack channel"
              additionalInfo="system maintenance + updates"
              csaas="6x world class ML engineers"
              stripe="Payment with stripe"
            />
          </div>
        </div>
        <div id="cs" className="space-y-8">
          <h3 className="text-sm bg-blue md:text-base">
            Customer Support <br />
            as a Service.
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 place-items-center">
            <PricingCard
              title="Boost Basic"
              message="Get a customer support specialist with a click"
              pricing="799"
              href="https://buy.stripe.com/aEUeXncoN5pO4MwbIO"
              planInfo="Cancel anytime"
              days="20 tickets per month"
              social="5 phone calls per month"
              thirdoption=" 24/7 live chat support"
              stripe="payment with stripe"
              secondoption="Choose your preferred CRM tools"
            />
            <PricingCard
              title="Boost Standard"
              message="Supercharge your support systems with data and product oriented customer support"
              pricing="1,599"
              href="https://buy.stripe.com/fZe16xfAZ19y0wgcMT"
              planInfo="Cancel anytime"
              days="Unlimited tickets per month"
              social="50 phone calls per month"
              thirdoption=" 24/7 live chat support"
              firstoption="Get customer behavior reports"
              stripe="payment with stripe"
              secondoption="Choose your preferred CRM tools"
            />
            <PricingCard
              title="Boost Standard"
              message="Elevate your support systems with advanced customer support services"
              pricing="2,199"
              href="https://buy.stripe.com/00g4iJewVf0oa6Q9AJ"
              planInfo="Cancel anytime"
              days="Unlimited tickets per month"
              social="24/7 live chat, phone, and video call support"
              thirdoption="Virtual Assistantship "
              firstoption="Get customer behavior reports"
              stripe="payment with stripe"
              secondoption="Choose your preferred CRM tools"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h3 className="font-semibold text-black bg-white rounded-full px-4 py-2">
            custom
          </h3>
          <div className="bg-white p-4 text-black rounded-sm flex flex-col justify-center items-center gap-6">
            <h3 className="font-semibold text-xl text-center">
              Want a custom service?
            </h3>
            <div>
              <a
                href="https://cal.com/unicornboost/30min"
                className="bg-green-500 w-full text-black px-8 py-2 text-center rounded font-medium"
              >
                Schedule a call
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">Personalized plan?</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">Partner with us?</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">Hire our team?</p>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">
                Game development services?
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">Blockchain services?</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">
                  Sign yearly contract?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
      <section className="bg-white text-black py-7 md:py-7">
        <div className="w-4/5 mx-auto md:space-y-16 space-y-2">
          <h3 className="font-semibold text-center text-lg">
            Tools and languages
          </h3>
          <div className="w-full md:h-[400px] h-[200px] bg-[url(/images/jics.png)] bg-no-repeat bg-contain bg-center"></div>
        </div>
      </section>
      <section className="py-16 space-y-8 md:w-4/5 px-4 md:px-0 mx-auto">
        <div className="bg-amber-50 text-black p-8 flex flex-col justify-center items-center gap-4 rounded">
          <h2 className="md:text-3xl text-xl text-center font-bold">
            Get started in seconds
          </h2>
          <p className="text-center md:text-base text-sm">
            Get your first MVP or software from UnicornBoost, faster than you think. <br />
            No need to go through proposals or sign contracts.
          </p>
          <div className="flex items-center justify-center pt-4">
            <a
              href="https://cal.com/unicornboost/30min"
              className="bg-black text-amber-50 md:text-lg text-sm px-8 py-2 text-center rounded-full font-medium"
            >
              Schedule a call &#128197;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
