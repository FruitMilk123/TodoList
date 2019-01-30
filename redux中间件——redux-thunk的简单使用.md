## redux中间件——redux-thunk的简单使用

### 1.作用

  > 一句话比较浅显的话来概括就是：在redux的action中原本只能返回一个对象，因为action本身仅仅只是负责数据的搬运工作，而用了redux-thunk这个中间件之后，能让action不仅仅只能返回一个对象还能返回一个函数
### 2.使用（以发一个ajax举例）

+ 2.1在组件中

  ```javascript
  // 我们需要在react的一个生命周期函数中发出一个异步请求
  componentDidMount() {
      // 调用一个import进来的函数作为action
      const action = getListItemWithAJAX()
      store.dispatch(action)
  }
  ```

+ 2.2在actionCreater.js中

  ``` javascript
  export const initListItemAction = (data) => {
      return {
          type: 'INIT_LIST_DATA'
          data
      }
  }
  
  export const getListItemWithAJAX = () => {
      // 在组件中传入的action中带了一个dispatch方法，这也就是在actionCreater中没有import 'store'相关的东西的也能使用dispatch把action传递到reducer.js中的原因
      return (dispatch) => {
      	// 引入了组件之后便可以在action返回一个函数了，然后就可以帮ajax请求之类的异步操作放进action中来写
          axios.get('url').then((res) => {
              const action = initListItemAction(res.data)
              dispatch(action)
          })
      }
  }
  ```

  