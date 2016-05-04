import React from 'react-native';
const {
  Text,
  TouchableOpacity,
  Component,
  View,
  PropTypes,
  Image
} = React;
import styles from './styles';

export default class NavbarButton extends Component {
  render() {
    const { style, tintColor, margin, title, handler, icon, pos } = this.props;
    console.log(this.props);
    if(pos === 'left'){
      return (
        <TouchableOpacity style={styles.navBarButton} onPress={handler}>
          <View style={[style, styles.navBarButtonContainer]}>
            <Image source={icon} style={styles.navBarButtonIcon}/>
            <Text style={[styles.navBarButtonText, { color: tintColor, }, ]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    }else{
      return (
        <TouchableOpacity style={styles.navBarButton} onPress={handler}>
          <View style={[style, styles.navBarButtonContainer]}>
            <Text style={[styles.navBarButtonText, { color: tintColor, }, ]}>{title}</Text>
            <Image source={icon} style={styles.navBarButtonIcon}/>
          </View>
        </TouchableOpacity>
      );
    }

  }

  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    tintColor: PropTypes.string,
    title: PropTypes.string,
    handler: PropTypes.func,
    pos : PropTypes.string
  };

  static defaultProps = {
    style: {},
    title: '',
    tintColor: '#0076FF',
    onPress: () => ({}),
    leftButtonIcon : '',
    rightButtonIcon : ''
  };
}
