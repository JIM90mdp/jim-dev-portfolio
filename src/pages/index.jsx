import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icon';
import HireMe from '@/components/HireMe';
import profilePic from '../../public/images/profile/developer-pic-1.png';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>JIM-DEV</title>
        <meta name='description' content='Web Developer UI/UX Designer' />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image
                src={profilePic}
                alt='CodeBucks'
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text='Every second counts. Programming the path to success.'
                className='!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              As a full-stack developer with expertise in turning ideas into innovative web applications, <br/> I invite you to explore my background and my latest projects, showcasing my proficiency in React.js, Next.js, Tailwind, and other cool libraries.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='/jimcv.pdf'
                  target={'_blank'}
                  className='flex items-center bg-dark text-light px-6 py-2.5 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:py-2 md:px-4 md:text-base'
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href='mailto:juanignaciomascarenhas@gmail.com'
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Codebucks' className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}
