
const text = {
    principal: '¿Cansado de que te rastreen? Podemos ayudarte.',
    secondary : 'Consigue protección continua y gratuita para tu privacidad en el navegador con una descarga:'

}

const Textdesc = (props) => {
    return (
        <div className="textdesc">
            <h2>{props.children}</h2>
            <p>{props.children}</p>
        </div>
    )
}

export { Textdesc }