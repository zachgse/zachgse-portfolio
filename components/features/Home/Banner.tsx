"use client"
import { Typewriter } from 'react-simple-typewriter'
import { Calendar } from 'lucide-react'

const Banner = () => {
    const date = new Date();
    const formatted = date.toUTCString().split(" ").slice(0, 4).join(" ");

    return  (
        <>
            <div className="absolute top-4 left-4 flex items-center text-xs gap-2">
                <Calendar size={16}/>
                {formatted}
            </div>
            <img src="../assets/img/banner.jpg" alt="Banner" className="w-full h-60 object-cover rounded-lg"/>
            <div className="absolute bottom-4 left-4">
                <p className="text-white mt-auto lg:text-3xl text-xl">
                    <Typewriter
                        words={[
                            'Welcome to my portfolio!', 
                            'Small steps, big impact',
                            'Crafting code with care', 
                            'Breaking things to build better']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={80}
                        deleteSpeed={60}
                        delaySpeed={1500}
                    />
                </p>
            </div>
        </>
    )
}

export default Banner;