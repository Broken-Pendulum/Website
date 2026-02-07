import logoAnimation from "@/assets/images/logo-loop.gif"
import stars from "@/assets/images/awesome-parallax/stars.png"
import { useRef } from "react"
import { Parallax, ParallaxLayer, type IParallax } from '@react-spring/parallax'

export default function Home() {
    const parallax = useRef<IParallax>(null!);
    return (
        <>
            <Parallax ref={parallax} pages={3}>
                <ParallaxLayer offset={3} speed={0}>
                    <div className="grow bg-fixed bg-gradient-to-b from-void to-exosphere">
                        <div className="flex justify-center">
                            <img src={logoAnimation} alt="Logo Animation" className="w-150 pixelImage m-15 mb-5" />
                        </div>
                        <div className="h-100 mx-40 mb-20 border-dark-amethyst border-10 bg-void/30 text-twilight p-5 text-3xl">
                            Yeah yah yeah yeah yeah ye h eyah
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.3} speed={-0.3}>
                    <img src={stars} className="pixelImage w-full" />
                </ParallaxLayer>
            </Parallax >
        </>
    )
}