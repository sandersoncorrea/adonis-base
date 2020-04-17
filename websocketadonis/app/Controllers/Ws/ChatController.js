"use strict";

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }

  onMessage(message) {
    this.socket.broadcastToAll("message", message);
    console.log({ message });
  }

  onOpen() {
    // same as: socket.on('open')
  }

  onClose() {
    // same as: socket.on('close')
  }

  onError() {
    // same as: socket.on('error')
  }
}

module.exports = ChatController;
