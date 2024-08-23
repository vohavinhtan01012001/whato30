
export type CheckBoxProps = {
    className?: string;
    checked?: boolean;
    onClick: (checked: boolean) => void;
}

export default function CheckBox({ checked = false, className, onClick }: CheckBoxProps) {
    const handleClick = () => {
        onClick(!checked);
    }

    return (
        <div className={className} onClick={handleClick}>
            {
                checked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px">
                        <path fill-rule="evenodd" stroke-width="1px" stroke="rgb(51, 51, 51)" fill="none" d="M3.499,3.499 L14.499,3.499 L14.499,3.499 L14.499,14.500 L14.499,14.500 L3.499,14.500 L3.499,14.500 L3.499,3.499 L3.499,3.499 Z" />
                        <path fill-rule="evenodd" fill="rgb(51, 51, 51)" d="M5.501,5.501 L12.499,5.501 L12.499,5.501 L12.499,12.498 L12.499,12.498 L5.501,12.498 L5.501,12.498 L5.501,5.501 L5.501,5.501 Z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px">
                        <path fill-rule="evenodd" stroke-width="1px" stroke="rgb(51, 51, 51)" fill="none" d="M3.500,3.500 L14.500,3.500 L14.500,3.500 L14.500,14.499 L14.500,14.499 L3.500,14.499 L3.500,14.499 L3.500,3.500 L3.500,3.500 Z" />
                    </svg>
                )
            }
        </div>
    )
}
