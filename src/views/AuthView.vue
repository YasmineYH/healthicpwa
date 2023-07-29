<template>
  <div class="login-page">
    <div class="side-panel">
      <img class="logo" alt="Logo" src="@/assets/svgs/logowhite.svg">

      <img class="side-panel-img" alt="Side Panel Image" src="@/assets/images/signupside.png" v-if="authId == 'signup'">
      <img class="side-panel-img" alt="Side Panel Image" src="@/assets/images/loginside.png" v-if="authId == 'login'">
      <img class="side-panel-img" alt="Side Panel Image" src="@/assets/images/msignupside.png" v-if="authId.includes('signup_maternity')">
      <img class="side-panel-img" alt="Side Panel Image" src="@/assets/images/mloginside.png" v-if="authId.includes('login_maternity')">

      <div v-if="authId == 'signup'">
        <p class="p">“Since opening an account with Healthic, I’m less stressed and I waste way less time than I used to. You should definitely give it a try.”</p>
        <p class="name">Paul O. Olakunmi</p>
      </div>
      <div v-if="authId == 'login'">
        <p class="p">“So many things are easier now. I don’t have to spend so much time at the clinic and my son gets the best care and attention.”</p>
        <p class="name">Jessica A. Adebanjo</p>
      </div>
      <div v-if="authId.includes('signup_maternity')">
        <p class="p">“My second pregnancy was way better than the first. I was less cranky, less forgetful and my little girl still gets called for regular checkups.”</p>
        <p class="name">Chidera A. Igwe</p>
      </div>
      <div v-if="authId.includes('login_maternity')">
        <p class="p">“I was worried my cluelessness with technology would damp the experience, but it did not! They make it so easy of access, it’s almost unbelievable.”</p>
        <p class="name">Zainab S. Usman</p>
      </div>
    </div>

    <div class="content">
      <div class="auth-nav">
        <img class="logobl" alt="Logo" src="@/assets/svgs/logo.svg">

        <div class="links">
          <router-link class="link p-bold" to="/">Home</router-link>
          <router-link class="link p-bold" to="/scheduleappointment">Schedule an Appointment</router-link>
          <router-link class="link p-bold" to="/ourdoctors">Our Doctors</router-link>
        </div>

        <div class="sec-links">
          <router-link class="sec-link main-btn" :to="{ name: 'authentication', params: { authId: 'login'}}">Log In</router-link>
          <router-link class="sec-link sec-btn" :to="{ name: 'authentication', params: { authId: 'signup'}}">Sign Up</router-link>
        </div>

        <div class="mobile-nav-ctn">
          <transition name="hamburger" mode="out-in" v-on:click="menuToggle">
              <img src="@/assets/svgs/close.svg" alt="" v-if="menu">
              <img src="@/assets/svgs/hamburger.svg" alt="" v-else>
          </transition>

          <transition name="nav" appear>
            <div class="mobile-nav" v-if="menu" v-on:click="menuRemove">
              <div class="mobile-links">
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/scheduleappointment">Schedule an Appointment</router-link>
                <router-link class="link" to="/ourdoctors">Our Doctors</router-link>
              </div>

              <div class="mobile-sec-links">
                <router-link class="sec-link main-btn" :to="{ name: 'authentication', params: { authId: 'login'}}">Log In</router-link>
                <router-link class="sec-link sec-btn" :to="{ name: 'authentication', params: { authId: 'signup'}}">Sign Up</router-link>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Sign Up Form -->
      <div class="form sign-up" v-if="authId.includes('signup')">
        <div class="title">
          <h2 class="h2">sign up</h2>
          <p class="p" v-if="authId.includes('maternity')">( Maternity Account )</p>
          <p class="p" v-else>( Regular Account )</p>
        </div>

        <form>
          <div class="form-group">
            <div class="input-group">
              <label class="p-bold" for="f_name">First Name</label>
              <input type="text" name="f_name" v-model="firstName">
            </div>
            <div class="input-group">
              <label class="p-bold" for="l_name">Last Name</label>
              <input type="text" name="l_name" v-model="lastName">
            </div>
          </div>

          <div class="form-group">
            <div class="input-group" v-if="authId.includes('maternity')">
              <label class="p-bold" for="maternity_no">Maternity Number</label>
              <img class="info" alt="Info Icon" src="@/assets/svgs/info.svg">
              <input type="text" name="maternity_no" v-model="maternityNo">
            </div>
            <div class="input-group" v-else>
              <label class="p-bold" for="patient_no">Patient Number</label>
              <img class="info" alt="Info Icon" src="@/assets/svgs/info.svg">
              <input type="text" name="patient_no" v-model="patientNo">
            </div>
            <div class="input-group">
              <label class="p-bold" for="email">Email Address</label>
              <input type="email" name="email" v-model="email">
            </div>
          </div>

          <div>
            <p class="p-small note"><span>*</span> Your password must contain at least one special character <span>- $, #, @, !,%,^,&,*,(,) -</span></p>
            
            <div class="form-group">
              <div class="input-group">
                <label class="p-bold" for="password">Create a Password</label>
                <input type="password" name="password" v-model="password">
              </div>
              <div class="input-group">
                <label class="p-bold" for="c_password">Confirm your Password</label>
                <input type="password" name="c_password" v-model="cPassword">
              </div>
            </div>
          </div>        

          <div class="form-details">
            <div class="checkbox-rect">
              <input type="checkbox" name="t_c" id="checkbox-rect1">
              <label class="p-small" for="checkbox-rect1">I have read and agree to the <router-link class="text-link" to="/">Terms and Conditions</router-link> of Healthic Medical Center</label>
            </div>

            <p class="p-small">Already have an account? <router-link class="text-link-red" :to="(authId.includes('maternity') ? { name: 'authentication', params: { authId: 'login_maternity'}} : { name: 'authentication', params: { authId: 'login'}})">Log In</router-link></p>

            <input class="main-btn" type="submit" value="Submit">
          </div>
        </form>
      </div>

      <!-- Log In Form -->
      <div class="form log-in" v-if="authId.includes('login')">
        <div class="title">
          <h2 class="h2">log in</h2>
          <p class="p" v-if="authId.includes('maternity')">( Maternity Account )</p>
          <p class="p" v-else>( Regular Account )</p>
        </div>

        <form>
          <div class="form-group">
            <div class="input-group" v-if="authId.includes('maternity')">
              <label class="p-bold" for="maternity_no">Maternity Number</label>
              <img class="info" alt="Info Icon" src="@/assets/svgs/info.svg">
              <input type="text" name="maternity_no" v-model="maternityNo">
            </div>
            <div class="input-group" v-else>
              <label class="p-bold" for="patient_no">Patient Number</label>
              <img class="info" alt="Info Icon" src="@/assets/svgs/info.svg">
              <input type="text" name="patient_no" v-model="patientNo">
            </div>
            <div class="input-group">
              <label class="p-bold" for="password">Password</label>
              <input type="password" name="password" v-model="password">
            </div>
          </div>

          <div class="form-details">
            <p class="p-small">Don’t have an account? <router-link class="text-link-red" :to="(authId.includes('maternity') ? { name: 'authentication', params: { authId: 'signup_maternity'}} : { name: 'authentication', params: { authId: 'signup'}})">Sign Up</router-link></p>

            <input class="main-btn" type="submit" value="Submit">
          </div>
        </form>
      </div>

      <div class="auth-footer">
        <ul>
          <li><a href="https://www.github.com/YasmineYH" target="_blank"><img src="@/assets/svgs/gmail.svg" alt="Gmail"></a></li>
          <li><a href="https://www.linkedin.com/in/yasmine-yh/" target="_blank"><img src="@/assets/svgs/facebook.svg" alt="Facebook"></a></li>
          <li><a href="https://www.twitter.com" target="_blank"><img src="@/assets/svgs/twitter.svg" alt="Twitter"></a></li>
        </ul>

        <div class="lines">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <p>© Healthic Medical Center. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'

