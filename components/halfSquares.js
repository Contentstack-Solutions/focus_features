
export default function HalfSquares(){
    return(
        <div className="relative max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 flex mb-24 md:mb-40">
            <div className="w-1/2 flex lg:items-center pl-[60px] ">
                <div className="w-full lg:pl-[36px] xl:pl-[80px] text-black ">
                    <p className="font-work font-semibold text-[16px] uppercase">Focus Insider</p>
                    <p className="max-md:max-w-[220px]  font-oswald tracking-tight text-[40px]/[44px] mt-4 lg:text-[52px] xl:text-[64px]">Become a Focus Insider</p>
                    <p className="max-w-[180px] md:max-w-[260px] lg:max-w-[500px] font-spectral font-medium text-[18px]/[27px] md:text-[20px] mt-3 md:mt-5 lg:mt-10">Join our film-loving community for FREE to unlock access to Insider-only events, giveaways, advance screenings, and more.</p>

                    <a href="#" className="group border relative overflow-hidden border-black hover:border-opacity-0 py-6 px-10 mt-4 md:mt-6 lg:mt-10 block max-w-min text-nowrap font-oswald text[16px] lg:text-[24px] uppercase  transition-all duration-300">
                        <p className="relative z-20 group-hover:text-white font-light">Join Now</p>
                        <div className="absolute w-full h-full top-0 right-[100%] bg-[#0f557a] z-10 group-hover:right-0 transition-all duration-300" />
                    </a>
                </div>
            </div>

            <div className="w-1/2">
                <img className="h-[276px] w-[276px] md:h-[400px] md:w-[400px] lg:h-[559px] lg:w-[559px] xl:h-[743px] xl:w-[743px] object-cover" src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt9e5edb41aebff838/67b14292f178484f7c2bde2a/insider.jpeg" />
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[40%]">
                <img className="animate-spin w-[248px] h-[248px] md:w-[338px] md:h-[338px] lg:w-[503px] lg:h-[503px] xl:w-[668px] xl:h-[668px]" src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/bltf2a11fae0b4c9329/67b14dde480898147ecb907c/ring.png" />
            </div>
            
        </div>
    )
}