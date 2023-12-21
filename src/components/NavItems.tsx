"use client"

import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react"
import NavItem from "./NavItem";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const isAnyOpen = activeIndex !== undefined

  return (
    <div className="flex h-full gap-4">
        {
            PRODUCT_CATEGORIES?.map((category, i) => {
               
                const handleOpen = () => {
                    if(activeIndex === i){
                        setActiveIndex(null)
                    }
                    else{
                        setActiveIndex(i)
                    }
                }

                const isOpen = i === activeIndex

                return <NavItem  
                    category={category}
                    handleOpen={handleOpen}
                    isOpen={isOpen}
                    isAnyOpen={isAnyOpen}
                    key={category.value}
                />
            })
        }
    </div>
  )
}

export default NavItems