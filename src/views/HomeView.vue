<template>
  <div>
    <section class="header">
      <img class="header-visual" alt="Header Visual" src="@/assets/images/headervisual.png">

      <div class="header-message">
        <h1 class="h1">our clinic is now <br /> online!</h1>

        <div class="header-message-bullets">
          <div>
            <img alt="Schedule Appointments Icon" src="@/assets/svgs/schappt.svg">
            <p class="p-bold">Schedule Appointments</p>
          </div>
          <div>
            <img alt="Receive Test Results Icon" src="@/assets/svgs/testrslts.svg">
            <p class="p-bold">Receive Test Results</p>
          </div>
          <div>
            <img alt="Find a Doctor Icon" src="@/assets/svgs/finddoc.svg">
            <p class="p-bold">Find a Doctor</p>
          </div>
          <div>
            <img alt="Check Available Medication Icon" src="@/assets/svgs/chkmeds.svg">
            <p class="p-bold">Check Available Medication</p>
          </div>
        </div>

        <div class="header-message-btns">
          <router-link class="main-btn" :to="{ name: 'authentication', params: { authId: 'signup'}}">Get an Account</router-link>
          <a class="sec-btn" href="https://maps.app.goo.gl/7h81Ta3KXMjHjNFe9" target="_blank">Visit Us</a>
        </div>
      </div>
    </section>

    <section class="about">
      <h2 class="h2">why get a healthic <br /> account today?</h2>
      <div>
        <p>
          It’s a smooth ride as soon as you have your account set up. And you can now take control of your health related activities, regardless of your location. 
          <span>Schedule Your Appointments</span>, and <span>Receive Your Test Results</span> wherever you are, on any device you have available!
        </p>
      </div>
    </section>

    <section class="how">
      <div class="title">
        <h2 class="h2">how it works</h2>
        <p class="p">Follow the steps below, and start using your account to save as much time and stress as you can.</p>
      </div>

      <div class="how-cards">
        <div>
          <p class="how-card-number">1</p>
          <h3 class="h3">create an account / sign up</h3>
          <p class="p-small">It is a long established fact that readers will be distracted by the readable content of a page.</p>
          <router-link class="main-btn" :to="{ name: 'authentication', params: { authId: 'signup'}}">Sign Up</router-link>
        </div>

        <img alt="Next Icon" src="@/assets/svgs/arrownext.svg">

        <div>
          <p class="how-card-number">2</p>
          <h3 class="h3">wait to be approved by the clinic</h3>
          <p class="p-small">It is a long established fact that readers will be distracted by the readable content of a page.</p>
          <router-link class="sec-btn" to="/">Learn More</router-link>
        </div>

        <img alt="Next Icon" src="@/assets/svgs/arrownext.svg">

        <div>
          <p class="how-card-number">3</p>
          <h3 class="h3">login & enjoy your account!</h3>
          <p class="p-small">It is a long established fact that readers will be distracted by the readable content of a page.</p>
          <router-link class="main-btn" :to="{ name: 'authentication', params: { authId: 'login'}}">Log In</router-link>
        </div>
      </div>
    </section>

    <section class="maternity">
      <div class="maternity-img"></div>

      <div class="maternity-ctn">
        <div class="maternity-title">
          <h2 class="h2">expectant mothers get special maternity accounts</h2>
          <p class="p">Right from prenatal visits, to a due date estimation, to neonatal checkups, vaccins and birth certificate issuance, everything is taken care of!</p>
          <div>
            <router-link class="main-btn" :to="{ name: 'authentication', params: { authId: 'signup_maternity'}}">Sign Up</router-link>
            <router-link class="sec-btn" :to="{ name: 'authentication', params: { authId: 'login_maternity'}}">Log In</router-link>
          </div>
        </div>

        <div class="maternity-cards">
          <div>
            <h3 class="h3">delivery date calculator</h3>
            <p class="p-small">An automatically estimated Delivery Date  by our expert due date calculator</p>
            <router-link :to="{ name: 'maternitypages', params: { pageId: 'ddcalculator'}}"><img alt="Go Icon" src="@/assets/svgs/goto.svg"></router-link>
          </div>

          <div>
            <h3 class="h3">prenatal visits calendar</h3>
            <p class="p-small">A fully scheduled Prenatal Visits Calendar, reviewed by a doctor You can choose yourself</p>
            <router-link :to="{ name: 'maternitypages', params: { pageId: 'pvcalendar'}}"><img alt="Go Icon" src="@/assets/svgs/goto.svg"></router-link>
          </div>

          <div>
            <h3 class="h3">downloadable birth certificate</h3>
            <p class="p-small">Your child's Birth Certificate available for download, less than 7 days after delivery</p>
            <router-link :to="{ name: 'maternitypages', params: { pageId: 'dbcertificates'}}"><img alt="Go Icon" src="@/assets/svgs/goto.svg"></router-link>
          </div>

          <div>
            <h3 class="h3">expert dedicated doctors</h3>
            <p class="p-small">And of course, our Expert Dedicated Doctors to follow you through. All the way</p>
            <router-link :to="{ name: 'maternitypages', params: { pageId: 'doctors'}}"><img alt="Go Icon" src="@/assets/svgs/goto.svg"></router-link>
          </div>
        </div>

      </div>
    </section>

    <section class="testimonies">
      <h2 class="h2">testimonies</h2>

      <div class="testimony-cards">
        <div class="testimony-card">
          <img alt="Tesminony Image" src="@/assets/images/chiderattmn.png">
          <h3 class="h3">Chidera Igwe</h3>
          <p class="p-small">This pregnancy was way less stressful than the first, thanks to Healthic.</p>
          <div class="stars">
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg class="white-star" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
          </div>
        </div>

        <div class="testimony-card">
          <img alt="Tesminony Image" src="@/assets/images/jessicattmn.png">
          <h3 class="h3">Jessica Ineme</h3>
          <p class="p-small">I have so much more control over my time. It has been great using this!</p>
          <div class="stars">
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
          </div>
        </div>

        <div class="testimony-card">
          <img alt="Tesminony Image" src="@/assets/images/zainabttmn.png">
          <h3 class="h3">Zainab Usman</h3>
          <p class="p-small">It really helps when you are forgetful and all over the place. Like me!</p>
          <div class="stars">
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
            <svg class="white-star" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06187 1.37258C7.25444 0.694086 8.2161 0.694088 8.40867 1.37258L9.55203 5.40095C9.63749 5.70205 9.91244 5.90982 10.2254 5.90982L14.1067 5.90982C14.7618 5.90982 15.0579 6.72913 14.5543 7.148L11.2587 9.88912C11.0458 10.0662 10.9573 10.3521 11.0329 10.6184L12.2524 14.915C12.4402 15.5769 11.6604 16.0843 11.1313 15.6443L8.18289 13.1919C7.92348 12.9762 7.54706 12.9762 7.28765 13.1919L4.33921 15.6443C3.81018 16.0843 3.03031 15.5769 3.21818 14.915L4.43765 10.6184C4.51325 10.3521 4.42475 10.0662 4.21187 9.88912L0.916206 7.148C0.412597 6.72913 0.70879 5.90982 1.36383 5.90982L5.24511 5.90982C5.5581 5.90982 5.83305 5.70205 5.91851 5.40095L7.06187 1.37258Z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
    
    <section class="joinus">
      <div>
        <h2 class="h2">join us</h2>
        <router-link class="main-btn" :to="{ name: 'authentication', params: { authId: 'signup'}}">Get an Account Today</router-link>
      </div>

      <img alt="Join Us Image" src="@/assets/images/doctorimg.png">
    </section>

    <section class="footer">
      <hr>
      <div class="footer-ctn">
        <div class="footer-item">
          <h3 class="h3">contact us</h3>
          <p class="p-small">(+229) 65 85 74 22</p>
          <p class="p-small">(+234) 905 725 8596</p>
          <p class="p-small">healthicclinic@yahoo.com</p>
        </div>
      
        <div class="footer-item">
          <h3 class="h3">our locations</h3>
          <p class="p-small">Parakou, Benin</p>
          <p class="p-small">Cotonou, Benin</p>
          <p class="p-small">Abuja, Nigeria</p>
        </div>

        <div class="footer-item">
          <h3 class="h3">FaQS</h3>
          <p class="p-small">Are my details well protected?</p>
          <p class="p-small">How do I create an account?</p>
          <p class="p-small">Where is my profile picture?</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  margin-top: 125px;

  .header-visual {
    width: 100%;
  }

  .header-message {
    position: absolute;
    left: 11.5vw;
    top: 80px;

    .header-message-bullets {
      display: grid;
      grid-template-columns: 2fr 2fr;
      grid-template-rows: 2fr;
      margin-top: 50px;
      column-gap: 40px;

      div {
        display: flex;
        gap: 15px;
        align-items: center;
        margin-bottom: 45px;

        img {
          height: 25px;
        }
      }
    }

    .header-message-btns {
      display: flex;
      gap: 18px;

      .main-btn, .sec-btn {
        width: 155px;
        height: 50px;
        font-size: 17px;
      }
    }
  }
}

