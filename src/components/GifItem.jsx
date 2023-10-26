export const GifItem = ({tittle, url, id}) => {
    return(
        <div>
            <img  src={url} alt={tittle}/>  
            <p>{tittle}</p>
        </div>
    )
}