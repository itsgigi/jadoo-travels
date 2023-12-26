import { Envelope } from '@phosphor-icons/react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { NewsletterTexts } from '../particles/DataLists'
import ReactGA from "react-ga";
import { useRef } from 'react';

export const SubscribeForm = () => {
    const emailRef = useRef<any>();

    const handleClick = () => {
        ReactGA.event(emailRef.current.value)
    }
        
    return (
        <form className='flex md:flex-row flex-col items-stretch gap-2'>
            <Input ref={emailRef} containerClass='relative' inputClass='border-none rounded-lg outline-none w-[300px] h-[50px] focus:outline-none text-color3 pr-4 pl-9 py-1' type="email" placeholder={NewsletterTexts.placeholderText}>
                <div className='absolute top-4 left-3 text-color3/80'>
                    <Envelope size={18} color="currentColor" weight="fill" />
                </div>
            </Input>
            <Button type='submit' className='border-none outline-none bg-color1 py-2 px-6 text-white font-light text-base rounded-lg' onClick={handleClick}>
                {NewsletterTexts.buttonText}
            </Button>
        </form>
    )
}
