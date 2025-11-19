"use client"
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import AmazonSvg from '../company_svg/amazon.svg';
import PinterestSvg from '../company_svg/pinterest.svg';
import UberSvg from '../company_svg/uber.svg';
import MetaSvg from '../company_svg/meta.svg';
import NetflixSvg from '../company_svg/netflix.svg';
import AppleSvg from '../company_svg/apple.svg';
import GoogleSvg from '../company_svg/google.svg';


import Image from 'next/image';

const EmblaCarousel = () => {
    const slides = [AmazonSvg, PinterestSvg, MetaSvg, NetflixSvg, AppleSvg, GoogleSvg, UberSvg]
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])

    return (
        <section className="w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom ml-[-1rem]">
                    {slides.map((svg, index) => (
                        <div className="translate-x-0 flex-[0_0_30%] min-w-0 pl-4" key={index}>
                            <div className="inset-shadow rounded-3xl text-4xl font-semibold flex items-center justify-center h-[7rem] select-none bg-white">
                                <Image src={svg} alt={svg} className="w-[5rem]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel