import { useEffect, useState } from "react"

export default function NewReleases(){
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const temp = [];
        temp.push('https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/bltf86f8db3be2faa90/67b12593efe40e889d8f94a4/NOS_187_DIGITAL_FINAL_1080x1600_V6_0_ab293ccbe6.jpeg');
        temp.push('https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt1538af15173f3d43/67b125930607f9a2d54c2196/CON_255_DIGITAL_FINAL_1080x1600_V7_0_18dcf729a9.jpeg')
        setImages(temp);
    }, [])

    return(
        <div className="max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 flex mb-24 md:mb-40">
            <div className="w-[420px] h-[468px] md:w-[560px] md:h-[437px] lg:w-[793px] lg:h-[653px] xl:w-[1049px] xl:h-[869px]  ml-[60px] md:ml-[80px] lg:ml-[117px] xl:ml-[153px] flex flex-col justify-between">
                <p className="uppercase font-work text-[16px] font-medium">NEW & UPCOMING FILM RELEASES</p>

                <div className="uppercase">
                    <div onMouseEnter={() => setCurrentIndex(0)}>
                        <p className={"font-oswald font-semibold text-[40px]/[44px] lg:text-[56px]/[66px] xl:text-[80px]/[88px] tracking-tight transition-opacity duration-300 " + (currentIndex === 0 ? "" : "opacity-20")}>NOSFERATU</p>
                        <p className={"font-work text-[16px] font-medium " + (currentIndex !== 0 ? "hidden" : "")}>NOW PLAYING IN THEATERS & WATCH AT HOME</p>
                    </div>
                    <div onMouseEnter={() => setCurrentIndex(1)}>
                        <p className={"font-oswald font-semibold text-[40px]/[44px] lg:text-[56px]/[66px] xl:text-[80px]/[88px] tracking-tight transition-opacity duration-300 " + (currentIndex === 1 ? "" : "opacity-20")}>CONCLAVE</p>
                        <p className={"font-work text-[16px] font-medium " + (currentIndex !== 1 ? "hidden" : "")}>NOW PLAYING IN THEATERS & WATCH AT HOME</p>
                    </div>
                    <div>
                        <p className="font-oswald font-semibold text-[40px]/[44px] lg:text-[56px]/[66px] xl:text-[80px]/[88px] tracking-tight opacity-20">LAST BREATH</p>
                        <p className="font-work text-[16px] font-medium hidden">IN THEATERS FEBRUARY 28 GET TICKETS</p>
                    </div>
                    <div>
                        <p className="font-oswald font-semibold text-[40px]/[44px] lg:text-[56px]/[66px] xl:text-[80px]/[88px] tracking-tight opacity-20">BLACK BAG</p>
                        <p className="font-work text-[16px] font-medium hidden">IN THEATERS MARCH 14 WATCH TRAILER</p>
                    </div>
                    <div>
                        <p className="font-oswald font-semibold text-[40px]/[44px] lg:text-[56px]/[66px] xl:text-[80px]/[88px] tracking-tighter opacity-20">THE BALLAD OF WALLIS ISLAND</p>
                        <p className="font-work text-[16px] font-medium hidden">IN THEATERS MARCH 28 WATCH TRAILER</p>
                    </div>
                </div>

                <a href="#" className="group border relative border-black py-6 px-10 overflow-hidden block max-w-min text-nowrap">
                    <p className="uppercase font-oswald text-[16px] lg:text-[20px] font-light group-hover:text-white z-20 relative">More Focus Films</p>
                    <div className="absolute w-full h-full top-0 right-[100%] bg-[#0f557a] z-10 group-hover:right-0 transition-all duration-300" />
                </a>
            </div>

            <div className="w-[216px] md:w-[296px] lg:w-[443px] xl:w-[569px] h-full">
                <img className="object cover h-full w-full" src={images[currentIndex]} /> 
            </div>
        </div>
    )   
}