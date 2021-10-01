import { shallowMount } from '@vue/test-utils';
import { generateEvents } from '@/utils/events';
import Events from '@/components/Events.vue';

describe('Events.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Events, {
      propsData: {
        events: generateEvents(),
        attending: [],
      },
    });
  });
  it('renders article tags for each event', () => {
    const events = wrapper.findAll('article.event').length;
    expect(events).toEqual(12);
  });
  it('should emit an event when the join button is clicked', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.emitted('attend')).toBeTruthy();
  });
  it('should show cancel on the button if already attending', async () => {
    await wrapper.setProps({ attending: [0] });
    const button = wrapper.find('button').text();
    expect(button).toContain('Cancel');
  });
});
