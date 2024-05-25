import { FC } from "react";
import JourneyHero from "@/assets/image/journey-img.jpg";

const About: FC = () => {
  return (
    <>
      <section className="relative h-full">
        <img
          src={JourneyHero}
          alt=""
          className="fixed top-0 -z-10 h-[500px] w-full object-cover object-center"
        />
        <div className="z-50 mx-auto mt-[400px] h-full bg-white py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-slate-800 lg:text-5xl">
              A Brief Story
            </h2>

            <p className="mb-8 text-center leading-relaxed">
              The company started as a community called <b>"FICOS"</b>. This
              community had 7 members and was working in an Open Source
              development, and had not been secured by a legal entity when it
              was founded in 2009. In order to develop the company and intend to
              expand the market range, this community had become a legal
              company, and had changed the name as <b>"PHICOS"</b> in 2016.
              Phicos Group is a holding company which is focused on digital
              development and technology solutions for government institutions,
              goods and service providers, universities, and lifestyle
              industries.
            </p>

            <hr className="mb-8" />

            <div className="grid grid-cols-2 text-center">
              <div>
                <h2 className="croll-m-20 mb-4 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Vision
                </h2>
                <p>
                  Develop Information and Communication Technology to make the
                  brilliant innovation and high quality.
                </p>
              </div>
              <div>
                <h2 className="croll-m-20 mb-4 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Mission
                </h2>
                <p>
                  Actualizing real contribution in the field of information and
                  communication technology, in a range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
