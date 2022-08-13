import { shallowMount } from '@vue/test-utils'
import Board from '@/components/Board';

describe('Board', () => {
  it('renders props', () => {
    const issuesList = [];
    const openedCount = 10;
    const closedCount = 20;

    const wrapper = shallowMount(Board, {
      props: { issuesList, openedCount, closedCount }
    })
    expect(wrapper.props('issuesList')).toEqual(issuesList)
    expect(wrapper.props('openedCount')).toBe(openedCount)
    expect(wrapper.props('closedCount')).toBe(closedCount)
  })
})
