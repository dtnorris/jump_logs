import Root from 'components/Root';
import configureStore from 'store/configureStore';

describe('navigate from the dashboard', () => {
  let history, store, wrapper, postForm;

  beforeEach(() => {
    postForm = jasmine.createSpy("postForm");
    spyOn(global, 'fetch').and.callFake(url => {
      postForm(url);
    });

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

  it('can submit the form', () => {
    store.dispatch(push('/jumps/new'));

    let header = wrapper.find('h1');
    expect(header.text()).toMatch('New Jump');

    let location = wrapper.findWhere(n => {
      return n.type() === 'input' && n.props().name === 'location';
    });
    simulateIfPresent(location, 'change', { target: { value: 'CPI' } });

    let submitButton = wrapper.findWhere(n => {
      return n.type() === 'button' && n.text() === 'Submit';
    });
    simulateIfPresent(submitButton, 'submit');

    expect(postForm).toHaveBeenCalledWith('http://localhost:3000/api/v1/jumps');
  });
});


