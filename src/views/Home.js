import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';


class Home extends Component {
    render() {
        return (
            <View>
                <Text> {this.props.login} </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.logg
});
// match with logg in basic reducer

export default connect(mapStateToProps)(Home)