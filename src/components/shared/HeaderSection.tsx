import { HTMLAttributes } from "react"

type ButtonProps = {
    title: string,
    children: React.ReactNode,
    className?: string,
    classNameText?: string,
} & HTMLAttributes<HTMLButtonElement>

function HeaderSection({ title, children, className = '', classNameText = '' }: ButtonProps) {
    return (
        <>
            <div className={`flex justify-center px-2  ${className}`}>
                <div className=' text-center'>
                    <h2 className='text-[45px] uppercase font-bold leading-[1.33] tracking-[4.5px]'>{title}</h2>
                    <p className={`max-w-[682px] leading-[1.88] pt-[40px] ${classNameText}`}>
                        {children}
                    </p>
                </div>
            </div>
        </>
    )
}

export default HeaderSection