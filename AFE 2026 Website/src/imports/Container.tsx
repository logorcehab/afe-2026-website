import clsx from "clsx";
import svgPaths from "./svg-kobs54dkrv";
import imgImageWithFallback from "figma:asset/caf37af3c39098c14852edd7a1ac195436f87c0b.png";
import imgImageWithFallback1 from "figma:asset/f3a4f98141d1ec8e5bec4f01e93d68aec6125fef.png";
import imgImageWithFallback2 from "figma:asset/66bd7e88633c45421e1da2f20ea751f185d0b28b.png";
import imgImageWithFallback3 from "figma:asset/71fdaf7b3d91a6298b4e9ad799321a98dcc68cc5.png";

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function VectorBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[29.17%]">
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          {children}
        </svg>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText({ text, additionalClassNames = "" }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[119.819px] top-[32px]", additionalClassNames)}>
      <p className="absolute font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[119.822px] left-0 text-[119.822px] text-[rgba(255,255,255,0.06)] top-[-18.89px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextRevealBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextRevealBackgroundImageAndText({ text, additionalClassNames = "" }: TextRevealBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[52.722px] overflow-clip top-[-5.61px]", additionalClassNames)}>
      <p className="absolute font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[52.722px] left-0 text-[47.929px] text-white top-[-0.44px] tracking-[-1.4379px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <div className="h-[471px] relative shrink-0 w-[1181px]" data-name="Container">
        <div className="absolute h-[471.472px] left-[590.67px] top-0 w-[590.667px]" data-name="RegionCard">
          <div className="absolute h-[58.417px] left-[64px] top-[80px] w-[462.667px]" data-name="LineReveal" />
          <div className="absolute h-[61.333px] left-[64px] top-[144.03px] w-[268.431px]" data-name="Heading 2">
            <div className="absolute h-[53px] left-[0.33px] overflow-clip top-[-6.03px] w-[136px]" data-name="TextReveal">
              <p className="absolute font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[52.722px] left-0 text-[47.929px] text-white top-[-0.44px] tracking-[-1.4379px] whitespace-nowrap">Accra</p>
            </div>
            <div className="absolute h-[52.722px] left-[125.42px] top-[-5.61px] w-[128.639px]" data-name="TextReveal" />
          </div>
          <div className="absolute h-[81px] left-[64px] top-[225.19px] w-[448px]" data-name="Paragraph">
            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[27px] left-0 text-[15px] text-[rgba(255,255,255,0.4)] top-[-0.44px] w-[420px]">{`Connect with the continent's most dynamic economies and emerging financial hubs. Live demonstrations of payment solutions and RegTech tools adapted for African markets.`}</p>
          </div>
          <div className="absolute border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid h-[45.278px] left-[64px] top-[346.19px] w-[207.181px]" data-name="Button">
            <div className="absolute h-[19.5px] left-[24px] top-[12px] w-[129.403px]" data-name="RegionCard">
              <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] leading-[19.5px] left-[65px] not-italic text-[13px] text-[rgba(255,255,255,0.8)] text-center top-[-1.11px] tracking-[0.39px] whitespace-nowrap">Explore Accra</p>
            </div>
            <div className="absolute content-stretch flex items-start left-[165.4px] size-[16px] top-[13.75px]" data-name="Text">
              <IconBackgroundImage>
                <VectorBackgroundImage>
                  <path d={svgPaths.p1dd99a80} id="Vector" stroke="var(--stroke-0, #34D399)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </VectorBackgroundImage>
                <VectorBackgroundImage>
                  <path d={svgPaths.p14d5a980} id="Vector" stroke="var(--stroke-0, #34D399)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </VectorBackgroundImage>
              </IconBackgroundImage>
            </div>
          </div>
        </div>
        <div className="absolute h-[471px] left-0 overflow-clip top-0 w-[591px]" data-name="RegionCard">
          <div className="absolute content-stretch flex flex-col h-[788px] items-start left-0 top-[78.76px] w-[591px]" data-name="Container">
            <div className="h-[945.056px] relative shrink-0 w-full" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
            </div>
          </div>
          <div className="absolute h-[787.556px] left-0 top-0 w-[590.667px]" data-name="Container" style={{ backgroundImage: "linear-gradient(126.87deg, rgba(52, 211, 153, 0.082) 0%, rgba(0, 0, 0, 0) 60%)" }} />
          <div className="absolute bg-gradient-to-b from-[#050510] h-[787.556px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[590.667px]" data-name="Container" />
          <ContainerBackgroundImageAndText text="01" additionalClassNames="left-[426.86px] w-[131.806px]" />
        </div>
      </div>
      <div className="h-[472px] relative shrink-0 w-[1181px]" data-name="Container">
        <div className="absolute h-[471.472px] left-0 top-[0.04px] w-[590.667px]" data-name="RegionCard">
          <div className="absolute h-[58.417px] left-[64px] top-[80px] w-[462.667px]" data-name="LineReveal" />
          <div className="absolute h-[61.333px] left-[64px] top-[144.03px] w-[252.319px]" data-name="Heading 2">
            <TextRevealBackgroundImageAndText text="East" additionalClassNames="left-0 w-[94.931px]" />
            <TextRevealBackgroundImageAndText text="Africa" additionalClassNames="left-[109.31px] w-[128.639px]" />
          </div>
          <div className="absolute h-[81px] left-[64px] top-[225.19px] w-[448px]" data-name="Paragraph">
            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[27px] left-0 text-[15px] text-[rgba(255,255,255,0.4)] top-[-0.44px] w-[430px]">{`Learn from Africa's globally-recognized innovations in mobile payments, agent banking, and financial inclusion. World-leading mobile money adoption.`}</p>
          </div>
          <div className="absolute border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid h-[45.278px] left-[64px] top-[346.19px] w-[209.861px]" data-name="Button">
            <div className="absolute h-[19.5px] left-[24px] top-[12px] w-[132.083px]" data-name="RegionCard">
              <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] leading-[19.5px] left-[66px] not-italic text-[13px] text-[rgba(255,255,255,0.8)] text-center top-[-1.11px] tracking-[0.39px] whitespace-nowrap">Discover East Africa</p>
            </div>
            <div className="absolute content-stretch flex items-start left-[168.08px] size-[16px] top-[13.75px]" data-name="Text">
              <IconBackgroundImage>
                <VectorBackgroundImage>
                  <path d={svgPaths.p1dd99a80} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </VectorBackgroundImage>
                <VectorBackgroundImage>
                  <path d={svgPaths.p14d5a980} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </VectorBackgroundImage>
              </IconBackgroundImage>
            </div>
          </div>
        </div>
        <div className="absolute h-[472px] left-[591px] overflow-clip top-0 w-[590px]" data-name="RegionCard">
          <div className="absolute content-stretch flex flex-col h-[788px] items-start left-0 top-[78.76px] w-[591px]" data-name="Container">
            <div className="h-[945.055px] relative shrink-0 w-full" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
            </div>
          </div>
          <div className="absolute h-[787.556px] left-0 top-0 w-[590.667px]" data-name="Container" style={{ backgroundImage: "linear-gradient(126.87deg, rgba(96, 165, 250, 0.082) 0%, rgba(0, 0, 0, 0) 60%)" }} />
          <div className="absolute bg-gradient-to-b from-[#050510] h-[787.556px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[590.667px]" data-name="Container" />
          <ContainerBackgroundImageAndText text="02" additionalClassNames="left-[409.85px] w-[148.819px]" />
        </div>
      </div>
      <div className="h-[472px] relative shrink-0 w-[1182px]" data-name="Container">
        <div className="absolute h-[471.472px] left-[590.67px] top-[0.04px] w-[590.667px]" data-name="RegionCard">
          <div className="absolute h-[58.417px] left-[64px] top-[80px] w-[462.667px]" data-name="LineReveal" />
          <div className="absolute h-[61.333px] left-[64px] top-[144.03px] w-[361.333px]" data-name="Heading 2">
            <TextRevealBackgroundImageAndText text="Southern" additionalClassNames="left-0 w-[203.944px]" />
            <TextRevealBackgroundImageAndText text="Africa" additionalClassNames="left-[218.32px] w-[128.639px]" />
          </div>
          <div className="absolute h-[81px] left-[64px] top-[225.19px] w-[448px]" data-name="Paragraph">
            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[27px] left-0 text-[15px] text-[rgba(255,255,255,0.4)] top-[-0.44px] w-[398px]">Bridge continental gaps through strategic partnerships. Engage with executives actively shaping African financial markets — not passive attendees.</p>
          </div>
          <div className="absolute border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid h-[45.278px] left-[64px] top-[346.19px] w-[197.417px]" data-name="Button">
            <div className="absolute h-[19.5px] left-[24px] top-[12px] w-[119.639px]" data-name="RegionCard">
              <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] leading-[19.5px] left-[60px] not-italic text-[13px] text-[rgba(255,255,255,0.8)] text-center top-[-1.11px] tracking-[0.39px] whitespace-nowrap">Build Partnerships</p>
            </div>
            <div className="absolute content-stretch flex items-start left-[155.64px] size-[16px] top-[13.75px]" data-name="Text">
              <IconBackgroundImage>
                <VectorBackgroundImage>
                  <path d={svgPaths.p1dd99a80} id="Vector" stroke="var(--stroke-0, #A78BFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </VectorBackgroundImage>
                <VectorBackgroundImage>
                  <path d={svgPaths.p14d5a980} id="Vector" stroke="var(--stroke-0, #A78BFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </VectorBackgroundImage>
              </IconBackgroundImage>
            </div>
          </div>
        </div>
        <div className="absolute h-[472px] left-0 overflow-clip top-0 w-[591px]" data-name="RegionCard">
          <div className="absolute content-stretch flex flex-col h-[788px] items-start left-0 top-[78.76px] w-[591px]" data-name="Container">
            <div className="h-[945.056px] relative shrink-0 w-full" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
            </div>
          </div>
          <div className="absolute h-[787.556px] left-0 top-0 w-[590.667px]" data-name="Container" style={{ backgroundImage: "linear-gradient(126.87deg, rgba(167, 139, 250, 0.082) 0%, rgba(0, 0, 0, 0) 60%)" }} />
          <div className="absolute bg-gradient-to-b from-[#050510] h-[787.556px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[590.667px]" data-name="Container" />
          <ContainerBackgroundImageAndText text="03" additionalClassNames="left-[408.17px] w-[150.5px]" />
        </div>
      </div>
      <div className="h-[472px] relative shrink-0 w-full" data-name="Container">
        <div className="absolute h-[471.472px] left-0 top-[0.04px] w-[590.667px]" data-name="RegionCard">
          <div className="absolute h-[58.417px] left-[64px] top-[80px] w-[462.667px]" data-name="LineReveal" />
          <div className="absolute h-[61.333px] left-[64px] top-[144.03px] w-[281.722px]" data-name="Heading 2">
            <TextRevealBackgroundImageAndText text="North" additionalClassNames="left-0 w-[124.333px]" />
            <TextRevealBackgroundImageAndText text="Africa" additionalClassNames="left-[138.71px] w-[128.639px]" />
          </div>
          <div className="absolute h-[81px] left-[64px] top-[225.19px] w-[448px]" data-name="Paragraph">
            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[27px] left-0 text-[15px] text-[rgba(255,255,255,0.4)] top-[-0.44px] w-[436px]">Navigate compliance across diverse regulatory environments. Interactive sessions with financial authorities providing clarity on licensing and obligations.</p>
          </div>
          <div className="absolute border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid h-[45.278px] left-[64px] top-[346.19px] w-[218.139px]" data-name="Button">
            <div className="absolute h-[19.5px] left-[24px] top-[12px] w-[140.361px]" data-name="RegionCard">
              <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] leading-[19.5px] left-[70.5px] not-italic text-[13px] text-[rgba(255,255,255,0.8)] text-center top-[-1.11px] tracking-[0.39px] whitespace-nowrap">Navigate Regulations</p>
            </div>
            <div className="absolute content-stretch flex items-start left-[176.36px] size-[16px] top-[13.75px]" data-name="Text">
              <IconBackgroundImage>
                <VectorBackgroundImage>
                  <path d={svgPaths.p1dd99a80} id="Vector" stroke="var(--stroke-0, #FBBF24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </VectorBackgroundImage>
                <VectorBackgroundImage>
                  <path d={svgPaths.p14d5a980} id="Vector" stroke="var(--stroke-0, #FBBF24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </VectorBackgroundImage>
              </IconBackgroundImage>
            </div>
          </div>
        </div>
        <div className="absolute h-[472px] left-[591px] overflow-clip top-0 w-[590px]" data-name="RegionCard">
          <div className="absolute content-stretch flex flex-col h-[788px] items-start left-0 top-[78.76px] w-[591px]" data-name="Container">
            <div className="h-[945.056px] relative shrink-0 w-full" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
            </div>
          </div>
          <div className="absolute h-[787.556px] left-0 top-0 w-[590.667px]" data-name="Container" style={{ backgroundImage: "linear-gradient(126.87deg, rgba(251, 191, 36, 0.082) 0%, rgba(0, 0, 0, 0) 60%)" }} />
          <div className="absolute bg-gradient-to-b from-[#050510] h-[787.556px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[590.667px]" data-name="Container" />
          <ContainerBackgroundImageAndText text="04" additionalClassNames="left-[404.81px] w-[153.861px]" />
        </div>
      </div>
    </div>
  );
}