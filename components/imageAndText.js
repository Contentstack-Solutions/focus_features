
export default function ImageAndText({ content }){
    return(
        <div 
            className={"h-[414px] md:h-[443px] lg:h-[588px] xl:h-[678px] w-full mb-24 md:mb-40 flex " + 
                (content?.image_first ? "" : "flex-row-reverse ") +
                (content?.dark_theme ? "bg-[#141414] text-white" : "")
            }
        >
            <div 
                className="w-1/2 bg-cover bg-center h-full"
                style={{backgroundImage: `url(${content?.image?.url})`}}
                {...content?.image?.$?.url}
            >
                {!content?.image?.url &&
                    <div className="w-full h-full bg-gray-400 flex items-center justify-center" {...content?.$?.image}>
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                }
            </div>

            <div className="w-1/2 flex items-center" >
                <div className="w-full pl-[36px] md:pl-[56px] lg:pl-[129px] max-w-[336px] md:max-w-[516px] lg:max-w-[676px] xl:max-w-[800px]">
                    <p className="font-work font-semibold text-[16px] uppercase" {...content?.$?.intro}>{content?.intro}</p>
                    <p className="font-oswald font-medium text-[40px]/[44px] mt-4 lg:text-[52px] xl:text-[64px]" {...content?.$?.headline}>{content?.headline}</p>
                    <p className="font-spectral text-[18px]/[27px] md:text-[20px] mt-3 md:mt-2 lg:mt-10" {...content?.$?.details}>{content?.details}</p>

                    <a 
                        href={content?.page?.length > 0 ? content.page[0].url : "#"}
                        className={"group border relative overflow-hidden hover:border-opacity-0 py-6 px-10 mt-4 md:mt-6 lg:mt-10 block max-w-min text-nowrap font-oswald text[16px] lg:text-[24px] uppercase transition-all duration-300 " + (content?.dark_theme ? "border-white" : "border-black")}
                    >
                        <p className={"relative z-20 " + (!content?.dark_theme ? "group-hover:text-white" : "")} {...content?.$?.button_text}>{content?.button_text}</p>
                        <div className="absolute w-full h-full top-0 right-[100%] bg-[#0f557a] z-10 group-hover:right-0 transition-all duration-300" />
                    </a>
                </div>
            </div>
        </div>
    )
}