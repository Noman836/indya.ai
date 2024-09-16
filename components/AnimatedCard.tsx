import '../app/style/Card.css'

interface AnimatedCardProps {
    title: string;
    description: string;
}

const AnimatedCard = ({ title, description }: AnimatedCardProps) => {
    return (
        <>
            <div className="animated-card p-10 w-[35%] h-[500px]  flex justify-center items-center flex-col gap-3">
                <h1 className='text-center text-primary text-[40px] font-[700] leading-[50px]'>{title}</h1>
                <p className='text-center text-secondary text-[16px] font-[400] leading-[24px]'>{description}</p>
            </div>
        </>
    );
}

export default AnimatedCard;
