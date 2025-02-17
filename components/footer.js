"use client"
import { useEffect, useState } from "react";
import Stack, { onEntryChange, cslp } from "@/lib/cstack";

export default function Footer() {
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getContent = async () => {
        const entry = await Stack.getElementByTypeWtihRefs("footer", "en-us", [
            'columns.items.page',
            'social.group.page'
        ]);
        //console.log("footer", entry[0][0]);
        setEntry(entry[0][0]);
        setIsLoading(false);
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if (isLoading) return;


    return (
        <div className="border border-t-black">
            <div className="max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 pt-24 pb-48 flex justify-between">
                <div className="font-oswald text-[16px] font-light flex gap-16">
                    {entry?.columns?.map((column, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-y-6 uppercase">
                            {column.items?.map((item, index) => (
                                <a 
                                    href={item?.page?.length > 0 ? item.page[0].url : "#"}
                                    key={index}
                                >
                                    {item.text}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center">
                    <p className="font-work text-[16px] tracking-tight font-medium uppercase">{entry?.social?.text}</p>
                    <div className="flex mt-5 gap-10">
                        {entry?.social?.group?.map((item, index) => (
                            <a
                                key={index}
                                href={item?.page?.length > 0 ? item.page[0].url : "#"}
                            >
                                <img src={item.icon?.url} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}