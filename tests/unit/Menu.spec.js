import { shallowMount } from '@vue/test-utils';
import Menu from '@/components/Menu.vue';

describe('Menu.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Menu, {
      propsData: {
        attending: [],
        view: 'default',
      },
    });
  });
  it('renders the logo', () => {
    const header = wrapper.find('h1').text();
    expect(header).toContain('Meetup');
  });
  it('shows 0 events being attended on first render', () => {
    const number = wrapper.find('span#events').text();
    expect(number).toContain('0');
  });
  it('renders the correct number of events that the user will be attending', async () => {
    await wrapper.setProps({ attending: [0, 2, 5] });
    const number = wrapper.find('span#events').text();
    expect(number).toContain('3');
  });
  test('if the home button contains the class "highlight" on render', () => {
    const button = wrapper.find('button').classes('highlight');
    expect(button).toBeTruthy();
  });
});
