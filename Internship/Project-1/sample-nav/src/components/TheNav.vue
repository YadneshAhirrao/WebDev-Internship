<template>
  <header class="header">
    <nav class="nav container">
      <div class="nav__data">
        <a href="#" class="nav__logo">
          <img
            class="stockants-logo"
            src="../assets/logo.png"
            alt="logo"
            width="150px"
          />
        </a>

        <div
          class="nav__toggle"
          id="nav-toggle"
          @click="showMenu()"
          :class="{ 'show-icon': this.isShowIcon }"
        >
          <!-- <i class="ri-menu-line nav__burger"></i> -->
          <i class="ri-menu-line nav__burger"></i>
          <i class="ri-close-line nav__close"></i>
        </div>
      </div>

      <div
        class="nav__menu"
        id="nav-menu"
        :class="{ 'show-menu': this.isShowIcon }"
      >
        <ul class="nav__list">
          <li><a href="#" class="nav__link">Home</a></li>

          <li><a href="#" class="nav__link">Company</a></li>

          <!--=============== DROPDOWN 1 ===============-->
          <li class="dropdown__item">
            <div class="nav__link">
              Analytics <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <ul class="dropdown__menu">
              <li>
                <a href="#" class="dropdown__link">
                  <i class="ri-pie-chart-line"></i> Overview
                </a>
              </li>

              <li>
                <a href="#" class="dropdown__link">
                  <i class="ri-arrow-up-down-line"></i> Transactions
                </a>
              </li>

              <!--=============== DROPDOWN SUBMENU ===============-->
              <li class="dropdown__subitem">
                <div class="dropdown__link">
                  <i class="ri-bar-chart-line"></i> Reports
                  <i class="ri-add-line dropdown__add"></i>
                </div>

                <ul class="dropdown__submenu">
                  <li>
                    <a href="#" class="dropdown__sublink">
                      <i class="ri-file-list-line"></i> Documents
                    </a>
                  </li>

                  <li>
                    <a href="#" class="dropdown__sublink">
                      <i class="ri-cash-line"></i> Payments
                    </a>
                  </li>

                  <li>
                    <a href="#" class="dropdown__sublink">
                      <i class="ri-refund-2-line"></i> Refunds
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li><a href="#" class="nav__link">Products</a></li>

          <!--=============== DROPDOWN 2 ===============-->
          <li class="dropdown__item">
            <div class="nav__link">
              Users <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <ul class="dropdown__menu">
              <li>
                <a href="#" class="dropdown__link">
                  <i class="ri-user-line"></i> Profiles
                </a>
              </li>

              <li>
                <a href="#" class="dropdown__link">
                  <i class="ri-lock-line"></i> Accounts
                </a>
              </li>

              <li>
                <a href="#" class="dropdown__link">
                  <i class="ri-message-3-line"></i> Messages
                </a>
              </li>
            </ul>
          </li>

          <li><a href="#" class="nav__link">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShowMenu: false,
      isShowIcon: true,
    };
  },
  methods: {
    showMenu() {
      this.isShowMenu = !this.isShowMenu;
      this.isShowIcon = !this.isShowIcon;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

* {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  /* font-family: "Montserrat", sans-serif; */
  font-size: 0.9rem;
  background-color: #f0f5ff;
}

ul {
  list-style: none;
  /* Color highlighting when pressed on mobile devices */
  /*-webkit-tap-highlight-color: transparent;*/
}

a {
  text-decoration: none;
}

/*=============== REUSABLE CSS CLASSES ===============*/
.container {
  max-width: 1120px;
  margin-inline: 1.5rem;
}

/*=============== HEADER ===============*/
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #bfcfe7;
  box-shadow: 0 2px 16px #484747;
  z-index: 100;
}

/*=============== NAV ===============*/
.nav {
  height: 3.5rem;
}

.nav__logo,
.nav__burger,
.nav__close {
  color: #000;
}

.nav__data {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo {
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;
  font-weight: 600;
  /* Color highlighting when pressed on mobile devices */
  /*-webkit-tap-highlight-color: transparent;*/
}

.nav__logo i {
  font-weight: initial;
  font-size: 1.25rem;
}

.nav__toggle {
  position: relative;
  width: 32px;
  height: 32px;
}

.nav__burger,
.nav__close {
  position: absolute;
  width: max-content;
  height: max-content;
  inset: 0;
  margin: auto;
  font-size: 1.25rem;
  cursor: pointer;
  transition: opacity 0.1s, transform 0.4s;
}

.nav__close {
  opacity: 0;
}

/* Navigation for mobile devices */
@media screen and (max-width: 1118px) {
  .nav__menu {
    position: absolute;
    left: 0;
    top: 2.5rem;
    width: 100%;
    height: calc(100vh - 3.5rem);
    overflow: auto;
    pointer-events: none;
    opacity: 0;
    transition: top 0.4s, opacity 0.3s;
  }
  .nav__menu::-webkit-scrollbar {
    width: 0;
  }
  .nav__list {
    background-color: #bfcfe7;
    padding-top: 1rem;
  }
}

.nav__link {
  color: #000000;
  background-color: #bfcfe7;
  font-weight: 600;
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.nav__link:hover {
  background-color: #bfcfe7;
}

/* Show menu */
.show-menu {
  opacity: 1;
  top: 3.5rem;
  pointer-events: initial;
}

/* Show icon */
.show-icon .nav__burger {
  opacity: 0;
  transform: rotate(90deg);
}
.show-icon .nav__close {
  opacity: 1;
  transform: rotate(90deg);
}

/*=============== DROPDOWN ===============*/
.dropdown__item {
  cursor: pointer;
}

.dropdown__arrow {
  font-size: 1.25rem;
  font-weight: initial;
  transition: transform 0.9s;
}

.dropdown__link,
.dropdown__sublink {
  padding: 1.25rem 1.25rem 1.25rem 2.5rem;
  color: #ffffff;
  background-color: #1d232f;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  font-weight: 600;
  transition: background-color 0.3s;
}

.dropdown__link i,
.dropdown__sublink i {
  font-size: 1.25rem;
  font-weight: initial;
}

.dropdown__link:hover,
.dropdown__sublink:hover {
  background-color: #2d3e8d;
}

.dropdown__menu,
.dropdown__submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
}

/* Show dropdown menu & submenu */
.dropdown__item:hover .dropdown__menu,
.dropdown__subitem:hover > .dropdown__submenu {
  max-height: 1000px;
  transition: max-height 0.4s ease-in;
}

/* Rotate dropdown icon */
.dropdown__item:hover .dropdown__arrow {
  transform: rotate(180deg);
}

/*=============== DROPDOWN SUBMENU ===============*/
.dropdown__add {
  margin-left: auto;
}

.dropdown__sublink {
  background-color: #252b37;
}

/*=============== BREAKPOINTS ===============*/
/* For small devices */
@media screen and (max-width: 340px) {
  .container {
    margin-inline: 1rem;
  }

  .nav__link {
    padding-inline: 1rem;
  }
}

/* For large devices */
@media screen and (min-width: 1118px) {
  .container {
    margin-inline: auto;
  }


  .nav {
    height: 5.2rem;
    display: flex;
    justify-content: space-between;
  }
  .nav__toggle {
    display: none;
  }
  .nav__list {
    height: 100%;
    display: flex;
    column-gap: 3rem;
  }
  .nav__link {
    height: 100%;
    padding: 0;
    justify-content: initial;
    column-gap: 0.25rem;
  }
  .nav__link:hover {
    background-color: transparent;
  }

  .dropdown__item,
  .dropdown__subitem {
    position: relative;
  }

  .dropdown__menu,
  .dropdown__submenu {
    max-height: initial;
    overflow: initial;
    position: absolute;
    left: 0;
    top: 6rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s, top 0.3s;
  }

  .dropdown__link,
  .dropdown__sublink {
    padding-inline: 1rem 3.5rem;
  }

  .dropdown__subitem .dropdown__link {
    padding-inline: 1rem;
  }

  .dropdown__submenu {
    position: absolute;
    left: 100%;
    top: 0.5rem;
  }

  /* Show dropdown menu */
  .dropdown__item:hover .dropdown__menu {
    opacity: 1;
    top: 5.5rem;
    pointer-events: initial;
    transition: top 0.3s;
  }

  /* Show dropdown submenu */
  .dropdown__subitem:hover > .dropdown__submenu {
    opacity: 1;
    top: 0;
    pointer-events: initial;
    transition: top 0.3s;
  }
}
</style>
