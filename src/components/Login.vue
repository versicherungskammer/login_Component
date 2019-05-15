<template>
<!-- Render textfield component -->
<div class="mdc-card mdc-typography container">
    <h3 class="mdc-typography--headline3 title">{{title}}</h3>
    
    <div class="mdc-text-field username "   ref="userName" >
        <input autofocus type="text" class="mdc-text-field__input mdc-text-field--focused" 
        id="username-input" name="user"
        v-model="user" v-on:keyup="checkUser"  ref="userInput"    >
        <label class="mdc-floating-label" for="username-input">Username</label>
        <i v-show="user_done" class="material-icons mdc-text-field__icon" tabindex="0" role="button" ref="textOK">done</i>
        <div class="mdc-line-ripple"></div>
    </div>
    
    <div class="mdc-text-field password" ref="passwd">
        <input type="password" class="mdc-text-field__input" 
        id="password-input" name="password"  ref="passwd_input"
        v-model="password" v-on:keyup="checkPassword"
        >
        <label class="mdc-floating-label" for="password-input">Password</label>
        <i v-show="password_done" class="material-icons mdc-text-field__icon" tabindex="0" role="button" ref="pwdOK">done</i>
        <div class="mdc-line-ripple"></div>
    </div>

    <div class="mdc-card__actions">
        <button :disabled="submit_disabled" class="mdc-button mdc-button--raised mdc-card__action--button" ref="sendButton"
            @click="my_login" >
            <span class="mdc-button__label">login</span>
        </button>

    </div>
</div>
</template>

<script lang="ts">
import fetch from 'unfetch';
import Vue from 'vue';
import {MDCTextFieldIcon} from '@material/textfield/icon';
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
export default Vue.extend(  {
    data() {
        return {
            user: '',
            user_length: 2,
            password_length: 6,
            password: '',
            submit_disabled: true,
            user_done: false,
            password_done: false,
            pristine_length: 3,
        };
    },

    props: 
    {
        backend: {
            default: 'localhost:8083/login',
            type: String
        },

        title: {
            default: 'Login',
            type: String
        },

        register: {
            default: false,
            type: Boolean
        },

        locStore: {
            default: true,
            type: Boolean
        }

    },
    
    computed:{


    },
    methods: {
        my_login() {
            fetch(this.backend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: this.user,
                    password: this.password
                })
            }).then( r => {
            return r.json()}).then(data => {
                if (data["status"]==200){ 
                console.log(data["token"]);
                this.$emit('clicked', {"token": data["token"],
                "status":200});
            }else{
                this.$emit('clicked', {"status": data["status"]});
            }
            });
        }, //EOF Method

        checkUser(event) {
            if(this.user.length > this.user_length ){
                this.user_done=true;
            }
            else
            {
                this.user_done=false;
            }
            console.log("-----------------kkkkkkk-1--------------------------");
            console.log(this.user_done);
            console.log(this.password_done);
            console.log("--------------ENde user_done");
            
            if (this.user_done && this.password_done)
            { this.submit_disabled = false
            
            console.log("yeah3");
            console.log(this.submit_disabled);
            
            
            } else
            { 
            
            
            console.log("yeah4");
            console.log(this.submit_disabled);
            this.submit_disabled = true}
        },

        checkPassword(event)
        {
            console.log("Password triggert");
            if(this.password.length > this.password_length){
                this.password_done=true;
            }
            else
            {
                this.password_done=false;
            };
            console.log("-----------------kkkkkkk2---------------------------");
            console.log(this.user_done);
            console.log(this.password_done);
            console.log("--------------ENde user_done");
            
            
            if (this.user_done && this.password_done)
            { this.submit_disabled = false
            
            console.log("yeah");
            console.log(this.submit_disabled);
            
            } else
            {
            
            console.log("yeah4");
            this.submit_disabled = true;
        }
        },
    },

    mounted() { 
        new MDCTextField(this.$refs.userName);
        new MDCTextField(this.$refs.passwd);
        new MDCRipple(this.$refs.sendButton); 
        new MDCTextFieldIcon(this.$refs.textOK);
        new MDCTextFieldIcon(this.$refs.pwdOK);
        this.$refs.userInput.focus();
    },

}  
);


</script>
<!-- Default behavior of this component -->
<!-- Only importing the css needed not more -->
<!-- The imports are treated by webpack >>>>>> the assets-Dir is preprocessed by webpack-->
<style >
@import '../assets/mdc.textfield.css';
@import '../assets/mdc.floating-label.css';
@import '../assets/mdc.line-ripple.css';
@import '../assets/mdc.button.css';
@import '../assets/mdc.card.css';
@import '../assets/mdc.typography.css';
@import '../assets/material-icons.css';
.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: var(--mdc-floating-label-focused, black);
}
.container {
    display:   flex;
    align-items: center;
    justify-content: center;
}

.title {
}
</style>

