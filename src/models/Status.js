class Status {
  constructor() {
    this.OK = "OK";
    this.HOT = "HOT";
    this.BLOCKED = "BLOCKED";
  }

  getStatus(status) {
    return {
      status,
    };
  }
}

module.exports = Status;
