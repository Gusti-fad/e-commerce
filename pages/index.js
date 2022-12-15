import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>???</title>
        <meta name='author' content='mxzyy' />
        <meta name='description' content='Toko Keyboard Gusti' />
      </Head>
      <Navbar />
      <div className='hero'>
        <div className='section-1'>
          <div className='ml-24 mt-32'>
            <h1 className='text-slate-900 text-[5rem] font-poppins font-bold'>Keychron K6 Pro</h1>
            <h2 className='text-slate-700 text-[2rem] font-poppins font-medium'>Rare Items, Limited Edition, 100% Original</h2>
            <button className='mt-10 ml-5 bg-slate-900 text-white font-semibold text-[24px] w-[18rem] h-[3.5rem] rounded-full'>Beli Sekarang</button>
          </div>
          <Image className='absolute top-20 right-10' src='/homeImg.png' width='800' height='300' alt=''></Image>
        </div>
        <div className='mt-[24rem] mx-24'>
          <h1 className='text-slate-900 text-[2rem] font-inter font-bold'>KENAPA HARUS DI TTGUTE STORE?</h1>
          <div className='mt-[5rem] flex flex-wrap gap-24 justify-center'>
            <div className='flex flex-col w-[25rem] h-[30rem] bg-slate-400 rounded-3xl'>

            </div>
            <div className='flex flex-col w-[25rem] h-[30rem] bg-slate-400 rounded-3xl'>

            </div>
            <div className='flex flex-col w-[25rem] h-[30rem] bg-slate-400 rounded-3xl'>

            </div>

          </div>

        </div>
        <div className='mt-[10rem] mx-24'>
          <h1 className='text-slate-900 text-[2rem] font-inter font-bold'>APA KATA MEREKA?</h1>
          <div className='mt-[5rem] flex flex-wrap gap-10 justify-center'>
            <div className='flex flex-row w-[60rem] h-[15rem] bg-slate-400 rounded-2xl'>

            </div>
            <div className='flex flex-row w-[60rem] h-[15rem] bg-slate-400 rounded-2xl'>

            </div>
            <div className='flex flex-row w-[60rem] h-[15rem] bg-slate-400 rounded-2xl'>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
