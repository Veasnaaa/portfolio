<template>
  <div>
    <div
      class="sm:flex-row flex flex-col-reverse justify-between gap-6 py-16 sm:px-12 px-0 mx-auto items-center"
    >
      <div
        class="text-center sm:text-start flex items-center sm:items-start gap-4 flex-col sm:px-8 px-12"
      >
        <h1
          data-text="I'm Veasna"
          class="text-4xl text-yellow-500 font-bold py-2"
        >
          I'm Veasna <span></span>
        </h1>
        <p class="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          eveniet fugiat amet pariatur neque obcaecati magnam officiis quaerat
          vitae incidunt excepturi facere, ad, ipsum harum blanditiis numquam
        </p>
        <button
          class="p-2 font-bold text-white w-40 px-10 bg-yellow-500 hover:bg-gradient-to-br hover:from-yellow-500 hover:to-yellow-700 rounded-full"
        >
          Get Start
        </button>
        <!-- <div class="bg-white w-3 h-10 animate-bounce"></div> -->
      </div>
      <div class=" flex justify-center items-center">
        <div
          class="bg-black rounded-full shadow shadow-white sm:w-80 sm:h-80 w-60 h-60"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<!-- <style scoped>
h1 {
  position: relative;
  -webkit-text-stroke: 0.3vw white;
}

h1::before {
  position: absolute;
  content: attr(data-text);
  top: 0;
  left: 0;
  width: 100%;
  color: blue;
  -webkit-text-stroke: 0vw white;
  border-right: 2px solid blue;
  overflow: hidden;
  animation: animate 6s linear infinite;
}

@keyframes animate {
  0%,
  10%,
  100% {
    width: 0;
  }
  70%,
  90% {
    width: 100%;
  }
}
</style> -->
