import { useState } from "react";

function AddCard({notes, setNotes}) {

    const [value, setValue] = useState('');
    const [isError, setIsError] = useState('add-card')
    const characterLimit = 200;

    function typing(e) {
        setValue(e.target.value);
        setIsError('');
    }


    function getDay() {
        const date = new Date();
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }

    function addCard(e) {
        e.preventDefault();
        if(value.length) {
            setNotes([...notes, {
                text : value,
                date : getDay() 
            }]);
            setValue('');
        } else {
            setIsError('add-card--error');
            alert(`Note can't be empty!`);
        }
    }


    return (
        <form className={`add-card ${isError}`}>
            <input maxLength='200' type="text" onChange={typing} value={value} name="" id="" className="add-card__input" placeholder="Type to add a note..."/>
            <div className="add-card__bottom">
                <p className="add-card__remain">{characterLimit - value.length} Remaining</p>
                <button onClick={addCard} type="submit" className="add-card__save">Save</button>
            </div>
        </form>
    )
}

export default AddCard;