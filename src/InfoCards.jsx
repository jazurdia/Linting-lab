import './InfoCards.css'

const info_text= {
    card_1_info: 'Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora de encriptación todo en una extensión de Chrome',
    card_2_info: 'Busca de forma privada con nuestra app o extensión, añade búsqueda web privada a tu navegador preferido o busca en duckduckgo.com.',
    card_3_info: 'Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda, bloqueador de rastreadores, mejora de encriptación y más. Disponible para iOS y Android.'
}

const InfoCards = () => {
    return (
        <div className="info_cards_cont">
            <div className="info_card">
                <img src="src/assets/laptop.svg" alt="Laptop" className="img_card"/>
                <div className="card_title">Privacidad para Chrome</div>
                <div className="card_info">{info_text.card_1_info}</div>
            </div>
            <div className="info_card">
                <img src="src/assets/search.svg" alt="Laptop" className="img_card"/>
                <div className="card_title">Motor de Búsqueda Privada</div>
                <div className="card_info">{info_text.card_2_info}</div>
            </div>
            <div className="info_card">
                <img src="src/assets/mobile.svg" alt="Laptop" className="img_card"/>
                <div className="card_title">Navegador Privado</div>
                <div className="card_info">{info_text.card_3_info}</div>
            </div>
        </div>
    )
}

export {InfoCards}