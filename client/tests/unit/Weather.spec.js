import { shallowMount } from "@vue/test-utils";
import Weather from "@/components/Weather.vue";

test("renders correctly", () => {
  const wrapper = shallowMount(Weather);
  expect(wrapper.element).toMatchSnapshot();
});
