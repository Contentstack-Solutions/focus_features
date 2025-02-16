
export default function ImageAndText(){
    return(
        <div className="h-[414px] md:h-[443px] lg:h-[588px] xl:h-[678px] bg-[#141414] w-full mb-24 md:mb-40 flex">
            <div 
                className="w-1/2 bg-cover bg-center h-full"
                style={{backgroundImage: `url(https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt8f51b1a3d371bb4d/67b0eed3c159543437515f84/Nos_Merch_Gif02_11_2025_1dbfdcfe16.gif)`}}
            >
            </div>

            <div className="w-1/2 flex items-center">
                <div className="w-full pl-[36px] md:pl-[56px] lg:pl-[129px] text-white max-w-[336px] md:max-w-[516px] lg:max-w-[676px] xl:max-w-[800px]">
                    <p className="font-work font-semibold text-[16px] uppercase">Shop the Nosferatu Collection Drop</p>
                    <p className="font-oswald font-medium text-[40px]/[44px] mt-4 lg:text-[52px] xl:text-[64px]">Succumb to the Darkness</p>
                    <p className="font-spectral text-[18px]/[27px] md:text-[20px] mt-3 md:mt-2 lg:mt-10">Explore the new limited-edition merchandise in honor of Nosferatu.</p>

                    <a href="#" className="group border relative overflow-hidden border-white hover:border-opacity-0 py-6 px-10 mt-4 md:mt-6 lg:mt-10 block max-w-min text-nowrap font-oswald text[16px] lg:text-[24px] uppercase transition-all duration-300">
                        <p className="relative z-20">Shop Now</p>
                        <div className="absolute w-full h-full top-0 right-[100%] bg-[#0f557a] z-10 group-hover:right-0 transition-all duration-300" />
                    </a>
                </div>
            </div>
        </div>
    )
}