
export default function Footer(){
    return(
        <div className="border border-t-black">
            <div className="max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 pt-24 pb-48 flex justify-between">
                <div className="font-oswald text-[16px] font-light flex gap-16">
                    <div className="flex flex-col gap-y-6">
                        <p>ABOUT US</p>
                        <p>MOTIONPICTURES.ORG</p>
                        <p>CONTACT US</p>
                        <p>CA NOTICE</p>
                        <p>AD CHOICES</p>
                        <p>© 2024 Focus Features. A Comcast Company.</p>
                    </div>

                    <div className="flex flex-col gap-y-6">
                        <p>INSIDER</p>
                        <p>FIMRATINGS.ORG</p>
                        <p>TERMS OF USE</p>
                        <p>PRIVACY POLICY</p>
                        <p>YOUR PRIVACY CHOICES</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className="font-work text-[16px] tracking-tight font-medium">CONNECT WITH FOCUS FEATURES</p>
                    <div className="flex mt-5 gap-10">
                        <img src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/bltacd8f7e432f38062/67b1f5a76a26d62120543729/focus_Facebook_Icon_4527bc89a1.svg" />
                        <img src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt82e6e647ee3bf327/67b1f677254c9b15f2eacc9d/focus_Instagram_Icon_5a79e80a74.svg" />
                        <img src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/bltbe9fdb73c8217500/67b1f5a724d33162ac74975a/tiktok_logo_f7e6410990.jpeg" />
                        <img src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt967d597f1934dc11/67b1f5a7890f9126c851de09/focus_X_Icon_4fd00778dc.svg" />
                        <img src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt32d4937aebb07642/67b1f5a7286df096f0f38def/focus_Youtube_Icon_331931cf15.svg" />
                        <img src="https://images.contentstack.io/v3/assets/blt942b6d9738065ec9/blt850949253e4b5374/67b1f5a7f17848a15a2bdf00/linkedin_logo_21a2cab56e.jpeg" />
                    </div>
                </div>
            </div>
        </div>
    )
}