
const Item = ({id, name, img, prince,stock}) => {

    return (
        <article className="CardItem">
        <header className="Haeder">
         <h2 className="ItemHeader">
            {name}
        </h2>   
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Precio: ${prince}
            </p>
            <p className="Info">
                Stock disponible: {stock}
            </p>
        </section>
        <footer className='ItemFooter'>
           <link to={`/item/${id}`} className='Option'>Ver Detalle</link>
        </footer>   
        </article>
    )
    }

    export default Item  

