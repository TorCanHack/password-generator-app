# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Password generator app solution](#frontend-mentor---password-generator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [solution URL](https://github.com/TorCanHack/password-generator-app)
- Live Site URL: [live site URL]( https://torcanhack.github.io/password-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- SCSS



### What I learned
One of the essential features of this Password Generator App is the ability to copy the generated password directly to the clipboard of the user's computer. To achieve this, I created a function called `copyToClipBoard()` that utilised the  `navigator.clipboard`  Object that accesses clpiboard API in modern browsers. Below is the code the snippet:
````js

    const copyToClipboard = () => {

        if(password) {
            navigator.clipboard.writeText(password).then(() => {
                alert('Password copied to clipboard');
            }).catch(err => {
                alert('Failed to copy password to clipboard!');
            })
        }

    };
````
The `navigator.clipboard`  Object allows you to access the clipboard API in a modern browers and interact with it. the `writeText` method allows you to write directly to the clipboard. It takes a single argument, which in this case is the user's password that will be written directly to the clipboard. 

The `.then()` method is used for handling the result of the asynchronous operation (writing to the clipboard). Inside the arrow function I specify that if a password is succesfully copied then the user should be alerted with a message that reads "Password copied to clipboard", otherwise the user should be alerted that the password failed to copy.


### Continued development
I love building with react and i hope to continue learning how to create apps with React.


## Acknowledgments
Thank you to the Frontend Mentor Team for this challenge
