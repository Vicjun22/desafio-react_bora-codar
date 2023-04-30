import './home.style.css';

import { useState } from 'react';

export function Home() {
  const [myName, setMyName] = useState('');
  const [friendsName, setFriendsName] = useState('');

  const handleInputFocus = (event) => {
    event.target.placeholder = '';
    event.target.value = '';
  };

  const handleInputBlur = (event, placeholder) => {
    if (!event.target.value) {
      event.target.placeholder = placeholder;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="home-form" onSubmit={handleSubmit}>
      <label className="home-label">
        Digite seu nome:
        <input
          className="home-input"
          type="text"
          value={myName}
          placeholder="Digite seu nome aqui"
          onFocus={handleInputFocus}
          onBlur={(event) =>
            handleInputBlur(event, 'Digite seu nome aqui')
          }
          onChange={(e) => setMyName(e.target.value)}
          required
        />
      </label>

      <label className="home-label">
        Digite o nome de seu amigo:
        <input
          className="home-input"
          type="text"
          value={friendsName}
          placeholder="Digite o nome de seu amigo aqui"
          onFocus={handleInputFocus}
          onBlur={(event) =>
            handleInputBlur(event, 'Digite o nome de seu amigo aqui')
          }
          onChange={(e) => setFriendsName(e.target.value)}
          required
        />
      </label>

      <button className="home-btn" type="submit">
        Iniciar Chat
      </button>
    </form>
  );
}
