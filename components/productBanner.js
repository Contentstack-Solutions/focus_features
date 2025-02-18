import { cslp } from "@/lib/cstack";

export default function ProductBanner({ content }) {
    return (
        <div className="max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 flex flex-col items-center mb-24 md:mb-40">
            <p className="uppercase font-work text-[16px] font-medium" {...content?.$?.title}>{content?.title}</p>
            
            {content?.products?.length === 0 &&
                <div className="h-[500px] visual-builder__empty-block-parent" {...content?.$?.products} >
                </div>
            }
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6" {...content?.$?.products}>
                {content?.products?.map((item, index) => (
                    <div key={index} {...cslp(content, 'products__', index)}>
                        {!item.image?.url &&
                            <div className="h-[200px] w-[300px] flex items-center justify-center bg-gray-200" {...item?.$?.image}>
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                </svg>
                            </div>
                        }
                        {item.image?.url &&
                            <img src={item.image?.url} {...item.image?.$?.url}/>
                        }
                        <p className="font-oswald text-[24px] lg:text-[32px] mt-2 tracking-tight" {...item.$?.name}>{item.name}</p>
                        <p className="font-work font-medium mt-3" {...item.$?.price}>{item.price}</p>
                    </div>
                ))}
            </div>
            <a 
                href={content?.page?.length > 0 ? content.page[0].url : "#"}
                className="group border relative border-black mt-24 lg:mt-32 py-6 px-10 overflow-hidden block max-w-min text-nowrap">
                <p className="uppercase font-oswald text-[16px] lg:text-[24px] font-light group-hover:text-white z-20 relative" {...content?.$?.button_text}>{content?.button_text}</p>
                <div className="absolute w-full h-full top-0 right-[100%] bg-[#0f557a] z-10 group-hover:right-0 transition-all duration-300" />
            </a>
        </div>
    )
}