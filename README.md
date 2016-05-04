## Customizable navbar for react-native
![react-native-navbar-icon demo](https://github.com/angel8731/react-native-navbar-icon/blob/master/img/react-native-navbar-icon.png)

##此组件是react-native-navbar的扩展版本，增加navbar左右按钮对图标的支持，仅此而已，这里仅提供api供大家参考使用，具体细节请参考 [react-native-navbar](https://github.com/react-native-fellowship/react-native-navbar)

### Content
- [Installation](#installation)
- [API](#api)
- [Usage with webpack](#usage-with-webpack)
- [Questions?](#questions)

### Installation
First of all, make sure you're using `npm3+` and `babel6` for version `1.1.1` or above.

```bash
npm i react-native-navbar-icon --save
```

That's it, you're ready to go!

### API
- **style** - (Object, Array) - Style object or array of style objects
- **tintColor** - (String) - NavigationBar's tint color
- **statusBar** - (Object):
  - **style** - ('light-content' or 'default') - Style of statusBar
  - **hidden** - (Boolean)
  - **tintColor** - (String) - Status bar tint color
  - **hideAnimation** - ('fade', 'slide', 'none') - Type of statusBar hide animation
  - **showAnimation** - ('fade', 'slide', 'none') - Type of statusBar show animation
- **leftButton / rightButton** - (Object, React Element) - Either plain object with configuration, or React Element which will be used as a custom left/right button element. Configuration object has following keys:
  - **title** - (String) - Button's title
  - **tintColor** - (String) - Button's text color
  - **style** - (Object, Array) - Style object or array of style objects
  - **handler** - (Function) - onPress function handler
  - **icon** - (object) - Image source for you icon
- **title** - (Object, React Element) - Either plain object with configuration, or React Element which will be used as a custom title element. Configuration object has following keys:
  - **title** - (String) - Button's title
  - **tintColor** - (String) - Title's text color

###Demo
```jsx 

leftButton={{
    title : this.props.backButtonTitle,
    handler : this.props.onRightButtonPress,
    style : {},
    tintColor : '#E78170',
    icon : require('image!icon_tabbar_back')
}}
```
bingo , 这里我采用了最简单粗暴的办法，直接传入image source对象


### questions?
有任何问题可以和我联系！
- QQ 87407613
- Email angel8731@sina.com

如果发现bug, please [submit an issue!](https://github.com/angel8731/react-native-navbar-icon/issues/new)
