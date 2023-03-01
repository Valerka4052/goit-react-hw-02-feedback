import PropTypes from 'prop-types';
import { Box, Text } from './statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (<Box>
        <Text>Good: {good}</Text>
        <Text>Neutral: {neutral}</Text>
        <Text>Bad: {bad}</Text>
        <Text>Total: {total}</Text>
        <Text>Positive feedback: {positivePercentage}%</Text>
    </Box>);
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};