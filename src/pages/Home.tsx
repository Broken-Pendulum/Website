import logoAnimation from "@/assets/images/logo-loop.gif"
import pluto from "@/assets/images/us/pluto.png"
import phoenix from "@/assets/images/us/phoenix.png"
import athena from "@/assets/images/us/athena.png"
import { useEffect, useRef } from "react"

export default function Home() {
    const lastTick = useRef(Date.now());
    const deltaTime = useRef(0);
    const velocity = useRef(0);
    const lastPageOffset = useRef(scrollY || pageYOffset);
    const lastPageMotion = useRef(0);

    const velocityChangeRate = 1;
    const velocityCap = 250;

    const parallaxLayers = document.getElementsByClassName("parallax");
    
    useEffect(() => {
        const interval = setInterval(() => {
            const currentOffset = scrollY || pageYOffset;
            const workingOffset = lastPageOffset.current - currentOffset;
            lastPageOffset.current = currentOffset;

            const currentTime = Date.now();
            deltaTime.current = (currentTime - lastTick.current)
            lastTick.current = currentTime;
            velocity.current += Math.pow(1 - (0.22 * deltaTime.current), 3) * lastPageMotion.current;

            if (workingOffset != 0) lastPageMotion.current = (Math.sign(workingOffset));

            if (Math.sign(velocity.current) != lastPageMotion.current) velocity.current = 0;
            {

                let layer, speed: number, currentYPos: number, newYPos;
                for (let i = 0; i < parallaxLayers.length; i++) {
                    layer = parallaxLayers[i];
                    speed = Number.parseFloat(layer.getAttribute('parallax-speed') ?? "0") * velocity.current;
                    speed /= 10000;

                    const yPos = layer.getAttribute('y-pos');
                    if (yPos && yPos == "above-screen") currentYPos = -(layer.clientHeight);
                    else if (yPos && yPos == "below-screen") currentYPos = layer.clientHeight;
                    else currentYPos = Number.parseFloat(yPos ?? "0");

                    newYPos = (currentYPos - lastPageOffset.current) + (currentOffset) + speed;
                    layer.setAttribute('style', 'transform: translate3d(0px, ' + newYPos + 'px, 0px)');
                    layer.setAttribute('y-pos', newYPos.toString());
                }
            }
        }, 10);

        return () => clearInterval(interval);
    }, []);

    window.addEventListener("scroll", function () {
        const currentOffset = scrollY || pageYOffset;
        const workingOffset = lastPageOffset.current - currentOffset;
        velocity.current += (velocityChangeRate * deltaTime.current * Math.sign(workingOffset));
        if (Math.abs(velocity.current) > velocityCap) velocity.current = velocityCap * Math.sign(velocity.current);
    });
    

    return (
        <>
            <title>Broken Pendulum</title>
            <meta name="description" content="Broken Pendulum is a small, community-first indie game studio founded on an intense passion for creation and storytelling." />

            <div className="relative isolate overflow-hidden font-main text-2xl tracking-wide bg-fixed bg-gradient-to-b from-void to-exosphere">
                <div className="parallax absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars1.png')] bg-size-[100%] bg-repeat pixelImage w-full h-full will-change-transform" parallax-speed="20" />
                <div className="parallax absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars2.png')] bg-size-[100%] bg-repeat pixelImage w-full h-full will-change-transform" parallax-speed="30" />
                <div className="parallax absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars3.png')] bg-size-[100%] bg-repeat pixelImage w-full h-full will-change-transform" parallax-speed="40" />
                <div className="parallax absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars1.png')] bg-size-[100%] bg-repeat pixelImage w-full h-full will-change-transform" parallax-speed="20" y-pos="above-screen" />
                <div className="parallax absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars2.png')] bg-size-[100%] bg-repeat pixelImage w-full h-full will-change-transform" parallax-speed="30" y-pos="above-screen" />
                <div className="parallax absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars3.png')] bg-size-[100%] bg-repeat pixelImage w-full h-full will-change-transform" parallax-speed="40" y-pos="above-screen" />
                <div className="parallax absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars1.png')] bg-size-[100%] bg-repeat pixelImage w-full h-full will-change-transform" parallax-speed="20" y-pos="below-screen" />
                <div className="parallax absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars2.png')] bg-size-[100%] bg-repeat pixelImage w-full h-full will-change-transform" parallax-speed="30" y-pos="below-screen" />
                <div className="parallax absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars3.png')] bg-size-[100%] bg-repeat pixelImage w-full h-full will-change-transform" parallax-speed="40" y-pos="below-screen" />
                <div className="relative z-50 [word-spacing:0.2rem] md:[word-spacing:0.8rem]">
                    <div className="flex justify-center">
                        <img src={logoAnimation} alt="Logo Animation" className="w-[40rem] pixelImage m-15 mb-5" />
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
                            Broken Pendulum is a game studio founded on a passion for storytelling and creation.
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
                        <div className="min-w-[22rem] max-w-[28.3%] mx-[2.5%] text-center mb-20 border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
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
                        <div className="min-w-[22rem] max-w-[28.3%] mx-[2.5%] text-center mb-20 border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
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
                        <div className="min-w-[22rem] max-w-[28.3%] mx-[2.5%] text-center mb-20 border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
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
                                <div className="w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4rem] md:h-[4rem] pixelImage m-4 bg-[url('@/assets/images/icons/discord.png')] hover:bg-[url('@/assets/images/icons/discord-light.png')] bg-size-[100%]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}