
export default function Articles({ content }){
    return(
        <div className="max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 flex flex-col items-center mb-24 md:mb-40">
            <p className="uppercase font-work text-[16px] font-medium">{content?.title}</p>
            <div className="mt-16 grid grid-cols-3 gap-5">
                {content?.article?.map((item, index) => (
                    <div key={index}>
                        <div className="overflow-hidden h-[121px] md:h-[166px] lg:h-[248px] xl:h-[331px]">
                            <img className="object-cover object-center hover:scale-110 transition-all duration-300" src={item.image?.url} />
                        </div>
                        <p className="text-[24px] lg:text-[28px] xl:text-[32px] font-oswald mt-3">{item.headline}</p>
                        <p className="text-[18px] lg:text-[18px] xl:text-[20px] font-spectral mt-3 lg:mt-0">{item.teaser}</p>
                    </div>
                ))}
                {/* <div>
                    <div className="overflow-hidden h-[121px] md:h-[166px] lg:h-[248px] xl:h-[331px]">
                        <img className="object-cover object-center hover:scale-110 transition-all duration-300" src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt018938dff49f0e14/67b10a327b43d009e67f39d0/romance.jpeg" />
                    </div>
                    <p className="text-[24px] lg:text-[28px] xl:text-[32px] font-oswald mt-3">Five Heartbreakingly Romantic Movies</p>
                    <p className="text-[18px] lg:text-[18px] xl:text-[20px] font-spectral mt-3 lg:mt-0">Touching tales of love lost and remembered for Valentine's Day</p>
                </div>

                <div>
                    <div className="overflow-hidden md:h-[166px] lg:h-[248px] xl:h-[331px] ">
                        <img className="object-cover object-center hover:scale-110 transition-all duration-300" src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt56c2338c8fc1e41b/67b10a31baca2a24f05ea908/focus.jpeg" />
                    </div>
                    <p className="lg:text-[28px] xl:text-[32px] font-oswald mt-3">Focus Features Reteams with Wes Anderson and Indian Paintbrush for The Phoenician Scheme</p>
                    <p className="lg:text-[18px] xl:text-[20px] font-spectral">Coming to theaters May 30, 2025</p>
                </div>

                <div>
                    <div className="overflow-hidden md:h-[166px] lg:h-[248px] xl:h-[331px]">
                        <img className="object-cover object-center hover:scale-110 transition-all duration-300" src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt5cf3c492d12ee21f/67b10a32c159548692515faa/thrills.jpeg" />
                    </div>
                    <p className="lg:text-[28px] xl:text-[32px] font-oswald mt-3">Thrilling Movies to Watch in February</p>
                    <p className="lg:text-[18px] xl:text-[20px] font-spectral">Five movies for any mood to stream on Peacock this month.</p>
                </div> */}
            </div>

            <a 
                href={content?.page?.length > 0 ? content.page[0].url : "#"}
                className="group border relative border-black py-6 px-10 mt-16 overflow-hidden">
                <p className="uppercase font-oswald text-[16px] lg:text-[20px] font-light group-hover:text-white z-20 relative">{content?.button_text}</p>
                <div className="absolute w-full h-full top-0 right-[100%] bg-[#0f557a] z-10 group-hover:right-0 transition-all duration-300" />
            </a>
        </div>
    )
}