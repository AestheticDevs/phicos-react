import { Mail, MapPin, Phone } from "lucide-react";
import PhicosLogoFooter from "@/assets/image/logo-phicos-footer.png";
const Footer = () => {
    return (
        <footer>
            {/* <WavePattern /> */}
            <div className="bg-slate-900">
                <div className=" container mx-auto py-16 grid grid-cols-2">
                    <div>
                        <img
                            src={PhicosLogoFooter}
                            alt=""
                            className="mb-4 h-12"
                        />
                        <p className="text-slate-50 max-w-xl">
                            We are a company with a full dedication to
                            contribute ourselves in IT, Communication, and any
                            other business problems. Share your ideas to Phicos,
                            and you will get satisfaction from our best
                            solutions.
                        </p>
                    </div>
                    <div className="my-4 flex flex-col gap-4 mt-auto">
                        <div className="flex gap-2 text-slate-50">
                            <MapPin />
                            <p>
                                Jl Rajawali 1 No 2, RT 02 RW 06,Manahan,
                                Surakarta
                            </p>
                        </div>
                        <p className="flex gap-2 text-slate-50">
                            <Phone />
                            <p>(0271) 7462445</p>
                        </p>
                        <a
                            href="mailto:phicos.id@gmail.com"
                            className="flex gap-2 text-slate-50"
                        >
                            <Mail />
                            <p className="phicos.id@gmail.com">
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
