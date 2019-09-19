import React                    from "react";
import {StyleSheet, Text, View} from "react-native";


class Card extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CARD</Text>
            </View>
        );
    }
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
