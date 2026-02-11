
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
                console.log(newYPos);
                if (newYPos > window.innerHeight) newYPos = -(layer.clientHeight);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + newYPos + 'px, 0px)');
                layer.setAttribute('y-pos', newYPos.toString());
            }
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex grow overflow-hidden bg-fixed bg-gradient-to-b from-void to-exosphere items-center justify-center">
            <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars1.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full" movement-multiplier="2" y-pos="above-screen" />
            <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars2.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full" movement-multiplier="3" y-pos="above-screen" />
            <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars3.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full" movement-multiplier="4" y-pos="above-screen" />
            <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars1.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full" movement-multiplier="2" />
            <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars2.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full" movement-multiplier="3" />
            <div className="background absolute z-0 bg-[url('@/assets/images/awesome-parallax/stars3.png')] bg-size-[100%] bg-repeat pixelImage min-w-screen h-full" movement-multiplier="4" />
            <div className="z-10 w-full mx-[10%] text-center mb-20 [word-spacing:0.2rem] md:[word-spacing:0.8rem] font-main text-2xl tracking-wide border-dark-amethyst border-5 sm:border-8 md:border-10 bg-void/50 text-twilight p-5 text-lg sm:text-xl md:text-3xl">
                <p>
                    Yeah!
                </p>
            </div>
        </div>
    )
}