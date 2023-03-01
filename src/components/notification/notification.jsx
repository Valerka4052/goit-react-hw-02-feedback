import PropTypes from 'prop-types';
import { Text } from './notification.styled';

export function Notification({ message }) {
    return (<Text>{message}</Text>);
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};