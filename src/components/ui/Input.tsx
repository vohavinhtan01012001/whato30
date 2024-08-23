import React, { InputHTMLAttributes } from 'react';

export type InputProps = {
    className?: string
    buttonEnd?: string
    onCLick?: () => void
} & InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = 'text', buttonEnd, onCLick, ...props }, ref) => {
        return (

            <div className='relative w-[454px] max-[480px]:w-full h-[51px]'>
                <input
                    type={type}
                    className={`border outline-none w-[454px]  max-[454px]:w-[350px] max-[454px]:mx-auto border-[#a1a1a1] px-[11px] absolute top-0 right-0 left-0 bottom-0  ${className}`}
                    ref={ref}
                    {...props}
                />
                {
                    buttonEnd ?
                        <button className='absolute right-[20px] h-full flex justify-center items-center max-md:px-6' onClick={onCLick}>
                            <span className='text-[#659bf5] text-[14px] font-noto'>{buttonEnd}</span>
                        </button> : ""
                }
            </div>
        );
    }
);


export default Input;