import logoAnimation from "@/assets/images/logo-loop.gif"
import stars1 from "@/assets/images/awesome-parallax/stars1.png"
import stars2 from "@/assets/images/awesome-parallax/stars2.png"
import stars3 from "@/assets/images/awesome-parallax/stars3.png"
import { useRef } from "react"
import { Parallax, ParallaxLayer, type IParallax } from '@react-spring/parallax'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";

export default function Home() {
    const parallax = useRef<IParallax>(null!);
    return (
        <>
            <Parallax ref={parallax} pages={3} className="bg-fixed bg-gradient-to-b from-void to-exosphere font-main text-2xl">
                <ParallaxLayer offset={0} speed={0.1}>
                    <img src={stars1} className="pixelImage w-full" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.15}>
                    <img src={stars2} className="pixelImage w-full" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.2}>
                    <img src={stars3} className="pixelImage w-full" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0}>
                    <Navbar />
                    <div>
                        <div className="flex justify-center">
                            <img src={logoAnimation} alt="Logo Animation" className="w-150 pixelImage m-15 mb-5" />
                        </div>
                        <div className="h-100 mx-40 mb-20 border-dark-amethyst border-10 bg-void/50 text-twilight p-5 text-3xl">
                            Theoretically...?
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2.9} speed={0}>
                    <Footer />
                </ParallaxLayer>
            </Parallax >
        </>
    )
}