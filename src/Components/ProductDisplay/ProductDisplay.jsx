import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDisplay.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const ProductDisplay = () => {
    const { id } = useParams();
    
    // Define your products array
    const products = [
        { id: 1, image: program_1, icon: program_icon_1, description: "Description for Product 1" },
        { id: 2, image: program_2, icon: program_icon_2, description: "Description for Product 2" },
        { id: 3, image: program_3, icon: program_icon_3, description: "Description for Product 3" }
    ];

    // Find the product based on the ID
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>; // Handle case when product is not found
    }

    return (
        <div className='product-display'>
            <img src={product.image} alt={`Product ${product.id}`} className='product-image' />
            <h1 className='product-title'>Nutrivolent</h1>
            <p className='product-description'>{product.description}</p>
            <div className='product-caption'>
                <img src={product.icon} alt={`Icon for ${product.id}`} />
                <p>Nutrivolent</p> {/* Adjust this text as needed */}
            </div>
        </div>
    );
}

export default ProductDisplay;
