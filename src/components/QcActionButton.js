import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../config/colors'

class customButton extends Component {
	render() {
		const { text, onPress} = this.props;
		return (
		  <div style={styles.buttonStyle}
			onPress={() => onPress()}
		  >
			 <p style={styles.textStyle}>{text}</p>
		  </div>
		);
	}
}

customButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};


const styles = {
  buttonStyle: {
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    paddingTop:7,
    paddingBottom:7,
    paddingRight:21,
    paddingLeft:21,
    borderRadius:30,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'flex-start'
  },
  textStyle: {
    color: colors.primaryDark,
  },
};

export default customButton;