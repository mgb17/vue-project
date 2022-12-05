<script>
import ArrowLeft from './icons/ArrowLeft.vue'
import ArrowRight from './icons/ArrowRight.vue'

export default {
  components: {
    ArrowLeft,
    ArrowRight,
  },
  //   data() {
  //     return {
  //     }
  //   },
  props: ['message', 'number'],
}
</script>

<template>
  <div class="content">Message from page {{ number }} is: {{ message }}</div>

  <div class="container">
    <ArrowLeft />
    <div class="page-wrapper">
      <div class="page-box">
        <input type="radio" id="box-1" name="number" checked />
        <label for="box-1">1</label>
      </div>
      <div>...</div>
      <div class="page-box">
        <input type="radio" id="box-2" name="number" />
        <label for="box-2">4</label>
      </div>
      <div class="page-box">
        <input type="radio" id="box-3" name="number" />
        <label for="box-3">5</label>
      </div>
      <div class="page-box">
        <input type="radio" id="box-4" name="number" />
        <label for="box-4">6</label>
      </div>
      <div>...</div>
      <div class="page-box">
        <input type="radio" id="box-5" name="number" />
        <label for="box-5">7</label>
      </div>
    </div>
    <ArrowRight />
  </div>
</template>

<style scoped>
.content {
  color: #fff;
  font-weight: 600;
}

input {
  position: absolute;
  opacity: 0;
}

.arrow-left,
.arrow-right {
  color: green;
  cursor: pointer;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}

div + div {
  margin-left: 1rem;
}

.page-wrapper {
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  align-items: center;
}

.page-box {
  width: 2.75rem;
  height: 2.75rem;
  background-color: gray;
  color: #fff;
  font-size: 1.25rem;
}

.page-box:hover {
  background-color: green;
}

label {
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

input:checked ~ label {
  background-color: green;
}
</style>
