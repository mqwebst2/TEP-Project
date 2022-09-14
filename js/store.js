class Storage {
  constructor(init = {}) {
    const self = this;
    this.subscribers = [];

    this.state = new Proxy(init, {
      set(state, key, value) {
        state[key] = value;

        for (const subscriber of self.subscribers) {
          subscriber(state);
        }
      },
    });
  }

  subscribe(cb) {
    if (typeof cb !== 'function') {
      throw new Error(`You must subscribe with a function.`);
    }

    this.subscribers.push(cb);
  }
}
