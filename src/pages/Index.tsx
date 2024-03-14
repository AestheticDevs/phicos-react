import HeroImage from "@/assets/image/landing_page_hero.png";
import "../assets/css/global.css";
import "swiper/css";
import "swiper/css/pagination";
import { FC } from "react";
import { services } from "@/store/services";
import { Link } from "react-router-dom";
import { whyUs } from "@/store/why-us";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

const clientImg = [
    {
        src: "https://phicos.co.id/uploads/images/client/e5d08ba6589d085b31232e744e1c47f9.png",
        title: "Blora"
    },
    {
        src: "https://phicos.co.id/uploads/images/client/fc982e9e336c70f12deb0c94107af9ac.png",
        title: "Wonogiri"
    },
    {
        src: "https://phicos.co.id/uploads/images/client/c0ba4c8db875e67a8b64c5db362d6929.png",
        title: "Tasikmalaya"
    },
    {
        src: "https://phicos.co.id/uploads/images/client/9323d07a29262d268bea65760b5e06b7.png",
        title: "Lampung Barat"
    },
    {
        src: "https://phicos.co.id/uploads/images/client/b64c0f197588c3b23978f7389d541916.png",
        title: "Boyolali"
    },
    {
        src: "https://phicos.co.id/uploads/images/client/c05eafe917beec7e96b3f06aa09af55c.png",
        title: "Kemendikbud"
    },
    {
        src: "https://phicos.co.id/uploads/images/client/0cac85092e95b36954a53c1186c6eab7.png",
        title: "Sukoharjo"
    },
    {
        src: "https://phicos.co.id/uploads/images/client/3beb567acbc18e2b00b8276b80e3358d.png",
        title: "Gunung kidul"
    },
    {
        src: "https://phicos.co.id/uploads/images/client/36044f10a03ad9b9abd7bb4d858dd328.png",
        title: "Kota Surakarta"
    }
];

