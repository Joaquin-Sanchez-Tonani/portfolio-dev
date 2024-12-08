import './languages.css'
export default function Languages(props){
    return(
        <article className="article-component">
            <h3 className="h3-component"><a target='_blank' href={props.url}>{props.name}</a></h3>
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