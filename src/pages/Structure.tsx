import { FC } from "react";
import { Link } from "react-router-dom";
import JourneyHero from "@/assets/image/journey-img.jpg";
import { structure } from "@/store/structure";

const Structure: FC = () => {
  return (
    <>
      <section className="relative h-screen">
        <img
          src={JourneyHero}
          alt=""
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="max-w-7xl mx-auto grid h-full w-full">
          <div className="z-10 grid place-items-center mb-80">
            <div className="">
              <h1 className="text-center scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-slate-50 mb-8">
                Structure
              </h1>

              <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6 text-xl text-slate-50">
                The company started as a community called "FICOS". This
                community had 7 members and was working in an Open Source
                development, and had not been secured by a legal entity when it
                was founded in 2009. In order to develop the company and intend
                to expand the market range, this community had become a legal
                company, and had changed the name as "PHICOS" in 2016. Phicos
                Group is a holding company which is focused on digital
                development and technology solutions for government
                institutions, goods and service providers, universities, and
                lifestyle industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-full">
        <div className="mx-auto h-full py-12 z-50 bg-white">
          <div className="max-w-7xl mx-auto">
            <hr className="mb-8" />

            <div className="grid grid-cols-4 gap-4">
              {structure.map((structure, index) => (
                <Link to={""}>
                  <div
                    // to={""}
                    key={index}
                    className="flex flex-col justify-between text-center gap-4 p-6 pb-2 border bg-white border-slate-100 rounded-2xl cardShadow group hover:bg-gradient-to-br hover:bg-phicos-primary transition-all ease-in duration-200"
                  >
                    <img
                      src={structure.img}
                      alt="softdev image"
                      className="w-30 h-30 float-right rounded-full filter hue-rotate-45 group-hover:grayscale-0"
                    />

                    <div className="flex flex-col flex-grow">
                      <h4 className="mb-2 font-medium group-hover:text-slate-50 text-xl text-phicos-primary">
                        {structure.title}
                      </h4>
                      <p className="mb-4 text-gray-400 group-hover:text-slate-50 text-sm leading-[150%]">
                        {structure.name}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Structure;
