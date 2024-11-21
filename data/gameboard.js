const Ship = require("./battleship");

class Gameboard {
  constructor() {
    this.carrier = new Ship("Carrier");
    this.battleship = new Ship("Battleship");
    this.destroyer = new Ship("Destroyer");
    this.submarine = new Ship("Submarine");
    this.patrolBoat = new Ship("Patrol Boat");
    this.ships = [
      this.carrier,
      this.battleship,
      this.destroyer,
      this.submarine,
      this.patrolBoat,
    ];

    this.board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  clearBoard() {
    this.board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  place(ship, x, y, alignment = "h") {
    if (
      (alignment === "h" &&
        (!this.board[x] || !this.board[y + ship.length - 1])) ||
      (alignment === "v" &&
        (!this.board[x + ship.length - 1] || !this.board[y]))
    )
      return this.board;
    let tempNewBoard = [...this.board];
    if (alignment === "h") {
      for (let i = 0; i < ship.length; i++) {
        if (tempNewBoard[x][y + i] !== 0) return this.board;
        tempNewBoard[x][y + i] = ship.id;
      }
    }
    if (alignment === "v") {
      for (let i = 0; i < ship.length; i++) {
        if (tempNewBoard[x + i][y] !== 0) return this.board;
        tempNewBoard[x + i][y] = ship.id;
      }
    }
    this.board = tempNewBoard;
    // console.log(this.board);
    return this.board;
  }

  receiveAttack(x, y) {
    let target = this.board[x][y];

    // INVALID
    //    loc = -,X (repeat target)
    if (target === "x" || target === "-") return "invalid";

    // CHECK FOR MISS
    //    loc = 0
    if (target === 0) {
      this.board[x][y] = "-";
    } else {
      let hitShip = this.ships.filter(x => x.id === target)[0];
      hitShip.hit();
      this.board[x][y] = "x";
    }

    // HIT
    //    loc = c,b,d,s,p

    
    return this.board;
  }
}

module.exports = Gameboard;
