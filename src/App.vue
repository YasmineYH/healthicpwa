<template>
  <nav v-if="!route.includes('/authentication')">
    <div class="logo-ctn"><img class="logo" alt="Logo" src="@/assets/svgs/logo.svg"></div>
    
    <div class="links">
      <router-link class="link p-bold" to="/">Home</router-link>
      <router-link class="link p-bold" to="/scheduleappointment">Schedule an Appointment</router-link>
      <router-link class="link p-bold" to="/ourdoctors">Our Doctors</router-link>
    </div>

    <div class="sec-links">
      <router-link class="sec-link main-btn" :to="{ name: 'authentication', params: { authId: 'login'}}">Log In</router-link>
      <router-link class="sec-link sec-btn" :to="{ name: 'authentication', params: { authId: 'signup'}}">Sign Up</router-link>
    </div>
  </nav>

  <router-view/>

  <footer v-if="!route.includes('/authentication')">
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
  </footer>
</template>


<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'App',
  setup() {
		const route = computed(() => useRoute().path)

    return {
      route,
    }
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@500;700&family=Josefin+Sans:wght@500;700&family=Montserrat:wght@500;700&family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&family=Noto+Sans:wght@500;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Playfair+Display:wght@500;700&family=Quicksand:wght@500;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=RocknRoll+One&family=Rokkitt:wght@500;700&family=Rosario:wght@500;700&family=Rouge+Script&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scrollbar-color: #333333 #FFFFFF;
	scrollbar-width: thin;

	&::-webkit-scrollbar {
		width: 4px;
		background: #FFFFFF;
	}

	&::-webkit-scrollbar-thumb {
		background: #333333;
	}

  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
  }

  .h1 {
    font-family: 'Neuton';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    text-transform: capitalize;
    letter-spacing: 0.005em;
  }

  .h2 {
    font-family: 'Neuton';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    text-transform: capitalize;
    letter-spacing: 0.005em;
  }

  .h2-black {
    display: grid;
    place-items: center;
    font-family: 'Neuton';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    width: 700px;
    height: 70px;
    padding-bottom: 7px;
    background: #333333;
    box-shadow: inset 0px 0px 10px #000000;
    border-radius: 8px;
    text-transform: capitalize;
  }

  .h3 {
    font-family: 'Neuton';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-transform: capitalize;
    letter-spacing: 0.005em;
  }

  .p-bold {
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.005em;
    line-height: 25px;
  }

  .p-small {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }

  .p-small-bold {
    font-weight: 600;
    font-size: 12px;
  }

  .p {
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
  }

  .main-btn,
  .sec-btn {
    font-family: 'Neuton';
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    text-decoration: none;
    letter-spacing: 0.03em;
    display: grid;
    place-items: center;
    border-radius: 4px;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.25);
    padding-bottom: 0.2em;
    transition: all .3s ease-out;
  }

  .main-btn {
    background: #FF1919;
    border: 1px solid #bc1616;
    color: #FFFFFF;

    &:hover {
      border: 1px solid #000000;
      transform: translateY(-3px);
    }
  }

  .sec-btn {
    border: 1px solid #000000;
    background: #FFFFFF;
    color: #000000;

    &:hover {
      border: 1px solid #FFFFFF;
      transform: translateY(-3px);
    }
  }

  .text-link {
    font-weight: 700;
    text-decoration: underline;
    letter-spacing: 0.04em;
    color: #000000;
  }

  .text-link-red {
    font-weight: 700;
    text-decoration: underline;
    letter-spacing: 0.04em;
    color: #FF1919;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 11.5vw;
    margin-top: 35px;
    width: 100%;

    .logo-ctn {
      display: flex;
      width: 200px;

      img {
        height: 20px;
      }
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
      justify-content: right;
      gap: 25px;
      width: 200px;

      .sec-link {
        width: 80px;
        height: 32px;
      }
    }
  }

  .main-pages {
    margin-top: 165px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  footer {
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
</style>
