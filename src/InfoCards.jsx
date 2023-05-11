import React from "react"
import PropTypes from "prop-types"
import "./InfoCards.css"

const infotext = {
    card_1_info:
        "Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores",
    card_1_info2: "y mejora,de encriptación todo en una extensión de Chrome",
    card_2_info:
        "Busca de forma privada con nuestra app o extensión, añade búsqueda web",
    card_2_info2: "privada a tu navegador preferido o busca en duckduckgo.com.",
    card_3_info:
        "Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda, bloqueador",
    card_3_info2:
        "de rastreadores, mejora de encriptación y más. Disponible para iOS y Android.",
}

function Card({ img, title, info }) {
    return (
        <div className="info_card">
            <img src={img} alt="Laptop" className="img_card" />
            <div className="card_title">{title}</div>
            <div className="card_info">{info}</div>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
}

function InfoCards() {
    return (
        <div className="info_cards_cont">
            <Card
                img="src/assets/laptop.svg"
                title="Privacidad para Chrome"
                info={infotext.card_1_info}
            />
            <Card
                img="src/assets/search.svg"
                title="Motor de Búsqueda Privada"
                info={infotext.card_2_info}
            />
            <Card
                img="src/assets/mobile.svg"
                title="Navegador Privado"
                info={infotext.card_3_info}
            />
        </div>
    )
}

export default InfoCards
