import clsx from "clsx";
import svgPaths from "./svg-kkfr6lgz0f";
import imgALadyWithMic from "figma:asset/c51d1f33b1e3d7bb0687ba4c0480c0153238f634.png";
import imgALadyWithMic1 from "figma:asset/5c207fc57abbcc77fa43797a70a19f5b372d0d5d.png";
import imgAManWithMic from "figma:asset/b572f2600e6c7d052b2514f3fa2dc197a92aa4d6.png";
import imgAManWithMic1 from "figma:asset/88481721ed51cfb224fdc98d26e1eda8c775f2c1.png";
import imgAManWithMic2 from "figma:asset/69de42e0d7a1c6dace9b54b1c4bac4aba644f425.png";
import imgALadyWithMic2 from "figma:asset/ed1644b5b15e6ba535ab81cfc9a1aa5a0ef80adf.png";
import { imgSection } from "./svg-efmjh";
type SectionProps = {
  additionalClassNames?: string;
};

function Section({ children, additionalClassNames = "" }: React.PropsWithChildren<SectionProps>) {
  return (
    <div style={{ maskImage: `url('${imgSection}')` }} className={clsx("absolute content-stretch flex items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_21.48%]", additionalClassNames)}>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white tracking-[-0.2px] w-full">
        <p className="leading-[22px]">{children}</p>
      </div>
    </div>
  );
}

function AManWithMicImage() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-35.67%] max-w-none top-0 w-[188.96%]" src={imgAManWithMic1} />
      </div>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.6px] text-white w-full">
        <p className="leading-[26px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-white tracking-[-0.2px] w-full">
        <p className="leading-[22px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

