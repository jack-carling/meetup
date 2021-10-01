import { shallowMount } from '@vue/test-utils';
import Greeting from '@/components/Greeting.vue';

describe('Greeting.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Greeting);
  });
  it('should render the welcome text in a h1 tag', () => {
    const text = 'Welcome! There are so many things to do!';
    const h1 = wrapper.find('h1').text();
    expect(h1).toBe(text);
  });
});
