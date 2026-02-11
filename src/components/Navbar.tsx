
import { Link } from 'react-router-dom';
import discordIcon from "@/assets/images/icons/discord.png"

export default function Navbar() {
    return (
        <>
            <div className="w-full bg-dark-amethyst px-6 flex items-center justify-between relative z-50 font-main text-2xl tracking-wide">
                <Link to="/home" className="py-3 font-bold text-twilight text-3xl line-height-0">
                    BROKEN PENDULUM
                </Link>
                <div className="flex items-center gap-6 text-porcelain relative">
                    <Link to="/contact" className="py-3 font-bold text-exosphere hover:text-twilight text-3xl line-height-0">
                        Contact
                    </Link>
                    <a href="https://discord.gg/uKVzsYGa4p" target="_blank">
                        <img src={discordIcon} alt="Discord Icon" className="w-[2.5rem] pixelImage" />
                    </a>
                </div>
            </div>
        </>
    );
}
