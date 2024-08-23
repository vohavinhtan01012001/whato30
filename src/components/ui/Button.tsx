import React, { HTMLAttributes } from 'react'


export type ButtonProps = {
    variant?: "primary" | "secondary";
    className?: string;
    type?: "button" | "submit";
    children: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({ variant = 'primary', className, type = "button", children, ...props }: ButtonProps) {
    return (
        <button {...props} type={type} className={`w-[454px] max-[454px]:w-[350px] h-[60px] ${variant === 'primary' ? "bg-[#0565bb] border border-[#0565bb]" : "bg-white border border-[#020001]"} ${className}`}>
            <p className={`font-noto text-base font-medium ${variant === "primary" ? "text-white" : "text-[#000000]"}`}>{children}</p>
        </button>
    )
}
