function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const apps = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessage: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //draw
        this.winner = "Draw";
      } else if (value <= 0) {
        // player Lost
        this.winner = "Monster";
      }
    },

    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //draw
        this.winner = "Draw";
      } else if (value <= 0) {
        // monster Lost
        this.winner = "Player";
      }
    },
  },
  computed: {
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    useSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessage = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = randomNumber(5, 12);
      this.monsterHealth -= attackValue;
      this.battleLogs("Player", "attack", attackValue);
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = randomNumber(8, 15);
      this.playerHealth -= attackValue;
      this.battleLogs("Monster", "attack", attackValue);
    },

    specialAttack() {
      this.currentRound++;
      const attackValue = randomNumber(10, 25);
      this.monsterHealth -= attackValue;
      this.battleLogs("Player", "attack", attackValue);
      this.attackPlayer();
    },

    healPlayer() {
      this.currentRound++;
      const healValue = randomNumber(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.battleLogs("Player", "heal", healValue);
      this.attackPlayer();
    },

    surrenderBattle() {
      this.winner = "Monster";
    },

    battleLogs(who, what, value) {
      this.logMessage.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

apps.mount("#game");
