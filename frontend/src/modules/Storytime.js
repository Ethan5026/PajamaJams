import React, { useState, useEffect } from "react";
import '../styles/StorytimeStyles.css'


export const Storytime = ({setViewer}) => {

    function changePromptText() {

        const promptText = document.getElementById('promptText');
    
        fetch("http://127.0.0.1:4000/storytime")
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
        <div>
<header>
        <h1 class="unselectable"><a onClick={() => setViewer(0)} style={{textDecoration: 'none', color: 'inherit'}}>PajamaJams</a></h1>
        <p id="databaseButton" onClick={() => setViewer(1)} class="unselectable button">Dabase</p>
        <p id="aboutButton" onClick={() => toggleAbout()} class="unselectable button">About</p>
        <p id="hamburgerButton" onClick={() => toggleHamburger()} class="unselectable button">&#8801;</p>
    </header>

    <main>

        <h1 class="unselectable" style={{width: '100%', textAlign: 'center'}}>Storytime</h1>
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
        <p>How to Play: Storytime</p>
        <p>Storytime is an engaging game that invites players to share personal anecdotes and tales based on given prompts.</p>
        <p>Each player takes turns clicking the "New Prompt" button and sharing a story based on the given prompt, recounting personal experiences, adventures, mishaps, or humorous incidents.</p>
        <p>The game continues with players taking turns sharing stories until everyone has had a chance to participate.</p>
        <p>To learn more about our project, please visit our <a style={{color: 'blue'}} onClick={() => setViewer(2)}>About Page</a></p>
    </div>
    </div>
    );
}