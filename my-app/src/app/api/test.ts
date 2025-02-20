import { NextApiRequest, NextApiResponse } from 'next';

export type WeatherData = {
    latitude: number;
    longitude: number;
    timezone: string;
}



const handler = async () => {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
        const data: WeatherData = await response.json();
        return data;
};

export default handler;