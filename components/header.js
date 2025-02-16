import { useEffect, useState } from "react";
import Stack, { onEntryChange, cslp } from "@/lib/cstack";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getContent = async () => {
        const entry = await Stack.getElementByTypeWtihRefs("header", "en-us", [
            'menu.page',
        ]);
        //console.log("header", entry[0][0]);
        setEntry(entry[0][0]);
        setIsLoading(false);
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if (isLoading) return;

    return (
        <div className="sticky top-0 border-b border-black py-[11px] z-50 bg-[#f5f5f2]">
            <div className="flex max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 justify-between font-oswald items-center text-[20px] xl:text-[24px] font-light">
                <Link
                    href="/"
                >
                    <Image
                        className="w-[112px] h-[40px] xl:w-[154px] xl:h-[55px]"
                        src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt8607e36bb2c6ecf8/67b09a03a91adf2938673348/logo.png"
                        width={154}
                        height={55}
                        alt=""
                    />
                </Link>
                

                {entry?.menu?.map((item, index) => (
                    <Link
                        key={index}
                        href={item?.page?.length > 0 ? item.page[0].url : "#"}
                        className="header-link uppercase flex items-center"
                    >
                        {item.text}
                        {item.icon &&
                            <Image
                                className="ml-5 w-[24px] h-[24px]"
                                src={item.icon?.url}
                                height={24}
                                width={24}
                                alt=""
                            />
                        }
                    </Link>
                ))}
            </div>
        </div>
    )
}