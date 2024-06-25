import React, {useState, useEffect} from "react";
import PasswordDisplay from "../PasswordDisplay/PasswordDisplay";
import './PasswordGenerator.css'
import arrowIcon from '../../assets/images/icon-arrow-right.svg'

const PasswordGenerator = () => {

    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const numbers = '0123456789'.split('');
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');

    const [length, setLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState('')
    const [passwordStrength, setPasswordStrength] = useState('')
    const [barClasses, setBarClasses] = useState(['', '', '', ''])

    useEffect(() => {
        document.documentElement.style.setProperty('--range-percentage', `${(length - 8) * (100 / 12)}%`);
    }, [length]);

    const generatePassword = () => {

        let characters = [];

        if (includeUppercase) characters = characters.concat(upperCase);
        if (includeLowercase) characters = characters.concat(lowerCase);
        if (includeNumbers) characters = characters.concat(numbers);
        if (includeSymbols) characters = characters.concat(symbols);

        if (characters.length === 0) return '';

        let newPassWord = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassWord += characters[randomIndex];
        }

        setPassword(newPassWord)
        evaluateStrength(newPassWord);


    }

    const evaluateStrength = (password) => {

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSymbols = /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password);


        const typesCount = [hasUppercase, hasLowercase, hasNumbers, hasSymbols].filter(Boolean).length;

        let strengthLabel;
        let barColors = ['', '', '', ''];

        if (typesCount === 1){
            strengthLabel ='VERY WEAK';
            barColors[0] = 'red';
        } else if (typesCount === 2) {
            strengthLabel = 'WEAK'
            barColors[0] = 'orange';
            barColors[1] = 'orange'
        } else if (typesCount === 3) {
            strengthLabel = 'MEDIUM'
            barColors[0] = 'yellow';
            barColors[1] = 'yellow'
            barColors[2] = 'yellow'
        } else if (typesCount === 4) {
            strengthLabel = 'STRONG'
            barColors[0] = 'green';
            barColors[1] = 'green';
            barColors[2] = 'green';
            barColors[3] = 'green';
            
        } else {
            strengthLabel = '';
        }

        setPasswordStrength(strengthLabel);
        setBarClasses(barColors)

    }
    
    const copyToClipboard = () => {

        if(password) {
            navigator.clipboard.writeText(password).then(() => {
                alert('Password copied to clipboard');
            }).catch(err => {
                alert('Failed to copy password to clipboard!');
            })
        }

    };


    return (
       <article>

            <PasswordDisplay password={password} copyToClipboard={copyToClipboard}/>
            
            <article className="password-generator">

                <div className="password-length-text-container">
                    <p className="character-length-text">Character Length</p>
                    <p className="length-digits">{length}</p>
                </div>

                <input className="range-bar" type="range" min="8" max="20" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />

                
                <label>
                    <input type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)}/>
                    Include Uppercase Letters
                </label>
                
                <label>
                    <input type="checkbox" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)}/>
                    Include Lowercase Letters
                </label>
                
                <label> 
                    <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)}/>
                    Include Numbers
                </label>
                
                <label>
                    <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}/>
                    Include Symbols
                </label>

                <div className="strength-container">

                    <h2>STRENGTH</h2>
                    <div className="bar-container">
                        <p>{passwordStrength}</p>
                        <div className={`bars ${barClasses[0]}`}></div>
                        <div className={`bars ${barClasses[1]}`}></div>
                        <div className={`bars ${barClasses[2]}`}></div>
                        <div className={`bars ${barClasses[3]}`}></div>
                    </div>
                </div>

                <button className="generate-button" onClick={generatePassword}>GENERATE <img className="arrow-icon" src={arrowIcon} alt=""/></button>
            
            </article>
       </article>
    )
}

export default PasswordGenerator;