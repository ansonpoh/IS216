<script>


export default {
  name: 'App',
  
  data() {
    return {
      group: "HUNTRIX",
      members: [
        {
          id: 1,
          name: "Rumi",
          role: "Leader, Vocal",
          img: "/img/rumi.jpg",
          profile: [
            'Zodiac Sign: Aries',
            'Chinese Zodiac Sign: Goat',
            'Oldest of the three members in HUNTRIX',
            'Taekwondo Black Belt',
            'Loves cats',
            'Her favorite ramen flavor is Spicy Chicken.'
          ]
        },
        { 
          id: 2, 
          name: 'Mira', 
          role: 'Rapper',        
          img: '/img/mira.jpg',
          profile: [
            'Zodiac Sign: Taurus',
            'Chinese Zodiac Sign: Monkey',
            'Dancing since 4 years old',
            'Choreography for most of HUNTRIX songs',
            'Mira can play drums',
            'Her favorite ramen flavor is roast beef.'
          ]

        },
        { 
          id: 3, 
          name: 'Zoey', 
          role: 'Dancer',        
          img: '/img/zoey.jpg',
          profile: [
            'Zodiac Sign: Sagittarius',
            'Chinese Zodiac Sign: Rooster',
            'Her hobbies are drawing and skateboarding.',
            'She can play the bass',
            "Wrote most of HUNTRIX songs' rap parts",
            'Her favorite ramen flavor is pork with soy sauce.'
          ]

        }
      ],
      query: "",
      selectedMember: null,
    }
  },

  computed: {
    filteredMembers() {
      const q = this.query.trim().toLowerCase();

      if(!q) return this.members;

      return this.members.filter(m => m.name.toLowerCase().includes(q));
    },

  },

  methods: {
    showProfile(member) {
      if(this.selectedMember === member) {
        this.selectedMember = null
      } else {
        this.selectedMember = member;
      }
    }
  },

  watch: {
    query() {
      this.selectedMember = null;
    }
  }
};
</script>

<template>
  <main class="container">
    <h1>HUNTRIX Member Explorer</h1>
    <p>
      Search: <input type="text" v-model="query"/>
    </p>

    <p>
      Results:
      {{ filteredMembers.length }} of {{ members.length }}
    </p>

    <p v-if="filteredMembers.length === 0">
      No members found for "{{ query }}"
    </p>

    <ol v-else>
      <li v-for="m in filteredMembers" :key="m.id">
        <button @click="showProfile(m)" :class="{active: selectedMember && selectedMember.id === m.id}">
          {{ m.name }} - {{ m.role }}
        </button>
        <br/>
        <img :src="m.img" :alt="m.name" width="100"/>
      </li>
    </ol>

    <section v-if="selectedMember" class="profile">
      <h2>{{ selectedMember.name }}'s Profile</h2>
      <ul>
        <li v-for="(info, idx) in selectedMember.profile" :key="idx">
          {{ info }}
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.active {
  background-color: purple;
  color: white;
}
</style>
