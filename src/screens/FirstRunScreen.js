import React, {Component} from 'react';

import QcActionButton from '../components/QcActionButton'


const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

const BG_IMAGE = require('../assets/images/read_child_bg.jpg');

class FirstRunScreen extends React.Component {

    onTeacherFlow = () => {
        this.props.navigation.navigate('TeacherScreensNavigator');
    }

    render(){
        const { navigation } = this.props;
        return (
          <div style={styles.container}>
                <div source={BG_IMAGE} style={styles.bgImage}>
                    <p>بسم الله الرحمان الرحيم</p>
                    <QcActionButton
                        navigation={navigation}
                        text="I am a teacher"
                        onPress={this.onTeacherFlow} />
                </div>
            </div>  
        );
    }
}

const styles = {
    container: {
      flex: 1,
    },
    bgImage: {
      flex: 1,
      top: 0,
      left: 0,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
    },
};

export default FirstRunScreen;
