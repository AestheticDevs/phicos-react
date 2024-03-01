import HeroImage from "@/assets/image/landing_page_hero.png";
import "../assets/css/global.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FC } from "react";
import { services } from "@/store/services";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { whyUs } from "@/store/why-us";

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
        title: "Tasik Malaya"
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
            <section className="bg-slate-900 relative overflow-hidden">
                {/* <img
                    src="https://img.freepik.com/free-vector/moire-pattern-background_53876-80499.jpg?t=st=1709173591~exp=1709177191~hmac=00f37dd583b675a8927539d745ee9a699fae4f51a585991de4ef2579b3dd3c17&w=1060"
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover mix-blend-luminosity z-0 opacity-5"
                /> */}
                <div className="grid grid-cols-2 min-h-[600px] py-28 container mx-auto items-center relative z-1">
                    <img
                        src={HeroImage}
                        alt="hero image"
                        className="my-auto ms-auto order-1"
                    />

                    <div className="w-fit h-fit text-start hero-gradient">
                        <p className=" relative mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-phicos-primary to-phicos-accent">
                            PHICOS GROUP
                        </p>
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
                        <button className="py-4 px-4 w-40 text-white bg-gradient-to-tl from-phicos-primary to-phicos-accent rounded-lg drop-shadow-xl transition-all hover:-translate-y-1 duration-200">
                            Join Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24  bg-slate-50">
                <div className="container mx-auto">
                    <div className="mb-24 text-center">
                        <h2 className="title font-semibold mb-2">
                            Solutions for better innovation.
                        </h2>
                        <p className="text-slate-700 mb-8 text-sm opacity-50">
                            We are a company with a full dedication to
                            contribute
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div
                                // to={""}
                                key={index}
                                className="flex flex-col  justify-between gap-4 p-6 border bg-white border-slate-100 rounded-2xl cardShadow group hover:bg-gradient-to-br hover:bg-phicos-primary transition-all ease-in duration-200"
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
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="container">
                    <div className="text-center mb-24">
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
                    <div className="grid grid-cols-2 gap-48 items-center">
                        <div className="w-full border">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full">
                            <ol className="list-decimal">
                                {whyUs.map((item, i) => (
                                    <li
                                        key={i}
                                        className="mb-4 group odd:me-14 even:ms-14 relative text-lg p-4  font-medium rounded-md bg-white bg-opacity-5 hover:bg-opacity-10 hover:scale-105 hover:cursor-pointer transition-transform duration-150 ease-in-out flex items-center"
                                    >
                                        <span className="relative -left-8 font-extrabold text-5xl bg-clip-text bg-gradient-to-tr from-phicos-primary to-phicos-accent text-transparent top-0 bottom-0 shadow-phicos-primary">
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

            {/* Clients */}
            <section className="py-24">
                <div className="container mx-auto">
                    <div className="mb-16 text-start">
                        <h2 className="title font-semibold mb-2">
                            Solutions for better innovation.
                        </h2>
                        <p className="text-slate-700 mb-8 text-sm opacity-50">
                            We are a company with a full dedication to
                            contribute
                        </p>
                    </div>
                    <div className="grid grid-cols-5 gap-16 items-center">
                        {clientImg.slice(0, 9).map((client, index) => (
                            <div key={index} className="group">
                                <div className="">
                                    <img
                                        src={client.src}
                                        alt="kemendikbud"
                                        className="w-full h-36 aspect-square object-contain bg-center transition-all ease-in filter grayscale group-hover:grayscale-0"
                                    />
                                    {/* <span className="text-slate-600">
                                        {client.title}
                                    </span> */}
                                </div>
                            </div>
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
