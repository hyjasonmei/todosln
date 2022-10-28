<template>
  <div>
    <!-- Hero-->
    <section class="container-fluid py-5 mt-5 px-sm-4 px-md-5">
      <div
        class="
          dark-mode
          bg-dark
          rounded-5
          position-relative
          overflow-hidden
          py-5
          px-3 px-sm-4 px-xl-5
          mt-2
          mx-md-n3 mx-lg-auto
        "
        style="max-width: 1660px"
      >
        <div
          class="jarallax position-absolute top-0 start-0 w-100 h-100 mt-5"
          data-jarallax
          data-speed="0.6"
        >
          <div
            class="jarallax-img position-absolute w-100 h-100"
            style="
              background-image: url(assets/img/landing/web-studio/hero-wave.png);
            "
          ></div>
        </div>
        <div
          class="bg-white position-absolute top-0 start-0 w-100 h-100"
          style="opacity: 2%"
        ></div>
        <div
          class="container position-relative zindex-2 pt-xl-4 pt-xxl-5 pb-sm-2"
        >
          <div class="row pt-md-3 pt-lg-5">
            <div class="col-lg-6 col-xxl-5 pb-lg-5 mb-xl-5">
              <h1 class="display-1 text-center text-lg-start mb-xxl-5">
                What Are You Prepared
                <span class="text-primary">To Do</span>
              </h1>
            </div>
            <div
              class="
                col-lg-5 col-xl-4
                offset-lg-1 offset-xxl-2
                d-flex
                flex-column
                pt-2 pt-md-4
              "
            >
              <p
                class="
                  fs-xl
                  text-center text-lg-start
                  pb-2 pb-md-0
                  mb-4 mb-md-5
                "
              >
                我們是軟體開發解決方案專家
                <br />您的疑難雜症，就是我們的To Do List
              </p>
              <div
                class="
                  d-flex
                  flex-column flex-sm-row
                  align-items-center
                  justify-content-center justify-content-lg-start
                  pb-3 pb-sm-5
                "
              >
                <a
                  class="
                    btn btn-lg btn-primary
                    rounded-pill
                    w-100 w-sm-auto
                    me-sm-3 me-xl-4
                    mb-2 mb-sm-0
                  "
                  href="contact.html"
                  >合作洽談</a
                ><a
                  class="btn btn-lg btn-link text-white w-100 w-sm-auto px-2"
                  href="case.html"
                  >客戶案例<i class="ai-arrow-right ms-2"></i
                ></a>
              </div>
              <ul
                class="
                  list-inline
                  d-xl-flex
                  text-center text-lg-start
                  mt-auto
                  mb-0 mb-sm-2
                "
              >
                <li
                  class="d-inline-flex align-items-center text-nowrap pt-1 me-4"
                >
                  <i class="ai-check-alt text-primary fs-xl me-2"></i
                  >微軟認證技術專家
                </li>
                <li class="d-inline-flex align-items-center text-nowrap pt-1">
                  <i class="ai-check-alt text-primary fs-xl me-2"></i
                  >精準估價公開透明
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services (Carousel on screns < 992px)-->
    <section class="container pb-lg-2 pb-xl-4 pb-xxl-5">
      <div class="row">
        <div class="col-md-4 d-flex flex-column pt-4 mt-sm-3">
          <div class="card border-0 bg-primary dark-mode order-sm-1 mb-sm-4">
            <div class="card-body">
              <svg
                class="d-block mb-3"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="text-warning"
                  d="M31.5412 14.6389C30.9843 23.6874 23.7303 30.927 14.6641 31.4828V35.9999H36.0671V14.6389H31.5412Z"
                  fill="currentColor"
                ></path>
                <path
                  class="text-primary"
                  d="M13.5469 27.0373C21.0277 27.0373 27.0922 20.9848 27.0922 13.5186H13.5469V27.0373Z"
                  fill="currentColor"
                ></path>
                <path
                  class="text-warning"
                  d="M26.3276 9.03734C24.475 3.77395 19.4522 0 13.5453 0C6.06443 0 0 6.0525 0 13.5187C0 19.4139 3.78139 24.4269 9.05514 26.2758V9.03734H26.3276Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h3 class="h4">不只是軟體，而是解決方案</h3>
              <my-com></my-com>
              <p class="card-text fs-sm">
                單純地開發軟體並不是TODO科技的宗旨，我們希望完美地解決客戶工作上遇到的疑難雜症，透過專業評估，我們會把客戶的需求拆分為一個一個的To
                Do
                List，再提出解決方案逐一完成，只有List清零時，才是我們任務完成的時候。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex flex-column pt-4 mt-sm-3">
          <div class="card border-0 bg-primary dark-mode order-sm-1 mb-sm-4">
            <div class="card-body">
              <svg
                class="d-block mb-3"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4844 22.4814H36.0031V36.0001H22.4844V22.4814Z"
                  fill="white"
                ></path>
                <path
                  class="text-warning"
                  d="M8.96266 18C8.96266 13.0088 13.0088 8.96266 18 8.96266C22.9912 8.96266 27.0373 13.0088 27.0373 18H36C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36V27.0373C13.0088 27.0373 8.96266 22.9912 8.96266 18Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h3 class="h4" style="max-width: 180px">DevOps文化實踐者</h3>
              <p class="card-text fs-sm">
                為了提供持續的價值給客戶，我們採用微軟Azure
                DevOps做為我們實踐DevOps的平台，以達到開發部署程序自動化與最佳化的目的，TODO科技團隊以短週期、頻繁發行軟體的高效模式運作，每次週期均能交付出讓客戶有感的產品進度。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex flex-column pt-4 mt-sm-3">
          <div class="card border-0 bg-primary dark-mode order-sm-1 mb-sm-4">
            <div class="card-body">
              <svg
                class="d-block mb-3"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7496 11.4756C25.3743 8.85089 25.3743 4.59539 22.7496 1.97068C20.1249 -0.654032 15.8694 -0.654033 13.2447 1.97068C10.6199 4.59539 10.6199 8.85089 13.2447 11.4756C15.8694 14.1003 20.1249 14.1003 22.7496 11.4756Z"
                  fill="white"
                ></path>
                <path
                  class="text-warning"
                  d="M13.2173 26.3746C14.0903 24.3107 15.2282 22.395 16.6119 20.6516C12.48 16.1818 6.56698 13.3827 0 13.3827V36H11.2733C11.2733 32.6628 11.9274 29.4243 13.2173 26.3746Z"
                  fill="currentColor"
                ></path>
                <path
                  class="text-warning"
                  d="M36.0001 36.0001V13.3828C23.5089 13.3828 13.3828 23.5089 13.3828 36.0001H36.0001Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h3 class="h4" style="max-width: 180px">源碼品質嚴格把關</h3>
              <p class="card-text fs-sm">
                TODO科技遵循嚴格的程式碼開發標準，每次程式碼提交均需通過單元測試、品質檢測、團隊審查等把關，並採用知名第三方源碼掃描檢測工具
                -Sonar Cloud，我們要求達到A Rating(0 Bugs, 0 Security Risks, Low
                Code Smells Rate)標準後才可交付予客戶。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>