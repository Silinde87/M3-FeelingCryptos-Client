import { w3cwebsocket as W3CWebSocket } from "websocket";

//using singleton architecture to instantiate only once the websocket

class WebsocketInstance {
  static instance;

 static getInstance() {
    if (!WebsocketInstance.instance) {
      WebsocketInstance.instance = new W3CWebSocket(`${process.env.REACT_APP_URL_WEBSOCKET}`);
    }
    return WebsocketInstance.instance;
  }
}

export default WebsocketInstance;
