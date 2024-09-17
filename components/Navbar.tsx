
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import '../app/style/Navbar.css'
import { FaChevronDown } from 'react-icons/fa';
import ShinyButton from "@/components/magicui/shiny-button";



const Navbar = () => {
    return (
        <>
            <main className="main-container">
                <div className="navbar  container px-[48px] flex justify-between items-center py-[20px] bg-customblack text-white rounded-[50px]">
                    <div className="font-secondary text-[32px] leading-[48px] font-[700]">indya.ai</div>
                    <div className="flex">
                        <nav className="flex gap-[32px]">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center border-none outline-none">Product<FaChevronDown className="ml-2 text-[13px]" /></DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                                    <DropdownMenuItem className="menu rounded-[4px]">Cleo</DropdownMenuItem>
                                    <DropdownMenuItem className="menu rounded-[4px]">AI Agents</DropdownMenuItem>
                                    <DropdownMenuItem className="menu rounded-[4px]">Integrations</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center border-none outline-none">Solutions<FaChevronDown className="ml-2 text-[13px]" /></DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                                    <DropdownMenuItem className=" menu rounded-[4px]">By Industry</DropdownMenuItem>
                                    <DropdownMenuItem className="menu rounded-[4px]">By Use Case</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center border-none outline-none">Resources<FaChevronDown className="ml-2 text-[13px]" /></DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                                    <DropdownMenuItem className="menu rounded-[4px]">Blog</DropdownMenuItem>
                                    <DropdownMenuItem className="menu rounded-[4px]">Whitepapers</DropdownMenuItem>
                                    <DropdownMenuItem className="menu rounded-[4px]">Case Studies</DropdownMenuItem>
                                    <DropdownMenuItem className="menu rounded-[4px]">Webinars</DropdownMenuItem>
                                    <DropdownMenuItem className="menu rounded-[4px]">Ebooks</DropdownMenuItem>
                                </DropdownMenuContent>

                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center border-none outline-none">Company<FaChevronDown className="ml-2 text-[13px]" /></DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                                    <DropdownMenuItem className="menu rounded-[4px]">About Us</DropdownMenuItem>
                                    <DropdownMenuItem className="menu rounded-[4px]">Careers</DropdownMenuItem>
                                    <DropdownMenuItem className="menu rounded-[4px]">Contacts</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center">Pricing</DropdownMenuTrigger>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center">Demo</DropdownMenuTrigger>
                            </DropdownMenu>

                        </nav>
                    </div>
                    <div className="">
                        <ShinyButton text="Get Early Access" className="bg-primary rounded-[6px] text-black hover:text-white" />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Navbar;
