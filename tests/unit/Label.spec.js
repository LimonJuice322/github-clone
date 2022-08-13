import { shallowMount } from '@vue/test-utils'
import Label from '@/components/Label';

describe('Label', () => {
  it('renders props.color and props.name when passed', () => {
    const color = '333333';
    const name = 'label text';
    const wrapper = shallowMount(Label, {
      props: { color, name }
    })

    expect(wrapper.props('color')).toBe(color)
    expect(wrapper.text()).toMatch(name)
  })
})
