import { shallowMount } from '@vue/test-utils';
import Menu from '@/components/Menu.vue';

describe('Menu.vue', () => {
  it('Renders the logo', () => {
    const wrapper = shallowMount(Menu);
    const header = wrapper.find('h1').text();
    expect(header).toContain('Meetup');
  });
});
