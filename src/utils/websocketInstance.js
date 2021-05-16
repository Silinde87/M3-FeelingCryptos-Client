import { w3cwebsocket as W3CWebSocket } from "websocket";

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
