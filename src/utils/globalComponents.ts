import { App } from "vue";

const requireComponent = require.context(
  "@/components/global",
  false,
  /[A-Z]\w+\.(vue|js)$/
);

export default {
  install: (app: App) => {
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName);
      const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");
      app.component(componentName, componentConfig.default || componentConfig);
    });
  }
};
