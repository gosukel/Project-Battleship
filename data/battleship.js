class Ship {
  constructor(name) {
    this.name = name;
    this.length =
      this.name === "Carrier"
        ? 5
        : this.name === "Battleship"
        ? 4
        : this.name === "Destroyer"
        ? 3
        : this.name === "Submarine"
        ? 3
        : this.name === "Patrol Boat"
        ? 2
        : 0;
    this.id =
      this.name === "Carrier"
        ? "c"
        : this.name === "Battleship"
        ? "b"
        : this.name === "Destroyer"
        ? "d"
        : this.name === "Submarine"
        ? "s"
        : this.name === "Patrol Boat"
        ? "p"
        : "";
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
      return true;
    }
    return false;
  }
}

module.exports = Ship;
