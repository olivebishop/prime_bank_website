import Image from "next/image";
import GrainOverlay from "@/components/shared/grainOverlay";

export default function PageHero({
  defaultText,
  specialText,
  extraText,
  imageSrc,
  alt,
}: IPageProps) {
  return (
    <section className="relative w-full bg-slate-900 overflow-hidden">
      <GrainOverlay/>
      {/* Background Vector */}
      <Image
        src="/images/vector3.png"
        alt="Vector"
        width={248}
        height={248}
        className="absolute -top-2.5 right-0 z-0"
      />
      
      {/* Container with same max-width as navbar/footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex max-lg:flex-col-reverse items-center lg:items-start justify-between py-8 lg:py-16 gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="flex-1 lg:flex-shrink-0 lg:max-w-2xl">
            <div className="bg-grey-10 p-6 sm:p-8 lg:p-12 xl:p-16 rounded-2xl lg:rounded-tl-[20px] lg:rounded-bl-[20px] lg:rounded-br-[80px]">
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-left">
                  <span className="text-white">{defaultText} </span>
                  <span className="text-blue-400">{specialText}</span>
                  {extraText && <span className="text-white"> {extraText}</span>}
                </h1>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex-shrink-0 lg:flex-1 lg:max-w-2xl">
            <Image
              src={imageSrc}
              alt={alt}
              width={968}
              height={716}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface IPageProps {
  defaultText: string;
  specialText: string;
  extraText?: string;
  description: string;
  imageSrc: string;
  alt: string;
}
