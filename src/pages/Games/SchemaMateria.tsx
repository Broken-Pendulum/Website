
import { useEffect, useRef } from "react"

export default function Contact() {
    const velocity = 0.03;
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
            <title>Schema Materia</title>
            <meta name="description" content="Schema Materia is an upcoming supernatural R&D indie game developed by Broken Pendulum." />

            <div className="relative flex grow overflow-hidden bg-fixed bg-gradient-to-b from-void to-dark-amethyst items-center justify-center">
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars1.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="2" y-pos="above-screen" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars2.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="3" y-pos="above-screen" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars3.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="4" y-pos="above-screen" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars1.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="2" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars2.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="3" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars3.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="4" />
                <div className="z-10 w-full mx-[10%] text-center my-[5rem] [word-spacing:0.2rem] md:[word-spacing:0.8rem] font-main text-2xl tracking-wide border-royalty border-5 sm:border-8 md:border-10 bg-void/50 text-amethyst p-8 text-lg sm:text-xl md:text-3xl">
                    <h1 className="font-[Directdings] text-5xl sm:text-4xl md:text-7xl px-[3rem] pt-[1.5rem]">
                        c a D O
                    </h1>
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl p-[3rem]">
                        Development starting soon!
                    </h2>
                </div>
            </div>
        </>
    )
}