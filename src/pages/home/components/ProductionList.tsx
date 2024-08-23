import Production from '../../../components/shared/Production';
import productionImage01 from '../../../assets/production/img-01.png';
import productionImage02 from '../../../assets/production/img-02.png';
import productionImage03 from '../../../assets/production/img-03.png';
import productionImage04 from '../../../assets/production/img-04.png';
import productionImage05 from '../../../assets/production/img-05.png';
import productionImage06 from '../../../assets/production/img-06.png';
import productionImage07 from '../../../assets/production/img-07.png';
import productionImage08 from '../../../assets/production/img-08.png';
import productionImage09 from '../../../assets/production/img-09.png';
import productionImage10 from '../../../assets/production/img-10.png';
import productionImage11 from '../../../assets/production/img-11.png';
import productionImage12 from '../../../assets/production/img-12.png';
import productionImage13 from '../../../assets/production/img-13.png';
import productionImage14 from '../../../assets/production/img-14.png';
import productionImage15 from '../../../assets/production/img-15.png';
import productionImage16 from '../../../assets/production/img-16.png';
import productionImage17 from '../../../assets/production/img-17.png';
import productionImage18 from '../../../assets/production/img-18.png';
import productionImage19 from '../../../assets/production/img-19.png';
import productionImage20 from '../../../assets/production/img-20.png';
import productionImage21 from '../../../assets/production/img-21.png';
import productionImage22 from '../../../assets/production/img-22.png';
import productionImage23 from '../../../assets/production/img-23.png';
import productionImage24 from '../../../assets/production/img-24.png';
import productionImage25 from '../../../assets/production/img-25.png';

const images = [
    productionImage01, productionImage02, productionImage03,
    productionImage04, productionImage05, productionImage06,
    productionImage07, productionImage08, productionImage09,
    productionImage10, productionImage11, productionImage12,
    productionImage13, productionImage14, productionImage15,
    productionImage16, productionImage17, productionImage18,
    productionImage19, productionImage20, productionImage21,
    productionImage22, productionImage23, productionImage24,
    productionImage25
];

type ProductionProps = {
    image: string;
    name: string;
    numberOfLikes: number;
    price: number;
};

const mockDataArray: ProductionProps[] = images.map((image, index) => ({
    image,
    name: `Sample Product ${index + 1}`,
    numberOfLikes: Math.floor(Math.random() * 1000),
    price: 2500 + (index * 100),
}));

function ProductionList() {
    return (
        <>
            {mockDataArray.map((product, index) => (
                <div className='p-2' key={index}>
                    <Production
                        image={product.image}
                        name={product.name}
                        numberOfLikes={product.numberOfLikes}
                        price={product.price}
                    />
                </div>
            ))}
        </>
    );
}

export default ProductionList;