function ALadyWithMicImage() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[116.64%] left-0 max-w-none top-[-16.64%] w-full" src={imgALadyWithMic} />
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
    <div className={clsx("absolute blur-[0px] content-stretch flex items-start top-0", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[46.3px] text-white tracking-[-3px] whitespace-nowrap">
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
    <div className={clsx("absolute blur-[0px] content-stretch flex items-start", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[58px] text-white tracking-[-3px] whitespace-nowrap">
        <p className="leading-[68px]">{text}</p>
      </div>
    </div>
  );
}

export default function SectionSpeakers() {
  return (
    <div className="bg-[#000005] content-stretch flex flex-col items-center justify-center px-[160px] relative size-full" data-name="Section - Speakers">
      <div className="content-stretch flex gap-[10px] items-center justify-center max-w-[1120px] relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-[480px] items-start justify-between max-w-[1120px] min-h-px min-w-px overflow-clip relative" data-name="Content">
          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Heading">
            <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip pb-[0.6px] relative shrink-0" data-name="Eyebrow text">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[65px]" data-name="Container">
                <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-white tracking-[-0.2px] whitespace-nowrap">
                    <p className="leading-[22px]">Speakers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[136px] relative shrink-0 w-full" data-name="Heading 2">
              <BlurText text="M" additionalClassNames="left-0 top-0" />
              <BlurText text="e" additionalClassNames="left-[48.15px] top-0" />
              <BlurText text="e" additionalClassNames="left-[77.24px] top-0" />
              <BlurText1 text="t" additionalClassNames="left-[106.33px]" />
              <BlurText1 text="t" additionalClassNames="left-[131.18px]" />
              <BlurText text="h" additionalClassNames="left-[145.91px] top-0" />
              <BlurText text="e" additionalClassNames="left-[176.14px] top-0" />
              <div className="absolute blur-[0px] content-stretch flex items-start left-[215.34px] top-0" data-name="Blur">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[54.8px] text-white tracking-[-3px] whitespace-nowrap">
                  <p className="leading-[68px]">V</p>
                </div>
              </div>
              <BlurText text="o" additionalClassNames="left-[252.25px] top-0" />
              <BlurText text="i" additionalClassNames="left-[282.3px] top-0" />
              <BlurText text="c" additionalClassNames="left-[292.79px] top-0" />
              <BlurText text="e" additionalClassNames="left-[321.38px] top-0" />
              <div className="absolute blur-[0px] content-stretch flex items-start left-[350.46px] top-0" data-name="Blur">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[57.8px] text-white tracking-[-3px] whitespace-nowrap">
                  <p className="leading-[68px]">s</p>
                </div>
              </div>
              <BlurText text="S" additionalClassNames="left-0 top-[68px]" />
              <BlurText text="h" additionalClassNames="left-[34.1px] top-[68px]" />
              <BlurText text="a" additionalClassNames="left-[64.32px] top-[68px]" />
              <BlurText text="p" additionalClassNames="left-[95.35px] top-[68px]" />
              <BlurText text="i" additionalClassNames="left-[126.4px] top-[68px]" />
              <BlurText text="n" additionalClassNames="left-[136.89px] top-[68px]" />
              <BlurText text="g" additionalClassNames="left-[167.11px] top-[68px]" />
              <div className="absolute blur-[0px] content-stretch flex items-start left-[208.27px] top-[68px]" data-name="Blur">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[56.2px] text-white tracking-[-3px] whitespace-nowrap">
                  <p className="leading-[68px]">A</p>
                </div>
              </div>
              <BlurText text="I" additionalClassNames="left-[245.5px] top-[68px]" />
              <BlurText text="." additionalClassNames="left-[264.2px] top-[68px]" />
            </div>
          </div>
          <div className="bg-[#121216] content-stretch flex flex-col gap-[19.4px] items-start justify-center overflow-clip p-[20px] relative rounded-[8px] shrink-0" data-name="Subline">
            <div className="aspect-[30/32.400001525878906] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
              <div className="h-[32.4px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                <div className="absolute contents inset-[9.49%_6.25%_12.38%_9.37%]" data-name="Group">
                  <div className="absolute inset-[39.69%_38.87%_15.28%_12.5%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5895 14.5895">
                      <path d={svgPaths.p425a200} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
                    </svg>
                  </div>
                  <div className="absolute inset-[9.49%_6.25%_12.38%_9.37%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3126 25.3126">
                      <path d={svgPaths.p1ef7bb00} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[270px]" data-name="Container">
              <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.2px] whitespace-nowrap">
                  <p className="mb-0">Leaders, designers, and technologists</p>
                  <p>defining the future of intelligent creativity.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start overflow-clip pt-[0.6px] relative shrink-0" data-name="Button">
              <div className="bg-[#e30071] content-stretch flex gap-[6px] items-center justify-center overflow-clip pb-[8px] pt-[7.4px] px-[16px] relative rounded-[60px] shrink-0" data-name="Link - Primary button">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Text">
                  <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.3px] whitespace-nowrap">
                      <p className="leading-[22px]">View Full Lineup</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[20px]" data-name="Container">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                    <div className="absolute contents inset-[18.74%_0.87%_18.71%_0.85%]" data-name="Group">
                      <div className="absolute inset-[21.88%_46.87%_37.5%_12.5%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.125 8.125">
                          <path d={svgPaths.p247db280} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
                        </svg>
                      </div>
                      <div className="absolute inset-[18.74%_0.87%_18.71%_0.85%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6564 12.5094">
                          <path d={svgPaths.p20cbd180} fill="var(--fill-0, white)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[5px] h-[900px] items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="Speakers">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Section:mask-group">
            <Section additionalClassNames="inset-[-194.14px_0_-3095.86px_0] mask-position-[0%_4.63%]">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-full items-start justify-center min-h-px min-w-px relative" data-name="List">
                <div className="content-stretch flex flex-col h-[340px] items-start relative shrink-0 w-full" data-name="Item → Speaker 4">
                  <div className="content-stretch flex h-[340px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[270px]" data-name="Speakers">
                    <ALadyWithMicImage />
                    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4.4px] items-start left-0 overflow-clip p-[20px] right-0 to-black" data-name="Content">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.9px] text-white w-full">
                          <p className="leading-[26px]">Tara Nair</p>
                        </div>
                      </div>
                      <ContainerText text="Creative Director - Nova Studio" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[340px] items-start relative shrink-0 w-full" data-name="Item → Speaker 5">
                  <div className="content-stretch flex h-[340px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[270px]" data-name="Speakers">
                    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="A lady with mic">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-full left-[-12.96%] max-w-none top-0 w-[125.93%]" src={imgALadyWithMic1} />
                      </div>
                    </div>
                    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4.4px] items-start left-0 overflow-clip p-[20px] right-0 to-black" data-name="Content">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.8px] text-white w-full">
                          <p className="leading-[26px]">Amira Soltani</p>
                        </div>
                      </div>
                      <ContainerText1 text="Product Lead, Mindwave AI" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[340px] items-start relative shrink-0 w-full" data-name="Item → Speaker 6">
                  <div className="content-stretch flex h-[340px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[270px]" data-name="Speakers">
                    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="A man with mic">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[111.42%] left-0 max-w-none top-[-5.71%] w-full" src={imgAManWithMic} />
                      </div>
                    </div>
                    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4.4px] items-start left-0 overflow-clip p-[20px] right-0 to-black" data-name="Content">
                      <ContainerText2 text="Mateo Ríos" />
                      <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-white tracking-[-0.2px] w-full">
                          <p className="leading-[22px]">CRO - NeuraWorks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[340px] items-start relative shrink-0 w-full" data-name="Item → Speaker 4">
                  <div className="content-stretch flex h-[340px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[270px]" data-name="Speakers">
                    <ALadyWithMicImage />
                  </div>
                </div>
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 5" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 6" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 4" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 5" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 6" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 4" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 5" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 6" />
              </div>
            </Section>
          </div>
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Section:mask-group">
            <Section additionalClassNames="inset-[-1946.68px_0_-1343.32px_0] mask-position-[0%_46.46%]">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-full items-end justify-center min-h-px min-w-px relative" data-name="List">
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 1" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 2" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 3" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 1" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 2" />
                <div className="content-stretch flex flex-col h-[340px] items-start relative shrink-0 w-full" data-name="Item → Speaker 3">
                  <div className="content-stretch flex h-[340px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[270px]" data-name="Speakers">
                    <AManWithMicImage />
                    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4.4px] items-start left-0 overflow-clip p-[20px] right-0 to-black" data-name="Content">
                      <ContainerText2 text="Arjun Mehta" />
                      <ContainerText1 text="CEO - Synth Labs" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[340px] items-start relative shrink-0 w-full" data-name="Item → Speaker 1">
                  <div className="content-stretch flex h-[340px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[270px]" data-name="Speakers">
                    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="A man with mic">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[115.02%] left-0 max-w-none top-[-7.51%] w-full" src={imgAManWithMic2} />
                      </div>
                    </div>
                    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4.4px] items-start left-0 overflow-clip p-[20px] right-0 to-black" data-name="Content">
                      <ContainerText2 text="Julian Torres" />
                      <Wrapper>{` Head of Design - Framer`}</Wrapper>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[340px] items-start relative shrink-0 w-full" data-name="Item → Speaker 2">
                  <div className="content-stretch flex h-[340px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[270px]" data-name="Speakers">
                    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="A lady with mic">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-full left-[-44.48%] max-w-none top-0 w-[188.96%]" src={imgALadyWithMic2} />
                      </div>
                    </div>
                    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4.4px] items-start left-0 overflow-clip p-[20px] right-0 to-black" data-name="Content">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[19.1px] text-white w-full">
                          <p className="leading-[26px]">Lina Zhao</p>
                        </div>
                      </div>
                      <ContainerText text="Robotics Lead - AeroMind" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[340px] items-start relative shrink-0 w-full" data-name="Item → Speaker 3">
                  <div className="content-stretch flex h-[340px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[270px]" data-name="Speakers">
                    <AManWithMicImage />
                  </div>
                </div>
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 1" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 2" />
                <div className="h-[340px] shrink-0 w-full" data-name="Item → Speaker 3" />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}