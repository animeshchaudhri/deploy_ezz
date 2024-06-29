'use client'

import NavBar from '@/components/customcomponents/NavBar'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Lexend_Exa } from 'next/font/google'
import { useState } from 'react';
const lex = Lexend_Exa({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Generate() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
     axios.post('http://localhost:4000/ai/generate', {
      prompt: inputValue
    })
      .then(function (response) {
        console.log(response);
        window.location = response.data.url;
        // window.open(response.data.url, "_blank");

      })
      .catch(function (error) {
        console.log(error);
      });
      // console.log(url);
      
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 pt-16 container text-[#D0D0D0] z-10">
      <img src="/noderizz.svg" alt="" className='h-screen fixed top-0 right-5' />
      <NavBar />
      <section className='flex flex-col items-center justify-center h-screen pt-20 w-full p-10'>
        <div className='flex flex-col w-full h-full justify-center items-center gap-10'>
          <img src="/ai.svg" alt="" />
          <form action="" className='flex flex-col gap-5 items-center justify-center' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Prompt to generate your backend' onChange={handleInputChange} value={inputValue}
              className='placeholder:text-black p-4 rounded-md bg-[#D0D0D0] w-[40rem] text-black focus-visible:outline-none ai-shadow'
            />
            <button type="submit" className='bg-[#DEDEDE] text-[#454545] rounded-sm w-40 p-2 gap-2 flex items-center justify-center'>
              <img src="/star.svg" alt="" className='w-5' />
              Generate
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}