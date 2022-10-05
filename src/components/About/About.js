import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart,BarChart, Bar,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const About = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1 className='text-2xl font-bold underline text-red-500 text-center mt-10'>Price Anaysis</h1>
            <LineChart className='mx-auto mt-10'
            width={600}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
            </LineChart>
            
            <h1 className='text-2xl font-bold underline text-red-500 text-center mt-10'>Rating Anaysis</h1>
            <BarChart className='mx-auto my-10'
            width={600}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rating.rate" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default About;