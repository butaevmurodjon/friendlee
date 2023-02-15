import { useState, useCallback } from 'react';
// import Card from "../Card/Card";
// import { CatList } from "./Data"
import "../Card/Card.scss"


const CardList = () => {

    return (
        <div className="cart">
            <div className="cart__wrap base-container">

                <h1 className="cart__maintitle">
                    Рассчитайте стоимость автомобиля в лизинг
                </h1>

                <form className="cart__items" action="" method="post"> 
                    <label className="cart__item">
                        <div className="cart__title">
                            Стоимость автомобиля
                        </div>
                        <div className="cart__field">
                            <input type="number" defaultValue="3 000 000" placeholder="3 000 000"/>
                            <span>P</span>
                        </div>
                    </label>
                    <label className="cart__item">
                        <div className="cart__title">
                            Первоначальный взнос
                        </div>
                        <div className="cart__field">
                            <input type="number" defaultValue="420 000 ₽" placeholder="420 000 ₽"/>
                            <span className="cart__badge">13%</span>
                        </div>
                    </label>
                    <label className="cart__item">
                        <div className="cart__title">
                            Срок лизинга
                        </div>
                        <div className="cart__field">
                            <input type="number" defaultValue="60" placeholder="60"/>
                            <span>мес.</span>
                        </div>
                    </label>
                    <div className="cart__item">
                        <div className="cart__title">
                            Сумма договора лизинга
                        </div>
                        <div className="cart__text">
                            4 467 313 ₽
                        </div>
                    </div>
                    <div className="cart__item">
                        <div className="cart__title">
                            Ежемесячный платеж от
                        </div>
                        <div className="cart__text">
                            114 455 ₽
                        </div>
                    </div>
                    <div className="cart__item">
                        <button className="cart__button">Оставить заявку</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CardList;