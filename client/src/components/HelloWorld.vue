<template>
  <div class="hello">
      <div class="fb-share-button" 
        data-href="http://localhost:8080/" 
        data-layout="button_count">
      </div>
      <a class="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=Hello%20world"
        data-size="large">
        Tweet
      </a>
      <fb-signin-button :params="fbSignInParams"
        @success="onSignInSuccess" @error="onSignInError" class="fb-signin-button fb-signin-button--facebook">Login with Facebook
      </fb-signin-button><br><br>
  <social-sharing url="https://vuejs.org/"
                      title="The Progressive JavaScript Framework"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
  <div>
      <network network="email">
          <i class="fa fa-envelope"></i> Email
      </network>
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      <network network="googleplus">
        <i class="fa fa-google-plus"></i> Google +
      </network>
      <network network="line">
        <i class="fa fa-line"></i> Line
      </network>
      <network network="linkedin">
        <i class="fa fa-linkedin"></i> LinkedIn
      </network>
      <network network="odnoklassniki">
        <i class="fa fa-odnoklassniki"></i> Odnoklassniki
      </network>
      <network network="pinterest">
        <i class="fa fa-pinterest"></i> Pinterest
      </network>
      <network network="reddit">
        <i class="fa fa-reddit"></i> Reddit
      </network>
      <network network="skype">
        <i class="fa fa-skype"></i> Skype
      </network>
      <network network="sms">
        <i class="fa fa-commenting-o"></i> SMS
      </network>
      <network network="telegram">
        <i class="fa fa-telegram"></i> Telegram
      </network>
      <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
      <network network="vk">
        <i class="fa fa-vk"></i> VKontakte
      </network>
      <network network="weibo">
        <i class="fa fa-weibo"></i> Weibo
      </network> 
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i> Whatsapp
      </network>
  </div>
</social-sharing>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      fbSignInParams: {
        scope: 'email ,public_profile',
        return_scopes : true
      }
    }
  },
  methods: {
    onSignInSuccess(response){
      console.log(response);
      console.log('hasil accesstoken',response.authResponse.accessToken)
      axios.post('http://localhost:3000/login',{},{headers:{token:response.authResponse, id: response.authResponse.userID}})
      .then(function(hasil){
        localStorage.setItem('jwtToken',hasil.data.token)
        localStorage.setItem('name',hasil.data.name)
      })
    },
    onSignInError(error){
      console.log('oh NO', error);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
}
.fb-signin-button {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
}
.fb-signin-button:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.fb-signin-button:focus {
  outline: none;
}
.fb-signin-button:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}

.fb-signin-button--facebook {
  background-color: #4C69BA;
  background-image: linear-gradient(#4C69BA, #3B55A0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354C8C;
}
.fb-signin-button--facebook:before {
  border-right: #364e92 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
}
.fb-signin-button--facebook:hover,
.fb-signin-button--facebook:focus {
  background-color: #5B7BD5;
  background-image: linear-gradient(#5B7BD5, #4864B1);
}
</style>
