
const text = {
    principal: '¿Cansado de que te rastreen? Podemos ayudarte.',
    secondary : 'Consigue protección continua y gratuita para tu privacidad en el navegador con una descarga:'

}

const Textdesc = () => {
    return (
        <div className="textdesc">
            <h2>{text.principal}</h2>
            <p>{text.secondary}</p>
        </div>
    )
}

export { Textdesc}