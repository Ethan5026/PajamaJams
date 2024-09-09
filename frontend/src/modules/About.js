import React from "react";

export const About = ({ setViewer }) => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      color: '#333',
      margin: 0,
      padding: 0,
    },
    aboutInfo: {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    },
    titleBox: {
      backgroundColor: '#92d6ea',
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '8px',
      textAlign: 'center',
    },
    nameBox: {
      backgroundColor: '#aef2d3',
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '8px',
    },
    pageTitle: {
      marginBottom: '10px',
    },
    sectionTitle: {
      textDecoration: 'underline',
      marginBottom: '5px',
    },
    contentText: {
      lineHeight: '1.6',
      marginBottom: '15px',
    },
    boldText: {
      fontWeight: 'bold',
    },
    emailLink: {
      color: '#4285f4',
      textDecoration: 'none',
    },
    'emailLink:hover': {
      textDecoration: 'underline',
    }
    // Define other styles here
  };

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
        <h1 className="unselectable"><a onClick={() => setViewer(0)} style={{ textDecoration: 'none', color: 'inherit' }}>PajamaJams</a></h1>
        <p id="databaseButton" onClick={() => setViewer(1)} class="unselectable button">Dabase</p>
        <p id="aboutButton" onClick={() => toggleAbout()} className="unselectable button">About</p>
        <p id="hamburgerButton" onClick={() => toggleHamburger()} className="unselectable button">&#8801;</p>
      </header>

      <main className="aboutInfo" style={styles.aboutInfo}>
        <div className="nameBox" style={styles.nameBox}>
          <h2 className="sectionTitle" style={styles.sectionTitle}><u>Isaac Denning</u></h2>
          <p className="contentText" style={styles.contentText}>
            Outside of school I have developed two full-stack applications with Angular frontends. <br />
            However, neither of these applications revolved around game development like this one. <br />
            Although I do believe many of my more general web design skills will transfer over to this <br />
            project development of this project. <br /><br />
            <span className="boldText" style={styles.boldText}>Email:</span> <a className="emailLink"  style={styles.emailLink} href="mailto:idenning@iastate.edu">idenning@iastate.edu</a>
            <span className="boldText" style={styles.boldText}>Professor Email:</span> <a className="emailLink"  style={styles.emailLink} href="mailto:jannesar@iastate.edu">idenning@iastate.edu</a>

          </p>
        </div>
        <div className="nameBox"style={styles.nameBox}>
          <h2 className="sectionTitle" style={styles.sectionTitle}><u>Ethan Gruening</u></h2>
          <p className="contentText"style={styles.contentText}>
            As a sophomore studying Software Engineering, I have current experience in the development <br />
            of a Python GUI through a research group. Although this project was not in the text stack <br />
            of COMS 319, the experimental process of identifying user needs, creating a technical design, <br />
            writing, testing, and revising code will help me comfortably navigate the design process <br />
            of PajamaJams. I also have additional experience with MySQL and back/front-end linkage, <br />
            which will help in the Final Project implementation. <br /><br />
            <span className="bold-text" style={styles.boldText}>Email:</span> <a className="emailLink" style={styles.emailLink} href="mailto:ethgru@iastate.edu">ethgru@iastate.edu</a>
            <span className="boldText" style={styles.boldText}>Professor Email:</span> <a className="emailLink"  style={styles.emailLink} href="mailto:jannesar@iastate.edu">idenning@iastate.edu</a>

          </p>
        </div>
      </main>

      <div id="aboutDropdown">
        <p>Welcome to PajamaJams!</p>
        <p>A widely shared social experience of teenagers and pre-teens is the lively, fun-filled, secret sharing sleepovers that help solidify new and best friendships of their adolescent years. These sleepovers are filled with timelessly bonding games of Truth or Dare, Would You Rather, and Never Have I Ever. Now more than ever, kids are integrating new apps, games, and technology into their lives, and so must their gossip-filled party games. This semester, we will be creating a web application to host and automate a collection of classic sleepover games that kids and adults can enjoy to lighten any party or get-together. <br></br>PajamaJams offers a random selection of juicy prompts for Truth or Dare, Would You Rather, Never Have I Ever, Smash or Pass, Kiss-Marry-Kill, Storytimes, Paranoia, Pictionary, and Charades so the fun never has to end!</p>
        <p>This website is a project for COMS 319's Midterm Project, created by Isaac Denning and Ethan Gruening.</p>
        <p>As part of this course, our goal is to provide a central hub for playing a variety of entertaining games.</p>
        <p>Feel free to explore and enjoy popular games like Truth or Dare, Paranoia, Would You Rather, Never Have I Ever, Kiss Marry Kill, Pictionary, Charades, Smash or Pass, and Storytime by clicking the image button.</p>
        <p>Have a fantastic time and let the games begin!</p>
        <p>To learn more about our project, please visit our <a style={{ color: 'blue' }} onClick={() => setViewer(2)}>About Page</a></p>
      </div>
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
    </div>
  );
};
