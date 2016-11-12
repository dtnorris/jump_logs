import Root from 'components/Root';

describe('navigate from the dashboard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root routes={routes} browserHistory={browserHistory} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('from the dashboard page', () => {
    it('can navigate to the new Jump page', () => {
      browserHistory.push('/dashboard');
      let newJumpPageLink = wrapper.findWhere(n => {
        return n.type() === 'a' && n.text() === 'New Jump';
      });
      simulateIfPresent(newJumpPageLink, 'click', { button: 0 });

      let header = wrapper.find('h1');
      expect(header.text()).toMatch('New Jump');
    });

    it('can navigate to the Past Jumps page', () => {
      browserHistory.push('/dashboard');
      let newJumpPageLink = wrapper.findWhere(n => {
        return n.type() === 'a' && n.text() === 'Past Jumps';
      });
      simulateIfPresent(newJumpPageLink, 'click', { button: 0 });

      let header = wrapper.find('h1');
      expect(header.text()).toMatch('Past Jumps');
    });
  });
});
