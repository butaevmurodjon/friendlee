import { useState, useCallback } from 'react';
// import Card from "../Card/Card";
// import { CatList } from "./Data"
import "../Card/Card.scss"


const CardList = () => {

    return (
        <div className="cart">
            <div className="base-container">
                <h1 className="cart__maintitle">Ты сегодня покормил кота ?
                </h1>
                <div className="cart__items">
                    
                </div>
            </div>
        </div>
    );
}

export default CardList;