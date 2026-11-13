
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import { Platform, Image, StyleSheet, Text, View, TouchableHighlight, ScrollView} from 'react-native';


const userImage = require('../../assets/images/user.png');

const profiles = [
  {
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
  },
  {
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
  },
  {
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
  },
  {
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
  },
  {
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
  },
  {
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',},
];

const ProfileCard = (props) => {

  const {
    image,
    name,
    occupation,
    description,
    onPress,
    showThumbnail
  } = props;

  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#eeeeee">

      <View style={containerStyles}>

        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={image}
          />
        </View>

        <View>
          <Text style={styles.cardName}>
            {name}
          </Text>
        </View>

        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>

        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>

      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      data: data
    };
  }

  handleProfileCardPress = (index) => {

    const showThumbnail =
      !this.state.data[index].showThumbnail;

    this.setState({
      data: update(this.state.data, {
        [index]: {
          showThumbnail: {$set: showThumbnail}}})
    });
  };

    render() {
    const list = this.state.data.map(function(item, index) { 
      const { image, name, occupation, description, showThumbnail } = item;
      return <ProfileCard key={'card-' + index}
                   image={image}
                   name={name}
                   occupation={occupation}
                   description={description}
                   onPress={this.handleProfileCardPress.bind(this, index)}
                   showThumbnail={showThumbnail}/>
    }, this);

    return (
      <View style={styles.container}>
        {list} 
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({

  scrollContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

   container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },

  cardSlot: {
    width: '50%',
    height: 280,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 180,
    height: 250,

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 5
      },
      android: {
        elevation: 15
      }
    })
  },

  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 75,
    height: 75,
    borderRadius: 38,
    marginTop: 15,
    paddingTop: 5,

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 5
      },
      android: {
        elevation: 5
      }
    })
  },

  cardImage: {
    width: 55,
    height: 55
  },

  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: {
      height: 3,
      width: 3
    },
    textShadowRadius: 3
  },

  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },

  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },

  cardDescription: {
    fontStyle: 'italic',
    fontSize: 10,
    marginTop: 8,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 5,
    textAlign: 'center'
  },

  cardThumbnail: {
    transform: [{scale: 0.2}]
  }

});
