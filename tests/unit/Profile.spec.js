import { shallowMount } from '@vue/test-utils';
import { generateHistory } from '@/utils/events';
import Profile from '@/components/Profile.vue';

describe('Profile.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Profile, {
      propsData: {
        events: [
          {
            date: '03/10/2021',
            location: 'Green Park',
            name: 'Coffee walk',
            street: '1100 Green Park',
            time: '9:00 AM',
            index: 2,
          },
          {
            date: '03/10/2021',
            location: 'Arch Cinema',
            name: 'Movies',
            street: '331 Star Route',
            time: '8:00 PM',
            index: 3,
          },
          {
            date: '03/10/2021',
            location: 'Language Café',
            name: 'French language group',
            street: '2429 Ryder Avenue',
            time: '3:00 PM',
            index: 4,
          },
        ],
        history: generateHistory(),
      },
    });
  });
  it('renders the correct amount of li-tags for events attending', () => {
    const list = wrapper.findAll('li.events').length;
    expect(list).toEqual(3);
  });
  it('should show informative text if no events are being attended', async () => {
    await wrapper.setProps({ events: [] });
    const text = 'No events planned';
    const list = wrapper.find('li').text();
    expect(list).toContain(text);
  });
  it('should emit an event to cancel attendance if the cancel button is clicked', async () => {
    const button = wrapper.find('i.cancel');
    await button.trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });
  it('renders the correct amount of li-tags for events attended in the past', () => {
    const list = wrapper.findAll('li.history').length;
    expect(list).toEqual(3);
  });
});
