# prop-types的简单使用

### 1.prop-types的作用
> 对Component设置**propTypes**属性，可以为Component的**props**属性进行类型检查。 (注意：是对穿过来的props中的属性进行类形检查)，要在某一个子组件中是用

### 2.使用的语法

+ 2.1 `npm i prop-types -D`安装prop-types包，然后在需要使用的组件之中`import PropTypes from 'prop-types'`这个包（这里也要注意：名字最好起PropTypes这个名字）
+ 2.2 组件的最后面写下如下的代码
  + ```javascript 
    类名.propTypes = {
        // 参数.PropTypes.参数类型,  必须下面这个
        content: PropTypes.string
    }
    ```
    上面的代码则表示校验一个从父组件传过来的一个叫'content'的参数，并且验证其中的该类型是否为字符串类型，如果不是字符串类型则会在控制台上发生警告
  + 另外可以校验很多种类型和规则：
  ``` javascript
   类名.propTypes = {
  		// 代表content属性可以是一个字符串也可以是数字
       content: PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
       // 代表text属性必须要有内容，而且要是字符串
       test: PropTypes.string.isRequired
    }
  ```
+ 2.3 DefaultProps的使用
 DefaultProps的作用某个传过来的属性没有值得情况，默认给一个值
 ``` javascript
 类名.defaultProps = {

    content: 'Hello React'
}
// 代表在子组件没有接收到父组件传来的'content'属性值的时候，默认给一个'Hello React'的字符串属性
 ```