import { shallowMount } from '@vue/test-utils';
import Menu from '@/components/Menu.vue';

describe('Menu.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Menu, {
      propsData: {
        attending: [],
      },
    });
  });
  it('renders the logo', () => {
    const header = wrapper.find('h1').text();
    expect(header).toContain('Meetup');
  });
  it('shows 0 events being attended on first render', () => {
    const number = wrapper.find('span').text();
    expect(number).toContain('0');
  });
  it('renders the correct number of events that the user will be attending', async () => {
    await wrapper.setProps({ attending: [0, 2, 5] });
    const number = wrapper.find('span').text();
    expect(number).toContain('3');
  });
});
