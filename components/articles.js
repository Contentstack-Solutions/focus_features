import { cslp } from "@/lib/cstack";

export default function Articles({ content }){
    return(
        <div className="max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 flex flex-col items-center mb-24 md:mb-40">
            <p className="uppercase font-work text-[16px] font-medium" {...content?.$?.title}>{content?.title}</p>
            
            {content?.article?.length === 0 &&
                <div className="h-[500px] visual-builder__empty-block-parent" {...content?.$?.article} >
                </div>
            }
            <div className="mt-16 grid grid-cols-3 gap-5" {...content?.$?.article}>
                {content?.article?.map((item, index) => (
                    <div {...cslp(content, 'article__', index)}>
                        <a 
                            key={index}
                            href={item.url}
                        >
                            <div className="overflow-hidden h-[121px] md:h-[166px] lg:h-[248px] xl:h-[331px]">
                                <img className="object-cover object-center hover:scale-110 transition-all duration-300" src={item.image?.url} />
                            </div>
                            <p className="text-[24px] lg:text-[28px] xl:text-[32px] font-oswald mt-3" {...item?.$?.headline}>{item.headline}</p>
                            <p className="text-[18px] lg:text-[18px] xl:text-[20px] font-spectral mt-3 lg:mt-0" {...item?.$?.teaser}>{item.teaser}</p>
                        </a>
                    </div>
                ))}
            </div>

            <a 
                href={content?.page?.length > 0 ? content.page[0].url : "#"}
                className="group border relative border-black py-6 px-10 mt-16 overflow-hidden">
                <p className="uppercase font-oswald text-[16px] lg:text-[20px] font-light group-hover:text-white z-20 relative" {...content?.$?.button_text}>{content?.button_text}</p>
                <div className="absolute w-full h-full top-0 right-[100%] bg-[#0f557a] z-10 group-hover:right-0 transition-all duration-300" />
            </a>
        </div>
    )
}