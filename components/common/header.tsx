import Link from "next/link"
import Wrapper from "./wrapper"
import Image from "next/image"
import { HeaderConfig } from "@/config/header"
import { Button } from "../ui/button"
import { Commands } from "./command"




const Header = () => {
    return (
        <div className="sticky top-0 z-20  py-4 w-full flex justify-center backdrop-blur-sm">
            <Wrapper className="max-auto ">
                <div className="flex items-center justify-between px-5">
                    <div className="flex place-items-baseline gap-4">
                        <Link href="/">
                            <Image
                                className="h-12 w-12 rounded-md border border-gray-200 bg-yellow-300 transition-all duration-300 ease-in-out hover-scale-90"
                                src={HeaderConfig.logo.src}
                                alt={HeaderConfig.logo.alt}
                                width={HeaderConfig.logo.width}
                                height={HeaderConfig.logo.height}
                            />
                        </Link>
                        <div className="flex items-center justify-center gap-4">
                            {HeaderConfig.navItems.map((item) => (
                                <Link
                                    className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                                    key={item.label}
                                    href={item.href}>
                                    {item.label}
                                </Link>
                            ))}

                        </div>

                    </div>
                    {/* <div className="text-xs px-2 h-8  flex items-center justify-center rounded-md gap-2 border-1 border-neutral-700 cursor-pointer  bg-gradient-to-b from-neutral-800 to-neutral-950 hover:bg-neutral-800  text-white">Search <span className="text-[0.6rem]">(Ctrl + K)</span></div> */}
                               <Commands/>

                </div>
            </Wrapper>
        </div>
    )
}

export default Header;