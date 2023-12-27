import { Envelope } from '@phosphor-icons/react'
import { Input } from '../atoms/Input'
// import { Button } from '../atoms/Button'
import { NewsletterTexts } from '../particles/DataLists'
// import ReactGA from "react-ga";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const SubscribeForm = () => {
    // const emailRef = useRef<any>();

    const form = useRef<any>();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_wnglck9', 'template_4gzz7xp', form.current!, 'vzrQ1NC5H1YDs527U')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("Grazie per l'interesse, sarai ricontatto una volta pronta la versione beta!")
    };

    // const handleClick = () => {
    //     ReactGA.event(emailRef.current.value)
    // }
        
    return (
        <form ref={form} onSubmit={sendEmail} className='flex md:flex-row flex-col items-stretch gap-2'>
            <div></div>
            <Input containerClass='relative' inputClass='border-none rounded-lg outline-none w-[300px] h-[50px] focus:outline-none text-color3 pr-4 pl-9 py-1' name="user_email" type="email" placeholder={NewsletterTexts.placeholderText}>
                <div className='absolute top-4 left-3 text-color3/80'>
                    <Envelope size={18} color="currentColor" weight="fill" />
                </div>
            </Input>
            <button type="submit" value="Send" className='border-none outline-none bg-color1 py-2 px-6 text-white font-light text-base rounded-lg' onSubmit={sendEmail}>INVIA</button>
        </form>
    )
}
