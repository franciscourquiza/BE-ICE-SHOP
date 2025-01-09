import CardItem from '../CardItem/CardItem'
import './Cards.css'


const Cards = () => {

  return (
    <div className='cards' id='section1'>
        <img className='image_logo' src="/images/diamond.png" height="58" width="73" alt='logo'/>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardItem 
                    src='/images/beice2.jpg'
                    text='BE ICE es un empredimiento en dónde cada par de zapatillas refleja nuestra
                    ambición y dedicación'
                    label='BE ICE'
                    
                    />
                    <CardItem 
                    src='/images/beice8.jpg'
                    text='Ofrecemos una amplia variedad de productos, desde calzado hasta gorras y accesorios'
                    label='VARIEDAD'
                    
                    />
                    <CardItem 
                    src='/images/beice11.jpg'
                    text='Comunicate a nuestro Instagram, siguiendo el enlace que se encuentra al final de la página'
                    label='¿COMO COMPRO?'
                    
                    />
                </ul>
                <ul className='cards_items'>
                    <CardItem 
                    src='/images/beice3.jpg'
                    text='Si estás buscando algún modelo en particular no dudes en consultarnos, lo conseguimos'
                    label='ENCARGOS'
                    
                    />
                    <CardItem 
                    src='/images/beice1.jpg'
                    text='Realizamos envíos a todo el país, mediante el correo que sea de tu preferencia'
                    label='ENVIOS'
                    
                    />
                    <CardItem 
                    src='/images/beice5.jpg'
                    text='Renovamos nuestro stock constantemente, con una amplia diversidad de modelos'
                    label='STOCK'
                    
                    />
                </ul>
                <ul className='cards_items'>
                    <CardItem 
                    src='/images/beice4.jpg'
                    text='Nuestro local abierto al público se encuentra en Venado Tuerto, Santa Fe'
                    label='¿DONDE LOS ENCUENTRO?'
                    
                    />
                    <CardItem 
                    src='/images/beice10.jpg'
                    text='Trabajamos desde el talle 35AR hasta el talle 45AR, consultanos por talles de niños'
                    label='TALLES'
                    
                    />
                    <CardItem 
                    src='/images/beice12.jpg'
                    text='Comercializamos los modelos más buscados y actuales de todo el mercado'
                    label='MODELOS'
                    
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards