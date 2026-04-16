import clsx from "clsx";
import svgPaths from "./svg-5qho7fhee1";

function Heading1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000005] text-[21.9px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[34px]">{children}</p>
      </div>
    </div>
  );
}

function Heading({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000005] text-[22.1px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[34px]">{children}</p>
      </div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[14.6px] tracking-[-0.2px] w-full">
        <p className="leading-[22px]">{text}</p>
      </div>
    </div>
  );
}
type BlurText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BlurText2({ text, additionalClassNames = "" }: BlurText2Props) {
  return (
    <div className={clsx("-translate-x-1/2 absolute blur-[0px] content-stretch flex items-start justify-center top-0", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000005] text-[46.3px] text-center tracking-[-3px] whitespace-nowrap">
        <p className="leading-[68px]">{text}</p>
      </div>
    </div>
  );
}
type BlurText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BlurText1({ text, additionalClassNames = "" }: BlurText1Props) {
  return (
    <div className={clsx("-translate-x-1/2 absolute blur-[0px] content-stretch flex items-start justify-center top-0", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000005] text-[57.8px] text-center tracking-[-3px] whitespace-nowrap">
        <p className="leading-[68px]">{text}</p>
      </div>
    </div>
  );
}
type BlurTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BlurText({ text, additionalClassNames = "" }: BlurTextProps) {
  return (
    <div className={clsx("-translate-x-1/2 absolute blur-[0px] content-stretch flex items-start justify-center top-0", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000005] text-[58px] text-center tracking-[-3px] whitespace-nowrap">
        <p className="leading-[68px]">{text}</p>
      </div>
    </div>
  );
}

export default function SectionWhoAttends() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center px-[160px] py-[80px] relative size-full" data-name="Section - Who attends">
      <div className="bg-white content-stretch flex flex-col gap-[60px] items-start justify-center max-w-[1120px] relative shrink-0 w-[1120px]" data-name="Container">
        <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Heading and subcopy">
          <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip pb-[0.6px] relative shrink-0" data-name="Eyebrow text">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[86px]" data-name="Container">
              <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e30071] text-[14.6px] tracking-[-0.2px] whitespace-nowrap">
                  <p className="leading-[22px]">Who attends</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[68px] relative shrink-0 w-full" data-name="Heading 2">
            <BlurText text="M" additionalClassNames="left-[calc(50%-273.64px)]" />
            <BlurText text="a" additionalClassNames="left-[calc(50%-234.99px)]" />
            <BlurText text="d" additionalClassNames="left-[calc(50%-202.46px)]" />
            <BlurText text="e" additionalClassNames="left-[calc(50%-172.41px)]" />
            <div className="-translate-x-1/2 absolute blur-[0px] content-stretch flex items-start justify-center left-[calc(50%-142.21px)] top-0" data-name="Blur">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000005] text-[43px] text-center tracking-[-3px] whitespace-nowrap">
                <p className="leading-[68px]">f</p>
              </div>
            </div>
            <BlurText text="o" additionalClassNames="left-[calc(50%-118.15px)]" />
            <BlurText1 text="r" additionalClassNames="left-[calc(50%-94.6px)]" />
            <BlurText text="F" additionalClassNames="left-[calc(50%-61.34px)]" />
            <BlurText text="u" additionalClassNames="left-[calc(50%-30.14px)]" />
            <BlurText2 text="t" additionalClassNames="left-[calc(50%-8.91px)]" />
            <BlurText text="u" additionalClassNames="left-[calc(50%+14.83px)]" />
            <BlurText1 text="r" additionalClassNames="left-[calc(50%+38.55px)]" />
            <BlurText text="e" additionalClassNames="left-[calc(50%+62.2px)]" />
            <BlurText text="C" additionalClassNames="left-[calc(50%+105.9px)]" />
            <BlurText1 text="r" additionalClassNames="left-[calc(50%+134.44px)]" />
            <BlurText text="e" additionalClassNames="left-[calc(50%+158.09px)]" />
            <BlurText text="a" additionalClassNames="left-[calc(50%+186.67px)]" />
            <BlurText2 text="t" additionalClassNames="left-[calc(50%+209.7px)]" />
            <BlurText text="o" additionalClassNames="left-[calc(50%+233.44px)]" />
            <BlurText1 text="r" additionalClassNames="left-[calc(50%+256.99px)]" />
            <BlurText1 text="s" additionalClassNames="left-[calc(50%+279.14px)]" />
            <BlurText text="." additionalClassNames="left-[calc(50%+297.92px)]" />
          </div>
        </div>
        <div className="content-stretch flex gap-[40px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
          <div className="content-stretch flex flex-col gap-[40px] items-center overflow-clip relative shrink-0 w-[346.66px]" data-name="Designers, product and enginners">
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center overflow-clip pb-[20px] relative shrink-0 w-full" data-name="Designers and creatives → Feature card">
              <div className="aspect-[30/32.400001525878906] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                <div className="h-[32.4px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                  <div className="absolute contents inset-[15.28%_3.13%_15.28%_12.5%]" data-name="Group">
                    <div className="absolute inset-[32.64%_31.25%_18.17%_15.62%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9377 15.9377">
                        <path d={svgPaths.p3c776d00} fill="var(--fill-0, #E30071)" id="Vector" opacity="0.2" />
                      </svg>
                    </div>
                    <div className="absolute inset-[15.28%_3.13%_15.28%_12.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3134 22.5">
                        <path d={svgPaths.pb3af100} fill="var(--fill-0, #E30071)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4.4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]" data-name="Container">
                  <Heading>{`Designers & Creatives`}</Heading>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[14.9px] tracking-[-0.2px] w-full">
                      <p className="leading-[22px]">Exploring how AI enhances human imagination.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[rgba(87,87,87,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center overflow-clip pb-[20px] relative shrink-0 w-full" data-name="Product leaders → Feature card">
              <div className="aspect-[30/32.400001525878906] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                <div className="h-[32.4px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                  <div className="absolute contents inset-[21.06%_0.87%_21.03%_0.85%]" data-name="Group">
                    <div className="absolute inset-[23.96%_46.88%_38.43%_12.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1875 12.1875">
                        <path d={svgPaths.p215d1600} fill="var(--fill-0, #E30071)" id="Vector" opacity="0.2" />
                      </svg>
                    </div>
                    <div className="absolute inset-[21.06%_0.87%_21.03%_0.85%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4845 18.7641">
                        <path d={svgPaths.pb53e600} fill="var(--fill-0, #E30071)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4.4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[168px]" data-name="Container">
                  <Heading>Product Leaders</Heading>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#575757] text-[14.4px] tracking-[-0.2px] w-full">
                      <p className="leading-[22px]">Shaping the next generation of intelligent tools.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[rgba(87,87,87,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center overflow-clip pb-[20px] relative shrink-0 w-full" data-name="Engineers → Feature card">
              <div className="aspect-[30/32.400001525878906] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                <div className="h-[32.4px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                  <div className="absolute contents inset-[18.16%_6.25%]" data-name="Group">
                    <div className="absolute bottom-[21.06%] left-[9.37%] right-[9.38%] top-1/2" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.375 9.375">
                        <path d={svgPaths.p3d564880} fill="var(--fill-0, #E30071)" id="Vector" opacity="0.2" />
                      </svg>
                    </div>
                    <div className="absolute inset-[18.16%_6.25%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.25 20.632">
                        <path d={svgPaths.p38792c80} fill="var(--fill-0, #E30071)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4.4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[255px]" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000005] text-[22.3px] tracking-[-0.5px] whitespace-nowrap">
                      <p className="leading-[34px]">{`Engineers & Researchers`}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText text="Building models that push cognitive boundaries." />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[rgba(87,87,87,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
            </div>
          </div>
          <div className="content-stretch flex h-[482px] items-center overflow-clip relative shrink-0 w-[346.68px]" data-name="Video">
            <div className="bg-[#000005] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative rounded-[8px]" data-name="image">
              <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name="Rectangle" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[40px] items-center overflow-clip relative shrink-0 w-[346.66px]" data-name="Entrepreneurs, marketers and students">
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center overflow-clip pb-[20px] relative shrink-0 w-full" data-name="Entrepreneurs → Feature card">
              <div className="aspect-[30/32.400001525878906] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                <div className="h-[32.4px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                  <div className="absolute contents inset-[18.18%_0_23.96%_0]" data-name="Group">
                    <div className="absolute inset-[52.89%_25.57%_26.85%_25.57%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6555 6.5625">
                        <path d={svgPaths.pfe34380} fill="var(--fill-0, #E30071)" id="Vector" opacity="0.2" />
                      </svg>
                    </div>
                    <div className="absolute inset-[18.18%_0_23.96%_0]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 18.7485">
                        <path d={svgPaths.p29488200} fill="var(--fill-0, #E30071)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4.4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[264px]" data-name="Container">
                  <Heading>{`Entrepreneurs & Founders`}</Heading>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText text="Creating startups powered by AI innovation." />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[rgba(87,87,87,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center overflow-clip pb-[20px] relative shrink-0 w-full" data-name="Marketers → Feature card">
              <div className="aspect-[30/32.400001525878906] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                <div className="h-[32.4px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                  <div className="absolute contents inset-[15.28%_9.37%_15.28%_15.62%]" data-name="Group">
                    <div className="absolute inset-[61.57%_59.38%_18.17%_18.75%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5625 6.5625">
                        <path d={svgPaths.p391b7f00} fill="var(--fill-0, #E30071)" id="Vector" opacity="0.2" />
                      </svg>
                    </div>
                    <div className="absolute inset-[15.28%_9.37%_15.28%_15.62%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.501 22.5">
                        <path d={svgPaths.p13846500} fill="var(--fill-0, #E30071)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4.4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[236px]" data-name="Container">
                  <Heading1>{`Marketers & Strategists`}</Heading1>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText text="Using AI to craft deeper human connections." />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[rgba(87,87,87,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center overflow-clip pb-[20px] relative shrink-0 w-full" data-name="Students → Feature card">
              <div className="aspect-[30/32.400001525878906] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                <div className="h-[32.4px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                  <div className="absolute contents inset-[12.38%_9.37%_15.24%_9.37%]" data-name="Group">
                    <div className="absolute inset-[15.28%_12.5%_61.57%_12.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 7.5">
                        <path d={svgPaths.p11fc2a00} fill="var(--fill-0, #E30071)" id="Vector" opacity="0.2" />
                      </svg>
                    </div>
                    <div className="absolute inset-[12.38%_9.37%_15.24%_9.37%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3752 23.4488">
                        <path d={svgPaths.p2ee62300} fill="var(--fill-0, #E30071)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4.4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[218px]" data-name="Container">
                  <Heading1>{`Students & Educators`}</Heading1>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText text="Discovering how AI is reshaping creative learning." />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[rgba(87,87,87,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}