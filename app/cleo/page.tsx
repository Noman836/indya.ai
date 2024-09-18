"use client";
import Tag from "@/components/Tag";
import type { NextPage } from "next";
import Image from "next/image";
import HeroImage from "../../public/assets/cleo/heroImage.png";
import "../style/Cleo.css";
import ImageCard from "@/components/ImageCard";
import MiniCard from "@/components/MiniCard";
import ReadyToExperience from "@/components/ReadyToExperience";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SectionLayout from "@/components/SectionLayout";
const login: NextPage = () => {
  return (
    <>
      <section className="header-section w-[100%] lg:px-20 h-auto">
        <main className="container w-full h-[600px] pt-[195px]">
          <div className="w-2/3 mx-auto">
            <div className="flex justify-center">
              <Tag title="Product" />
            </div>
            <h1 className="text-[50px] pt-[24px] leading-[64px] font-bold text-primary text-center">
              Cleo: Your Ultimate AI-Powered <br /> Cloud Security Companion
            </h1>
            <p className="w-3/4 mx-auto pt-[16px] font-[400] text-primary text-[16px] leading-[24px] text-center">
              Cleo is an intelligent AI-driven platform designed to enhance your
              cloud security posture. With Cleo, you gain deep insights,
              real-time threat detection, and actionable recommendations to
              protect your cloud environment
            </p>
            <div className="flex justify-center pt-[32px]">
              <Button className="bg-primary rounded-[6px] px-[36px] py-[12px] text-colorBlack font-[600] hover:bg-primary">
                Get Early Access
              </Button>
            </div>
          </div>
        </main>
        <section className="container m-auto pt-[20px]">
          <figure>
            <Image
              src={HeroImage}
              alt="Contact Us Image"
              width={1500}
              height={800}
            />
          </figure>
        </section>
      </section>
      <section className="container-fluid bg-black">
        <div className="container bg-slate-500 h-auto">
          <div className="flex justify-center flex-col items-center gap-3 pt-10">
            <h2 className="text-primary text-center font-bold text-[40px] leading-[50px]">
              Core Features of Cleo
            </h2>
            <p className="text-primary text-center text-[16px] leading-[24px] font-[400]">
              Cleo offers seamless multi-cloud support, continuous learning, and{" "}
              <br /> automated compliance management.
            </p>
          </div>
          <SectionLayout />
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
          <div className="flex flex-col gap-3 p-3 ">
            <ImageCard
              backgroundImage="/assets/bg.png"
              imageSrc="/assets/cleo/a.png"
              imageSrc2="/assets/cleo/b.png"
              title="Discoverability Agent"
              description="Enhance visibility across your cloud environment. The Discoverability Agent identifies all assets, ensuring nothing is overlooked, and provides a clear map of your infrastructure."
              className=""
              imageSrcStyle1="pt-1"
              imageSrcStyle2="pt-20 pl-10"
              backgroundMainImage=""
            />
            <ImageCard
              backgroundImage="/assets/cleo/lightbackground.png"
              imageSrc="/assets/cleo/dash-1.png"
              imageSrc2="/assets/cleo/dash-2.png"
              title="Cloud Security Posture Management (CSPM) Agent"
              description="Maintain and improve your cloud security posture. The CSPM Agent continuously assesses your environment, identifies risks, and offers actionable recommendations to strengthen your defenses."
              className=""
              imageSrcStyle1="pt-10 absolute left-4 top-0"
              imageSrcStyle2="absolute right-4 top-0"
              backgroundMainImage="/assets/cleo/lightbackground.png"
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
                 backgroundMainImage="/assets/cleo/background2.png"
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
              backgroundMainImage=""
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
             backgroundMainImage="/assets/cleo/background3.png"
            />
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
              Unlock strategic value with Cleo&apos;s high-level AI insights and
              tailored recommendations for cloud resource <br /> management,
              enhancing security and efficiency across your cloud
              infrastructure.
            </p>
          </div>
          <div className="flex justify-center gap-3 pt-3 px-3">
            <ImageCard
              backgroundImage=""
              imageSrc="/assets/cleo/advance-img.png"
              imageSrc2=""
              title="Compliance and Regulatory Agent"
              description="Stay compliant with ease. The Compliance and Regulatory Agent monitors your adherence to industry standards and regulations, automates reporting, and provides guidance to close compliance gaps."
              className=""
              imageSrcStyle1=""
              imageSrcStyle2=""
                backgroundMainImage=""
            />
            <ImageCard
              backgroundImage=""
              imageSrc="/assets/cleo/noiceimg.png"
              imageSrc2=""
              title="Compliance and Regulatory Agent"
              description="Stay compliant with ease. The Compliance and Regulatory Agent monitors your adherence to industry standards and regulations, automates reporting, and provides guidance to close compliance gaps."
              className=""
              imageSrcStyle1="w-[523px] h-[272px] pt-12"
              imageSrcStyle2=""
                backgroundMainImage=""
            />
          </div>
        </div>
      </section>
      {/* ================User Benefits ================== */}
      <section className="bg-black container-fluid pb-[100px]">
        <div className="container">
          <div className="flex flex-col items-center gap-3 pt-20 pb-10">
            <h2 className="text-primary text-center font-bold text-[40px] leading-[50px]">
              Use Cases or Benefits
            </h2>
            <p className="text-primary text-center font-[400] text-[16px] leading-[24px]">
              Unlock strategic value with Cleo&apos;s high-level AI insights and
              tailored recommendations for cloud resource <br />
              management, enhancing security and efficiency across your cloud
              infrastructure.
            </p>
          </div>
          <div className="flex flex-wrap gap-[30px] justify-center">
            <MiniCard
              title="Multi-Cloud Environment"
              description="Managing security across multiple cloud providers can be complex and time-consuming."
              descclasssName=""
              buttonClassName="flex text-primary gap-[10.67px] items-center"
              titleStyle=""
              showImage={true}
            />
            <MiniCard
              title="Proactive Threat Mitigation"
              description="Identifying and responding to evolving threats in a timely manner is challenging."
              descclasssName=""
              titleStyle=""
              buttonClassName="flex text-primary gap-[10.67px] items-center"
              showImage={true}
            />
            <MiniCard
              title="Ensuring Compliance"
              description="Maintaining compliance with multiple industry standards and regulations is resource."
              descclasssName=""
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
            <MiniCard
              title="Optimizing Cloud Costs"
              description="Unchecked cloud resource usage can lead to be excessive costs."
              descclasssName="h-[70px] w-[240px]"
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
            <MiniCard
              title="Enhancing Visibility and Control"
              description="Lack of visibility into cloud assets and configurations can lead to security gaps."
              descclasssName=""
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
            <MiniCard
              title="Vulnerability Management"
              description="Identifying and prioritizing vulnerabilities in a large cloud environment is difficult."
              descclasssName=""
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
            <MiniCard
              title="Informed Decision-Making"
              description="Making data-driven decisions without clear insights can be challenging."
              descclasssName=""
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
            <MiniCard
              title="Streamlined Incident"
              description="Coordinating an effective response to security incidents can be complex."
              descclasssName=""
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
          </div>
        </div>
      </section>
      <section className="container-fluid my-[100px]">
        <div className="container">
          <ReadyToExperience backgroundImage="/assets/cleo/advance-background.png" />
        </div>
      </section>
      <section className=" container-fluid ">
        <div className="container py-[100px]">
          <div className="flex flex-col items-center gap-3 pb-10">
            <h2 className="text-primary text-center font-bold text-[40px] leading-[50px]">
              Future Roadmap
            </h2>
            <p className="text-primary text-center font-[400] text-[16px] leading-[24px]">
              At Cleo, we&apos;re scommitted to continuous innovation and delivering
              the best solutions for <br />
              your cloud security and management needs.
            </p>
          </div>
          <div className="flex gap-[30px] ">
            <MiniCard
              title="MAI-Powered Security Posture Assessment"
              description="Enhance your security posture with advanced AI-driven assessments, providing deeper insights and automated recommendations for improving your cloud security."
              className="w-1/2 border border-boxBorderColor rounded-[12px]"
              buttonText="Learn More"
              buttonClassName="border text-primary border-boxBorderColor rounded-[6px] px-[19px] py-[6px]"
              descclasssName="w-[545px] text-[16px] font-[400] leading-[24px]"
              titleStyle="text-[24px] font-[700] leading-[36px]"
              showImage={false}
            />
            <MiniCard
              title="Zero Trust Security Model"
              description="Implement a robust Zero Trust Security Model to ensure continuous verification of all access requests, reducing risks and strengthening your overall security framework."
              buttonText="Learn More"
              className="w-1/2 border border-boxBorderColor rounded-[12px]"
              buttonClassName="border text-primary border-boxBorderColor rounded-[6px] px-[19px] py-[6px]"
              descclasssName="w-[545px] text-[16px] font-[400] leading-[24px]"
              titleStyle="text-[24px] font-[700] leading-[36px]"
              showImage={false}
            />
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};
export default login;
