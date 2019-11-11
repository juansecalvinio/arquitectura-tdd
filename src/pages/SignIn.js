import createElement from '../lib/createElement';
import SignInButton from '../components/SignInButton';

export default ({ store }) => createElement('div', {
    className: 'sign-in',
    children: [SignInButton({ 
        disabled: !!store.getState().loading,
        onclick: () => {
            console.log(store.getState());
            if(!store.getState().loading) {
                store.setState({ loading: true })
            } else {
                store.setState({ loading: false })
            }
        },
    })],
});
