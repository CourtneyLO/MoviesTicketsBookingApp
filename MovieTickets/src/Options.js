import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import Option from './Option';

const { width } = Dimensions.get('window');

const optionWidth = (width - 0) / 3 -10;

export default class Options extends Component {

  static propTypes={
    values: PropTypes.array.isRequired,
    chosen: PropTypes.number,
    onChoosen: Proptypes.func.isRequired,
  }

  render() {
    const { values, chosen, onChoosen } = this.props;
    return (
      <View styles={styles.container}>
        <ScrollView
          ref={(scrollView) => { this._scrollView = scrollView; }}
          horizontal={true}
          decelerationRate={0.1}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          snapToInterval={optionWidth}
          style={styles.options}
        >

          {valies.map((value, index) =>
            <View style={{ width: optionWidth }} key={index}>
              <Option
                value={value}
                isChoosen={index === chosen}
                onChoose={() => onChoose(index)}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = Style.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  options: {
    flexDirection: 'row',
    marginRight: -10,
  },
});
