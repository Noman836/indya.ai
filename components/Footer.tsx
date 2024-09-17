import '../app/style/Footer.css'
import facebook from '../public/assets/socialIcons/facebook(5).png'
import x from '../public/assets/socialIcons/Group (1).png'
import instagram from '../public/assets/socialIcons/Layer 2.png'
import linkedIn from '../public/assets/socialIcons/Group (2).png'
import down from '../public/assets/cleo/down.png'
import check from '../public/assets/cleo/check.png'
import Image from 'next/image'
const Footer = () => {
    return (
        <>
        <footer className="container-fluid footer">
            <div className='container flex gap-5 pt-[59px]'>
                <div className='flex flex-col w-1/4'>
                    <ul>
                        <li className='font-bold text-primary pb-5'>Products</li>
                        <li className='underline text-primary'>Cleo</li>
                        <li className='text-secondary'>AI Agents</li>
                        <li className='text-secondary'>Integration</li>
                    </ul>
                </div>
                <div className='flex flex-col w-1/4'>
                    <ul>
                        <li className='font-bold text-primary pb-5'>Solution</li>
                        <li className='text-secondary'>By Industry</li>
                        <li className='text-secondary'>By Use Case</li>
                    </ul>
                </div>
                <div className='flex flex-col w-1/4'>
                    <ul>
                        <li className='font-bold text-primary pb-5'>Resources</li>
                        <li className='text-secondary'>Blog</li>
                        <li className='text-secondary'>Witepapers</li>
                        <li className='text-secondary'>Case Studies</li>
                        <li className='text-secondary'>Webinars</li>
                        <li className='text-secondary'>EBooks</li>
                    </ul>
                </div>
                <div className='flex flex-col w-1/4'>
                    <ul>
                        <li className='font-bold text-primary pb-5'>Company</li>
                        <li className='text-secondary'>About Us</li>
                        <li className='text-secondary'>Careers</li>
                        <li className='text-secondary'>Partners</li>
                        <li className='text-secondary'>Customers</li>
                        <li className='text-secondary'>Contact</li>
                    </ul>
                </div>
                <div className='flex flex-col w-1/4'>
                    <ul>
                        <li className='font-bold text-primary pb-5'>Legal</li>
                        <li className='text-secondary'>Privacy Policy</li>
                        <li className='text-secondary'>Term of Services</li>
                        <li className='text-secondary'>Security</li>
                    </ul>
                </div>
                <div className='flex flex-col w-1/4'>
                    <ul>
                        <li className='font-bold text-primary pb-5'>Others</li>
                        <li className='text-secondary'>Product Preview</li>
                        <li className='text-secondary'>Affiliatea</li>
                    </ul>
                </div>
            </div>
            <hr className='container mt-[48px]' />
            <div className='container mt-[35px] flex justify-between items-center'>
                <div>
                    <h2 className='text-[20px] text-primary font-bold leading-[30px]'>We protect your security and privacy.</h2>
                </div>
                <div className='flex gap-[28px]'>
                <div className='flex items-center gap-1'>
                  <span className='text-primary font-[400] flex text-[16px] leading-[24px]'> <Image src={check} alt="Contact Us Image" width={16} height={16} />SOC2</span><span className='text-secondary font-[400] text-[14px] leading-[21px]'>Certified</span>
                  </div>  
                  <div className='flex items-center gap-1'>
                  <span className='text-primary font-[400] flex text-[16px] leading-[24px]'> <Image src={check} alt="Contact Us Image" width={16} height={16} />GDPR</span><span className='text-secondary font-[400] text-[14px] leading-[21px]'>Complaint</span>
                  </div>  
                  <div className='flex items-center gap-1'>
                  <span className='text-primary font-[400] flex text-[16px] leading-[24px]'>  <Image src={check} alt="Contact Us Image" width={16} height={16} />HIPAA</span><span className='text-secondary font-[400] text-[14px] leading-[21px]'>Complaint</span>
                  </div>  
                  <div className='flex items-center gap-1'>
                  <span className='text-primary font-[400] text-[16px] flex leading-[24px]'>
                <Image src={check} alt="Contact Us Image" width={16} height={16} />
                    ISO 27001</span><span className='text-secondary font-[400] text-[14px] leading-[21px]'>Certified</span>
                  </div>      
                </div>
                <div className='flex justify-between items-center gap-[16px]'>
                <Image src={facebook} alt="Contact Us Image" width={24} height={24} />
                <Image src={x} alt="Contact Us Image" width={24} height={400} />
                <Image src={instagram} alt="Contact Us Image" width={24} height={24} />
                <Image src={linkedIn} alt="Contact Us Image" width={24} height={24} />
                </div>
            </div>
            <div className='container mt-[51px] flex justify-between items-center bg-customblack px-[48px] py-[16px] rounded-[72px]'>
                <div className='text-primary font-secondary font-[700] text-[32px] leading-[48px]'>inya.ai</div>
                <div className='text-secondary text-[14px] leading-[21px]'>© 2024 indya.ai. All rights reserved.</div>
                <div className='text-primary text-[16px] font-[400] leading-[24px] flex items-center gap-1'>Legal <span>
                <Image src={down} alt="Contact Us Image" width={16} height={16} />
                    </span></div>
            </div>
        </footer>
        </>
    )       
}
export default Footer;