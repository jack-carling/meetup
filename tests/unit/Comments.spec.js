import { shallowMount } from '@vue/test-utils';
import Comments from '@/components/Comments.vue';

describe('Comments.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Comments, {
      propsData: {
        comments: [
          {
            comment: 'Been learning so much! See you next week.',
            name: 'James',
            time: '01/01/2021 @ 11:48 AM',
          },
          {
            comment: 'I did not enjoy it, too crowded!',
            name: 'Alice',
            time: '01/01/2021 @ 3:14 PM',
          },
        ],
      },
    });
  });
  it('renders the correct amount of comments within the brackets in the menu', () => {
    const text = wrapper.find('div.menu').text();
    expect(text).toContain('(2)');
  });
  it('should show hide instead of view if comments are visible', async () => {
    await wrapper.setData({ view: 'view' });
    const text = wrapper.find('div.menu').text();
    expect(text).toContain('Hide comments');
  });
  it('should render the comments in the correct view', async () => {
    await wrapper.setData({ view: 'view' });
    const comments = wrapper.findAll('li').length;
    expect(comments).toEqual(2);
  });
  it('should not show the add comment button if a comment has been made', async () => {
    await wrapper.setProps({
      comments: [{ comment: 'Lorem ipsum', name: 'You', time: '01/01/2021 @ 12:00 PM' }],
    });
    const menu = wrapper.find('div.menu').text();
    expect(menu).not.toContain('Add a comment');
  });
  it('should not allow an empty comment to be made', async () => {
    await wrapper.setData({ view: 'add' });
    const input = wrapper.find('input');
    await input.setValue('     ');
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(input.classes('error')).toBeTruthy();
  });
});
