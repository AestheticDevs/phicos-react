import HeroImage from "@/assets/image/landing_page_hero.png";
import Overlay from "/bg-overlay.png";
import "../assets/css/global.css";

import { FC } from "react";
import { services } from "@/store/services";
import { Link } from "react-router-dom";
import { whyUs } from "@/store/why-us";
import { clientImg } from "@/store/clients";
import ImagePhicosGroup from "/image.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index: FC = () => {
  return (
    <>
      <section className="relative h-fit overflow-hidden bg-slate-900 lg:h-screen">
        <img
          src={Overlay}
          alt=""
          className="absolute left-0 top-0 z-0 h-full w-full object-cover opacity-5 mix-blend-luminosity"
        />

        <div className="ecplise z-2 absolute -bottom-10 left-0 right-0 mx-auto h-48 w-48 bg-phicos-primary blur-[200px]"></div>
        <div className="z-1 container relative grid min-h-[600px] grid-cols-1 items-center py-28 md:grid-cols-2">
          <img
            src={HeroImage}
            alt="hero image"
            className="order-1 my-auto ms-auto hidden md:block"
          />

          <div className="hero-gradient h-fit w-fit text-center md:text-start">
            {/* <p className=" relative mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-phicos-primary to-phicos-accent">
                            PHICOS GROUP
                        </p> */}
            <h1 className="mb-8 scroll-m-20 text-4xl font-extrabold leading-normal tracking-tight text-white lg:text-7xl">
              Ideas for Better
              <span className="bg-gradient-to-tl from-phicos-primary to-phicos-accent bg-clip-text text-transparent">
                {" "}
                Value
              </span>
            </h1>
            <div className="max-w-xl">
              {/* <hr className="border-b-2 border-slate-800 w-16" /> */}
              <p className="mb-8 mt-4 text-lg font-light text-white/80">
                Kami sepenuhnya berdedikasi untuk memberikan kontribusi dalam
                bidang IT. Bagikan ide-ide Anda kepada Phicos, dan Anda akan
                mendapatkan solusi terbaik dari kami.
              </p>
            </div>
            <button className="w-40 rounded-lg bg-gradient-to-tl from-phicos-primary to-phicos-accent px-4 py-4 text-white shadow-xl shadow-cyan-600/40 drop-shadow-xl transition-all duration-200 hover:-translate-y-1">
              Join Us
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative -mt-12 overflow-hidden rounded-t-[48px] bg-white py-10 lg:py-24">
        <img
          src="/texture.png"
          alt=""
          className="absolute left-0 top-0 z-0 h-full w-full object-cover opacity-60"
        />
        <div className="container relative mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-2 text-3xl font-semibold lg:text-4xl">
              Solutions for better innovation.
            </h2>
            {/* <p className="text-slate-700 mb-8 text-sm opacity-50">
                            We are a company with a full dedication to
                            contribute
                        </p> */}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                // to={""}
                key={index}
                className="cardShadow group  flex flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-6 pb-2 transition-all duration-200 ease-in hover:bg-phicos-primary hover:bg-gradient-to-br"
              >
                <div>
                  <h4 className="mb-2 text-xl font-medium text-phicos-primary group-hover:text-slate-50">
                    {service.title}
                  </h4>
                  <p className="text-sm leading-[150%] text-gray-400 group-hover:text-slate-50">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={""}
                    className="text-base font-bold text-slate-600 group-hover:text-white"
                  >
                    Read more
                  </Link>
                  <img
                    src={service.img}
                    alt="softdev image"
                    className="hue-rotate-45 float-right h-20 w-20 filter group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* / Services */}

      {/* Why us */}
      <section className="relative overflow-hidden bg-slate-900 py-16 lg:py-24 ">
        <div className="ecplise absolute -bottom-10 left-0 right-0 z-0 m-auto h-56 w-56 bg-phicos-accent/80 blur-[200px]"></div>
        <div className="z-1 container relative">
          <div className="mb-16 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-white   lg:text-4xl">
              Mengapa memilih{" "}
              <span className="bg-gradient-to-tr from-phicos-primary to-phicos-accent bg-clip-text text-transparent">
                Phicos Group?
              </span>{" "}
            </h2>
            {/* <p className="text-white mb-8 text-sm">
                            We are a company with a full dedication to
                            contribute
                        </p> */}
          </div>
          <div className="relative grid items-center gap-x-24 px-4 lg:grid-cols-2 lg:px-16">
            <div>
              <img
                src={ImagePhicosGroup}
                alt=""
                className="hidden h-full w-full lg:block"
              />
            </div>
            <div className="w-full">
              <ol className="list-decimal">
                {whyUs.map((item, i) => (
                  <li
                    key={i}
                    className="group relative mb-4 flex items-center rounded-md bg-white bg-opacity-5 p-3 ps-1 text-lg font-medium transition-transform duration-150 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-opacity-10 md:odd:me-14 md:even:ms-14"
                  >
                    <span className="relative -left-5 bottom-0 top-0 bg-gradient-to-tr from-phicos-primary to-phicos-accent bg-clip-text text-5xl font-extrabold text-transparent shadow-phicos-primary">
                      {i + 1}
                    </span>
                    <p className="text-base  text-slate-300 group-hover:text-slate-100">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* / Why us */}

      {/* About Us */}
      <section className="relative flex h-fit flex-col overflow-hidden bg-phicos-primary md:h-[400px] md:flex-row">
        <div className="relative h-full w-full md:w-2/5">
          <img
            src="https://plus.unsplash.com/premium_photo-1677529494239-682591edd525?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover saturate-0"
          />
          <div className="absolute top-0 h-full w-full bg-phicos-primary/10 mix-blend-color"></div>
        </div>
        <div className="flex w-full flex-col justify-center p-8 md:w-3/5 md:p-16">
          <div className="mb-4">
            <h2 className="text-4xl font-semibold text-slate-800">
              Our Experience Gives You Evidence.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-800/80">
            Phicos Group unggul karena telah menjaring puluhan instansi, baik
            Pemerintah, Swasta, maupun Daerah. Kami terbukti telah memberikan
            solusi terbaik kepada klien kami, dan kami akan selalu memberikan
            dedikasi penuh untuk menyelesaikan permasalahan bisnis Anda.
          </p>
        </div>
      </section>
      {/* / About Us */}

      {/* Overview */}
      <section className="relative flex h-fit flex-col overflow-hidden bg-slate-900 md:h-[400px] md:flex-row">
        <div className="relative h-full w-full md:order-2 md:w-2/5">
          <img
            src="https://plus.unsplash.com/premium_photo-1677529494239-682591edd525?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover saturate-0"
          />
          <div className="absolute top-0 h-full w-full bg-slate-500 mix-blend-color"></div>
        </div>
        <div className="flex w-full flex-col justify-center p-8 md:w-3/5 md:p-16">
          <div className="mb-4">
            <h2 className="text-4xl font-semibold text-white">Overview </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Phicos Group adalah perusahaan yang berdedikasi penuh untuk
            berkontribusi dalam bidang IT, Komunikasi, dan masalah bisnis
            lainnya. Dengan fokus utama pada inovasi teknologi dan komitmen
            terhadap keunggulan, Phicos Group datang dengan solusi-solusi yang
            mendukung perkembangan dan transformasi digital.
          </p>
        </div>
      </section>
      {/* / Overview */}

      {/* Berita */}
      <section className="center">
        <div className="">
          <div className="container-fluid mb-5 h-fit pt-8 text-start md:h-[300px] md:pt-20 lg:bg-slate-200">
            <h2 className="title mb-2 text-center font-semibold text-phicos-primary">
              <span className="bg-gradient-to-tr from-phicos-primary to-phicos-accent bg-clip-text text-3xl text-transparent md:text-4xl">
                Berita
              </span>{" "}
            </h2>
            {/* <p className="text-slate-700 mb-8 text-sm opacity-50">
                            We are a company with a full dedication to
                            contribute
                        </p> */}
          </div>

          {/* DISPLAY Desktop */}
          <div className="hidden md:block">
            <div className="container relative -top-28 grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-white p-5 shadow-xl shadow-slate-300/40"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1714182356074-99c7c843e197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="mb-3 h-48 w-full object-cover"
                    />
                    <div className="mb-1 flex items-center gap-1 py-1 text-sm text-slate-400">
                      <Calendar height={14} />
                      <span>20 Januari 2022</span>
                    </div>
                    <div>
                      <h4 className="mb-2 line-clamp-2 text-lg font-bold text-slate-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, iusto.
                      </h4>
                      <p className="line-clamp-4 text-base opacity-60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo dolore enim nulla eos fuga similique
                        voluptate, quam natus! Tempora, quas tenetur! Sit, iste
                        dicta.
                      </p>
                      <a
                        href=""
                        className="mt-3 block text-sm font-bold text-phicos-primary"
                      >
                        Selengkapnya
                      </a>
                    </div>
                  </div>
                ))}
            </div>
            <div className="container text-center">
              <Button className="rounded-full bg-gradient-to-tr from-phicos-primary to-phicos-accent px-8">
                Lihat semua
              </Button>
            </div>
          </div>
          {/* / DISPLAY Desktop */}

          {/* DISPLAY Mobile */}
          <div className="container block md:hidden">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1714182356074-99c7c843e197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="mb-3 h-48 w-full object-cover"
                  />
                  <div className="mb-1 flex items-center gap-1 py-1 text-sm text-slate-400">
                    {/* &#x2022; */}
                    <Calendar height={14} />
                    <span>20 Januari 2022</span>
                  </div>
                  <div>
                    <h4 className="mb-2 line-clamp-2 text-lg font-bold text-slate-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id, iusto.
                    </h4>
                    <p className="line-clamp-4 text-base opacity-60">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo dolore enim nulla eos fuga similique voluptate,
                      quam natus! Tempora, quas tenetur! Sit, iste dicta.
                    </p>
                    <a
                      href=""
                      className="mt-3 block text-sm font-bold text-phicos-primary"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1714182356074-99c7c843e197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="mb-3 h-48 w-full object-cover"
                  />
                  <div className="mb-1 flex items-center gap-1 py-1 text-sm text-slate-400">
                    {/* &#x2022; */}
                    <Calendar height={14} />
                    <span>20 Januari 2022</span>
                  </div>
                  <div>
                    <h4 className="mb-2 line-clamp-2 text-lg font-bold text-slate-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id, iusto.
                    </h4>
                    <p className="line-clamp-4 text-base opacity-60">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo dolore enim nulla eos fuga similique voluptate,
                      quam natus! Tempora, quas tenetur! Sit, iste dicta.
                    </p>
                    <a
                      href=""
                      className="mt-3 block text-sm font-bold text-phicos-primary"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1714182356074-99c7c843e197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="mb-3 h-48 w-full object-cover"
                  />
                  <div className="mb-1 flex items-center gap-1 py-1 text-sm text-slate-400">
                    {/* &#x2022; */}
                    <Calendar height={14} />
                    <span>20 Januari 2022</span>
                  </div>
                  <div>
                    <h4 className="mb-2 line-clamp-2 text-lg font-bold text-slate-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id, iusto.
                    </h4>
                    <p className="line-clamp-4 text-base opacity-60">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo dolore enim nulla eos fuga similique voluptate,
                      quam natus! Tempora, quas tenetur! Sit, iste dicta.
                    </p>
                    <a
                      href=""
                      className="mt-3 block text-sm font-bold text-phicos-primary"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* / DISPLAY Mobile */}
        </div>
      </section>
      {/* / Berita */}

      {/* Clients */}
      <section className="relative overflow-hidden py-24">
        <div className="container relative mx-auto">
          <div className="mb-16 text-center md:text-start">
            <h2 className="mb-2 text-3xl font-semibold md:text-4xl">
              Our{" "}
              <span className="bg-gradient-to-tr from-phicos-primary to-phicos-accent bg-clip-text text-transparent">
                Clients
              </span>{" "}
            </h2>
            <p className="mb-8 text-sm text-slate-700 opacity-50">
              We are a company with a full dedication to contribute
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-5 md:gap-16">
            {clientImg.slice(0, 9).map((client, index) => (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger key={index} className="group cursor-pointer">
                    <div>
                      <img
                        src={client.src}
                        alt={client.title}
                        className="aspect-square h-20 w-full bg-center object-contain grayscale filter transition-all ease-in group-hover:grayscale-0 md:h-32"
                      />
                    </div>

                    <TooltipContent>
                      <p className="text-sm font-normal">{client.title}</p>
                    </TooltipContent>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            ))}

            <Link
              to={""}
              className="mx-auto flex aspect-square h-24 w-24 flex-col items-center justify-center rounded-lg bg-gradient-to-tr from-phicos-primary to-phicos-accent p-4 hover:bg-slate-700 md:w-full"
            >
              <span className="text-center text-sm font-medium text-white">
                Lihat semua client
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* / Clients */}
    </>
  );
};

export default Index;
