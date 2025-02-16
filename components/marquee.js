import { cslp } from "@/lib/cstack";

export default function Marquee({ content }) {
    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden mt-10 group font-oswald mb-24 md:mb-40 " {...content?.$?.images}>
            {content?.images?.length === 0 &&
                <div className="my-24 w-full visual-builder__empty-block-parent"  >
                </div>
            }
            <ul className="flex  justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]">
                {content?.images?.map((image, index) => (
                    <li key={index} {...cslp(content, 'images__', index)}>
                        {!image.image?.url &&
                            <div className="h-[200px] w-[200px] bg-gray-400 flex items-center justify-center" {...image?.$?.image}>
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                </svg>
                            </div>
                        }
                        {image?.image?.url &&
                            <div className={"flex " + (index % 2 === 0 ? "flex-col" : "flex-col-reverse")}>
                                <img className="w-[456px] h-[257px] md:w-[616px] md:h-[347px] lg:w-[909px] lg:h-[511px] xl:w-[1203px] xl:h-[676px] object-cover" src={image?.image?.url} />
                                <div className={"flex " + (index % 2 === 0 ? "" : "mt-[52px] lg:mt-[72px] xl:mt-[94px] mb-2")}>
                                    <p className="font-medium text-[40px]/[40px] lg:text-[56px]/[56px] xl:text-[80px]/[80px] tracking-tight max-w-[60%]">{image?.title}</p>
                                    <p className="whitespace-pre-wrap font-work font-medium text-[16px]/[16px]  ml-2 mt-0.5 lg:mt-2">{image?.details}</p>
                                </div>
                            </div>
                        }
                    </li>
                ))}
            </ul>
            <ul className="flex justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                {content?.images?.map((image, index) => (
                    <li key={index} {...cslp(content, 'images__', index)}>
                        {!image.image?.url &&
                            <div className="h-[200px] w-[200px] bg-gray-400 flex items-center justify-center" {...image?.$?.image}>
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                </svg>
                            </div>
                        }
                        {image?.image?.url &&
                            <div className={"flex " + (index % 2 === 0 ? "flex-col" : "flex-col-reverse")}>
                                <img className="w-[456px] h-[257px] md:w-[616px] md:h-[347px] lg:w-[909px] lg:h-[511px] xl:w-[1203px] xl:h-[676px] object-cover" src={image?.image?.url} />
                                <div className={"flex " + (index % 2 === 0 ? "" : "mt-[52px] lg:mt-[72px] xl:mt-[94px] mb-2")}>
                                    <p className="font-medium text-[40px]/[40px] lg:text-[56px]/[56px] xl:text-[80px]/[80px] tracking-tight max-w-[60%]">{image?.title}</p>
                                    <p className="whitespace-pre-wrap font-work font-medium text-[16px]/[16px]  ml-2 mt-0.5 lg:mt-2">{image?.details}</p>
                                </div>
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}