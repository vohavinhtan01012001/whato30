import React, { HTMLAttributes } from 'react'

export type LabelProps = {
    className?: string;
    required?: boolean;
    children: React.ReactNode;
} & HTMLAttributes<HTMLLabelElement>;

export default function Label({ className, children, required = false }: LabelProps) {
    return (
        <div className='pb-[8px]'>
            <label className={`text-base font-medium text-[#222222] font-noto ${className}`}>
                {children}
            </label>
            {
                required ? <span className='text-[#222222] text-base font-medium font-noto pl-1'>*</span> : ""
            }
        </div>
    )
}
