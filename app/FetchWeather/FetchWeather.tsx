"use client";
import styles from './FetchWeather.module.css';

import { useState, useEffect } from 'react';

export interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
    pressure_mb: number;
    cloud: number;
    uv: number;
    vis_km: number;
    wind_dir: string;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        uv: number;
      };
    }>;
  };
}

interface WeatherProps {
  city: string;
  onDataLoaded: (data: WeatherData) => void;
}

const FetchWeather = ({ city, onDataLoaded }: WeatherProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = '7f9080f430964821b52103358250804';
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(city)}&days=7&lang=ru`
        );

        if (!response.ok) throw new Error('Ошибка получения данных');

        const data: WeatherData = await response.json();
        onDataLoaded(data);
        setError(null);
      } catch (err) {
        setError(`Не удалось получить данные о погоде для города ${city}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, onDataLoaded]);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }
  if (error) return <div>{error}</div>;
  return null;
};

export default FetchWeather;