"use client";
import ShinyButton from "@/components/magicui/shiny-button";
import Tag from "@/components/Tag";
import type { NextPage } from "next";
import Image from "next/image";
import HeroImage from "../../public/assets/cleo/heroImage.png";
import "../style/Cleo.css";
import ImageCard from "@/components/ImageCard";
import MiniCard from "@/components/MiniCard";
const login: NextPage = () => {
  return (
    <>
      <section className="header-section w-[100%] lg:px-20 h-auto pb-3">
        <main className="container w-full h-[600px] pt-[194px]">
          <div className="w-2/3 mx-auto">
            <div className="flex justify-center mb-3">
              <Tag title="Product" />
            </div>
            <h1 className="text-[50px] leading-[64px] font-bold text-primary text-center">
              Cleo: Your Ultimate AI-Powered Cloud Security Companion
            </h1>
            <p className="w-3/4 mx-auto py-[16px] font-[400] text-primary text-[16px] leading-[24px] text-center">
              Cleo is an intelligent AI-driven platform designed to enhance your
              cloud security posture. With Cleo, you gain deep insights,
              real-time threat detection, and actionable recommendations to
              protect your cloud environment
            </p>
            <div className="flex justify-center mt-3">
              <ShinyButton
                text="Get Early Access"
                className="bg-primary rounded-[6px] text-black hover:text-white"
              />
            </div>
          </div>
        </main>
        <section className="container">
          <figure>
            <Image
              src={HeroImage}
              alt="Contact Us Image"
              width={1250}
              height={752}
            />
          </figure>
        </section>
      </section>
      <section className="container-fluid bg-black h-[100vh]">
        <div className="container bg-slate-500 h-[100vh]">
          <div className="flex justify-center flex-col items-center gap-3 pt-10">
            <h2 className="text-primary text-center font-bold text-[40px] leading-[50px]">
              Core Features of Cleo
            </h2>
            <p className="text-primary text-center text-[16px] leading-[24px] font-[400]">
              Cleo offers seamless multi-cloud support, continuous learning, and{" "}
              <br /> automated compliance management.
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-black">
        <div className="flex flex-col items-center gap-3 justify-center pt-20 pb-5">
          <h2 className="text-primary text-center font-bold text-[40px] leading-[50px]">
            AI Agents
          </h2>
          <p className="text-primary text-center text-[16px] leading-[24px] font-[400]">
            Harness the power of specialized AI Agents with Cleo to enhance{" "}
            <br /> your cloud management and security.
          </p>
        </div>
        <div className="container flex justify-between gap-6 pt-3 px-3">
          <div className="bg-red-200 w-1/3 h-[400px]"></div>
          <div className="flex flex-col gap-3 h-auto p-3 relative">
            <ImageCard
              backgroundImage="/assets/bg.png"
              imageSrc="/assets/cleo/a.png"
              imageSrc2="/assets/cleo/b.png"
              title="Discoverability Agent"
              description="Enhance visibility across your cloud environment. The Discoverability Agent identifies all assets, ensuring nothing is overlooked, and provides a clear map of your infrastructure."
              className=""
              imageSrcStyle1=""
              imageSrcStyle2="pt-20 pl-10"
            />
             <ImageCard
              backgroundImage="/assets/bannerbg.png"
              imageSrc="/assets/cleo/dash-1.png"
              imageSrc2="/assets/cleo/dash-2.png"
              title="Cloud Security Posture Management (CSPM) Agent"
              description="Maintain and improve your cloud security posture. The CSPM Agent continuously assesses your environment, identifies risks, and offers actionable recommendations to strengthen your defenses."
              className=""
              imageSrcStyle1="pt-10 absolute left-4 top-0"
              imageSrcStyle2="absolute right-4 top-0 "
            />
            <ImageCard
              backgroundImage="/assets/bannerbg.png"
              imageSrc="/assets/cleo/curvea.png"
              imageSrc2="/assets/cleo/curveb.png"
              title="Cost Optimization Agent"
              description="Maximize cost efficiency with the Cost Optimization Agent. It analyzes usage patterns and identifies opportunities for savings, helping you optimize resource allocation and reduce expenses."
              className=""
              imageSrcStyle1="pt-10 absolute left-20 top-2 w-[346px] "
              imageSrcStyle2="absolute right-20 top-12 w-[346px] "
            />
            <ImageCard
              backgroundImage="/assets/blackbg.png"
              imageSrc="/assets/cleo/circle.png"
              imageSrc2=""
              title="Compliance and Regulatory Agent"
              description="Stay compliant with ease. The Compliance and Regulatory Agent monitors your adherence to industry standards and regulations, automates reporting, and provides guidance to close compliance gaps."
              className=""
              imageSrcStyle1=" w-[346px] "
              imageSrcStyle2=""
            />
             <ImageCard
              backgroundImage="/assets/blackbg.png"
              imageSrc="/assets/cleo/group-3.png"
              imageSrc2=""
              title="Compliance and Regulatory Agent"
              description="Stay compliant with ease. The Compliance and Regulatory Agent monitors your adherence to industry standards and regulations, automates reporting, and provides guidance to close compliance gaps."
              className=""
              imageSrcStyle1="w-[756px] pt-1"
              imageSrcStyle2=""
            />
            {/* <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard /> */}
          </div>
        </div>
      </section>
      {/* ================Advance Functionality================== */}
      <section className="bg-black container-fluid">
        <div className="container">
          <div className="flex flex-col items-center gap-3 pt-20 pb-10">
            <h2 className="text-primary text-center font-bold text-[40px] leading-[50px]">
              Advanced Functionalities
            </h2>
            <p className="text-primary text-center font-[400] text-[16px] leading-[24px]">
              Unlock strategic value with Cleo's high-level AI insights and
              tailored recommendations for cloud resource <br /> management,
              enhancing security and efficiency across your cloud
              infrastructure.
            </p>
          </div>
          <div className="flex justify-center gap-3">
            {/* <ImageCard /> */}
            {/* <ImageCard /> */}
          </div>
        </div>
      </section>
      {/* ================User Benefits ================== */}
      <section className="bg-black container-fluid mb-5">
        <div className="container">
          <div className="flex flex-col items-center gap-3 pt-20 pb-10">
            <h2 className="text-primary text-center font-bold text-[40px] leading-[50px]">
              Use Cases or Benefits
            </h2>
            <p className="text-primary text-center font-[400] text-[16px] leading-[24px]">
              Unlock strategic value with Cleo's high-level AI insights and
              tailored recommendations for cloud resource <br />
              management, enhancing security and efficiency across your cloud
              infrastructure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <MiniCard
              title="Multi-Cloud Environment"
              description="Managing security across multiple cloud providers can be complex and time-consuming."
            />
            <MiniCard
              title="Proactive Threat Mitigation"
              description="Identifying and responding to evolving threats in a timely manner is challenging."
            />
            <MiniCard
              title="Ensuring Compliance"
              description="Maintaining compliance with multiple industry standards and regulations is resource."
            />
            <MiniCard
              title="Optimizing Cloud Costs"
              description="Unchecked cloud resource usage can lead to be excessive costs."
            />
            <MiniCard
              title="Enhancing Visibility and Control"
              description="Lack of visibility into cloud assets and configurations can lead to security gaps."
            />
            <MiniCard
              title="Vulnerability Management"
              description="Identifying and prioritizing vulnerabilities in a large cloud environment is difficult."
            />
            <MiniCard
              title="Informed Decision-Making"
              description="Making data-driven decisions without clear insights can be challenging."
            />
            <MiniCard
              title="Streamlined Incident"
              description="Coordinating an effective response to security incidents can be complex."
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default login;
