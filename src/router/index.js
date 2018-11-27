import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import demo from '@/components/Demo'
import personalData from '../pages/personalData'
import headerBar from '../pages/HeaderBar'
import layout from '../pages/layout'
import personalData2 from '../pages/personalData2'

Router.prototype.goBack = function(){
  this.isBack = true;
  window.history.go(-1);
};


Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/demo',
      name: 'demo',
      component: demo
    },

    {
      path: '/personalData',
      name: 'personalData',
      component: personalData
    },
    {
      path: '/headerBar',
      name: 'headerBar',
      component: headerBar
    },

    {
      path: '/layout',
      name: 'layout',
      component: layout
    },

    {
      path: '/personalData2',
      name: 'personalData2',
      component: personalData2
    },

  ]
})

routers.beforeEach(function (to, from, next) {
  document.body.scrollTop = document.documentElement.scrollTop = 0
  next()
});

export default routers;

