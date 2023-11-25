import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import icon from "../../assets/Images/Icons.png"
import img1 from "../../assets/Images/card-image.png"
import img2 from "../../assets/Images/card-image-1.png"
import img3 from "../../assets/Images/card-image-2.png"
import img4 from "../../assets/Images/card-image-3.png"

const Destination = () => {
    useEffect(() => {
        const slider = new Glide(".glide-04", {
            type: "carousel",
            focusAt: "center",
            perView: 3,
            autoplay: 3500,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, []);

    return (
        <section className="glide-04 relative w-full py-12 md:py-24">

            <div className="overflow-hidden" data-glide-el="track">
                <ul className="py-12 whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                    <li className="shadow-xl rounded-2xl bg-white">
                        <img
                            src={img1}
                            className="m-auto max-h-full w-full max-w-full rounded-lg"
                        />
                        <div className="p-6">
                            <h2 className="font-bold text-3xl pb-3 lg:pb-6">Harvard University</h2>
                            <div className="flex items-center justify-between pt-2 lg:pt-6">
                                <p className="font-medium text-sm">Cambridge, Massachusetts, UK</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                    </li>
                    <li className="shadow-xl rounded-2xl bg-white">
                        <img
                            src={img2}
                            className="m-auto max-h-full w-full max-w-full rounded-lg"
                        />
                        <div className="p-6">
                            <h2 className="font-bold text-3xl pb-3 lg:pb-6">Oxford University</h2>
                            <div className="flex items-center justify-between pt-2 lg:pt-6">
                                <p className="font-medium text-sm">Oxford, England</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                    </li>
                    <li className="shadow-xl rounded-2xl bg-white">
                        <img
                            src={img3}
                            className="m-auto max-h-full w-full max-w-full rounded-lg"
                        />
                        <div className="p-6">
                            <h2 className="font-bold text-3xl pb-3 lg:pb-6">Stanford University</h2>
                            <div className="flex items-center justify-between pt-2 lg:pt-6">
                                <p className="font-medium text-sm">Stanford, California</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                    </li>
                    <li className="shadow-xl rounded-2xl bg-white">
                        <img
                            src={img4}
                            className="m-auto max-h-[356px] md:max-h-[323px] lg:max-h-[432px] w-full max-w-full rounded-3xl"
                        />
                        <div className="p-6">
                            <h2 className="font-bold text-3xl pb-3 lg:pb-6">Nanyang Technological University</h2>
                            <div className="flex items-center justify-between pt-2 lg:pt-6">
                                <p className="font-medium text-sm">Nanyang Ave, Singapore</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

            <div
                className="flex w-full items-center justify-center gap-2 p-4"
                data-glide-el="controls"
            >
                <button
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                    data-glide-dir="<"
                    aria-label="prev slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <title>prev slide</title>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                    </svg>
                </button>
                <h2 className="text-[#7D7D7D] font-medium"><span className="text-black font-semibold text-2xl">2</span>/140</h2>
                <button
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                    data-glide-dir=">"
                    aria-label="next slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <title>next slide</title>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </button>
            </div>
        </section>

    );
};

export default Destination;