import './App.css';
import Game from "./container/Hunting_Game/hunting_game";
import Loading_game from "./component/states/Loading/loading_game";
import {useEffect, useState} from "react";
import Stomp from "@stomp/stompjs"
function App() {
    const [finish,setFinish]=useState(false)
    const [isLoading,setLoading]=useState(0)

    // const Stomp = require("@stomp/stompjs");
    Object.assign(global, { WebSocket: require('ws') });
    let client = new Stomp.Client({
        brokerURL: "ws://18.156.177.65:8080/crash/socket",
        onConnect: () => {
            console.log("connected");
            client.subscribe('/crash/state', message => {
                console.log(message.body);
            })
        },
        onStompError: receipt => {
            console.log(receipt.body);
        },
        onWebSocketError: evt => {
            console.log(evt);
        },
    });
    client.activate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (isLoading >= 100) {
                setFinish(!finish)
                return () => clearInterval(interval);
            }
            setLoading(width => width + 10)
            return isLoading
        }, 100);
        return () => clearInterval(interval);
    }, [isLoading]);
  return (
    <div className="App">
        {finish ? <Game finish={finish}/> : <Loading_game width={isLoading}/>}
        {/*<Loading_game width={isLoading}/>*/}
        {/*<Game/>*/}
        {/*<Loading/>*/}
    </div>
  );
}
export default App;
