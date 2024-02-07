function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const apps = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    useSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = randomNumber(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = randomNumber(8, 15);
      this.playerHealth -= attackValue;
    },

    specialAttack() {
      this.currentRound++;
      const attackValue = randomNumber(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },

    healPlayer() {
      this.currentRound++;
      const healValue = randomNumber(8, 20);
      if (playerHealth + healValue > 100) {
        playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      this.attackPlayer();
    }
  }
});

apps.mount('#game');
