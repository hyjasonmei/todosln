const options = {
  moduleCache: {
    vue: Vue,
  },
  async getFile(url) {
    const res = await fetch(url);
    if (!res.ok)
      throw Object.assign(new Error(res.statusText + " " + url), { res });
    return {
      getContentData: (asBinary) => (asBinary ? res.arrayBuffer() : res.text()),
    };
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement("style"), {
      textContent,
    });
    const ref = document.head.getElementsByTagName("style")[0] || null;
    document.head.insertBefore(style, ref);
  },
};

const { loadModule } = window["vue3-sfc-loader"];

var vm = Vue.createApp({
  data() {
    return {
      profile: global_profile,
      routes: global_menu.routes,
      imports: global_service.imports,
      cases: global_cases.cases,
    };
  },
  mounted() {
    console.log("app mounted");
  },
  components: {
    "my-footer": Vue.defineAsyncComponent(() =>
      loadModule("./components/my-footer.vue", options)
    ),
    hero: Vue.defineAsyncComponent(() =>
      loadModule("./components/hero.vue", options)
    ),
    "my-services": Vue.defineAsyncComponent(() =>
      loadModule("./components/my-services.vue", options)
    ),
    "my-header": Vue.defineAsyncComponent(() =>
      loadModule("./components/my-header.vue", options)
    ),
  },
  methods: {
    copy() {
      // Get the text field
      var copyText = `匯款銀行:${this.profile.bank}\n`;
      copyText += `帳戶名稱:${this.profile.bankTitle}\n`;
      copyText += `匯款帳號:${this.profile.bankNum}\n`;
      copyText += `統一編號:${this.profile.tax}`;

      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText);

      // Alert the copied text
      alert("已複製至剪貼簿");
    },
  },
}).mount("#myapp");
