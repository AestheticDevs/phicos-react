import HeroImage from "@/assets/image/landing_page_hero.png";
import "../assets/css/global.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FC } from "react";
import { services } from "@/store/services";

const clientImg = [
  {
    src: "https://phicos.co.id/uploads/images/client/e5d08ba6589d085b31232e744e1c47f9.png",
    title: "Blora",
  },
  {
    src: "https://phicos.co.id/uploads/images/client/fc982e9e336c70f12deb0c94107af9ac.png",
    title: "Wonogiri",
  },
  {
    src: "https://phicos.co.id/uploads/images/client/c0ba4c8db875e67a8b64c5db362d6929.png",
    title: "Tasik Malaya",
  },
  {
    src: "https://phicos.co.id/uploads/images/client/9323d07a29262d268bea65760b5e06b7.png",
    title: "Lampung Barat",
  },
  {
    src: "https://phicos.co.id/uploads/images/client/b64c0f197588c3b23978f7389d541916.png",
    title: "Boyolali",
  },
  {
    src: "https://phicos.co.id/uploads/images/client/c05eafe917beec7e96b3f06aa09af55c.png",
    title: "Kemendikbud",
  },
  {
    src: "https://phicos.co.id/uploads/images/client/0cac85092e95b36954a53c1186c6eab7.png",
    title: "Sukoharjo",
  },
  {
    src: "https://phicos.co.id/uploads/images/client/3beb567acbc18e2b00b8276b80e3358d.png",
    title: "Gunung kidul",
  },
  {
    src: "https://phicos.co.id/uploads/images/client/36044f10a03ad9b9abd7bb4d858dd328.png",
    title: "Kota Surakarta",
  },
];

const Index: FC = () => {
  return (
    <>
      <section className="">
        <div className="grid grid-cols-2 min-h-[600px] py-28 container mx-auto ">
          <img src={HeroImage} alt="hero image" className="my-auto mx-auto" />
          <div className="w-fit text-start hero-gradient">
            <h1 className="scroll-m-20 font-extrabold tracking-tight text-slate-800 text-8xl mb-8">
              Trust Your{" "}
              <span className="bg-gradient-to-tl from-phicos-primary to-phicos-accent text-transparent bg-clip-text">
                Idea
              </span>{" "}
              to Us!
            </h1>
            <div className="max-w-xl">
              <hr className="border-b-2 border-slate-800 w-16" />
              <p className="leading-7 mt-4 text-slate-600 mb-8 text-xl ">
                We are a company with a full dedication to contribute ourselves
                in IT, Communication, and any other business problems. Share
                your ideas to Phicos, and you will get satisfaction from our
                best solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24  bg-slate-50">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">
              Our Services
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-slate-700 mb-8">
              We are a company with a full dedication to contribute
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="gap-8 p-8 border bg-white border-slate-100 rounded-2xl cardShadow group hover:border-gray-200 hover:bg-gradient-to-br from-phicos-primary to-phicos-accent"
              >
                <div className="bg-black/5 w-fit rounded-lg transition">
                  <img
                    src={service.img}
                    alt="softdev image"
                    className="w-20 h-20 mb-6"
                  />
                </div>
                <div>
                  <h4 className="mb-4 font-medium text-slate-800 group-hover:text-slate-50 text-xl">
                    {service.title}
                  </h4>
                  <p className="text-slate-700 group-hover:text-slate-50">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-8">
              Companies we work with
            </h2>
            <p className="text-slate-700">
              Here are some of the outstanding organizations we have had the
              privilege to work with
            </p>
          </div>
          <div>
            <Swiper
              spaceBetween={100}
              slidesPerView={6}
              grabCursor={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {clientImg.map((client, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={client.src}
                      alt="kemendikbud"
                      className="w-full aspect-square object-contain bg-center"
                    />
                    <span className="text-slate-600">{client.title}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
