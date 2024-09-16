import '../app/style/Card.css';
import { StaticImageData } from 'next/image';
interface AnimatedCardProps {
    iconClass: string;
    title: string;
    backgroundImage: string | StaticImageData; 
}

const Card = ({ iconClass, title, backgroundImage }: AnimatedCardProps) => {
    return (
        <>
            <div 
                className="card w-[75%] h-[500px] flex justify-center items-center flex-col gap-3" 
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Dynamic icon */}
                <i className={iconClass}></i>
                
                {/* Dynamic title */}
                <h1 className='text-center text-primary text-[40px] font-[700] leading-[50px]'>{title}</h1>
            </div>
        </>
    );
};

export default Card;
