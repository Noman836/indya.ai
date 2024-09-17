import Image from "next/image";
import "../app/style/RealTime.css";
import RealTime from "../public/assets/das.png";
import Usage from '../public/assets/1.png'
import cis from '../public/assets/4.png';
import iso from '../public/assets/5.png';
import gdpr from '../public/assets/6.png'
const SectionLayout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 p-4">
      {/* Row 1 */}
      <div className="realtime rounded-[12px] border p-4 flex items-left h-[570px] flex-col col-span-2 row-span-2 ">
        <h2 className="text-xl font-bold text-primary pb-2">
          Real-Time Threat Detection
        </h2>
        <h3 className="text-primary pb-2">Detect under 2 seconds</h3>
        <p className="text-primary pb-2">
          Monitor and neutralize threats instantly with our real-time AI
          technology. Detects and mitigates threats in <br />
          under 2 seconds.
        </p>
        <div className="w-full flex justify-center mt-20 mb-10 ">
          <span className="text-primary font-[400] px-[12px] py-[4px] text-[12px] leading-[18px] rounded-[30px] border-boxBorderColor bg-boxbgColor">Multi-Cloud Environment Support ✨</span>
        </div>
        <div className="realtime-img">
        <Image
          src={RealTime}
          alt="Contact Us Image"
          width={820}
          height={395}
          className="realtime_image"
        ></Image>
        </div>
      </div>
      <div className="Automated rounded-[12px] border p-4 h-[219px] flex items-center justify-center">
      </div>
      <div className="integrated-dashboard rounded-[12px] border row-span-4 h-[582px]  flex-col p-4 flex items-start overflow-hidden">
      <h2 className="text-xl font-bold text-primary pb-2">Integrated Dashboard</h2>
        <h3 className="text-xl font-bold text-primary pb-2">24/7 monitoring</h3>
        <p className="text-primary pb-2">Manage all security aspects from a <br /> centralised, user-friendly dashboard. 24/7 <br /> monitoring and reporting.</p>
        <div className="cpu-usage flex justify-center w-full relative mt-3">
          <Image
            src={cis}
            alt="Contact Us Image"
            width={250}
            height={184}
            className="realtime_image"
          ></Image>
          <div className="cpu-usage flex justify-center w-full absolute top-[100px]">
          <Image
            src={iso}
            alt="Contact Us Image"
            width={300}
            className="realtime_image"
          ></Image>
          </div>
          <div className="cpu-usage flex justify-center w-full absolute top-[230px]">
          <Image
            src={gdpr}
            alt="Contact Us Image"
            width={550}
            height={300}
            className="realtime_image"
          ></Image>
          </div>
        </div>
      </div>
      <div className="integrated-dashboard rounded-[12px] border row-span-4 h-[586px] flex-col p-4 flex items-start overflow-hidden">
        <h2 className="text-xl font-bold text-primary pb-2">Integrated Dashboard</h2>
        <h3 className="text-xl font-bold text-primary pb-2">24/7 monitoring</h3>
        <p className="text-primary pb-2">Manage all security aspects from a <br /> centralised, user-friendly dashboard. 24/7 <br /> monitoring and reporting.</p>

        <div className="cpu-usage flex justify-center w-full relative mt-3">
          <Image
            src={Usage}
            alt="Contact Us Image"
            width={250}
            height={184}
            className="realtime_image"
          ></Image>
          <div className="cpu-usage flex justify-center w-full absolute top-[100px]">
          <Image
            src={Usage}
            alt="Contact Us Image"
            width={300}
            className="realtime_image"
          ></Image>
          </div>
          <div className="cpu-usage flex justify-center w-full absolute top-[230px]">
          <Image
            src={Usage}
            alt="Contact Us Image"
            width={550}
            height={300}
            className="realtime_image"
          ></Image>
          </div>
        </div>
      </div>
       
      <div className="rounded-[12px] robust border row-span-2 h-[219px] p-4 flex items-center justify-center">
        
      </div>
      <div className=" rounded-[12px] realtime border flex-col  mt-[-10px] col-span-2 h-[586px] p-4 flex items-start">
        <h2 className="text-xl font-bold text-primary pb-2">
        Seamless Integration
          </h2>
          <h3 className="text-primary pb-2 text-left">50+ integrations</h3>
          <p className="text-primary pb-2">
          Easily integrate with existing tools and workflows for a smooth experience. Supports over 50 integrations.
          </p>
          <div className="w-full flex justify-center mt-20 mb-10 ">
            <span className="text-primary font-[400] px-[12px] py-[4px] text-[12px] leading-[18px] rounded-[30px] border-boxBorderColor bg-boxbgColor">Multi-Cloud Environment Support ✨</span>
          </div>
          <div className="realtime-img">
          <Image
            src={RealTime}
            alt="Contact Us Image"
            width={820}
            height={395}
            className="realtime_image"
          ></Image>
          </div>
        </div>
        <div className="customizable rounded-[12px] border mt-[-230px] col-start-1 h-[219px] p-4 flex items-center justify-center">
          Row 3, Column 1
        </div>
    </div>
  );
};
export default SectionLayout;
