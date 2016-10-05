import Root from 'components/Root';
import configureStore from 'store/configureStore';

describe('navigate from the dashboard', () => {
  let history, store, wrapper, rootDiv, fakeRedirectWindow;

  beforeEach(() => {
    store = configureStore();
    history = syncHistoryWithStore(browserHistory, store);

    wrapper = mount(
      <Root store={store} history={history} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
    store.dispatch(push('/'));
  });

  it('can navigate to the new page', () => {
    store.dispatch(push('/dashboard'));
    let header = wrapper.find('h1');
    expect(header.text()).toMatch('Dashboard');
  });

  describe('from the dashboard page', () => {
    it('can navigate to the new Jump page', () => {
      store.dispatch(push('/dashboard'));
      let newJumpPageLink = wrapper.findWhere(n => {
        return n.type() === 'a' && n.text() === 'New Jump';
      });
      simulateIfPresent(newJumpPageLink, 'click', { button: 0 });

      let header = wrapper.find('h1');
      expect(header.text()).toMatch('New Jump');
    });

    it('can navigate to the Past Jumps page', () => {
      store.dispatch(push('/dashboard'));
      let newJumpPageLink = wrapper.findWhere(n => {
        return n.type() === 'a' && n.text() === 'Past Jumps';
      });
      simulateIfPresent(newJumpPageLink, 'click', { button: 0 });

      let header = wrapper.find('h1');
      expect(header.text()).toMatch('Past Jumps');
    });
  });
});

