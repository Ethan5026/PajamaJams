import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import "../styles/ParanoiaStyles.css"

export const Paranoia = ({setViewer}) => {

  
    function toggleAbout() {
        var aboutDropdown = document.getElementById("aboutDropdown");
        aboutDropdown.style.display = (aboutDropdown.style.display === "block") ? "none" : "block";
    }
    function toggleHamburger() {
        var hamburgerDropdown = document.getElementById("hamburgerDropdown");
        hamburgerDropdown.style.display = (hamburgerDropdown.style.display === "flex") ? "none" : "flex";
    }

    function toggleQuestionVisibility() {
        const questionText = document.getElementById('questionText');
        const hideButton = document.getElementById('hideButton');
        const currentVisibility = questionText.style.visibility;
        console.log(currentVisibility);
    
        if (currentVisibility === 'hidden' && currentVisibility !== '') {
            questionText.style.visibility = 'visible';
            hideButton.textContent = 'Hide Question'
        } else {
            questionText.style.visibility = 'hidden';
            hideButton.textContent = 'Show Question'
        }
    }
    
    function flipCoin() {
        const coinImage = document.getElementById('coinImage');
        coinImage.src = '../images/flipping-coin.gif';
        coinImage.style.visibility = 'visible';
        setTimeout(function() {
            const randomValue = Math.floor(Math.random() * 10001);
            if (randomValue % 2 == 1) {
                coinImage.src = '../images/heads.png';
            } else {
                coinImage.src = '../images/tails.png';
            }
        }, 1000);
    }
    
    function changeQuestionText() {
    
        const questionText = document.getElementById('questionText');
        
        fetch("http://127.0.0.1:4000/paranoia")
        .then(response => response.json())
        .then(json => setResult(json, questionText));
    
        function setResult(json, questionText) {
            questionText.textContent = json[Math.floor(Math.random()*json.length)].prompt;
        }
    
        const hideButton = document.getElementById('hideButton');
        const currentVisibility = questionText.style.visibility;
    
        questionText.style.visibility = 'visible';
        hideButton.textContent = 'Hide Question'
    }

    return(
    <div>
    <header>
        <h1 class="unselectable"><a onClick={() => setViewer(0)} style={{textDecoration: 'none', color: 'inherit'}}>PajamaJams</a></h1>
        <p id="databaseButton" onClick={() => setViewer(1)} class="unselectable button">Dabase</p>
        <p id="aboutButton" onClick={() => toggleAbout()} class="unselectable button">About</p>
        <p id="hamburgerButton" onClick={() => toggleHamburger()} class="unselectable button">&#8801;</p>
    </header>
    <main>

        <h1 class="unselectable" style={{width: '100%', textAlign: 'center'}}>Paranoia</h1>
        <div id="questionBox" class="box">
            <h2>Question</h2>
            <p id="questionText" style={{fontSize: '20pt', textAlign: 'center'}}>Click on the New Prompt...</p>
            <p id="hideButton" class="unselectable button" onClick={() => toggleQuestionVisibility()}>Hide Question</p>
        </div>

        <div id="coinBox" class="box">
            <h2>Coin Flip</h2>
            <img id="coinImage" src="../images/coin.png" alt="Coin Image" />
            <button class="unselectable button" onClick={() => flipCoin()}>Flip Coin</button>
        </div>

        <p id="promptButton" onClick={() => changeQuestionText()} class="unselectable button">New Prompt</p>
    </main>

    <div id="hamburgerDropdown">
    <img onClick={() => setViewer(3)} class="image-container" alt="Truth Or Dare" src="/images/truth-or-dare.png"></img>
            <img onClick={() => setViewer(4)} alt="Paranoia" class="image-container"src="/images/paranoia.png"></img>
            <img onClick={() => setViewer(5)} alt="Would You Rather" class="image-container"src="/images/would-you-rather.png"></img>
            <img onClick={() => setViewer(6)} alt="Pictionary" class="image-container"src="/images/pictionary.png"></img>
            <img onClick={() => setViewer(7)} alt="Kiss Marry Kill" class="image-container"src="/images/kiss-marry-kill.png"></img>
            <img onClick={() => setViewer(8)} alt="Charades" class="image-container"src="/images/charades.png"></img>
            <img onClick={() => setViewer(9)} alt="Never Have I Ever" class="image-container"src="/images/never-have-i-ever.png"></img>
            <img onClick={() => setViewer(10)} alt="Smash or Pass" class="image-container"src="/images/smash-or-pass.png"></img>
                <img onClick={() => setViewer(11)} alt="Storytime" class="image-container"src="/images/storytime.png"></img>
    </div>

    <div id="aboutDropdown">
        <p>How to Play: Paranoia</p>
        <p>Paranoia is a classic party game that challenges one participant to answer a flattering, accusational, or down right troubling question about the other participants.</p>
        <p>The one answering participant will be secretly shown a question and will outload answer, which will be one of the other participants.</p>
        <p>A coin will then be flipped to determine if the question will be revealed or kept secret. Heads reveals, tails conceals.</p>
        <p>To learn more about our project, please visit our <a style={{color: 'blue'}} onClick={() => setViewer(2)}>About Page</a></p>
    </div>
    </div>
    );
}