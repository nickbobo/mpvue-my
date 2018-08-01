import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

// export default{
//     config:{
//         "pages": [
//             "pages/index/main",
//             "pages/counter/main",
//             "pages/logs/main",
//             "^pages/home/main",
//             "pages/my/main"
//           ],
//           "window": {
//             "backgroundTextStyle": "light",
//             "navigationBarBackgroundColor": "#EA5149",
//             "navigationBarTitleText": "蜗居读书",
//             "navigationBarTextStyle": "light"
//           },
//           "tabBar":{
//             "selectedColor":"#EA5149",
//             "list":[{
//               "pagePath":"pages/home/main",
//               "text":"首页",
//               "iconPath":"static/img/home.png",
//               "selectedIconPath":"static/img/home-active.png"
//             },{
//               "pagePath":"pages/my/main",
//               "text":"我的",
//               "iconPath":"static/img/me.png",
//               "selectedIconPath":"static/img/me_active.png"
//             }

//             ]
//           }
//     }
// }
