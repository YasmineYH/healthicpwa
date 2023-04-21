<template>
  <div class="main-pages">
      <h2 class="h2-black">select your type of appointment</h2>

      <div class="form-step-title">
        <p>Patient Details</p>
        <span></span>
      </div>

      <form action="">
        <div class="step1" v-if="formStep == 1">
          <div class="form-group">
            <label class="rad-label">
              <input type="radio" class="rad-input" name="appt_type" id="appt_type1" value="regular_appt">
              <div class="rad-design"></div>
              <p class="rad-text p-bold">Regular</p>
            </label>

            <label class="rad-label">
              <input type="radio" class="rad-input" name="appt_type" id="appt_type2" value="maternity_appt">
              <div class="rad-design"></div>
              <p class="rad-text p-bold">Maternity</p>
            </label>
          </div>
        </div>

        <div class="step2" v-if="formStep == 2">
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
        </div>

        <div class="step3" v-if="formStep == 3"></div>

        <div class="step4" v-if="formStep == 4"></div>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ScheduleApptView',
  setup() {
    const formStep = ref(1)
    const formStepTitle = ref()



    return  {
      formStep,
      formStepTitle
    }
  }
}
</script>


<style lang="scss" scoped>
.rad-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: .3s;
}

.rad-label:hover,
.rad-label:focus-within {
  background: hsla(0, 0%, 80%, .14);
}

.rad-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
}

.rad-design {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: linear-gradient(to right bottom, #FF1919, #a60505);
  position: relative;
}

.rad-design::before {
  content: '';
  display: inline-block;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  transform: scale(1.1);
  transition: .3s;
}

.rad-input:checked+.rad-design::before {
  transform: scale(0);
}

.rad-text {
  color: #FF1919;
  margin-left: 10px;
  transition: .3s;
}

.rad-input:checked~.rad-text {
  color: hsl(0, 0%, 40%);
}
</style>
