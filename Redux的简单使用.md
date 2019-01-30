# Redux的简单使用

> Redux的作用如果用Vue的角度来看的话，就相当于vuex——是一个公共仓储，能够解决多个不相干的组件之间的传值问题
### 使用方法
+ 1.安装 `npm i redux -D`

+ 2.简单的使用
  + 2.1创建一个仓储文件'store.js'在该项目中：
  ```javascript
  improt { createStore } from 'redux'  // 引入一个createStore的方法
  improt reducer from './reducer'
  
  const store = createStore(reducer)  // 调用createStore并传入引入的reducer作为参数
  export default store  // 导出该仓储
  ```
  + 2.2创建一个文件'reducer.js'在该项目中：
  > reducer的作用，就是记录我们修改的状态，为了让我们能回到过去的状态，里面有switch分支进行数据判断，看看返回什么
  ```javascript
  const defaultState = {}  // 这是设置的一个默认的数据
  
  // 直接导出一个函数，该函数两个参数，第一个state参数里面直接存放公共数据，第二个参数存放行为
  
  export default (state = defaultState, action) => {
      return state
  }
  ```
  + 2.3在需要数据的组件中引入store
  ```javascript
  import store from './store'
  
  export default class 组件名 extends React.Component{
      constructor() {
          super()
          this.state = {
          	  // 调用store的getState()方法能够拿到公共仓储中的数据，一般来说我				 //	们拿到仓储数据之后，会将其变成自己的私有数据在进行渲染
              message: store.getState()
          }
      }
  }
  ```

  > 对上述的总结：也就是说在引入了redux之后，要操作数据是直接操作公共仓储store中的数据，本地的this.state中的内容只是一个中间层（因为他是直接被store.getState()这个方法所赋值的）。所以接下来的action部分会尤其重要

+ 3.action的使用
  + 流程： 组件调用方法创建一个action ======> dispatch提交最新的数据到store=======> reducer进行处理 =======> 返回新数据到store ========> 组件引入新数据并渲染![redux的工作流](C:\Users\win\Desktop\redux的工作流.png)
  + 用代码来表示一个input标签中的内容同步更新:
  ```javascript
  // 在input标签上绑定onChange事件
  <input type="text" onChange={ (e) => this.txtChanged(e) }/>
  
  // 定义onChange的事件内容
  txtChanged = (e) => {
      // 创建一个action，action固定是一个对象，而且必须要有一个type属性
      const action = {
          type: 'inuptValue_changed',
          // 将input标签中的输入的值也传过去
          value: e.target.value
      }
  }
  ```

  来到 reducer.js中：

  ```javascript
  const defaultState = {}
  	// 此时state中是老数据，action中是从组件中dispatch中的最新数据
  export default (state = defaultState, action) => {
      // 将老数据进行一次深拷贝复制一份（这是因为state不能直接操纵）
      const newState = JSON.parse(JSON.stringify(state))
      // 将最新的数据赋值给newState中
      newState.inputValue = action.value
      
      return newState  // 返回这个 newState
  }
  ```

  > [什么是深拷贝](https://www.cnblogs.com/always-chang/p/6107437.html)

  在回到组件中：

  ```javascript
  constructor() {
      super()
      this.state = store.getState()
      // 组件中需要在构造函数中调用store的subscribe（订阅）方法，该方法的参数必须是一个函数。该方法的作用是：监听store中数据变化，一旦发生变化便立刻执行参数中的那个函数
      store.subscribe(this.storeChanged)
    }
  
  
  // 定义 store.subscribe 方法中的这个参数
  storeChanged = () => {
      // store中的数据发生改变，立刻将state中的数据重新赋值
      this.setState(store.getState())
  }
  ```

  执行完以上的代码之后，能够顺利的将input中的value值进行试试的变化了，而且做到了数据与store中的数据保持一致
### redux中的核心API

+ 1.createStore

  > 该方法能够创建一个store仓储

+ 2.store.dispatch

  > 该方法能够派发一个action

+ 3.store.getState

  > 该方法能够从store中拿到数据

+ 4.store.subscribe

  > 该方法能够监听store中数据的改变