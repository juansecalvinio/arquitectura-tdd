import SignIn from '../../src/pages/SignIn';
import createStore from '../../src/lib/createStore';

describe('SignIn', () => {
    it('Should return div with nested button.', () => {
        const element = SignIn({ store: createStore() });
        expect(element.tagName).toBe('DIV');
        expect(element.className).toBe('sign-in');
        expect(element.children.length).toBe(1);
        expect(element.children[0].tagName).toBe('BUTTON');
        expect(element.children[0].innerText).toBe('Sign in');
    });
    it('Should render enabled button by default.', () => {
        const element = SignIn({ store: createStore() });
        expect(element.children[0].disabled).toBe(false);
    });

    it('Should render enabled button when loading is false.', () => {
        const element = SignIn({ store: createStore({ loading: false }) });
        expect(element.children[0].disabled).toBe(false);
    });

    it('Should render disabled button when loading is true.', () => {
        const element = SignIn({ store: createStore({ loading: true }) });
        expect(element.children[0].disabled).toBe(true);
    });

    it('Should set loading to true when button is clicked.', () => {
        const store = createStore({ loading: true });
        const element = SignIn({ store });
        element.children[0].click();
        expect(store.getState().loading).toBe(true);
    });
});
