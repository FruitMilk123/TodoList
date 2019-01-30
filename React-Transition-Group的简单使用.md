# React-Transition-Group的简单使用

### 安装
+ 1.在项目中上`npm i react-transition-group -D`
### 使用

+ 1.在需要的JS文件上`import { CSSTransition } from 'react-transition-group'`

+ 2.在需要过渡的元素上用`<CSSTransition></CSSTransition>包裹`
  + <CSSTransition></CSSTransition>该元素上需要添加如下属性:
  ```javascript
  <CSSTransition
  	in={this.state.xxx}  // 需要切换的一个标志，一般是个布尔值
  	timeout={114514}  // 过渡时间，单位是毫秒
  	classNames='fade' // 类名的开头
  	unmountOnExit  // 该属性能在一个元素消失的时候清除该dom节点，出现的时候在添加上去
  >
  </CSSTransition>
  ```

  以上步骤还是不够的，另外在CSS上需要引入如下的类样式

  ``` css
  .fade-enter {
      opcity: 0
  }
  .fade-enter-active {
      opcity: 1;
      transition: all .4s;
  }
  .fade-enter-done {
      // 这个属性不一定需要
      opcity: 1
  }
  // 以上是入场动画
  
  .fade-exit {
      opcity: 1
  }
  .fade-exit-active {
      opcity: 0;
      transition: all .4s;
  }
  .fade-exit-done {
      // 这个属性不一定需要
      opcity: 0
  }
  // 以上是出场动画
  ```

  

