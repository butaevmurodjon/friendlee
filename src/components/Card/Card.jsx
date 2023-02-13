import "./Card.scss"
import { useState } from 'react';
import catImage from "../../assets/images/Photo.png"

const Card = ({ cat, selectHandler }) => {

    const [hover, setHover] = useState(false)
    const [hoverCount, setHoverCount] = useState(0)

    return (
        <div className={`cart__item ${cat.selected ? "selected" : ""} ${cat.feed ? "" : "disabled"}`} onClick={() => {
            selectHandler(cat.id, cat.feed)
            setHoverCount(0)
        }} onMouseEnter={() => setHover(true)} onMouseLeave={() => {
            setHover(false)
            if(!hoverCount){
                setHoverCount(1)
            }
        }}>
            <div className="cart__wrap">
                <div className="cart__top">
                    <div className="cart__description">
                        {cat.selected && hover && hoverCount ? <span>Котэ не одобряет?</span> : cat.description }</div>
                    <div className="cart__title">{cat.title}</div>
                    <div className="cart__subtitle">{cat.subtitle}</div>
                    <div className="cart__text">
                        {cat.text}
                    </div>
                </div>
                <div className="cart__bottom">
                    <div className="cart__image">
                        <img src={catImage} alt="" />
                    </div>
                    <div className="circle-weight">
                        <div className="circle-weight__wrap">
                            <div className="circle-weight__title">{cat.weight}</div>
                            <div className="circle-weight__text">кг</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart__note">
                {!cat.selected && cat.feed && <>Чего сидишь? Порадуй котэ, <a href="#" className="cart__link">купи.</a></>}
                {cat.selected && cat.feed && cat.selectedText}
                {!cat.selected && !cat.feed && cat.feedText}
            </div>
        </div>
    );
}

export default Card;