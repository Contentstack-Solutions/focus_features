import { useEffect, useState } from "react"

export default function NewReleases({ content }){
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const temp = [];
        for(const item of content?.movies)
            temp.push(item.image?.url);
        setImages(temp);
    }, [])

    return(
        <div className="max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 flex mb-24 md:mb-40">
            <div className="w-[420px] h-[468px] md:w-[560px] md:h-[437px] lg:w-[793px] lg:h-[653px] xl:w-[1049px] xl:h-[869px]  ml-[60px] md:ml-[80px] lg:ml-[117px] xl:ml-[153px] flex flex-col justify-between">
                <p className="uppercase font-work text-[16px] font-medium">{content?.title}</p>

                <div className="uppercase">
                    {content?.movies?.map((item, index) => (
                        <a 
                            href={item?.page?.length > 0 ? item.page[0].url : "#"}
                            key={index} onMouseEnter={() => setCurrentIndex(index)}>
                            <p className={"font-oswald font-semibold text-[40px]/[44px] lg:text-[56px]/[66px] xl:text-[80px]/[88px] tracking-tight transition-opacity duration-300 " + (currentIndex === index ? "" : "opacity-20")}>{item.title}</p>
                            <p className={"font-work text-[16px] font-medium " + (currentIndex !== index ? "hidden" : "")}>{item.details}</p>
                        </a>
                    ))}
                </div>

                <a 
                    href={content?.page?.length > 0 ? content.page[0].url : "#"}
                    className="group border relative border-black py-6 px-10 overflow-hidden block max-w-min text-nowrap">
                    <p className="uppercase font-oswald text-[16px] lg:text-[20px] font-light group-hover:text-white z-20 relative">{content?.button_text}</p>
                    <div className="absolute w-full h-full top-0 right-[100%] bg-[#0f557a] z-10 group-hover:right-0 transition-all duration-300" />
                </a>
            </div>

            <a 
                href={content?.movies[currentIndex]?.page?.length > 0 ? content?.movies[currentIndex]?.page[0].url : "#"}
                className="w-[216px] md:w-[296px] lg:w-[443px] xl:w-[569px] h-full md:h-auto flex flex-col">
                {images[currentIndex] &&
                    <img className="object cover h-full w-full" src={images[currentIndex]} />
                }
                {!images[currentIndex] &&
                    <div className="flex-1 w-full bg-[#141414] py-10 text-white flex flex-col align-center text-center px-5 md:px-10">
                        <p className="font-oswald font-medium text-[40px]/[44px] lg:text-[56px]/[62px] xl:text-[80px]/[88px] tracking-tight">{content?.movies[currentIndex].title}</p>
                        <img className="h-[55px] w-[154px] mt-auto mx-auto" src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt6fd2ab1b26a288ae/67b2202dc1595491545160f3/logo2.png"/>
                    </div>
                }
            </a>
        </div>
    )   
}