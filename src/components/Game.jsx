import React, { useState } from "react";

const Game = () => {
  // Génère un nb aléatoire
  const random = () => {
    return Math.floor(Math.random() * 50);
  };

  // Vérifie la correspondance des nb
  const checkNumber = (e) => {
    e.preventDefault();
    setAttempt(parseInt(attempt) + 1);
    if (parseInt(e.target[0].value) === number) {
      setMessage(`Bien joué ! Le nombre était ${number}.`);
      setNumber(random());
    } else {
      setMessage("Mauvais nombre, réessayez");
    }
  };

  // Nombre mystère et message
  const [number, setNumber] = useState(random());
  const [message, setMessage] = useState("");
  const [attempt, setAttempt] = useState("0");
  return (
    <main>
      {/* Formulaire de saisie */}
      <form onSubmit={(e) => checkNumber(e)}>
        <input
          className="form_number"
          type="number"
          placeholder="essayez un nombre"
        />
        <input className="form_submit" type="submit" value="Valider" />
      </form>
      {/* Message à l'utilisateur */}
      <div className="attempts">{attempt}</div>
      <div className="message">{message}</div>
    </main>
  );
};

export default Game;
