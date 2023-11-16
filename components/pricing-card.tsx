import { LucideBadgeCheck } from "lucide-react";

interface Props {
  title: string;
  pricing: string;
  message: string;
  href: string;
  days: string;
  additionalInfo?: string;
  popular?: boolean;
  planInfo?: string;
  firstoption?: string;
  secondoption?: string;
  thirdoption?: string;
  deck?: string;
  social?: string;
  productype?: string;
  csaas?: string;
  stripe?: string;
  paylevel?: string;
}

const PricingCard: React.FC<Props> = ({
  title,
  pricing,
  message,
  deck,
  href,
  days,
  paylevel,
  productype,
  firstoption,
  secondoption,
  thirdoption,
  additionalInfo,
  stripe,
  csaas,
  popular = false,
  planInfo,
  social = "Unlimited revisions",
}) => {
  return (
    <div className="bg-white p-4 h-full text-black md:w-[300px] rounded-sm flex flex-col justify-center items-center gap-6">
      {popular && (
        <div className="w-full flex justify-end">
          <p className="text-xs text-white bg-purple-500 px-4 py-1 rounded-full">
            Most popular
          </p>
        </div>
      )}
      <h3 className="font-semibold text-xl text-center">{title}</h3>
      <p className="text-sm text-center">{message}</p>
      <div className="flex items-center gap-2">
        <p className="text-xl font-bold">${pricing}</p>
        <p className="flex flex-col text-sm">
          <span>Per</span>
          <span className="-mt-2">Month</span>
        </p>
      </div>
      <div>
        <a
          href={href}
          className="bg-green-500 w-full text-black px-8 py-2 text-center rounded font-medium"
        >
          Get Started{/* {paylevel} */}
        </a>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div>
            <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
          </div>
          <p className="text-sm">{days}</p>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
          </div>
          <p className="text-sm">{social}</p>
        </div>
        {additionalInfo && (
          <div className="flex gap-2">
            <div>
              <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
            </div>
            <p className="text-sm">{additionalInfo}</p>
          </div>
        )}
        {thirdoption && (
          <div className="flex gap-2">
            <div>
              <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
            </div>
            <p className="text-sm">{thirdoption}</p>
          </div>
        )}
        {deck && (
          <div className="flex gap-2">
            <div>
              <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
            </div>
            <p className="text-sm">{deck}</p>
          </div>
        )}
        {firstoption && (
          <div className="flex gap-2">
            <div>
              <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
            </div>
            <p className="text-sm">{firstoption}</p>
          </div>
        )}
        {secondoption && (
          <div className="flex gap-2">
            <div>
              <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
            </div>
            <p className="text-sm">{secondoption}</p>
          </div>
        )}
        {csaas && (
          <div className="flex gap-2">
            <div>
              <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
            </div>
            <p className="text-sm">{csaas}</p>
          </div>
        )}
        {productype && (
          <div className="flex gap-2">
            <div>
              <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
            </div>
            <p className="text-sm">{productype}</p>
          </div>
        )}

        {planInfo && (
          <div className="flex gap-2">
            <div>
              <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
            </div>
            <p className="text-sm">{planInfo}</p>
          </div>
        )}
        {stripe && (
          <div className="flex gap-2">
            <div>
              <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
            </div>
            <p className="text-sm">{stripe}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
