import HeroImage from "@/assets/image/landing_page_hero.png";
import SoftDev from "@/assets/image/sofdev.png";
import '../assets/css/global.css'
import ClientImg from '@/assets/image/kemendikbud_logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { FC } from "react";
const Index: FC = () => {

  return (
    <>
      <section className="grid grid-cols-2  h-[600px] max-w-7xl container mx-auto">
        <div
          className="w-fit text-start my-auto"
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  bg-gradient-to-tr from-purple-500 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Trust Your Idea to Us!
          </h1>
          <p
            className="leading-7 [&:not(:first-child)]:mt-6 text-slate-800 mb-6 text-xl"
          >
            We are a company with a full dedication to contribute ourselves in IT, Communication, and any other business problems. Share your ideas to Phicos, and you will get satisfaction from our best solutions.
          </p>
          <div className="flex gap-4 mx-auto">
            <Button variant={"default"} size={"lg"} className="rounded-full">Get Started</Button>
            <Button variant={"secondary"} size={"lg"} className="rounded-full">Learn More</Button>
          </div>
        </div>
        <div className="my-auto ml-auto">
          <img src={HeroImage} alt="hero mage" className="ml-auto" />
        </div>
      </section >

      <section className="py-16  bg-slate-50">
        <div className="container max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">Our Services</h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-slate-700 mb-8">
              We are a company with a full dedication to contribute
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="gap-8 p-8 border bg-white border-slate-100 rounded-2xl cardShadow hover:bg-gradient-to-tr from-purple-500 via-blue-400 to-teal-400 group">
                <img src={SoftDev} alt="softdev image" className="w-20 h-20 mb-6" />
                <div>
                  <h4 className="mb-4 font-medium text-slate-800 text-xl group-hover:text-white">Software Development</h4>
                  <p className="text-slate-700 group-hover:text-white">Provides development and support to information systems, based on the needs collected and documented by the system analyst.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-8">Companies we work with</h2>
            <p className="text-slate-700 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <Swiper
              spaceBetween={100}
              slidesPerView={6}
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
            >
              {[...Array(10)].map((_, index) => (
                <SwiperSlide key={index}>
                  <img src={ClientImg} alt="kemendikbud" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;