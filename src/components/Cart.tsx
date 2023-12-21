import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { ShoppingCart } from 'lucide-react'

const Cart = () => {
  
    return (
    <Sheet>
      <SheetTrigger className='flex items-center p-2 -m-2 group'>
        <ShoppingCart className='flex-shrink-0 w-6 h-6 flex-gray-400 group-hover:text-gray-500' 
        area-hidden='true'/>   
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>0</span>
      </SheetTrigger>    
      <SheetContent className='flex flex-col w-full pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
            <SheetTitle>Cart (1)</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Cart