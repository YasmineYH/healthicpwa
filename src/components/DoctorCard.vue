<template>
  <div class="doctor-card">
    <img alt="Doctor Profile Picture" :src="require(`@/assets/images/${doctorPic}`)">
    <h3 class="h3">{{ doctorName }}</h3>
    <p class="p-small-bold">{{ doctorDpt }}</p>
  </div>
</template>

<script>
export default {
  name: 'DoctorCard',
  props: [
    'doctorName',
    'doctorDpt',
    'doctorPic'
  ]
}
</script>

<style scoped lang="scss">
      .doctor-card {
      position: relative;
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      text-align: center;
      width: 245px;
      height: 125px;
      padding: 20px 22px;

      img {
        position: absolute;
        top: -43px;
        left: 50%;
        transform: translateX(-50%);
        height: 87px;
        width: 87px;
      }

      h3 {
        margin-top: 45px;
        margin-bottom: 7px;
      }
    }
</style>
