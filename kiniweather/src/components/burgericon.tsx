import { useState } from 'react';
import { CloudSunRain, Moon, Sun, Menu, X } from 'lucide-react'

export default function BurgerIcon(){

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
    }
    return(
        <>
            <div className="burgericondiv sticky top-0 z-10">
                <div className='bg-[#171c32] text-white py-4 px-2 flex justify-between items-center'>
                    <h3 className="bugericonheading flex "><CloudSunRain/>THE WEATHER</h3>
                    <div className='cursor-pointer' onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>                   
                </div>

                {isOpen && (
                    <div className="bg-[#171c32] text-white text-center">
                        <a href='linktothispage' className='burgeroptiondiv block mx-40'><p className="py-3">Weather</p></a>
                        <a href='linktoCities' className='burgeroptiondiv block mx-40'><p className="py-3">Cities</p></a>
                        <a href='linktoMaps' className='burgeroptiondiv block mx-40'><p className="py-3">Map</p></a>
                        <a href='linktoSettings' className='burgeroptiondiv block mx-40'><p className="py-3">Settings</p></a>
                        <a href='linktoAccount' className='burgeroptiondiv block mx-40'><p className="py-3">Account</p></a>
                        <div className='flex gap-1 justify-center text-center py-4'>
                            <button type="button">
                                <Moon classname=""/>
                            </button>
                            <button type="button">
                                <Sun classname=""/>
                            </button>
                        </div>
                    </div>
                )}
            </div> 
        </>
    )
}
