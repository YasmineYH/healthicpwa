<template>
  <div>
    <div class="main-pages ddcalculator" v-if="state.page == 'ddcalculator'">
      <h2 class="h2-black">due delivery date calculator</h2>
    </div>

    <div class="main-pages pvcalendar" v-if="state.page == 'pvcalendar'">
      <h2 class="h2-black">our prenatal visits schedule</h2>
    </div>

    <div class="main-pages dbcertificates" v-if="state.page == 'dbcertificates'">
      <h2 class="h2-black">downloadable birth certificates?</h2>
    </div>

    <div class="main-pages doctors" v-if="state.page == 'doctors'">
      <h2 class="h2-black">our gynaecologists</h2>

      <div class="doctor-cards">
        <DoctorCard doctorName="Dr. Amaka Igwe" doctorDpt="Gynaecology" doctorPic="amakaigwe.png" />
        <DoctorCard doctorName="Dr. Mustapha Muhanad" doctorDpt="Gynaecology" doctorPic="mustaphamuhanad.png" />
        <DoctorCard doctorName="Dr. Sylvia Nnaji" doctorDpt="Gynaecology" doctorPic="sylviannaji.png" />
      </div>
    </div>
  </div>
</template>

<script>
import DoctorCard from '@/components/DoctorCard.vue'

import { useRoute } from 'vue-router'
import { reactive, computed } from 'vue'

export default {
  name: 'MaternityPagesView',
  components: {
    DoctorCard
  },
  setup() {
		const route = useRoute()
    const pageId = computed(() => route.params.pageId)

    const state = reactive({
      page: pageId.value
    })

    return {
      route,
      pageId,
      state
    }
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
</style>