import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="p-2 flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Link href="/">
            <Image src="/logo.svg" alt="ZDoc" width={36} height={36}/>
            </Link>
            <div className="flex flex-col" >
                {/*Doc input*/}
                {/*menubar*/}
            </div>
            </div>
        </nav>
    )
}