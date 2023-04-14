import { FC } from "react";
import { IGenFaq } from "../services/graphql/__generated/sdk";
import { CenterContainer } from "./CenterContainer";
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";
import { Headline } from "./Headline";

export const Faq: FC<IGenFaq> = ({ headline, subheadline, sections }) => {
  return (
    <>
      <Headline headline={headline} subheadline={subheadline} />
      <CenterContainer>
        <div className="space-y-4">
          {sections?.map((section, index) =>
            section ? (
              <details
                key={`${section.id}_${index}`}
                className="w-full group [&_summary::-webkit-details-marker]:hidden"
                open={index == 0}
              >
                <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                  <h2 className="font-medium text-gray-900">
                    {section?.title}
                  </h2>

                  <svg
                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <div className="px-4 mt-4 leading-relaxed text-gray-700">
                  <RichTextRenderer node={section?.description?.json} />
                </div>
              </details>
            ) : null
          )}
        </div>
      </CenterContainer>
    </>
  );
};
