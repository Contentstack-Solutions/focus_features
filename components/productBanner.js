
export default function ProductBanner() {
    return (
        <div className="max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 flex flex-col items-center mb-24 md:mb-40">
            <p className="uppercase font-work text-[16px] font-medium">Offical Merch</p>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <img src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/bltbbb3d7e0446f9f5e/67b1df9bd1508763ed528bc6/Nosferatu_Focus_Features_Logo_Hoodie_f52156fbbd.png" />
                    <p className="font-oswald text-[24px] lg:text-[32px] mt-2 tracking-tight">Focus Features Nosferatu Logo Hoodie</p>
                    <p className="font-work font-medium mt-3">FROM: $46.95</p>
                </div>
                <div>
                    <img src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt1fed54949f5a8a84/67b1df9b7b43d037247f3ad5/For_Site_Classic_Logo_Tote_f4d0c2c4d4.jpeg" />
                    <p className="font-oswald text-[24px] lg:text-[32px] mt-2 tracking-tight">Focus Features Logo Tote Bag</p>
                    <p className="font-work font-medium mt-3">FROM: $32.95</p>
                </div>
                <div>
                    <img src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt18eec337cefbd46a/67b1df9b480898ab95cb9123/focus_sweatshirt_8e626e8d4f.jpeg" />
                    <p className="font-oswald text-[24px] lg:text-[32px] mt-2 tracking-tight">Focus Features Logo Crewneck</p>
                    <p className="font-work font-medium mt-3">FROM: $39.95</p>
                </div>
                <div>
                    <img src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt25088972607e3faf/67b1df9bc9c106f9624389e7/Nos_Focus_Feaures_Horror_Logo_8250da0f7e.png" />
                    <p className="font-oswald text-[24px] lg:text-[32px] mt-2 tracking-tight">Focus Features Nosferatu Logo Hat</p>
                    <p className="font-work font-medium mt-3">FROM: $24.95</p>
                </div>
            </div>
            <a href="#" className="group border relative border-black mt-24 lg:mt-32 py-6 px-10 overflow-hidden block max-w-min text-nowrap">
                <p className="uppercase font-oswald text-[16px] lg:text-[24px] font-light group-hover:text-white z-20 relative">SEE MORE FROM THE SHOP</p>
                <div className="absolute w-full h-full top-0 right-[100%] bg-[#0f557a] z-10 group-hover:right-0 transition-all duration-300" />
            </a>
        </div>
    )
}