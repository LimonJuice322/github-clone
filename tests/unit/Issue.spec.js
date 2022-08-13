import { shallowMount } from '@vue/test-utils'
import Issue from '@/components/Issue';

describe('Issue', () => {
  it('renders props', () => {
    const title = 'Title text';
    const type = 'pull-request';
    const state = 'open';
    const number = 111;
    const createdAt = '2022-08-12T13:15:49Z';
    const author = 'Author';
    const labels = [];
    const comments = 10;

    const wrapper = shallowMount(Issue, {
      props: { title, state, type, number, createdAt, author, labels, comments }
    })
    expect(wrapper.props('title')).toBe(title);
    expect(wrapper.props('type')).toBe(type)
    expect(wrapper.props('state')).toBe(state)
    expect(wrapper.props('createdAt')).toBe(createdAt)
    expect(wrapper.props('author')).toBe(author)
    expect(wrapper.props('labels')).toEqual(labels)
    expect(wrapper.props('comments')).toBe(comments)
  })
})
