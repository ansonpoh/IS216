<script>
export default {
    data() {
        return {
            numCoins: 1,
            isHeadList: [],  // Array storing whether each coin is heads (true) or tails (false)
            count: 0,
            head: "/img/head.png",
            tail: "/img/tail.png",
        };
    },

    // ADD YOUR CODE HERE
    computed: {
        counter() {
            this.count++;
        },

        increaseCoinCount() {
            this.isHeadList.push(true);
        },

        decreaseCoinCount() {
            this.isHeadList.pop();
        },

        flip() {
            let tempList = [];
            for(let coin in this.isHeadList) {
                if(coin) tempList.push(false);
                else tempList.push(true);
            }
            this.isHeadList = tempList;
            console.log(this.isHeadList)
        }
    }






    // END OF ADDING YOUR CODE HERE
}
</script>

<template>
    <!-- ADD YOUR CODE HERE -->
    Number of coins
    <input type="number" v-model="numCoins"/>
    <button class="btn btn-primary" @click.prevent="flip, counter">Flip</button>

    <br/>
    <span v-for="value in isHeadList">
        <img v-if="value" :src="head"/>
        <img v-else :src="tail"/>
    </span>
    <br/>

    <p>Flipped {{ count }} times </p>



    

    

    <!-- END OF ADDING YOUR CODE HERE -->
</template>

<style scoped>
/* Optional styling can go here */
</style>
