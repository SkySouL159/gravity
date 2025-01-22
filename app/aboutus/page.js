import Founders from "@/Components/ui/Founders";
import React from "react";
import SocialCards from "./Socialmedia";
import Link from "next/link";
import { Map } from "./Map";
import { Ourteam } from "@/Components/Ourteam";

const page = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 text-center mt-8 mb-2">
        {" "}
        ABOUT US
      </h2>
      <div className="text-center">
        <p className="text-sm sm:text-lg text-black mt-2 sm:mt-4 text-justify px-2">
          Gravity Films was originally build by young creators with creative
          minds and a skilled tech team.
        </p>
        <p className="text-sm sm:text-lg text-black mt-2 sm:mt-4 text-justify px-2">
          At Gravity Films, we strive to deliver creative digital content
          solutions to our clients, meeting the needs of e-commerce and
          commercial brands. We don't just focus on filmmaking; we excel in
          content creation and digital branding across all mediums. Our niche
          lies in fashion brands, e-commerce shoots, and a more comprehensive
          approach to every solution.
        </p>
        <p className="text-sm sm:text-lg text-black mt-2 sm:mt-4 text-justify px-2">
          Our unified offerings are designed to elevate brands and enhance their
          marketing impact in the digital and social networking world.
        </p>
      </div>
      <section>
        <h2 className="text-2xl font-bold text-gray-800 text-center mt-8">
          {" "}
          OUR STORY
        </h2>
        <p className="text-sm sm:text-lg text-black mt-2 sm:mt-4 text-justify px-2">
          Our story begins in a small town, where a team with big dreams started
          from scratch. We had a rough plan to launch a creative media agency,
          focusing on making our brand identity creating content that made
          sense—believing in the idea that gravity attracts everything in
          filmmaking and creative media
        </p>
        <p className="text-sm sm:text-lg text-black mt-2 sm:mt-4 text-justify px-2">
          Gravity Films started as an Instagram page, where we quickly landed
          some exciting projects. As our quality and skills improved, we
          expanded by adding a new team member and eventually decided to
          establish an office. With our enhanced services, we gained widespread
          appreciation for our work.
        </p>
        <p className="text-sm sm:text-lg text-black mt-2 sm:mt-4 text-justify px-2">
          As we continue to grow day by day, we've become a team of 15
          individuals. Looking ahead, our vision is to expand this team to
          include 100+ creative young minds. Our success lies in leading brands,
          major companies, and fostering a productive aura of creativity, guided
          by the motto that fortune always grows. We aim to scale globally
          collaborating with larger brands and strengthening our powerful
          community in the digital world.
        </p>
        <p className="text-sm sm:text-lg text-black mt-2 sm:mt-4 text-justify px-2">
          In filmmaking, we've built a tech-savvy team, and our journey has been
          a smooth one as we've developed brands through designing and creating
          content that resonates powerfully in the ever-evolving meta world of
          online presence and marketing.
        </p>
      </section>
      <section className="Ourteam">
        <h2 className="text-2xl font-bold text-gray-800 text-center mt-8">
          {" "}
          MEET OUR TEAM MEMBERS
        </h2>
        <Founders />
        <Ourteam />
      </section>
      <section className="Socialmedialinks">
        <h2 className="text-2xl font-bold text-gray-800 text-center mt-8">
          {" "}
          CONTACT US
        </h2>
        <SocialCards />
      </section>
      <section className="LOCATE US ">
        <h2 className="text-2xl font-bold text-gray-800 text-center mt-8">
          {" "}
          LOCATE US
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap lg:px-10">
          <Link href="https://maps.app.goo.gl/ya5vhXJA29HZLBN69">
            <div className="flex flex-col text-sm sm:text-lg text-black mt-2 sm:mt-4 text-justify px-2">
              <span>Siyaram Skyline,</span>
              <span>Near, At, near Our Lady Of Help English School,</span>
              <span>Samarvarni, Silvassa,</span>
              <span>Dadra and Nagar Haveli and Daman and Diu </span>
              <span>396230 India</span>
              <span>
                Planet Earth, Milky Way Galaxy, Observable Universe, ∞.
              </span>
            </div>
          </Link>
          <div className="w-full lg:w-auto lg:ml-4 mt-4 lg:mt-0 flex  lg:justify-start">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
