import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"

const Navbar = () => {
  return (
    <div className='sticky inset-x-0 top-0 z-50 h-16 bg-white'>
        <div className="relative bg-white">
        <header className='relative bg-white'>
         <MaxWidthWrapper>
            <div className="border-b border-gray-200">
                <div className="flex items-center h-16">
                {/* <MobileNav /> */}
                <div className='flex ml-4 lg:ml-0'>
                <Link href='/'>
                  <Icons.logo className='w-10 h-10' />
                </Link>
              </div> 
                </div>
            </div>
         </MaxWidthWrapper>
        </header>
        </div>
    </div>
  )
}

export default Navbar