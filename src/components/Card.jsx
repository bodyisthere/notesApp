import './styles/Cards.scss'

function Card({info, notes, setNotes}) {

    function deleteNote() {
        let a = notes.filter(el => !(el.text === info.text))
        setNotes(a);
    }


    return (
        <div className="card">
            <div className="card__top">{info.text}</div>
            <div className="card__bottom">
                <div className="card__date">{info.date}</div>
                <button className="card__delete" onClick={deleteNote}><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}

export default Card;