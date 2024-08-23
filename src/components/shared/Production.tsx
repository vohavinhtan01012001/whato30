
type ProductionProps = {
    image: string;
    name: string;
    numberOfLikes: number;
    price: number;
};

function Production({ image, name, numberOfLikes, price }: ProductionProps) {
    return (
        <div className="mx-auto w-[300px]">
            <div className="mb-[29px]">
                <img src={image} alt={name} className="w-[300px]" />
            </div>
            <div className="mb-[30px] ">
                <h2 className="text-lg font-semibold font-sans">{name}</h2>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-base text-[#222222]">{price.toLocaleString()} won </p>
                <div className="flex items-center text-[#fa7b26]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18.586,5.570 C18.328,4.961 17.957,4.413 17.496,3.952 C17.36,3.494 16.488,3.119 15.879,2.863 C15.270,2.607 14.602,2.464 13.898,2.464 C13.199,2.464 12.530,2.640 11.920,2.952 C11.313,3.261 10.764,3.705 10.303,4.235 C10.177,4.382 10.57,4.533 9.944,4.694 C9.832,4.533 9.710,4.380 9.586,4.235 C9.123,3.705 8.576,3.261 7.970,2.952 C7.358,2.640 6.691,2.464 5.986,2.464 C5.284,2.464 4.615,2.607 4.9,2.863 C3.398,3.119 2.851,3.494 2.392,3.952 C1.929,4.413 1.560,4.961 1.301,5.570 C1.46,6.178 0.902,6.848 0.902,7.548 C0.902,8.253 1.46,8.918 1.301,9.528 C1.560,10.135 1.929,10.686 2.392,11.148 C2.851,11.602 9.335,17.462 9.944,17.721 C10.549,17.462 17.36,11.602 17.496,11.148 C17.957,10.686 18.328,10.135 18.586,9.528 C18.843,8.918 18.988,8.253 18.988,7.548 C18.988,6.848 18.843,6.178 18.586,5.570 Z" />
                    </svg>
                    <span className="ml-1 text-base text-[#666666]">{numberOfLikes}</span>
                </div>
            </div>
        </div>
    )
}

export default Production