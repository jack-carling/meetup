import { shallowMount } from '@vue/test-utils';
import Rating from '@/components/Rating.vue';

describe('Rating.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Rating, {
      propsData: {
        rating: { like: 4, dislike: 5, vote: null },
      },
    });
  });
  it('renders the calculated text correctly', () => {
    const amount = 4;
    const total = 4 + 5;
    const element = wrapper.find('span').text();
    const text = `${amount} out of ${total} people liked this event`;
    expect(element).toContain(text);
  });
  it('should render the green bar with the correct width', () => {
    const percentage = Math.round((4 / 9) * 100) + '%';
    const element = wrapper.find('div.green').element.style.width;
    expect(element).toBe(percentage);
  });
  it('should emit an event when the button is clicked', async () => {
    const button = wrapper.find('div.vote');
    await button.trigger('click');
    expect(wrapper.emitted('vote')).toBeTruthy();
  });
  it('should be a class on the button if it has been clicked', async () => {
    await wrapper.setProps({ rating: { vote: 'thumb_up' } });
    const button = wrapper.find('i');
    expect(button.classes('green')).toBeTruthy();
  });
});
