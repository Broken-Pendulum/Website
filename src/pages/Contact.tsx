
import { useEffect, useRef } from "react"

export default function Contact() {
    const velocity = 0.3;
    const bgLayers = document.getElementsByClassName("background");
    const lastTick = useRef(Date.now());
    const deltaTime = useRef(0);


    useEffect(() => {
        const interval = setInterval(() => {

            const currentTime = Date.now();
            deltaTime.current = (currentTime - lastTick.current)
            lastTick.current = currentTime;
            let layer, speed: number, currentYPos: number, newYPos;
            for (let i = 0; i < bgLayers.length; i++) {
                layer = bgLayers[i];
                speed = Number.parseFloat(layer.getAttribute('movement-multiplier') ?? "0") * velocity;

                const yPos = layer.getAttribute('y-pos');
                if (yPos && yPos == "above-screen") currentYPos = -(layer.clientHeight);
                else currentYPos = Number.parseFloat(yPos ?? "0");

                newYPos = currentYPos + speed;
                if (newYPos > window.innerHeight) newYPos = -(layer.clientHeight);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + newYPos + 'px, 0px)');
                layer.setAttribute('y-pos', newYPos.toString());
            }
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <title>Contact</title>
            <meta name="description" content="Join our community through Discord or contact us professionaly by email! We'd love to hear from you!" />

            <div className="relative flex grow overflow-hidden bg-fixed bg-gradient-to-b from-void to-exosphere items-center justify-center">
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars1.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="2" y-pos="above-screen" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars2.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="3" y-pos="above-screen" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars3.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="4" y-pos="above-screen" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars1.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="2" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars2.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="3" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars3.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="4" />
                <div className="z-10 w-full mx-[10%] text-center mb-20 [word-spacing:0.2rem] md:[word-spacing:0.8rem] font-main text-2xl tracking-wide border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-[1.5rem]">
                        Want to get in touch?
                    </h2>
                    <p>
                        The easiest way to chat with us is through our Discord server. You can come talk in the designated
                        channels or DM Pluto directly if there's anything you want to know.
                        For more professional communication (or any other reason), you can send us an email at contact.brokenpendulum@gmail.com.
                    </p>
                    <div className="w-full flex justify-center">
                        <a href="https://discord.gg/uKVzsYGa4p" target="_blank">
                            <div className="w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4rem] md:h-[4rem] pixelImage m-4 bg-[url('@/assets/images/icons/discord.png')] hover:bg-[url('@/assets/images/icons/discord-light.png')] bg-size-[100%]" />
                        </a>
                        <a href="mailto:contact.brokenpendulum@gmail.com" target="_blank">
                            <div className="w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4rem] md:h-[4rem] pixelImage m-4 bg-[url('@/assets/images/icons/mail.png')] hover:bg-[url('@/assets/images/icons/mail-light.png')] bg-size-[100%]" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}