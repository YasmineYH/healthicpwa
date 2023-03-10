<template>
  <div class="main-pages">
      <h2 class="h2-black">our doctors</h2>

      <div class="doctor-cards">
        <DoctorCard doctorName="Dr. Amaka Igwe" doctorDpt="Gynaecology" doctorPic="amakaigwe.png" />
        <DoctorCard doctorName="Dr. Mustapha Muhanad" doctorDpt="Gynaecology" doctorPic="mustaphamuhanad.png" />
        <DoctorCard doctorName="Dr. Sylvia Nnaji" doctorDpt="Gynaecology" doctorPic="sylviannaji.png" />
      </div>
  </div>
</template>

<script>
import DoctorCard from '@/components/DoctorCard.vue'

export default {
  name: 'OurDoctorsView',
  components: {
    DoctorCard
  }
}
</script>

<style lang="scss" scoped>
.doctor-cards {
    display: flex;
    justify-content: center;
    gap: 140px;
    margin-top: 185px;
}

@media (max-width: 1240px) {
  .doctor-cards {
    width: 80%;
    gap: 75px;
    margin-top: 145px;
    flex-wrap: wrap;
  }
}

@media (max-width: 1240px) {
  .doctor-cards {
    width: 80%;
    gap: 95px;
    margin-top: 105px;
  }

}
</style>