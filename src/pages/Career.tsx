import CareerHero from "@/assets/image/careers_page_hero.png";
import CareerForm from "@/components/career-form";
import { FC } from "react";

const Career: FC = () => {
  return (
    <>
      <section className="relative h-screen">
        <img
          src={CareerHero}
          alt=""
          className="absolute left-0 top-0 h-full w-full"
        />
        <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-2">
          <div className="z-10 grid place-items-center">
            <div className="">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                Careers
              </h1>
              <p className="mb-6 text-xl leading-7 text-slate-50 [&:not(:first-child)]:mt-6">
                Education is everything for Phicos. Just like diamonds, you
                collect and sharpen them to make them glow perfectly. And just
                like those diamonds, we only collect people who want to be
                sharpened by education and knowledge to glow brilliantly,
                together with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F8F8F8]">
        <div className="mx-auto max-w-7xl py-16">
          <div className="h-fit">
            <h2 className="mb-8 scroll-m-20 pb-2 text-3xl font-semibold leading-normal tracking-tight transition-colors first:mt-0">
              Become a part of our big family to inspire and get inspired by{" "}
              <span className="bg-gradient-to-tr from-purple-500 via-blue-400 to-teal-400 bg-clip-text font-extrabold text-transparent">
                Professional Experts
              </span>
            </h2>
          </div>

          <div>
            <CareerForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
