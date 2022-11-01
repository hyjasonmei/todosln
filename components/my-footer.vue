<template>
  <footer class="footer bg-secondary pt-4 pb-2 pb-md-5 pt-sm-5">
    <div class="container-fluid pb-1 pb-md-0 px-md-5">
      <div
        class="
          dark-mode
          bg-dark
          rounded-5
          position-relative
          overflow-hidden
          w-100
          py-5
          px-3 px-sm-4 px-xl-5
          mx-auto
        "
        style="max-width: 1660px"
      >
        <div
          class="position-absolute top-50 start-50 translate-middle"
          style="width: 1664px"
        >
          <img src="assets/img/landing/web-studio/footer-wave.png" alt="Wave" />
        </div>
        <div
          class="
            container
            position-relative
            zindex-2
            pt-md-3 pt-lg-4 pt-xl-5
            pb-2
          "
        >
          <div class="row pb-2">
            <div class="col-lg-4 col-xxl-3 pb-2 pb-lg-0 mb-4 mb-lg-0">
              <a
                class="navbar-brand pe-sm-3 text-light"
                href="index.html"
                style="height: 50px"
              >
                <span class="text-primary flex-shrink-0 me-2">
                  <img src="logo.png" style="width: 45px" />
                </span>
                <div class="logo-text" style="line-height: 20px">
                  TODO科技 <br />

                  <small class="text-warning" style="font-size: 10px"
                    >TODO Software Solutions</small
                  >
                </div>
              </a>
              <p class="my-3">軟體解決方案專家</p>
            </div>
            <div
              class="
                col-sm-4 col-lg-2
                offset-lg-1 offset-xl-2 offset-xxl-3
                mb-4 mb-sm-0
              "
            ></div>
            <div class="col-sm-4 col-lg-2 mb-4 mb-sm-0"></div>
            <div class="col-sm-4 col-lg-3 col-xl-2">
              <h6 class="fw-bold">聯絡我們</h6>
              <ul class="nav flex-column fs-sm">
                <li class="nav-item" v-if="p.email">
                  <i class="ai-mail"></i>
                  {{ p.email }}
                </li>
                <li class="nav-item" v-if="p.mobile">
                  <i class="ai-mobile"></i>
                  {{ p.mobile }}
                </li>
                <li class="nav-item" v-if="p.phone">
                  <i class="ai-phone"></i>
                  {{ p.phone }}
                </li>
                <li class="nav-item" v-if="p.address">
                  <i class="ai-map"></i>
                  {{ p.address }}
                </li>
              </ul>
            </div>
          </div>
          <div
            class="
              d-sm-flex
              align-items-center
              justify-content-between
              pt-4 pt-md-5
              mt-2 mt-md-0 mt-lg-2 mt-xl-4
            "
          >
            <div
              class="d-flex justify-content-center order-sm-2 me-md-n2"
            ></div>
            <p
              class="
                fs-sm
                order-sm-1
                text-center text-sm-start
                pt-4 pt-sm-0
                mb-0
                me-4
              "
            >
              <span class="opacity-70"
                >&copy; {{ new Date().getFullYear() }}
                {{ p.localName }} 版權所有
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
module.exports = {
  data: function () {
    return {
      p: global_profile,
    };
  },
};
</script>
