import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';

export const WouldYouRather = ({setViewer}) => {

    function changeQuestionText() {

        const questionText1 = document.getElementById('questionText1');
        const questionText2 = document.getElementById('questionText2');
    
        fetch("http://127.0.0.1:4000/would-you-rather")
        .then(response => response.json())
        .then(json => setResult(json, questionText1, questionText2));
    
        function setResult(json, questionText) {
            var index = Math.floor(Math.random()*json.length);
            questionText1.textContent = json[index].first;
            questionText2.textContent = json[index].second;
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
    <div>
    <header>
            <h1 class="unselectable"><a onClick={() => setViewer(0)} style={{textDecoration: 'none', color: 'inherit'}}>PajamaJams</a></h1>
            <p id="databaseButton" onClick={() => setViewer(1)} class="unselectable button">Dabase</p>
            <p id="aboutButton" onClick={() => toggleAbout()} class="unselectable button">About</p>
            <p id="hamburgerButton" onClick={() => toggleHamburger()} class="unselectable button">&#8801;</p>
        </header>
        <main>

            <h1 class="unselectable" style={{width: '100%', textAlign: 'center'}}>Would You Rather...?</h1>
            <div id="questionBox1" class="box">
                <p id="questionText1" style={{fontSize: '35pt', textAlign: 'center'}}> </p>
            </div>

            <div id="questionBox2" class="box">
                <p id="questionText2" style={{fontSize: '35pt', textAlign: 'center'}}> </p>
            </div>

            <button id="promptButton" onClick={() => changeQuestionText()} class="unselectable button">New Prompt</button>
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
            <p>How to Play: Would You Rather</p>
            <p>Would You Rather is a classic party game that challenges a participant to decide their hypothetical fate.</p>
            <p>The participant will be shown two options which they will have to choose between.</p>
            <p>It is the participant's challenge to decide which of the options they would rather choose and justify it to the group.</p>
            <p>To learn more about our project, please visit our <a style={{color: 'blue'}} onClick={() => setViewer(2)}>About Page</a></p>
        </div>
    </div>
);
}