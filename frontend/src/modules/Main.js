import React, { useState, useEffect } from "react";

export const MainPage = ({ setViewer }) => {

    function toggleAbout() {
        var aboutDropdown = document.getElementById("aboutDropdown");
        aboutDropdown.style.display = (aboutDropdown.style.display === "block") ? "none" : "block";
    }
    function toggleHamburger() {
        var hamburgerDropdown = document.getElementById("hamburgerDropdown");
        hamburgerDropdown.style.display = (hamburgerDropdown.style.display === "flex") ? "none" : "flex";
    }

    return (
        <div>
            <header>
                <h1 class="unselectable"><a onClick={() => setViewer(0)} style={{textDecoration: 'none', color: 'inherit'}}>PajamaJams</a></h1>
                <p id="databaseButton" onClick={() => setViewer(1)} class="unselectable button">Dabase</p>
                <p id="aboutButton" onClick={() => toggleAbout()} class="unselectable button">About</p>
                <p id="hamburgerButton" onClick={() => toggleHamburger()} class="unselectable button">&#8801;</p>
            </header>
            <main id="game_images">
                <div>
                <a onClick={() => setViewer(3)}><img class="image-container" alt="Truth Or Dare" src="/images/truth-or-dare.png"></img></a>
                <a onClick={() => setViewer(4)}><img alt="Paranoia" class="image-container"src="/images/paranoia.png"></img></a>
                <a onClick={() => setViewer(5)}><img alt="Would You Rather" class="image-container"src="/images/would-you-rather.png"></img></a>
                <a onClick={() => setViewer(6)}><img alt="Pictionary" class="image-container"src="/images/pictionary.png"></img></a>
                <a onClick={() => setViewer(7)}><img alt="Kiss Marry Kill" class="image-container"src="/images/kiss-marry-kill.png"></img></a>
                <a onClick={() => setViewer(8)}><img alt="Charades" class="image-container"src="/images/charades.png"></img></a>
                <a onClick={() => setViewer(9)}><img alt="Never Have I Ever" class="image-container"src="/images/never-have-i-ever.png"></img></a>
                <a onClick={() => setViewer(10)}><img alt="Smash or Pass" class="image-container"src="/images/smash-or-pass.png"></img></a>
                <a onClick={() => setViewer(11)}><img alt="Storytime" class="image-container"src="/images/storytime.png"></img></a>
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
                <p>Welcome to PajamaJams!</p>
                <p>A widely shared social experience of teenagers and pre-teens is the lively, fun-filled, secret sharing sleepovers that help solidify new and best friendships of their adolescent years. These sleepovers are filled with timelessly bonding games of Truth or Dare, Would You Rather, and Never Have I Ever. Now more than ever, kids are integrating new apps, games, and technology into their lives, and so must their gossip-filled party games. This semester, we will be creating a web application to host and automate a collection of classic sleepover games that kids and adults can enjoy to lighten any party or get-together. <br></br>PajamaJams offers a random selection of juicy prompts for Truth or Dare, Would You Rather, Never Have I Ever, Smash or Pass, Kiss-Marry-Kill, Storytimes, Paranoia, Pictionary, and Charades so the fun never has to end!</p>
                <p>This website is a project for COMS 319's Midterm Project, created by Isaac Denning and Ethan Gruening.</p>
                <p>As part of this course, our goal is to provide a central hub for playing a variety of entertaining games.</p>
                <p>Feel free to explore and enjoy popular games like Truth or Dare, Paranoia, Would You Rather, Never Have I Ever, Kiss Marry Kill, Pictionary, Charades, Smash or Pass, and Storytime by clicking the image button.</p>
                <p>Have a fantastic time and let the games begin!</p>
                <p>To learn more about our project, please visit our <a style={{ color: 'blue' }} onClick={() => setViewer(2)}>About Page</a></p>
            </div>
        </div>
    );
}