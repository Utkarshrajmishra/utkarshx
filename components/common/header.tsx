import Link from "next/link"
import Wrapper from "./wrapper"
import Image from "next/image"
import { HeaderConfig } from "@/config/header"

const Header=()=>{
    return(
        <Wrapper className="sticky top-0 z-20  py-4 backdrop-blur-sm">
            <div className="flex items-center justify-between px-6">
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
                    { HeaderConfig.navItems.map((item)=>(
                        <Link
                         className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                         key={item.label}
                         href={item.href}>
                            {item.label}
                        </Link>
                    )) }

                </div>
                </div>

            </div>
        </Wrapper>
    )
}

export default Header;