.about {
  position: relative;
  border: 1px solid #FFFFFF;
  margin-bottom: 265px;

  h2 {
    position: absolute;
    left: 18vw;
    top: 0;
    display: inline-block;
    text-align: center;
  }

  div {
    display: grid;
    place-items: center;
    width: 1185px;
    height: 295px;
    margin: auto;
    margin-top: 175px;
    background: #333333;
    box-shadow: inset 0px 0px 15px #000000;
    border-radius: 8px;

    p {
      color: #FFFFFF;
      text-align: center;
      width: 47%;
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
    }

    span {
      font-weight: 700;
    }
  }  
}

.how {
  margin-bottom: 265px;

  .title {
    margin: auto;
    text-align: center;
    width: 495px;
    margin-bottom: 135px;

    h2 {
      margin-bottom: 12px;
    }
  }

  .how-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;

    img {
      height: 60px;
    }

    div {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 15px;
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      width: 200px;
      height: 235px;
      padding: 10px 10px;

      .how-card-number {
        position: absolute;
        top: -21px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Neuton';
        font-style: normal;
        font-weight: 700;
        font-size: 19px;
        color: #FFFFFF;
        background: #FF1919;
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.45);
        border-radius: 50%;
        padding-bottom: 3px;
        width: 44px;
        height: 44px;
      }

      h3 {
        margin-top: 45px;
        margin-bottom: 2px;
      }

      .main-btn, .sec-btn {
        width: 95px;
        height: 30px;
      }
    }
  }
}

