import logoAnimation from "@/assets/images/logo-loop.gif"
import stars1 from "@/assets/images/awesome-parallax/stars1.png"
import stars2 from "@/assets/images/awesome-parallax/stars2.png"
import stars3 from "@/assets/images/awesome-parallax/stars3.png"
import pluto from "@/assets/images/us/pluto.png"
import phoenix from "@/assets/images/us/phoenix.png"
import athena from "@/assets/images/us/athena.png"
import discordIcon from "@/assets/images/icons/discord.png"
import { useRef, useState } from "react"
import { Parallax, ParallaxLayer, type IParallax } from '@react-spring/parallax'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";


export default function Home() {
    //const [currentImage, setCurrentImage] = useState("");
    const parallax = useRef<IParallax>(null!);
    const [heightIsSet, setHeightIsSet] = useState(false);
    const [parallaxPages, setParallaxPages] = useState(10);

    // whatever honestly
    // this is being really annoying, it's past midnight, and
    // this is the only way i can get it to work
    // i'm too lazy to figure out how to make it work better
    // (i'm not able to change it dynamically either because the page
    // has to refresh for changes to the parallax components to update.
    // it's not linear either because of flex wrapping.)
    //
    // :(
    //
    // this sucks but parallax is so awesome it's worth it
    if (!heightIsSet) {
        setHeightIsSet(true);
        const width = window.innerWidth
        if (width > 1700) setParallaxPages(2.9);
        else if (width > 1430) setParallaxPages(3.3);
        else if (width > 1180) setParallaxPages(4.15);
        else if (width > 1080) setParallaxPages(4.3);
        else if (width > 900) setParallaxPages(4.4);
        else if (width > 850) setParallaxPages(5.4);
        else if (width > 767) setParallaxPages(5.6);
        else setParallaxPages(4.4);
    }

    /*

    // For eventually showing fun background details at random intervals
    // gotta figure out what type of media to use for the image :/ gifs are being annoying

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage("");
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    
    */

    return (
        <>
            <Parallax ref={parallax} pages={parallaxPages} className="bg-fixed bg-gradient-to-b from-void to-exosphere font-main text-2xl tracking-wide">
                <ParallaxLayer offset={0} speed={0.1}>
                    <img src={stars1} className="pixelImage w-full" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.15}>
                    <img src={stars2} className="pixelImage w-full" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.2}>
                    <img src={stars3} className="pixelImage w-full" />
                </ParallaxLayer>
                {/*
                    <ParallaxLayer sticky={{ start: 0, end: 3 }}>
                        {currentImage != "" && <img src={currentImage} className="pixelImage w-full" />}
                    </ParallaxLayer>
                */}
                <ParallaxLayer offset={0} speed={0} id="mainPageContent">
                    <Navbar />
                    <div className="[word-spacing:0.2rem] md:[word-spacing:0.8rem]">
                        <div className="flex justify-center">
                            <img src={logoAnimation} alt="Logo Animation" className="w-150 pixelImage m-15 mb-5" />
                        </div>
                        <div className="mx-[10%] text-center mb-20 border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                            <p>
                                The human mind holds the incredible potential to conjure entire universes,
                                and, through art, to make these universes tangible. Every piece of art, every creation
                                made for the love of the process, is made of our life experience, has pieces of our soul
                                woven into it.
                            </p>
                            <br />
                            <p>
                                Using games as a storytelling medium, we can bring others into the universes
                                we create, allow them to envelop themselves in these worlds that exist within us, 
                                experience our stories on a personal level not quite possible with other forms of
                                media.
                            </p>
                            <br />
                            <p>
                                What difference does it make if the fabric of a universe is woven of thoughts, interests, and emotions instead of fields and energy?
                                If its characters are made up of pieces of their creator instead of quarks and leptons?
                                Does a story being fictional make it any less real?
                            </p>
                        </div>
                        <div className="mx-[10%] text-center mb-20 border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                            <p>
                                Broken Pendulum was founded on a passion for storytelling and creation.
                            </p>
                            <p>
                                We want to tell stories that mean something to the people experiencing them.
                            </p>
                            <p>
                                We want to tell the stories of the lives of characters that live in our universes.
                            </p>
                            <p>
                                We want to tell stories that only we can tell, because every piece of the story is made up of
                                pieces of us.
                            </p>
                        </div>
                        <div className="flex justify-center flex-wrap mx-[10%]">
                            <div className="min-w-80 max-w-[28.3%] mx-[2.5%] text-center mb-20 border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                                <img src={pluto} alt="Pluto" className="w-full pixelImage p-5" />
                                <p className="font-bold">
                                    Pluto
                                </p>
                                <p className="text-exosphere">
                                    plutonium221
                                </p>
                                ---
                                <p>
                                    Programming, game design, story, sound design, writing,
                                    environmental sprites,
                                    a bit of everything else
                                </p>
                            </div>
                            <div className="min-w-80 max-w-[28.3%] mx-[2.5%] text-center mb-20 border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                                <img src={phoenix} alt="Phoenix" className="w-full p-5" />
                                <p className="font-bold">
                                    Phoenix
                                </p>
                                <p className="text-exosphere">
                                    2DPhoenix
                                </p>
                                ---
                                <p>
                                    Character design and development, character art, writing
                                </p>
                            </div>
                            <div className="min-w-80 max-w-[28.3%] mx-[2.5%] text-center mb-20 border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                                <img src={athena} alt="Athena" className="w-full p-5" />
                                <p className="font-bold">
                                    Athena
                                </p>
                                <p className="text-exosphere">
                                    -
                                </p>
                                ---
                                <p>
                                    Music, backdrops, environmental sprites, game design
                                </p>
                            </div>
                        </div>
                        <div className="mx-[10%] text-center mb-20 border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                            <p>
                                Join our (brand new) discord community to help playtest and give feedback, or just to talk with us
                                and other people interested in what we're making. We want to hear from you!
                            </p>
                            <br />
                            <p>
                                Social media and devlogs coming soon!
                            </p>
                            <div className="w-full flex justify-center">
                                <a href="https://discord.gg/uKVzsYGa4p" target="_blank">
                                    <img src={discordIcon} alt="Discord Icon" className="w-16 pixelImage m-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={parallaxPages - 0.06} speed={0}>
                    <Footer />
                </ParallaxLayer>
            </Parallax >
        </>
    )
}