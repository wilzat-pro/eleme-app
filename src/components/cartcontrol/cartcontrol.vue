<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop="decreaseCart">
            </div>
        </transition>
        <transition name="fade">
            <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        </transition>
        <div class="cart-add icon-add_circle" @click.stop="addCart"></div>
    </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue';
export default {
    props: {
        food: {
            type: Object
        }
    },
    methods: {
        addCart(event) {
            if (!event._constructed) {
                return;
            }
            if(!this.food.count) {
                Vue.set(this.food, 'count', 1);
            }else {
                this.food.count++;
            }
            this.$emit('cartadd', event.target);
        },
        decreaseCart(event) {
            if (!event._constructed) {
                return;
            }
            if (this.food.count) {
                this.food.count--;
            }
            this.$emit('cartminus', event.target);
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.cartcontrol
    font-size 0
    .move-enter-active, .move-leave-active
        transition all 0.4s linear
    .move-enter, .move-leave-to
        opacity 0
        transform translate3d(24px, 0, 0) rotate(180deg)
    .cart-decrease
        display inline-block
        padding 6px
        display inline-block
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220)
    .fade-enter-active, .fade-leave-active
        transition all 0.4s
    .fade-enter, .fade-leave-to
        opacity 0
    .cart-count
        display inline-block
        vertical-align top
        width 12px
        padding-top 6px
        line-height 24px
        text-align center
        font-size 10px
        color rgb(147, 153, 159)
    .cart-add
        display inline-block
        padding 6px
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220)
</style>