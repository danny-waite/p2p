function handler(event) {
  console.log("got event", event);
  return event;
}

function setup() {
}

module.exports.handler = handler;
module.exports.setup = setup;