import React, { useState } from "react";

// Link
import Animista, { AnimistaTypes } from "react-animista";
import categories from "./config";

import "./style.css";

const CATEGORIES_KEYS = Object.keys(categories);
const DEFAULT_CATEGORY_KEY: string = CATEGORIES_KEYS[0];

type TYPE =
  | "inherit"
  | "initial"
  | "normal"
  | "reverse"
  | "alternate"
  | "alternate-reverse"
  | undefined;

const App: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState(DEFAULT_CATEGORY_KEY);
  const [currentDirection, setCurrentDirection] = useState("normal");
  const [currentAnimation, setCurrentAnimation] = useState(
    AnimistaTypes.SCALE_UP_CENTER.toString()
  );
  const filteredAnimations: string[] = categories[currentCategory];

  console.log("là", currentDirection);
  return (
    <main>
      <div className="floating-panel">
        <div>
          <select
            value={currentCategory}
            onChange={e => {
              setCurrentCategory(e.target.value);
              setCurrentAnimation(categories[e.target.value][0]);
            }}
          >
            {CATEGORIES_KEYS.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          &nbsp;
          <select onChange={e => setCurrentAnimation(e.target.value)}>
            {filteredAnimations.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          &nbsp;
          <select onChange={e => setCurrentDirection(e.target.value)}>
            <option value="normal">normal</option>
            <option value="reverse">reverse</option>
            <option value="alternate">alternate</option>
            <option value="alternate-reverse">alternate-reverse</option>
            <option value="initial">initial</option>
            <option value="inherit">inherit</option>
          </select>
        </div>
        {/* */}
        <div className="links">
          <a
            href="https://github.com/MADEiN83/react-animista"
            title="React Animista on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          &nbsp;|&nbsp;
          <a
            href="http://animista.net"
            title="Animista"
            target="_blank"
            rel="noopener noreferrer"
          >
            Animista.net
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://crazydev.fr"
            title="CrazyDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            CrazyDev.fr
          </a>
        </div>
      </div>

      <div className="demo">
        <Animista
          type={currentAnimation as AnimistaTypes}
          style={{ width: 100, height: 100, backgroundColor: "white" }}
          direction={currentDirection as TYPE}
        >
          A
        </Animista>
      </div>
    </main>
  );
};

export default App;