export default {
  name: 'AuthView',
  setup() {
		const route = useRoute()
    const authId = ref( computed(() => route.params.authId) )
    const mobile = ref()
    const menu = ref(false)

    const mobileToggle = () => {
      mobile.value = (window.innerWidth <= 1040) ? true : false
    }

    const menuToggle = () => {
      menu.value = !menu.value
    }

    const menuRemove = () => {
      menu.value = false
    }

    onMounted(() => window.addEventListener('resize', mobileToggle))


    const firstName = ref([])
    const lastName = ref([])
    const patientNo = ref([])
    const maternityNo = ref([])
    const email = ref([])
    const password = ref([])
    const cPassword = ref([])

    return {
      route,
      mobile,
      menu,
      mobileToggle,
      menuToggle,
      menuRemove,
      firstName,
      lastName,
      patientNo,
      maternityNo,
      email,
      password,
      cPassword,
      authId
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: flex-end;
  gap: 75px;
  padding-right: 185px;

  .side-panel {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    padding-top: 45px;
    width: 335px;
    height: 100vh;

    .logo {
      height: 25px;
    }

    .side-panel-img{
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 335px;
      height: 100vh;
      object-fit: cover;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 35px;
      text-align: center;
      height: 70%;
      padding: 0 25px 60px 25px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 91.34%);

      p.name {
        font-family: 'Neuton';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        letter-spacing: 0.005em;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100vw - 705px);

    .auth-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 35px;
      width: 100%;

      .logobl {
        height: 20px;
        display: none;
      }

      .links {
        display: flex;
        gap: 35px;

        .link {
          text-decoration: none;
          color: #000000;
          padding: 10px;
        }
      }

      .sec-links {
        display: flex;
        gap: 25px;

        .sec-link {
          width: 80px;
          height: 32px;
        }
      }

      .mobile-nav-ctn {
        display: none;
      }
    }

    .form {
      width: 95%;

      .title {
        text-align: center;

        h2 {
          margin-top: 115px;
          font-size: 37px;
        }

        p {
          margin-top: 15px;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 60px;
        margin-top: 120px;
        margin-bottom: 200px;

        .note {
          color: #FF1919;
          margin-bottom: 10px;

          span {
            font-weight: 700;
          }
        }

        .form-group {
          display: flex;
          justify-content: space-between;

          .input-group {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 5px;
            width: 47%;

            input {
              outline: none;
              border: 1px solid #0000004a;
              border-radius: 4px;
              height: 37px;
              padding: 0 10px;
              font-weight: 400;
              font-size: 15px;
              transition: .3s all ease-out;

              &:hover, &:focus {
                border: 1px solid #000000bc;
                transform: translateY(2px);
              }
            }

            .info {
              position: absolute;
              right: 7px;
              top: 7px;
              width: 20px;
            }
          }
        }

        .form-details {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 45px;
          margin: auto;
          margin-top: 25px;

          .p-small {
            font-size: 13px;
          }
      
          .checkbox-rect input {
            display: none;
          }
          .checkbox-rect input + label {
            display: block;
            position: relative;
            cursor: pointer;
            padding-left: 35px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }
        
          .checkbox-rect input:hover + label:before {
            background: #FF1919;
            box-shadow: inset 0px 0px 0px 2px #ffffff;
          }
          .checkbox-rect input + label:last-child {
            margin-bottom: 0;
          }
          .checkbox-rect input + label:before {
            content: "";
            display: block;
            width: 15px;
            height: 15px;
            border: 1px solid #FF1919;
            border-radius: 2px;
            position: absolute;
            left: 0;
            top: 1px;
            -webkit-transition: all 0.2s, background 0.2s ease-in-out;
            transition: all 0.2s, background 0.2s ease-in-out;
            background: #ffffff;
          }
          .checkbox-rect input:checked + label:before {
            width: 12px;
            height: 12px;
            border-radius: 2px;
            border: 2px solid #ffffff;
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            background: #FF1919;
            box-shadow: 0 0 0 1px #FF1919;
          }
        }

        .main-btn {
          width: 125px;
          height: 35px;
          font-size: 17px;
          margin: auto;
        }
      }
    }

    .auth-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 51vw;
      max-width: 1740px;
      margin: 125px auto 35px auto;

      ul {
          list-style: none;
          display: flex;
          padding-top: 3px;
          gap: 25px;

          img {
              height: 23px;
          }
      }

      .lines {
          display: flex;
          justify-content: space-between;
          width: 16vw;

          div {
              height: 1px;
              border-radius: 100px;
              background: #363636;

              &:nth-of-type(1) {
                  width: 4%;
              }

              &:nth-of-type(2) {
                  width: 85%;
              }

              &:nth-of-type(3) {
                  width: 2%;
              }
          }
      }

      p {
        font-weight: 500;
        font-size: 13px;
        text-shadow: 0 0 .2px black;
      }
    }
  }
}

@media (min-width: 1840px) {
  .login-page {
    padding-right: 12em;

    .side-panel {
      width: 495px;
      height: 100vh;

      .side-panel-img {
        width: 495px;
      }

      div {
        padding: 0 55px 60px 55px;
      }
    }

    .content {
      width: calc(100% - 610px);

      .auth-nav {
        justify-content: center;
        gap: 375px;
      }

      .form {
        width: 60em;
      }
    }
  }
}

@media (max-width: 1440px) {
  .login-page {
    padding-right: 75px;

    .content {
      width: calc(100% - 405px);
    }

    .auth-footer {
      .lines {
        display: none !important;
      }
    }
  }
}

@media (max-width: 1140px) {
  .login-page {
    padding-right: 55px;

    .side-panel {
      padding-top: 35px;
      width: 275px;

      .side-panel-img{
        width: 275px;
      }

      div {
        padding: 0 15px 30px 15px;
      }
    }

    .content {
      width: calc(100vw - 385px);

      .auth-nav {
        justify-content: right;

        .links, .sec-links {
          display: none;
        }

        .mobile-nav-ctn {
          display: block;
          position: relative;

          img {
            height: 30px;
          }

          .hamburger-enter-from,
          .hamburger-leave-to {
            opacity: 0;
            transform: translateY(10px);
          }

          .hamburger-enter-active,
          .hamburger-leave-active {
            transition: all .3s ease-out;
          }

          .mobile-nav {
            position: absolute;
            right: 0;
            top: 45px;
            padding: 25px 25px;
            background: #333333;
            box-shadow: inset 0px 0px 15px #000000;
            border-radius: 8px;
            color: #FFFFFF;
            z-index: 1;

            .mobile-links {
              display: flex;
              flex-direction: column;
              gap: 20px;

              .link {
                color: #FFFFFF;
                text-decoration: none;
                text-align: right;
                padding: 10px;
              }
            }

            .mobile-sec-links {
              display: flex;
              gap: 15px;
              margin-top: 45px;

              .sec-link {
                width: 100px;
                height: 30px;
                padding-bottom: 4px;
              }
            }
          }

          .nav-enter-from {
            opacity: 0;
            transform: translateX(-100px);
          }

          .nav-enter-active {
            transition: all .5s ease-out;
          }

          .nav-leave-to {
            opacity: 0;
            transform: translateX(100px);
          }

          .nav-leave-active {
            transition: all .2s ease-out;
          }
        }
      }
    }

    .auth-footer {
      flex-wrap: wrap;
      justify-content: center !important;
      gap: 45px;
      text-align: center;
    }
  }
}

@media (max-width: 840px) {
  .login-page {
    .side-panel {
      display: none;
    }

    .content {
      width: calc(100% - 55px);
      .auth-nav {
        justify-content: space-between;

        .logobl {
          display: block;
        }
      }
    }
  }
}

@media (max-width: 640px) {
  .login-page {
    padding-right: 7vw;

    .content {
      width: calc(100% - 7vw);

      .auth-nav {
        margin-top: 25px;

        .mobile-nav-ctn {
          img {
            height: 20px;
          }
        }
      }

      .form {
        .title {
         h2 {
          margin-top: 75px;
          font-size: 27px;
         }

         p {
          margin-top: 5px;
         }
        }

        form {
          gap: 50px;
          margin-top: 80px;
          margin-bottom: 100px;

          .form-group {
            flex-direction: column;
            gap: 15px;

            .input-group {
              width: 100%;
            }
          }

          .form-details {
            gap: 25px;
            margin-top: 15px;
          }
        }
      }

      .auth-footer {
        gap: 15px;
        margin: 75px auto 15px auto;
        width: 85%;

        ul {
          gap: 20px;

          img {
            height: 20px;
          }
        }

        p {
          font-size: 11px;
        }
      }
    }
  }
}
</style>