const Index: FC = () => {
    return (
        <>
            <section className="bg-slate-900 relative overflow-hidden h-screen">
                <img
                    src="/public/bg-overlay.png"
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover mix-blend-luminosity z-0 opacity-5"
                />

                <div className="ecplise w-48 h-48 right-0 left-0 mx-auto -bottom-10 blur-[200px] bg-phicos-primary z-2 absolute"></div>
                <div className="grid grid-cols-2 min-h-[600px] py-28 container mx-auto items-center relative z-1">
                    <img
                        src={HeroImage}
                        alt="hero image"
                        className="my-auto ms-auto order-1"
                    />

                    <div className="w-fit h-fit text-start hero-gradient">
                        {/* <p className=" relative mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-phicos-primary to-phicos-accent">
                            PHICOS GROUP
                        </p> */}
                        <h1 className="scroll-m-20 font-extrabold tracking-tight text-white text-7xl mb-8">
                            Ideas for Better
                            <span className="bg-gradient-to-tl from-phicos-primary to-phicos-accent text-transparent bg-clip-text">
                                {" "}
                                Value
                            </span>
                        </h1>
                        <div className="max-w-xl">
                            {/* <hr className="border-b-2 border-slate-800 w-16" /> */}
                            <p className="mt-4 text-white mb-8 text-lg opacity-70 font-light">
                                Kami sepenuhnya berdedikasi untuk memberikan
                                kontribusi dalam bidang IT. Bagikan ide-ide Anda
                                kepada Phicos, dan Anda akan mendapatkan solusi
                                terbaik dari kami.
                            </p>
                        </div>
                        <button className="py-4 px-4 w-40 text-white bg-gradient-to-tl from-phicos-primary to-phicos-accent rounded-lg drop-shadow-xl transition-all hover:-translate-y-1 duration-200 shadow-xl shadow-cyan-600/40">
                            Join Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 relative rounded-t-[48px] overflow-hidden -mt-12 bg-white">
                <img
                    src="/texture.png"
                    alt=""
                    className="absolute top-0 left-0 z-0 w-full h-full object-cover opacity-60"
                />
                <div className="container mx-auto relative">
                    <div className="mb-16 text-center">
                        <h2 className="title font-semibold mb-2">
                            Solutions for better innovation.
                        </h2>
                        {/* <p className="text-slate-700 mb-8 text-sm opacity-50">
                            We are a company with a full dedication to
                            contribute
                        </p> */}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div
                                // to={""}
                                key={index}
                                className="flex flex-col  justify-between gap-4 p-6 pb-2 border bg-white border-slate-100 rounded-2xl cardShadow group hover:bg-gradient-to-br hover:bg-phicos-primary transition-all ease-in duration-200"
                            >
                                <div>
                                    <h4 className="mb-2 font-medium group-hover:text-slate-50 text-xl text-phicos-primary">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-400 group-hover:text-slate-50 text-sm leading-[150%]">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <Link
                                        to={""}
                                        className="text-base font-bold text-slate-600 group-hover:text-white"
                                    >
                                        Read more
                                    </Link>
                                    <img
                                        src={service.img}
                                        alt="softdev image"
                                        className="w-20 h-20 float-right filter hue-rotate-45 group-hover:grayscale-0"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* / Services */}

            {/* Why us */}
            <section className="py-24 bg-slate-900 relative overflow-hidden ">
                <div className="ecplise w-56 h-56 right-0 left-0 m-auto -bottom-10 blur-[200px] bg-phicos-accent/80 z-0 absolute"></div>
                <div className="container relative z-1">
                    <div className="text-center mb-16">
                        <h2 className="title font-semibold mb-2   text-white">
                            Mengapa memilih{" "}
                            <span className="bg-clip-text bg-gradient-to-tr from-phicos-primary to-phicos-accent text-transparent">
                                Phicos Group?
                            </span>{" "}
                        </h2>
                        {/* <p className="text-white mb-8 text-sm">
                            We are a company with a full dedication to
                            contribute
                        </p> */}
                    </div>
                    <div className="grid grid-cols-2 items-center gap-x-24">
                        <div>
                            <img
                                src="/public/image.png"
                                alt=""
                                className="h-full w-full"
                            />
                        </div>
                        <div className="w-full">
                            <ol className="list-decimal">
                                {whyUs.map((item, i) => (
                                    <li
                                        key={i}
                                        className="mb-4 group odd:me-14 even:ms-14 relative text-lg p-3 ps-1 font-medium rounded-md bg-white bg-opacity-5 hover:bg-opacity-10 hover:scale-105 hover:cursor-pointer transition-transform duration-150 ease-in-out flex items-center"
                                    >
                                        <span className="relative -left-5 font-extrabold text-5xl bg-clip-text bg-gradient-to-tr from-phicos-primary to-phicos-accent text-transparent top-0 bottom-0 shadow-phicos-primary">
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
            <section className="bg-phicos-primary relative overflow-hidden flex h-[400px]">
                <div className=" w-2/5 h-full">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1677529494239-682591edd525?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="w-3/5 p-16 flex flex-col justify-center">
                    <div className="mb-4">
                        <div>
                            <p className="text-slate-700 mb-3 text-sm font-bold rounded-md uppercase">
                                About Us{" "}
                            </p>
                        </div>
                        <h2 className="text-3xl font-semibold text-white">
                            Our Experience Gives You Evidence.
                        </h2>
                    </div>
                    <p className="text-white">
                        Phicos Group unggul karena telah menjaring puluhan
                        instansi, baik Pemerintah, Swasta, maupun Daerah. Kami
                        terbukti telah memberikan solusi terbaik kepada klien
                        kami, dan kami akan selalu memberikan dedikasi penuh
                        untuk menyelesaikan permasalahan bisnis Anda.
                    </p>
                </div>
            </section>
            {/* / About Us */}

            {/* Overview */}
            <section className="bg-slate-800 relative overflow-hidden flex h-[400px]">
                <div className=" w-2/5 h-full order-2">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1677529494239-682591edd525?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="w-3/5 p-16 flex flex-col justify-center">
                    <div className="mb-4">
                        <h2 className="text-3xl font-semibold text-white">
                            Overview{" "}
                        </h2>
                    </div>
                    <p className="text-white/75">
                        Phicos Group adalah perusahaan yang berdedikasi penuh
                        untuk berkontribusi dalam bidang IT, Komunikasi, dan
                        masalah bisnis lainnya. Dengan fokus utama pada inovasi
                        teknologi dan komitmen terhadap keunggulan, Phicos Group
                        datang dengan solusi-solusi yang mendukung perkembangan
                        dan transformasi digital.
                    </p>
                </div>
            </section>
            {/* / Overview */}

            {/* Clients */}
            <section className="py-24 overflow-hidden relative">
                <div className="container mx-auto relative">
                    <div className="mb-16 text-start">
                        <h2 className="title font-semibold mb-2">
                            Our Happy Clients{" "}
                        </h2>
                        <p className="text-slate-700 mb-8 text-sm opacity-50">
                            We are a company with a full dedication to
                            contribute
                        </p>
                    </div>
                    <div className="grid grid-cols-5 gap-16 items-center">
                        {clientImg.slice(0, 9).map((client, index) => (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger
                                        key={index}
                                        className="group cursor-pointer"
                                    >
                                        <div>
                                            <img
                                                src={client.src}
                                                alt={client.title}
                                                className="w-full h-36 aspect-square object-contain bg-center transition-all ease-in filter grayscale group-hover:grayscale-0"
                                            />
                                        </div>

                                        <TooltipContent>
                                            <p className="text-sm font-normal">
                                                {client.title}
                                            </p>
                                        </TooltipContent>
                                    </TooltipTrigger>
                                </Tooltip>
                            </TooltipProvider>
                        ))}

                        <Link
                            to={""}
                            className="w-full h-24 mx-auto aspect-square bg-gradient-to-tr p-4 from-phicos-primary to-phicos-accent flex items-center justify-center rounded-lg "
                        >
                            <span className="text-white text-center whitespace-nowrap`">
                                Lihat semua client
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill=""
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 ms-2 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            {/* / Clients */}
        </>
    );
};

export default Index;
