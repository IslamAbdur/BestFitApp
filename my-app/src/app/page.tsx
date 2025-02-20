"use client";


import { useEffect, useState } from 'react';
import handler from './api/test';
import { WeatherData } from './api/test';
import { NextRequest, NextResponse } from 'next/server';

export default function Home() {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data: WeatherData = await handler();
      setLat(data.latitude); // Store the latitude after the data is fetched
      setLong(data.longitude); // Store the longitude after the data is fetched
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>{lat}</p>
      <p>{long}</p>
    </div>

  );
}
