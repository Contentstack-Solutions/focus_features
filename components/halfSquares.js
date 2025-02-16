
export default function HalfSquares({ content }){
    return(
        <div className="relative max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 flex mb-64 md:mb-96 ">
            <div className="w-1/2 flex lg:items-center pl-[60px] ">
                <div className="w-full lg:pl-[36px] xl:pl-[80px] text-black ">
                    <p className="font-work font-semibold text-[16px] uppercase">{content?.intro}</p>
                    <p className="max-md:max-w-[220px]  font-oswald tracking-tight text-[40px]/[44px] mt-4 lg:text-[52px] xl:text-[64px]">{content?.headline}</p>
                    <p className="max-w-[180px] md:max-w-[260px] lg:max-w-[500px] font-spectral font-medium text-[18px]/[27px] md:text-[20px] mt-3 md:mt-5 lg:mt-10">{content?.details}</p>

                    <a 
                        href={content?.page?.length > 0 ? content.page[0].url : "#"}
                        className="group border relative overflow-hidden border-black hover:border-opacity-0 py-6 px-10 mt-4 md:mt-6 lg:mt-10 block max-w-min text-nowrap font-oswald text[16px] lg:text-[24px] uppercase  transition-all duration-300">
                        <p className="relative z-20 group-hover:text-white font-light">{content?.button_text}</p>
                        <div className="absolute w-full h-full top-0 right-[100%] bg-[#0f557a] z-10 group-hover:right-0 transition-all duration-300" />
                    </a>
                </div>
            </div>

            <div className="w-1/2">
                <img className="h-[276px] w-[276px] md:h-[400px] md:w-[400px] lg:h-[559px] lg:w-[559px] xl:h-[743px] xl:w-[743px] object-cover" src={content?.image?.url} />
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[40%]">
                <img className="animate-spin w-[248px] h-[248px] md:w-[338px] md:h-[338px] lg:w-[503px] lg:h-[503px] xl:w-[668px] xl:h-[668px]" src={content?.spin_image?.url} />
            </div>
            
        </div>
    )
}