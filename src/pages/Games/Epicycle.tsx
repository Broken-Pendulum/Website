
import { useEffect, useRef } from "react"

export default function Epicycle() {
    const velocity = -0.2;
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
                if (yPos && yPos == "below-screen") currentYPos = window.innerHeight;
                else currentYPos = Number.parseFloat(yPos ?? "0");

                newYPos = currentYPos + speed;
                if (newYPos < -layer.clientHeight) newYPos = window.innerHeight;
                layer.setAttribute('style', 'transform: translate3d(0px, ' + newYPos + 'px, 0px)');
                layer.setAttribute('y-pos', newYPos.toString());
            }
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <title>Epicycle</title>
            <meta name="description" content="Epicycle is an upcoming character-driven puzzle-adventure indie game about breaking out of a timeloop by investigating the dark secret of a small town." />

            <div className="relative flex grow overflow-hidden bg-fixed bg-gradient-to-b from-void to-perennial items-center justify-center">
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/gnp.stars1srats.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="2" y-pos="below-screen" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/gnp.stars2srats.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="3" y-pos="below-screen" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/gnp.stars3srats.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="4" y-pos="below-screen" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/gnp.stars1srats.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="2" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/gnp.stars2srats.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="3" />
                <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/gnp.stars3srats.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full will-change-transform" movement-multiplier="4" />
                <div className="z-10 w-full mx-[10%] text-center my-[5rem] [word-spacing:0.2rem] md:[word-spacing:0.8rem] font-main text-2xl tracking-wide border-perennial border-5 sm:border-8 md:border-10 bg-void/50 text-shallows p-5 text-lg sm:text-xl md:text-3xl">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl p-[3rem]">
                        Development has been postponed.
                    </h2>
                </div>
            </div>
        </>
    )
}