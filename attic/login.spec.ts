import Vue from 'vue';
import { shallowMount,mount } from '@vue/test-utils';
import Login from '../Login.vue';

describe('login.vue', () => { // #A
    test('sanity test', () => {
        expect(true).toBe(true);
    });
});

describe('Login.vue', () => {
    it('renders the login component', () => {
        let wrapper = shallowMount(Login);
        expect(wrapper.text()).toContain('Login');
         });

    it('should have a input field', () => {
        let wrapper = mount(Login);
        expect(wrapper.findAll('input').length).toBe(2);
    });

    it('calls login when button is clicked', () => {
        let my_login = jest.fn();
        let wrapper = mount(Login,{
            methods: {
                my_login
            }
        });
        wrapper.find('button').trigger('click'); 
        expect(my_login).toHaveBeenCalled();
    });



    it('should emit an event, when clicked on login', () => {
        let wrapper = mount(Login);
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted('logged in')).toHaveLength(1);
     });


});

