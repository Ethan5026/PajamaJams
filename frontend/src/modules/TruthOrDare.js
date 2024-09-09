import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import '../styles/WouldYouRatherStyles.css';

export const TruthOrDare = ({setViewer}) => {
    const styles = {
        options: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 'xx-large',
        },
        truth: {
            backgroundColor: '#B8D7FA',
        },
        dare: {
            backgroundColor: '#ECC5D6',
            marginLeft: 'max(calc(40dvw - 60vh + 100px), 0px)',
        },
        result: {
            backgroundColor: '#f2f2f2',
            width: '50%',
            marginRight: '25%',
            marginLeft: '25%',
            border: '2px solid #666666',
            borderRadius: '20px',
            minHeight: '100px',
            textAlign: 'center',
            fontSize: 'xx-large',
        },
        truthButton: {
            transform: 'translateY(-50%)',
            marginTop: 'calc(50% - 160px)',
        },
        dareButton: {
            transform: 'translateY(-50%)',
            marginTop: 'calc(50% - 160px)',
        },
        option: {
            width: 'min(50dvw, calc(60vh - 100px))',
            height: 'min(50dvw, calc(60vh - 100px))',
            margin: '10px',
            textAlign: 'center',
            border: '2px solid #666666',
            borderRadius: '20px',
        },
        title: {
            textDecoration: 'none',
            color: 'inherit',
        }
    };
    
    function loadResult(choice) {
        const result = document.getElementById("result");
        fetch("http://127.0.0.1:4000/truth-or-dare/"+choice)
        .then(response => response.json())
        .then(json => setResult(json));
        function setResult(json) {
            result.innerHTML = "<p>" + json[Math.floor(Math.random()*json.length)].prompt + "</p>";
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
        <h1 class="unselectable"><a onClick={() => setViewer(0)} style={styles.title}>PajamaJams</a></h1>
        <p id="databaseButton" onClick={() => setViewer(1)} class="unselectable button">Dabase</p>
        <p id="aboutButton" onClick={() => toggleAbout()} class="unselectable button">About</p>
        <p id="hamburgerButton" onClick={() => toggleHamburger()} class="unselectable button">&#8801;</p>
    </header>

    <main>

        <h1 class="unselectable" style={{width: '100%', textAlign: 'center'}} >Truth or Dare</h1>
        <div id="game" >
            <div id="options" style={styles.options}>
                <div id="truth" style={{...styles.option, ...styles.truth}} class="option">
                    <h1 class="unselectable">Truth</h1>
                    <p id="truthButton" style={styles.truthButton} onClick={() => loadResult('truth')} class="unselectable button">Get Prompt</p>
                </div>
                <div id="dare" style={{...styles.option, ...styles.dare}} class="option">
                    <h1 class="unselectable">Dare</h1>
                    <p id="dareButton" style={styles.dareButton} onClick={() => loadResult('dare')} class="unselectable button">Get Prompt</p>
                </div>
            </div>
            <div id="result" style={styles.result}>
                <p>Choose on of the two options above...</p>
            </div>
        </div>
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
        <p>How to Play: Truth or Dare</p>
        <p>Truth or Dare is a popular party game that offers players the choice between answering a question truthfully or completing a dare.</p>
        <p>Randomly select the first player to begin, they must either select to get a prompt from "Truth" or from "Dare".</p>
        <p>If the chosen player selects "Truth," they must truthfully answer a question posed by the player who asked.</p>
        <p>If the chosen player selects "Dare," they must complete a challenge or task given by the player who asked.</p>
        <p>After completing their turn, the chosen player then selects next person to play.</p>
        <p>The game continues with players taking turns asking and answering truthfully or completing dares until everyone has had a chance to participate.</p>
        <p>To learn more about our project, please visit our <a style={{color: 'blue'}} onClick={() => setViewer(2)}>About Page</a></p>
        
    </div>
</div>
    );
}