import { mount } from '@vue/test-utils';
import { Affix } from '@/src/affix/index.ts';

describe('Affix', () => {
  test('_______', () => {
    expect(true).toEqual(true);
  });

  describe('Test the state of the container under the window', () => {
    const wrapper = mount({
      render() {
        return (
          <Affix>
            <div style="width: 100px; height: 20px">hello world</div>
          </Affix>
        );
      },
    }).findComponent(Affix);

    it('Test get container', async () => {
      setTimeout(() => {
        expect(wrapper.vm.scrollContainer).toBe(window);
      }, 0);
    });

    it('Test the scrolling state', async () => {
      await wrapper.setData({ fixedTop: 10 });
      expect(wrapper.find('.t-affix').selector).toBe('.t-affix');
      wrapper.destroy();
    });
  });

  describe('Test the specified container', () => {
    const wrapper = mount({
      methods: {
        container() {
          return this.$refs?.container;
        },
      },
      render() {
        return (
          <div class="container" ref="container">
            <Affix container={this.container}>
              <div style="width: 100px; height: 20px">hello world</div>
            </Affix>
          </div>
        );
      },
    });

    it('Test get container', async () => {
      setTimeout(() => {
        const affixWrapper = wrapper.findComponent(Affix);
        expect(affixWrapper.vm.scrollContainer).toBe(wrapper.vm.container());
      }, 0);
    });

    it('Test the scrolling state', async () => {
      const affixWrapper = wrapper.findComponent(Affix);
      await affixWrapper.setData({ fixedTop: 10 });
      expect(affixWrapper.find('.t-affix').selector).toBe('.t-affix');
    });
  });
});
