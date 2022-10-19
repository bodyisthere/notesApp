import './Cards'
import Card from "./Card";
import AddCard from './AddCard';

function Cards({notes, setNotes}) {

    return (
        <div className="cards">
            {notes.map((el, index) => {
                return <Card key={index} info={el} notes={notes} setNotes={setNotes} />
            })}   
            <AddCard notes={notes} setNotes={setNotes}/>
        </div>
    )
}

export default Cards;