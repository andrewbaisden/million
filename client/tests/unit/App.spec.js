import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

test("renders correctly", () => {
  const wrapper = shallowMount(App);
  expect(wrapper.element).toMatchSnapshot();
});
