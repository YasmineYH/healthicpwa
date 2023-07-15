<template>
  <div class="main-pages">
      <h2 class="h2-black">select your type of appointment</h2>

      <div class="form-step-title">
        <p>{{ formLevelTitle.value }} LEVEL</p>
        <span></span>
      </div>

      <form action="">
        <div class="step1" v-if="formLevel == 1">
          <div class="form-group radios">
            <div class="input-group radios-input">
              <label for="01">Regular</label>
              <input id="01" type="radio" name="r" value="1" checked="">
            </div>

            <div class="input-group radios-input">
              <label for="02">Maternity</label>
              <input id="02" type="radio" name="r" value="2">
            </div>
          </div>

          <button class="main-btn" v-on:click="formLevelUp()">Next</button>
        </div>

        <div class="step2" v-if="formLevel == 2">
          <div class="form-group">
            <div class="input-group">
              <label class="p-bold" for="maternity_no">Maternity Number</label>
              <img class="info" alt="Info Icon" src="@/assets/svgs/info.svg">
              <input type="text" name="maternity_no" v-model="maternityNo">
            </div>
            <div class="input-group">
              <label class="p-bold" for="patient_no">Patient Number</label>
              <img class="info" alt="Info Icon" src="@/assets/svgs/info.svg">
              <input type="text" name="patient_no" v-model="patientNo">
            </div>
            <div class="input-group">
              <label class="p-bold" for="password">Password</label>
              <input type="password" name="password" v-model="password">
            </div>
          </div>

          <div class="button-ctn">
            <button class="main-btn" v-on:click="formLevelDown()">Previous</button>
            <button class="main-btn" v-on:click="formLevelUp()">Next</button>
          </div>
        </div>

        <div class="step3" v-if="formLevel == 3"></div>

        <div class="step4" v-if="formLevel == 4"></div>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ScheduleApptView',
  setup() {
    const formLevel = ref(1)
    const formLevelTitle = ref()
    

    switch(formLevel.value) {
      case 1:
        formLevelTitle.value = "Moov"
        console.log(formLevelTitle.value)
        break
      case 2:
        formLevelTitle.value = "Patient Details"
        console.log(formLevelTitle.value)
        break
      case 3:
        formLevelTitle.value = "Appointment Details"
        break
      case 4:
        formLevelTitle.value = "Additional Information"
        break
      case 5:
        formLevelTitle.value = "Payment Options"
        break
      case 6:
        formLevelTitle.value = ""
        break
    }

    const formLevelUp = () => formLevel.value ++
    const formLevelDown = () => formLevel.value --



    return  {
      formLevel,
      formLevelTitle,
      formLevelUp,
      formLevelDown
    }
  }
}
</script>


<style lang="scss" scoped>

.radios {
  --background: #ffffff;
  --text: #FF1919;
  --radio: #333333;
  --radio-checked: #FF1919;
  --radio-size: 20px;
  background: var(--background);
  color: var(--text);

  .input-group.radios-input {
    border: 1px solid;
    display: flex;

    label {
      cursor: pointer;
      font-weight: 600;
      font-size: 13px;
    }

    input[type="radio"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      height: var(--radio-size);
      width: var(--radio-size);
      outline: none;
      margin: 0;
      cursor: pointer;
      border: 2px solid var(--radio);
      background: transparent;
      border-radius: 50%;
      display: grid;
      justify-self: end;
      justify-items: center;
      align-items: center;
      overflow: hidden;
      transition: border .5s ease;
    }

    input[type="radio"]::before, input[type="radio"]::after {
      content: "";
      display: flex;
      justify-self: center;
      border-radius: 50%;
    }

    input[type="radio"]::before {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--background);
      z-index: 1;
      opacity: var(--opacity, 1);
    }

    input[type="radio"]::after {
      position: relative;
      width: calc(100% /2);
      height: calc(100% /2);
      background: var(--radio-checked);
      top: var(--y, 100%);
      transition: top 0.5s cubic-bezier(0.48, 1.97, 0.5, 0.63);
    }

    input[type="radio"]:checked {
      --radio: var(--radio-checked);
    }

    input[type="radio"]:checked::after {
      --y: 0%;
      animation: stretch-animate .3s ease-out .17s;
    }

    input[type="radio"]:checked::before {
      --opacity: 0;
    }

    input[type="radio"]:checked ~ input[type="radio"]::after {
      --y: -100%;
    }

    input[type="radio"]:not(:checked)::before {
      --opacity: 1;
      transition: opacity 0s linear .5s;
    }
  }
}


@keyframes stretch-animate {
  0% {
    transform: scale(1, 1);
  }

  28% {
    transform: scale(1.15, 0.85);
  }

  50% {
    transform: scale(0.9, 1.1);
  }

  100% {
    transform: scale(1, 1);
  }
}
</style>
