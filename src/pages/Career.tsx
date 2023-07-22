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
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="max-w-7xl mx-auto grid grid-cols-2 h-full w-full">
          <div className="z-10 grid place-items-center">
            <div className="">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
                Careers
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6 text-xl text-slate-50">
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

      <section className="bg-[#F8F8F8] relative">
        <div className="max-w-7xl mx-auto py-16 grid grid-cols-3">
          <div className="h-fit sticky top-32 col-span-1">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-8 leading-normal">
              Become a part of our big family to inspire and get inspired by{" "}
              <span className="bg-gradient-to-tr from-purple-500 via-blue-400 to-teal-400 bg-clip-text text-transparent font-extrabold">
                Professional Experts
              </span>
            </h2>
          </div>

          <div className="col-span-2">
            <CareerForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
