
import discordIcon from "@/assets/images/icons/discord.png"

export default function Navbar() {
    return (
        <>
            <div className="w-full bg-dark-amethyst px-6 flex items-center justify-between relative z-50">
                <a href="home" className="pt-5 pb-3 font-bold text-twilight text-3xl line-height-0">
                    BROKEN PENDULUM
                </a>
                <div className="flex items-center gap-6 text-porcelain relative">
                    <a href="home" className="pt-5 pb-3 font-bold text-exosphere hover:text-twilight text-3xl line-height-0">
                        Contact
                    </a>
                    <a href="https://discord.gg/uKVzsYGa4p" target="_blank">
                        <img src={discordIcon} alt="Discord Icon" className="w-10 pixelImage" />
                    </a>
                </div>
            </div>
        </>
    );
}
