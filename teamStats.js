const team = {
    _players: [
        {firstName: 'Nolan', lastName: 'Ryan', age: 36},
        {firstName: 'Gary', lastName: 'Carter', age: 39},
        {firstName: 'Babe', lastName: 'Ruth', age: 48},
    ],
    _games: [
        {opponent: 'Cubs', teamPoints: 55, opponentPoints: 2},
        {opponent: 'Suns', teamPoints: 44, opponentPoints: 3},
        {opponent: 'Astros', teamPoints: 33, opponentPoints: 4}
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(oppName, points, oppPoints) {
        const game = {
            opponent: oppName,
            teamPoints: points,
            opponentPoints: oppPoints,
        }
        this.games.push(game);
    }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Wolves', 16, 49)
team.addGame('Panthers', 14, 99)
team.addGame('Warriors', 19, 39)

console.log(team.games)