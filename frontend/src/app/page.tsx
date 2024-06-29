import NavBar from '@/components/customcomponents/NavBar'
import { Lexend_Exa } from 'next/font/google'
const lex = Lexend_Exa({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 pt-16 container text-[#D0D0D0] z-10">
      <img src="/noderizz.svg" alt="" className='h-screen fixed top-0 right-5' />
      <NavBar />
      <section className='flex flex-col items-center justify-center h-screen pt-20 w-full p-10'>
        <div className='flex flex-col w-full h-full justify-center'>
          <div className='text-5xl leading-snug font-extrabold p-4'>
            BUILD NODE BACK-END&nbsp;
            <br />
            LIKE NEVER BEFORE&nbsp;
            <br />
            USING AI WITH&nbsp;
            <br />
            NODE RIZZ
          </div>
          <div className='flex p-4 gap-6'>
            <a href="/docs" className='bg-[#DEDEDE] flex items-center justify-center rounded-sm p-3 text-[#454545] font-semibold text-xs'>
              GET STARTED
            </a>
            <a href="/docs" className='bg-[#DEDEDE00] border  flex items-center justify-center rounded-sm p-3 text-[#ffffff] font-medium text-xs'>
              READ DOCS
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}