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
  },
  methods: {},
}).mount("#myapp");
