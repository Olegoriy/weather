"use client";

import { Suspense, useState } from 'react';
import Image from 'next/image';
import FetchWeather, { WeatherData } from '../FetchWeather/FetchWeather';
import styles from './DisplayWeather.module.css'; 
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const DisplayWeatherPage = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const searchParams = useSearchParams();
  const city = searchParams.get('city') ?? 'Санкт-Петербург';

  return (
    <div className={styles.container}>
      <Link href={'/'}>
        <button className={styles.backButton}>Back</button>
      </Link>
      
      <FetchWeather 
        city={city}
        onDataLoaded={(data) => setWeatherData(data)} 
      />
      
      {weatherData && (
        <div>
          <div className={styles.weatherInfo}>
            <h2 className={styles.title}>{weatherData.location.name}, {weatherData.location.country}</h2>
            <p><strong>Локальное время:</strong> {weatherData.location.localtime}</p>
            <p><strong>Температура:</strong> {weatherData.current.temp_c}°C</p>
            <p><strong>Ощущается как:</strong> {weatherData.current.feelslike_c}°C</p>
            <p><strong>Состояние:</strong> {weatherData.current.condition.text}</p>
            <div className={styles.weatherIcon}>
              <Image 
                src={`https:${weatherData.current.condition.icon}`}
                alt={weatherData.current.condition.text}
                width={64}
                height={64}
                quality={80}
                loading="lazy"
              />
            </div>
            <p><strong>Влажность:</strong> {weatherData.current.humidity}%</p>
            <p><strong>Скорость ветра:</strong> {weatherData.current.wind_kph} км/ч</p>
            <p><strong>Направление ветра:</strong> {weatherData.current.wind_dir}</p>
            <p><strong>Давление:</strong> {weatherData.current.pressure_mb} мбар</p>
            <p><strong>Облачность:</strong> {weatherData.current.cloud}%</p>
            <p><strong>УФ-индекс:</strong> {weatherData.current.uv}</p>
            <p><strong>Видимость:</strong> {weatherData.current.vis_km} км</p>
          </div>

          <div className={styles.forecastContainer}>
            <h3>Прогноз на 7 дней:</h3>
            <div className={styles.forecast}>
              {weatherData.forecast.forecastday.map((day) => {
                // Преобразование даты в нужный формат
                const date = new Date(day.date);
                const daysOfWeekShort = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
                const months = [
                  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
                ];
                const dayOfWeek = daysOfWeekShort[date.getDay()];
                const dayOfMonth = date.getDate();
                const month = months[date.getMonth()];

                return (
                  <div key={day.date} className={styles.forecastDay}>
                    <h4 className={styles.data}>{dayOfWeek}, {dayOfMonth} {month}</h4>
                    <p><strong>Температура:</strong><br />{day.day.mintemp_c}°C - {day.day.maxtemp_c}°C</p>
                    <div className={styles.weatherIcon}>
                      <Image 
                        src={`https:${day.day.condition.icon}`}
                        alt={day.day.condition.text}
                        width={64}
                        height={64}
                        quality={80}
                        loading="lazy"
                      />
                    </div>
                    <p>{day.day.condition.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <DisplayWeatherPage />
    </Suspense>
  );
}