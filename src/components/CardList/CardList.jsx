import { useState, useCallback, useRef, useEffect } from 'react';
// import Card from "../Card/Card";
// import { CatList } from "./Data"
import "../Card/Card.scss"


const CardList = () => {

    const rublRef = useRef(null);
    const [rubl,setRubl] = useState("")

    const setCaretPosition = useCallback((ctrl, pos) => {
        // Modern browsers
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);

            // IE8 and below
        } else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }, [])

    useEffect(() =>{
        const rublInput = rublRef.current
        if(rublInput.selectionStart === rublInput.value.length){
            setCaretPosition(rublInput, rublInput.value.length - 2);
        }else{
            setCaretPosition(rublInput, rublInput.selectionStart);
        }
    },[rubl])

    function Rubl(event) {
        const rublInput = event.target;
        
        setRubl(rublInput.value && rublInput.value.replace(/\D/g, '').replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') + ' ₽');
    }

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
                            <input type="number" defaultValue="3 000 000" placeholder="3 000 000" />
                            <span className="cart__badge">₽</span>
                        </div>
                    </label>
                    <label className="cart__item">
                        <div className="cart__title">
                            Первоначальный взнос
                        </div>
                        <div className="cart__field">
                            <input ref={rublRef} value={rubl} onChange={Rubl} placeholder="420 000 ₽" />
                            <span className="cart__badge-color">13%</span>
                        </div>
                    </label>
                    <label className="cart__item disabled">
                        <div className="cart__title">
                            Срок лизинга
                        </div>
                        <div className="cart__field">
                            <input type="number" defaultValue="60" placeholder="60" />
                            <span className="cart__badge">мес.</span>
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