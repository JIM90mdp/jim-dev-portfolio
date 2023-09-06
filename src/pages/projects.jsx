import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../public/images/projects/song-challenge.png";
import project2 from "../../public/images/projects/mmc-servicios-juridicos.png";
import project3 from "../../public/images/projects/groove-tickets.png";
import project4 from "../../public/images/projects/jim-countries.png";
import { GithubIcon } from "@/components/Icon";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light py-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-cneter justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Works and Projects"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="col-span-12">
            <div className="col-span-12  mb-10">
              <FeaturedProject
                type="Featured Project"
                title="Song-Challenge"
                summary="Application that challenges musicians&#39; creativity by generating random prompts for composing music. Developed using Python and Django."
                img={project1}
                link="https://song-challenge.fly.dev/"
                github="https://github.com/JIM90mdp/song-challenge"
              />
            </div>

            <div className="col-span-12 mb-10">
              <FeaturedProject
                type="Featured Project"
                title="MMC - Servicios Jurídicos"
                summary="Web application for a lawyer customer, allowing users to learn about the legal services provided, submit free legal inquiries, and access information related to legal services. Developed using JavaScript, React.js, Next.js, CSS and Framer Motion"
                img={project2}
                link="/"
                github="/"
              />
            </div>

            <div className="col-span-12 mb-10">
              <FeaturedProject
                type="Featured Project"
                title="Grove-Tickets e-commerce"
                summary="Developed an ecommerce website to sell tickets for live music concerts, using JavaScript, React, Redux, Node, Express,  React Admin for dashboard, PostgreSQL, and Sequelize"
                img={project3}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-12 mb-10">
              <FeaturedProject
                type="Featured Project"
                title="JIM Countries"
                summary="The purpose of J.I.M+'s Countries website application is to provide information about all countries in the world and create activities, making the tourist trip planning easier. The information is provided by RESTful Application Program Interface restcountries.com. Developed using Node, Express, JavaScript, React.js, Redux.js, PostgreSQL, Sequelize and CSS"
                img={project4}
                link="/"
                github="/"
              />
            </div>

            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
