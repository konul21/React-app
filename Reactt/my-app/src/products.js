import React from 'react';
import { useQuery } from 'react-query'
import { DataProducts } from './api';
import { Link } from 'react-router-dom';

const Products = () => {
    const { isLoading, error, data } = useQuery(['products'], () => DataProducts());
    const categoryList =[...data]
if (isLoading) return 'Loading...';
if (error) return 'An error has occurred:'
console.log(data);

    return (
        <div>
            <ul>
                {
                    data &&
                    data.map(item=>{
                        return (
                            <li key={item.id}><Link to={`/detail/${item.id}`}>{item.category}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Products;