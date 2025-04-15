"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./LandingPage.module.css"; 

const LandingPage = () => {
  const initialCities = [
    "Санкт-Петербург",
    "Москва",
    "Коряжма",
    "Архангельск",
    "Калининград",
    "Челябинск",
    "Вологда",
    "Новосибирск",
    "Котлас"
  ];

  const [cities, setCities] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newCity, setNewCity] = useState("");


  useEffect(() => {
    const savedCities = localStorage.getItem("weatherCities");
    if (savedCities) {
      setCities(JSON.parse(savedCities));
    } else {
      setCities(initialCities);
    }
  }, []);

  useEffect(() => {
    if (cities.length > 0) {
      localStorage.setItem("weatherCities", JSON.stringify(cities));
    }
  }, [cities]);

  useEffect(() => {
    setCities(initialCities);
  }, [initialCities]); // Добавьте initialCities в зависимости

  const handleAddCity = () => {
    if (newCity.trim() && !cities.includes(newCity.trim())) {
      setCities([...cities, newCity.trim()]);
      setNewCity("");
      setShowModal(false);
    }
  };

  const removeCity = (cityToRemove: string) => {
    setCities(cities.filter(city => city !== cityToRemove));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Выберите город</h1>
      <div className={styles.citiesGrid}>
        {cities.map((city) => (
          <div key={city} className={styles.cityCardWrapper}>
            <Link 
              href={`/DisplayWeather?city=${encodeURIComponent(city)}`}
              className={styles.cityCard}
            >
              <div className={styles.cityContent}>
                <h2>{city}</h2>
                <p>Посмотреть погоду →</p>
              </div>
            </Link>
            <button 
              onClick={(e) => {
                e.preventDefault();
                removeCity(city);
              }}
              className={styles.removeButton}
              title="Удалить город"
            >
              ×
            </button>
          </div>
        ))}
        
        <div className={styles.cityCardWrapper}>
          <button 
            onClick={() => setShowModal(true)}
            className={`${styles.cityCard} ${styles.addCityCard}`}
          >
            <div className={styles.cityContent}>
              <div className={styles.plusIcon}>
                <div className={styles.plusHorizontal}></div>
                <div className={styles.plusVertical}></div>
              </div>
              <h2>Добавить город</h2>
              <p>Нажмите чтобы добавить новый</p>
            </div>
          </button>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Добавить новый город</h3>
            <input
              type="text"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
              placeholder="Введите название города"
              className={styles.modalInput}
            />
            <div className={styles.modalButtons}>
              <button 
                onClick={handleAddCity}
                disabled={!newCity.trim()}
                className={styles.modalAddButton}
              >
                Добавить
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className={styles.modalCancelButton}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;