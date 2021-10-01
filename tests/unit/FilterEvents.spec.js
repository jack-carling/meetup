import { shallowMount } from '@vue/test-utils';
import FilterEvents from '@/components/FilterEvents.vue';

import { add, format } from 'date-fns';

describe('FilterEvents.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(FilterEvents);
  });
  it("should render tomorrow's date in input date field", () => {
    const tomorrow = format(add(new Date(), { days: 1 }), 'yyyy-MM-dd');
    const datePicker = wrapper.find('input[type="date"]').element.value;
    expect(datePicker).toBe(tomorrow);
  });
  test('if the first button contains the class "highlight"', () => {
    const button = wrapper.find('button').classes('highlight');
    expect(button).toBeTruthy();
  });
  test('if the second button is clicked that the first button no longer contains the class "highlight"', async () => {
    const buttons = wrapper.findAll('button');
    await buttons.at(1).trigger('click');
    expect(buttons.at(0).classes('highlight')).toBeFalsy();
  });
  it('should emit an event on click', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.emitted('filter-events')).toBeTruthy();
  });
});
