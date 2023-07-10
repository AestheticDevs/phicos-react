import { FC } from "react";
import JourneyHero from '@/assets/image/journey-img.jpg';

const About: FC = () => {
  return (
    <>
      <section className="relative h-full">
        <img src={JourneyHero} alt="" className="h-[400px] w-full object-cover object-center fixed top-0 -z-10" />
        <div className="mx-auto h-full mt-[280px] py-16 z-50 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800 mb-8">A Brief Story</h2>
            <p className="leading-relaxed mb-8">The company started as a community called "FICOS". This community had 7 members and was working in an Open Source development, and had not been secured by a legal entity when it was founded in 2009. In order to develop the company and intend to expand the market range, this community had become a legal company, and had changed the name as "PHICOS" in 2016. Phicos Group is a holding company which is focused on digital development and technology solutions for government institutions, goods and service providers, universities, and lifestyle industries.</p>

            <hr className="mb-8" />

            <div className="grid grid-cols-2">
              <div>
                <h2 className="croll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">Vision</h2>
                <p>
                  Develop Information and Communication Technology to make the brilliant innovation and high quality.
                </p>
              </div>
              <div>
                <h2 className="croll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">Mission</h2>
                <p>
                  Actualizing real contribution in the field of information and communication technology, in a range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;