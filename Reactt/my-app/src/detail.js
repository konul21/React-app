import React from 'react';
import { useParams } from 'react-router-dom';
import { detailData } from "./api";
import { useQuery } from 'react-query';

const Detail = () => {
    const {id} = useParams();
    const { isLoading, error, data } = useQuery(['detailData'], () => detailData(id));
if (isLoading) return 'Loading...';
if (error) return 'An error has occurred:'

console.log(data);
    return (
        <div>
            <img src={data.image} className="img-thumbnail" alt="..."></img>
            <h1> </h1>
        </div>
    );
}

export default Detail;
