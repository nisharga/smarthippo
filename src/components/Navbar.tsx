import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
        <div className="relative bg-white">
        <header className='relative bg-white'>
         <MaxWidthWrapper>
            <div className="border-b border-gray-200">
                <div className="flex h-16 items-center">
                {/* <MobileNav /> */}
                <div className='ml-4 flex lg:ml-0'>
                <Link href='/'>
                  {/* <Icons.logo className='h-10 w-10' /> */}
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