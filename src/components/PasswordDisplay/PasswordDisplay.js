import React from "react";
import './PasswordDisplay.css'
import iconCopy from '../../assets/images/icon-copy.svg'

const PasswordDisplay = ({password, copyToClipboard}) => {
     return (
        <div className="password-display">
            <h2>{password}</h2>
            <button className="copy-to-clipboard-btn" onClick={copyToClipboard} disabled={!password}><img src={iconCopy} alt=""/></button>
        </div>
     )
}
 
export default PasswordDisplay;