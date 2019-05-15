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
        let wrapper = shallowMount(Login, {
        mocks: {
          MutationObserver: () => {
         },
         },
        }
        );
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
        let name=wrapper.find({ ref: 'userInput' });
        wrapper.setData({  submit_disabled: false }) 
        wrapper.find('button').trigger('click'); 
        expect(my_login).toHaveBeenCalled();
    });

   it ('should take the values', () => {
       var vm;
       var user;
       var pwd;
       var submit_disabled;
        let wrapper = mount(Login);
        let name=wrapper.find({ ref: 'userInput' });
       (<HTMLInputElement>name.element).value = "Max";
        name.trigger('input');
        name.trigger('change');
        vm = wrapper.vm;
        user=(vm as any).user ;    
        console.log(user);
        let pass=wrapper.find({ ref: 'passwd_input' });
       (<HTMLInputElement>pass.element).value = "123123132";
       (vm as any).user_done = true;
       (vm as any).password_done = true;
        pass.trigger('input');
        pass.trigger('change');
        vm = wrapper.vm;
        pwd=(vm as any).password;
        console.log(pwd);
        submit_disabled=(vm as any).submit_disabled;
        console.log("------------Submit_disabled content --------");
        console.log(submit_disabled);
   });



   it ('should call input validation', () => {
        let checkUser = jest.fn();
        let wrapper = mount(Login,{
            methods: {
                checkUser
            }
        });
        let name=wrapper.find({ ref: 'userInput' });
        name.trigger('keyup');
       expect(checkUser).toHaveBeenCalled();
    });

   it ('should call password validation', () => {
        let checkPassword = jest.fn();
        let wrapper = mount(Login,{
            methods: {
                checkPassword
            }
        });
        let name=wrapper.find({ ref: 'passwd_input' });
        name.trigger('keyup');
       expect(checkPassword).toHaveBeenCalled();
   });


    it('should change the internal state of the login button',()=>{
        let wrapper = mount(Login);
        let vm = wrapper.vm;
        (vm as any).password="111111111111111";
        (vm as any).user="Max";
        (vm as any).checkUser();
        (vm as any).checkPassword();
        let b  = wrapper.find('button')
       expect(b.element).toBeInstanceOf(HTMLElement); 
       const computedStyle = window.getComputedStyle(wrapper.element) 
        expect(computedStyle.display).toBe("block");
    });
    
    it('should change the internal state of the login button2',()=>{
        let wrapper = mount(Login);
        let vm = wrapper.vm;
        console.log("button sollte jetzt nicht erscheinen");
        (vm as any).password="1";
        (vm as any).user="Max";
        (vm as any).checkUser();
        (vm as any).checkPassword();
        let b  = wrapper.find('button')
       expect(b.element).toBeInstanceOf(HTMLElement); 
       const computedStyle = window.getComputedStyle(wrapper.element);        console.log(computedStyle);
        expect(computedStyle.display).toBe("block");
    });
});

