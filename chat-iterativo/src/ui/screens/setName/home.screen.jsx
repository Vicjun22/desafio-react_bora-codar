import "./home.style.css";

import { useState } from "react";

export function Home() {
    const [myName, setMyName] = useState("");
    const [friendsName, setFriendsName] = useState("");

    return (
        <>
            <form>
                <div>
                    <label>Digite seu nome:</label>
                    <input type="text" value={myName} onChange={(e) => setMyName(e.target.value)} ></input>
                </div>
                <div>
                    <label>Digite o nome de seu amigo:</label>
                    <input type="text" value={friendsName} onChange={(e) => setFriendsName(e.target.value)} ></input>
                </div>
            </form>
            <button onSubmit={() => handleSubmit()}>Iniciar Chat</button>
        </>
    )
}