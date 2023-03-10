

const Textdesc = (props) => {
    return (
        <div className="textdesc">
            <h2>{props.children}</h2>
            <p>{props.children}</p>
        </div>
    )
}

export { Textdesc }