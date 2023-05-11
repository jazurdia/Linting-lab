import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

function Button({ className, children }) {
    return (
        <div>
            <button type="button" className={className}>
                {children}
            </button>
        </div>
    )
}

Button.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Button
