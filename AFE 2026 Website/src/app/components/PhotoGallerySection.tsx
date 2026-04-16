import imgPhoto1 from "figma:asset/a1d3fa3396342702ba6d56924fe7d95c81d4ddb2.png";
import imgPhoto2 from "figma:asset/17bd7d7f3b8306eeb750daff1ad3dd9f1491527f.png";
import imgPhoto3 from "figma:asset/5e9aaec391017604748c34102a381717922fd947.png";
import imgPhoto4 from "figma:asset/53a344e9a3892a1a7c6fb749b61132328d9ce7b0.png";
import imgPhoto5 from "figma:asset/0145ba23a13d45ffeb1144912517c8bf3081df0a.png";
import imgPhoto6 from "figma:asset/cbfb0d48062a613e9cd0090a001f4737e1b89299.png";
import imgPhoto7 from "figma:asset/9036c75fee875e798083a536e86e8d00f5fa61c0.png";
import imgPhoto8 from "figma:asset/61d14ff28b350a182cc5ec6834509ac1105cd26d.png";
import imgPhoto9 from "figma:asset/d302a5c354f049f4068afb00411bf59158dd2bc2.png";
import imgPhoto10 from "figma:asset/ea77b2450c2c07ee727e4baa8c42bf03ea958512.png";
import imgPhoto11 from "figma:asset/ff4729844057b0df8b944b66466a9edae2f65b2c.png";

const col1Photos = [imgPhoto1, imgPhoto4, imgPhoto7, imgPhoto10];
const col2Photos = [imgPhoto2, imgPhoto5, imgPhoto8, imgPhoto11];
const col3Photos = [imgPhoto3, imgPhoto6, imgPhoto9];

function PhotoCard({ src, idx }: { src: string; idx: number }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shrink-0">
      <img
        src={src}
        alt={`Event photo ${idx + 1}`}
        className="w-full h-[280px] object-cover"
      />
    </div>
  );
}

export function PhotoGallerySection() {
  return (
    <section className="bg-[#0e0e1c] py-20 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2.5 text-center items-center">
          <span className="text-[#e30071] text-[15px] font-['Inter',sans-serif] tracking-[-0.2px]">
            Gallery
          </span>
          <h2 className="font-['Inter',sans-serif] font-semibold text-white text-[36px] md:text-[56px] leading-[1.15] tracking-[-3px]">
            Africa Financial Week
            <br />
            in Photos.
          </h2>
        </div>

        <div className="flex gap-3 h-[500px] lg:h-[700px] overflow-hidden">
          {/* Left column - scrolls UP */}
          <div
            className="flex-1 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="flex flex-col gap-3 animate-[galleryUp_20s_linear_infinite]">
              {[...Array(3)].map((_, setIdx) =>
                col1Photos.map((photo, i) => (
                  <PhotoCard key={`c1-${setIdx}-${i}`} src={photo} idx={i} />
                ))
              )}
            </div>
          </div>

          {/* Middle column - scrolls DOWN */}
          <div
            className="flex-1 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="flex flex-col gap-3 animate-[galleryDown_20s_linear_infinite]">
              {[...Array(3)].map((_, setIdx) =>
                col2Photos.map((photo, i) => (
                  <PhotoCard key={`c2-${setIdx}-${i}`} src={photo} idx={i} />
                ))
              )}
            </div>
          </div>

          {/* Right column - scrolls UP */}
          <div
            className="flex-1 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="flex flex-col gap-3 animate-[galleryUp_22s_linear_infinite]">
              {[...Array(4)].map((_, setIdx) =>
                col3Photos.map((photo, i) => (
                  <PhotoCard key={`c3-${setIdx}-${i}`} src={photo} idx={i} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes galleryUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.333%); }
        }
        @keyframes galleryDown {
          0% { transform: translateY(-33.333%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}