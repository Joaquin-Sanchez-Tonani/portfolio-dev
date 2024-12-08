import './languages.css'
export default function Languages(props){
    return(
        <article className="article-component">
            <a target='_blank' href={props.url}><h3 className="h3-component">{props.name}</h3></a>
            <div className="separation-component">
                <img loading='lazy' className="img-component" src={props.img} alt={props.name}/>
                <div className="description-component">
                    <li className="time-component">Time in development: <span>{props.time}</span></li>
                    <li className="text-component">Description: <span>{props.text}</span></li>
                </div>
            </div>
        </article>
    )
}