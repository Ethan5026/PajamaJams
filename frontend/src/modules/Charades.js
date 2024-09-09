import React, { useState, useEffect } from "react";
import '../styles/CharadesStyles.css'


export const Charades = ({setViewer}) => {
    function changePromptText() {

        const promptText = document.getElementById('promptText');
    
        fetch("http://127.0.0.1:4000/charades")
        .then(response => response.json())
        .then(json => setResult(json, promptText));
    
        function setResult(json, promptText) {
            var index = Math.floor(Math.random()*json.length);
            promptText.textContent = json[index].prompt;
        }
    }

    function toggleAbout() {
        var aboutDropdown = document.getElementById("aboutDropdown");
        aboutDropdown.style.display = (aboutDropdown.style.display === "block") ? "none" : "block";
    }
    function toggleHamburger() {
        var hamburgerDropdown = document.getElementById("hamburgerDropdown");
        hamburgerDropdown.style.display = (hamburgerDropdown.style.display === "flex") ? "none" : "flex";
    }

    return(
        <div><header>
        <h1 class="unselectable"><a onClick={() => setViewer(0)} style={{textDecoration: 'none', color: 'inherit'}}>PajamaJams</a></h1>
        <p id="databaseButton" onClick={() => setViewer(1)} class="unselectable button">Dabase</p>
        <p id="aboutButton" onClick={() => toggleAbout()} class="unselectable button">About</p>
        <p id="hamburgerButton" onClick={() => toggleHamburger()} class="unselectable button">&#8801;</p>
    </header>

    <main>

        <h1 class="unselectable" style={{width: '100%', textAlign: 'center'}}>Charades</h1>
        <div id="promptBox" class="box">
            <p id="promptText" style={{fontSize: '35pt', textAlign: 'center'}}>Click on the New Prompt button...</p>
        </div>
        <p id="promptButton" class="unselectable button" onClick={() => changePromptText()}>New Prompt</p>
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
        <p>How to Play: Charades</p>
        <p>Charades is a classic guessing game that sparks laughter and creativity among players.</p>
        <p>Begin by dividing players into teams. Taking turns, each team will choose one member of the team to click the "New Prompt" button and act out the word or phrase while their team tries to guess what it is.</p>
        <p>The acting player cannot speak or make any sounds, and they have a limited time to convey the word or phrase. If the team correctly guesses the word or phrase within the time limit, they earn points. If not, the turn passes to the next team.</p>
        <p>The game continues with teams alternating turns until a predetermined point goal is reached.</p>
        <p>To learn more about our project, please visit our <a style={{color: 'blue'}} onClick={() => setViewer(2)}>About Page</a></p>

    </div>
    </div>
    );
}