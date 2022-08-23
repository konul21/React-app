import React from 'react';
import { useQuery } from 'react-query'
import { DataProducts } from './api';

const Home = () => {
    const { isLoading, error, data } = useQuery(['product'], () => DataProducts());
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
                            <li key={item.id}>{item.category}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Home;
