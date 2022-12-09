import Toast from './toast.vue'

const toast = {}

toast.install = function(Vue) {
    console.log('use了toast插件')
    // 1. 创建组件构造器
	const toastConstructor = Vue.extend(Toast)
	// 2. 使用组件构造器创建一个组件
 	const toast = new toastConstructor()
	// 3. 将组件手动挂载到一个元素上
	toast.$mount(document.createElement('div'))
	// 4. 将节点插入到页面中，$el就是改组件的节点
	document.body.appendChild(toast.$el)
	// 5. 将组件加入到vue实例上
	Vue.prototype.$toast = toast
    
}

export default toast