import React from 'react';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../../styles/palletecolor';
import PropTypes from 'prop-types';

export default class HeaderSolid extends React.Component {
    static propTypes = {
        leftComponent: PropTypes.element,
        rightComponent: PropTypes.element
    };
    render() {
        const { leftComponent, rightComponent } = this.props;
        if (leftComponent == null) {
            leftComponent = (
                <Button
                    icon={<Icon name="chevron-left" size={20} color="#FFF" />}
                    type="clear"
                    onPress={() => this.props.navigation.goBack(null)}
                />
            );
        }
        return (
            <Header
                leftComponent={leftComponent}
                rightComponent={rightComponent}
                containerStyle={{
                    paddingTop: 0,
                    paddingBottom: 0,
                    backgroundColor: color.azul3,
                    height: 50
                }}
            />
        );
    }
}
