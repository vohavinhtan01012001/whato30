import productionBg from '../../assets/producticon-bg.png'
import productionGo from '../../assets/producticon-go.png'

type ProductionProps = {
    image: string,
    number: number,
    className?: string,
}

function ProductionBest({ image, number, className = "" }: ProductionProps) {
    return (
        <div className={`relative ${className}`}>
            <img className='' src={image} alt="production" />
            <div className='absolute -top-[46px] w-[92px]'>
                <div className='relative'>
                    <img className=' h-auto' src={productionBg} alt="production" />
                    <span className='absolute top-[30%] right-0 left-0 text-center font-extrabold text-3xl text-[#110e03] border-b-[1px] border-b-[#110e03] w-[40px] mx-auto'>0{number}</span>
                </div>
            </div>
            <div className='flex items-center justify-between px-6 absolute h-[79px] -bottom-[40px] right-0 left-0 mx-auto max-w-[369px] bg-white border-[3px] border-[#020001]'>
                <p className='text-xl font-sans font-extrabold text-[#222] '>How to create
                    <br />
                    mobile-optimized</p>
                <img className='w-[65px] h-auto' src={productionGo} alt="production" />
            </div>
        </div>
    )
}

export default ProductionBest