<template>
    <div id='app'>
        <div class='searchContainer'>
            <input v-model="searchKey" placeholder='Boost' @keyup.enter='sendRequest'>
            <button @click ="sendRequest">Send Request</button>
        </div>
        <ul v-if="isFounded">   
            <li v-for='item in this.$store.state.goods' @click='hrefTranslation(item[1][1])'>
                <p class='contentContainer'><img :src='srcCreate(item[1][2])'> {{item[0]}} ({{item[1][0]}}) </p> 
            </li>
        </ul>
        <div v-else>No results</div>
    </div>
</template>

<script>
import { sendReq } from "./sendReq";

export default {
        data() {
            return {
                searchKey: '',
                isFounded: true
            }
        },
        methods: {
            async sendRequest (){
                let ans = await sendReq(this.searchKey);
                this.$store.dispatch('updateTitle', ans);
                if (ans.length == 0){
                    this.isFounded = false;
                } else {
                    this.isFounded = true;
                }
            },
            hrefTranslation (ref){
                window.open(`https://www.endclothing.com/ru/${ref}.html?fresh=true`);
            },
            srcCreate (ref){
                return `https://media.endclothing.com/media/f_auto,q_auto:eco,w_50,h_50/prodmedia/media/catalog/product/${ref}`
            },
            clickPress(event){                      //Enter-key pressing
                if (event.keyCode == 13){
                    sendRequest();
                }
            }
        }
};
</script>

<style>
.contentContainer {
    display: flex;
    align-items: center;
    justify-content: start; 
}
.searchContainer {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
    padding-bottom: 6px;
}
img {
    height: 100%;
    width: 40px;
    border: 2px solid black;
    margin-right: 3px;
    border-radius: 5px;
}
ul {
    margin-left: 0;
    padding-left: 0;
}
li {
    cursor: pointer;
    list-style-type: none;
}
button {
    margin-left: 5px;
}
html {
    width: max-content;
}
</style>