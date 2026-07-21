import { useEffect, useRef } from "react"

export default function Policies() {
    const lastTick = useRef(Date.now());
    const deltaTime = useRef(0);
    const velocity = useRef(0);
    const lastPageOffset = useRef(scrollY || pageYOffset);
    const lastPageMotion = useRef(0);

    const velocityChangeRate = useRef(screen.height / 1050);

    const parallaxLayers = document.getElementsByClassName("parallax");

    useEffect(() => {
        velocityChangeRate.current = screen.height / 1050;
    }, [screen.width]);

    useEffect(() => {
        window.scroll(0, 0);
        const interval = setInterval(() => {
            const currentOffset = scrollY || pageYOffset;
            const workingOffset = lastPageOffset.current - currentOffset;
            lastPageOffset.current = currentOffset;

            const currentTime = Date.now();
            deltaTime.current = (currentTime - lastTick.current)
            lastTick.current = currentTime;
            velocity.current += Math.pow(1 - ((velocityChangeRate.current * 0.22) * deltaTime.current), 3) * lastPageMotion.current;

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
        const velocityCap = velocityChangeRate.current * 250;
        const currentOffset = scrollY || pageYOffset;
        const workingOffset = lastPageOffset.current - currentOffset;
        velocity.current += (velocityChangeRate.current * deltaTime.current * Math.sign(workingOffset));
        if (Math.abs(velocity.current) > velocityCap) velocity.current = velocityCap * Math.sign(velocity.current);
    });
    

    return (
        <>
            <title>Policies</title>
            <meta name="description" content="Information on the policies of the Broken Pendulum indie development studio." />

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
                    <div className="mx-[10%] text-center my-[5rem] border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-[1.5rem]">
                            Confidentiality Policy
                        </h2>
                        <p>
                            If you choose to contribute to our projects through playtesting and/or feedback, you
                            MAY NOT redistribute any dev builds OR leak any of our evil plans for game content that
                            we have not announced publicly. All insider information stays in the relevant channels in
                            the Discord server.
                        </p>
                        <br />
                        <p>
                            If you can't commit to keeping a secret or don't trust yourself not to talk about the
                            project outside of the designated channels, please do not become a contributor. We still
                            would love to have you in the community, but we like telling stories, and if you spoil the
                            story, it ruins it for everyone. Because development builds may reveal secrets that we decide
                            to remove later, please treat all game information as highly classified and err on the side 
                            of caution. Pretend you're a secret agent or something.
                        </p>
                        <br />
                        <p>
                            WE ARE SERIOUS!!! If you violate our rules on confidentiality you will be banned from the
                            Broken Pendulum Discord server and will forfeit your right to be credited as a contributor 
                            to any Broken Pendulum project. We don't want to have to do that :(
                        </p>
                    </div>
                    <div className="mx-[10%] text-center my-[5rem] border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-[1.5rem]">
                            Content Policy
                        </h2>
                        <p>
                            Yeah, (once we have games published), feel free to make as much content on them as you want -
                            videos, streams, monetized or not! It's encouraged, actually! That way more people learn 
                            about our games, and they <s>give us more MONEY!!!</s> can become a part of our community!
                        </p>
                        <br />
                        <p>
                            As for the OST and other assets, you can use them for non-commercial purposes as long as you
                            credit the original source. (Background music in videos is fine, but not just a direct re-upload,
                            for example. You can always ask if you're not sure.)
                        </p>
                    </div>
                    <div className="mx-[10%] text-center my-[5rem] border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-[1.5rem]">
                            Generative AI Policy
                        </h2>
                        <p>
                            Generative AI has no place in any creative process. When something
                            is created with generative AI, it is created BY the AI model, not by the user. All of our assets,
                            code, writing, and external media is created by us.
                        </p>
                        <br />
                        <p>
                            We will use LLMs to help with debugging as a last resort. If we're running into a problem
                            that we are unable to find an answer to through other means, we may use an LLM strictly as a tool
                            to help diagnose the problem. We will not have it write the code for us, and will only use it to point to the
                            relevant resource that we are unable to find. We avoid doing this as much as possible because we find 
                            generative AI to be the antithesis of creativity and generally repulsive in the vast majority of usecases.
                        </p>
                    </div>
                    <div className="mx-[10%] text-center my-[5rem] border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-[1.5rem]">
                            Privacy Policy
                        </h2>
                        <p>
                            If you choose to contribute to one of our projects by playtesting or giving feedback,
                            we will keep a record of the feedback you gave and the name you wish to be credited as
                            so that we can properly credit you. Additionally, if you violate rules in our Discord
                            server, we will keep a record of your actions for future moderation purposes. We will not
                            use your information for any purpose other than this, and will not share it with any third
                            parties.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
