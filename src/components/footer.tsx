import {
    FacebookIcon,
    InstagramIcon,
    Mail,
    Phone,
    YoutubeIcon
} from "lucide-react";
import PhicosLogo from "@/assets/logo/phicos_logo.png";

const Footer = () => {
    return (
        <footer>
            <div className="bg-slate-900 relative overflow-hidden">
                <img
                    src="/patterns.png"
                    className="w-full h-full object-cover absolute left-0 top-0 opacity-5 saturate-0 hidden md:block"
                    alt=""
                />
                <div className="container mx-auto py-16 flex flex-col md:flex-row gap-8 relative">
                    <div className="w-full md:w-2/3">
                        <div>
                            <img
                                src={PhicosLogo}
                                alt=""
                                className="mb-4 h-20 object-contain object-center"
                            />
                            <p className="text-white/80 w-full md:w-3/4">
                                We are a company with a full dedication to
                                contribute ourselves in IT, Communication, and
                                any other business problems. Share your ideas to
                                Phicos, and you will get satisfaction from our
                                best solutions.
                            </p>
                        </div>
                        {/*  */}
                        <div className="flex gap-2 items-center mt-4">
                            <a
                                href=""
                                className="h-10 w-10 p-3 flex items-center justify-center rounded-full bg-white hover:bg-phicos-primary hover:scale-105 hover:text-white transition"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                href=""
                                className="h-10 w-10 p-3 flex items-center justify-center rounded-full bg-white hover:bg-phicos-primary hover:scale-105 hover:text-white transition"
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href=""
                                className="h-10 w-10 p-3 flex items-center justify-center rounded-full bg-white hover:bg-phicos-primary hover:scale-105 hover:text-white transition"
                            >
                                <YoutubeIcon />
                            </a>
                        </div>
                    </div>
                    <div className="my-4 flex flex-col gap-4 mt-auto w-full md:w-1/3">
                        <p className="text-slate-50 text-xl font-bold">
                            Contact Us
                        </p>
                        <div className="flex">
                            {/* <MapPin className="text-phicos-primary" /> */}
                            <span className="text-white/80">
                                Jl. Rajawali 1 No 2, RT 02 / RW 06 <br />
                                Manahan, Surakarta
                            </span>
                        </div>

                        <a
                            href=""
                            className="flex gap-2 text-slate-50 w-full h-14 justify-center items-center rounded-full bg-white hover:-translate-y-1 transition-transform"
                        >
                            <Phone className="text-phicos-primary" />
                            <p className=" text-slate-600 font-semibold">
                                (0271) 7462445
                            </p>
                        </a>
                        <a
                            href="mailto:phicos.id@gmail.com"
                            className="flex gap-2 text-slate-50 w-full h-14 justify-center items-center rounded-full bg-white hover:-translate-y-1 transition-transform"
                        >
                            <Mail className="text-phicos-primary" />
                            <p className="text-slate-600 font-semibold">
                                phicos.id@gmail.com
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
