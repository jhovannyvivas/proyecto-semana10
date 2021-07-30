import getID from "../../../utils/getID"
export default function Detail({pId}){

    let a = getID(window);
    return(
        <article className='card' id='card'>
            <div>
                <img src={pId.images.small} alt="Carta"></img>
                <p>{pId.name}</p>
                <p>hp {pId.hp}</p>
                <p>level {pId.level}</p>
             </div>

        </article> 

    )
}