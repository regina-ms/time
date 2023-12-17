import React from "react";
import moment from "moment";

export const withDetails = (Component) => {
    return class extends React.Component {
        state = {};

        componentDidMount() {
            this.updateDate();
        }

        updateDate() {
            const momentDate = moment();
            const propsDate = moment(this.props.date);

            if (momentDate.diff(propsDate, 'days', true) > 1) {
                this.setState({
                    date: `${momentDate.diff(propsDate, 'days')} дней назад`
                })
            } else if (momentDate.diff(propsDate, 'hours', true) > 1) {
                this.setState({
                    date: '5 часов назад'
                })
            } else {
                this.setState({
                    date: '12 минут назад'
                })
            }
        }
        render() {
            return <Component {...this.state} />;
        }
    }
}