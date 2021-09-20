

const New = ({option}) => {
    const {description, publishedAt, source, title, urlToImage, url  } = option;

    const img = (urlToImage) ? 
        <div className="card-image">
            <img  src={urlToImage} alt={title} />
        </div> 
    : null;

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                {img}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p><span>{new Date(publishedAt).toLocaleDateString()}</span> - {source.name}</p>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn waves-effect waves-light">VER NOTICIA</a>
                </div>
            </div>
        </div>
     );
}
 
export default New;