.maternity {
  display: flex;
  gap: 65px;
  background: #333333;
  box-shadow: inset 0px 0px 15px #000000;
  color: #FFFFFF;
  margin-bottom: 265px;

  .maternity-img {
    width: 390px;
    height: 645px;
    box-shadow: inset 0px 0px 15px #000000;
    background-image: url(../assets/images/maternity.png);
    background-size: cover;
  }

  .maternity-ctn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 45px 0 45px 0;

    .maternity-title {
      width: 395px;

      h2 {
        margin-bottom: 12px;
      }

      p {
        font-weight: 300;
        font-size: 16px;
        line-height: 30px;
      }

      div {
        display: flex;
        gap: 20px;

        .main-btn, .sec-btn {
          width: 125px;
          height: 35px;
          margin-top: 20px;
          font-size: 17px;
        }
      }
    }

    .maternity-cards {
      display: flex;
      gap: 40px;

      div {
        display: flex;
        flex-direction: column;
        background: #333333;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.45);
        border-radius: 8px;
        width: 210px;
        height: 195px;
        padding: 24px 17px 17px 17px;

        p {
          margin-top: 16px;
          font-weight: 300;
        }

        img {
          display: block;
          height: 25px;
          margin-left: auto;
          margin-top: 10px;
        }
      }
    }
  }
}

.testimonies {
  margin-bottom: 265px;

  h2 {
    margin-bottom: 165px;
    text-align: center;
  }

  .testimony-cards {
    display: flex;
    justify-content: center;
    gap: 140px;

    .testimony-card {
      position: relative;
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      text-align: center;
      width: 245px;
      height: 195px;
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

      .stars {
        display: flex;
        justify-content: center;
        gap: 3px;
        margin-top: 12px;

        svg {
          width: 12px;
          height: 12px;

          path {
            fill: #FF1919;
          }

          &.white-star {
            path {
              fill: #D4D4D4;
            }
          }
        }
      }
    }
  }
}

.joinus {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333333;
  box-shadow: inset 0px 0px 15px #000000;
  color: #FFFFFF;
  margin-bottom: 265px;
  padding-left: 11.5vw;

  img  {
    width: 50vw;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #333333;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.45);
    border-radius: 8px;
    width: 360px;
    height: 155px;
    padding-bottom: 16px;
    padding-top: 17px;

    .main-btn {
      width: 205px;
      height: 35px;
      font-size: 15px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25), inset 0px 0px 5px rgba(0, 0, 0, 0.45);
    }
  }
}

.footer {
  hr {
    text-align: center;
    margin: auto;
    width: 655px;
    background: #333333;
    outline: none;
    border: none;
    height: 1.5px;
    border-radius: 10px;
    margin-bottom: 120px;
  }

  .footer-ctn {
    display: flex;
    justify-content: space-between;
    padding: 0 16vw;

    .footer-item {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
  }
}
</style>
