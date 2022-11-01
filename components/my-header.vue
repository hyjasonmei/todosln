<template>
  <header class="navbar navbar-expand-lg fixed-top bg-light">
    <div class="container">
      <a class="navbar-brand pe-sm-3" href="index.html" style="height: 50px">
        <span class="text-primary flex-shrink-0 me-2">
          <img src="logo.png" style="width: 45px" />
        </span>
        <div class="logo-text" style="line-height: 20px">
          TODO科技
          <br />

          <small class="text-warning" style="font-size: 10px"
            >TODO Software Solutions</small
          >
        </div>
      </a>
      <div
        class="
          form-check form-switch
          mode-switch
          order-lg-2
          me-3 me-lg-4
          ms-auto
        "
        data-bs-toggle="mode"
      >
        <input class="form-check-input" type="checkbox" id="theme-mode" />
        <label class="form-check-label" for="theme-mode"
          ><i class="ai-sun fs-lg"></i
        ></label>
        <label class="form-check-label" for="theme-mode"
          ><i class="ai-moon fs-lg"></i
        ></label>
      </div>
      <a
        class="
          btn btn-primary btn-sm
          rounded-pill
          fs-sm
          order-lg-3
          d-none d-sm-inline-flex
        "
        href="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/"
        target="_blank"
        rel="noopener"
        >聯繫我們
      </a>
      <button
        class="navbar-toggler ms-sm-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <nav class="collapse navbar-collapse" id="navbarNav">
        <ul
          class="navbar-nav navbar-nav-scroll me-auto"
          style="--ar-scroll-height: 520px"
        >
          <li class="nav-item" v-for="i in routes" v-cloak :key="i.url">
            <a class="nav-link" :href="i.url"> {{ i.name }} </a>
          </li>
        </ul>
        <div class="d-sm-none p-3 mt-n3">
          <a
            class="btn btn-primary w-100 mb-1"
            href="contact.html"
            target="_blank"
            rel="noopener"
            >聯繫我們</a
          >
        </div>
      </nav>
    </div>
    
  </header>
</template>

<script>
module.exports = {
  data: function () {
    return {
      routes: global_menu.routes,
    };
  },
  mounted: function () {
    var themeModeSwitch = (function () {
      var modeSwitch = document.querySelector('[data-bs-toggle="mode"]');
      if (modeSwitch === null) return;
      var checkbox = modeSwitch.querySelector(".form-check-input");

      if (mode === "dark") {
        root.classList.add("dark-mode");
        checkbox.checked = true;
      } else {
        root.classList.remove("dark-mode");
        checkbox.checked = false;
      }

      modeSwitch.addEventListener("click", function (e) {
        if (checkbox.checked) {
          root.classList.add("dark-mode");
          window.localStorage.setItem("mode", "dark");
        } else {
          root.classList.remove("dark-mode");
          window.localStorage.setItem("mode", "light");
        }
      });
    })();
  },
};
</script>
