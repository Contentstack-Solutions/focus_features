import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <div className="sticky top-0 border-b border-black py-[11px] z-50 bg-[#f5f5f2]">
            <div className="flex max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 justify-between font-oswald items-center text-[20px] xl:text-[24px] font-light">
                <Image 
                    className="w-[112px] h-[40px] xl:w-[154px] xl:h-[55px]"
                    src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt8607e36bb2c6ecf8/67b09a03a91adf2938673348/logo.png" 
                    width={154}
                    height={55}
                    alt="" 
                />

                <Link 
                    href={'#'}
                    className="header-link"
                >
                    FILMS
                </Link>
                <Link 
                    href={'#'}
                    className="header-link"
                >
                    FOCUS INSIDER
                </Link>
                <Link 
                    href={'#'}
                    className="header-link"
                >
                    VIDEOS
                </Link>
                <Link 
                    href={'#'}
                    className="header-link"
                >
                    NEWS
                </Link>
                <Link 
                    href={'#'}
                    className="header-link flex items-center"
                >
                    <p>SHOP</p>
                    <Image
                        className="ml-5 w-[24px] h-[24px]"
                        src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blta73ffbb85e5ae6f7/67b0a68ed91e1b4448009503/cart.png"
                        height={24}
                        width={24}
                        alt=""
                    />
                </Link>
            </div>
        </div>
    )
}