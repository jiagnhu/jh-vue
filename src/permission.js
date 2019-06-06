/**
 * 全站权限配置
 *
 */
import router from './router/router'
import store from '@/store'
import { validatenull } from '@/util/validate'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// import { getCookie } from "@/util/cookie/"

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  // 缓冲设置、页面缓存
  if (to.meta.keepAlive === true && store.state.tags.tagList.some(ele => {
    return ele.value === to.fullPath
  })) {
    to.meta.$keepAlive = true
  } else {
    NProgress.start()
    if (to.meta.keepAlive === true && validatenull(to.meta.$keepAlive)) {
      to.meta.$keepAlive = true
    } else {
      to.meta.$keepAlive = false
    }
  }

})

// 设置网页标题
router.afterEach(() => {
  NProgress.done()
  //const title = store.getters.tag.label
  //router.$jhvueRouter.setTitle(title)
})
