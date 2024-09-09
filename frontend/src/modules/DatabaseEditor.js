import React, { useState, useEffect } from "react";
import '../styles/DatabaseEditor.css';

export const DatabaseEditor = ({setViewer}) => {
  const [tablename, setTablename] = useState("");
  const [items, setItems] = useState([]);

  const itemsView = (
    <div>
      <table>
        <tr>
          { items.length > 0 ? Object.keys(items[0]).map((key) => (
            <th>{key}</th>
          )) : <th>Table Empty</th> }
        </tr>
        {items.map((el) => (
          <tr>
            {Object.keys(el).map((key) => (
              <td>
                { key !== "id" ? <input value={el[key]} onChange={(e) => handleItemChange(el.id, key, e.target.value)} onBlur={() => handleItemUpdate(el.id)}></input> : el[key]}
              </td>
            ))}
            <td>
            <button onClick={() => handleItemDelete(el.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg>
            </button>
            </td>
          </tr>
        ))}
        <tr>
          <button onClick={() => handleItemAdd(tablename)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
          </button> <br/> <br/>
        </tr>
      </table>
    </div>
  );

  useEffect(() => {
    getItems();
  }, []);

  function getItems(tablename) {
    if (!tablename || tablename === "") return
    fetch("http://127.0.0.1:4000/" + tablename, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
    });
  }

  function handleTableChange(tablename) {
    setTablename(tablename);
    getItems(tablename);
  }

  function handleItemChange(id, key, value) {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [key]: value };
      }
      return item;
    }));
  }

  function handleItemUpdate(id) {
    fetch("http://127.0.0.1:4000/" + tablename + "/" + id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(items.filter((item) => item.id === id)[0])
      });
  }

  function handleItemDelete(id) {
    setItems(items.filter(item => item.id !== id));
    fetch("http://127.0.0.1:4000/" + tablename + "/" + id, {method: "DELETE"});
  }

  function handleItemAdd(tablename) {
    if (!tablename || tablename === "") return
    fetch("http://127.0.0.1:4000/" + tablename,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
      })
      .then(() => {
        getItems(tablename);
    });
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
        <h1 className="unselectable"><a onClick={() => setViewer(0)} style={{ textDecoration: 'none', color: 'inherit' }}>PajamaJams</a></h1>
        <p id="databaseButton" onClick={() => setViewer(1)} class="unselectable button">Dabase</p>
        <p id="aboutButton" onClick={() => toggleAbout()} class="unselectable button">About</p>
        <p id="hamburgerButton" onClick={() => toggleHamburger()} class="unselectable button">&#8801;</p>
      </header>
      <br/><br/>
      <h2 id="gameDropdownHeader"><strong>Table: </strong></h2>
      <select id="gameDropdown" onChange={(e) => handleTableChange(e.target.value)}>
        <option value="" disabled selected hidden>Select a table...</option>
        <option value="charades">Charades</option>
        <option value="kiss-marry-kill">Kiss Marry Kill</option>
        <option value="never-have-i-ever">Never Have I Ever</option>
        <option value="paranoia">Paranoia</option>
        <option value="pictionary">Pictionary</option>
        <option value="smash-or-pass">Smash Or Pass</option>
        <option value="truth-or-dare/truth">Truth Or Dare (Truths)</option>
        <option value="truth-or-dare/dare">Truth Or Dare (Dares)</option>
        <option value="would-you-rather">Would You Rather</option>
      </select>
      <br/>
      {itemsView}
      
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
}