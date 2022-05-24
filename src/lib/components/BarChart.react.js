import chartXkcd from 'chart.xkcd';
import {Bar} from 'chart.xkcd-react';
import PropTypes from 'prop-types';
import {Component} from 'react';
/**
 * BarChart is an chartXkcd-react component.
 * It takes `labels`, and `dataset` as inputs.
 * displays a BarChart.
 * It also takes title,xLabel,yLabel,options as optional inputs.
 * user can pass chart.xkcd options except the legend positions
 */
export default class BarChart extends Component {
    render() {
        const {id, labels, dataset, xLabel, yLabel, title, options} =
            this.props;

        return (
            <div id={id}>
                <Bar
                    config={{
                        title: title, // optional
                        xLabel: xLabel, // optional
                        yLabel: yLabel, // optional
                        data: {
                            labels: labels,
                            datasets: dataset,
                        },
                        options: {
                            // optional
                            ...options,
                            legendPosition:
                                chartXkcd.config.positionType.upLeft,
                        },
                    }}
                />
            </div>
        );
    }
}

BarChart.defaultProps = {};

BarChart.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A labels for BarChart.
     */
    labels: PropTypes.array.isRequired,

    /**
     * The dataset for BarChart.
     */
    dataset: PropTypes.array.isRequired,

    /**
     * The XLabel for BarChart.
     */
    xLabel: PropTypes.string,

    /**
     * The YLabel for BarChart.
     */
    yLabel: PropTypes.string,

    /**
     * The Title for BarChart.
     */
    title: PropTypes.string,

    /**
     * Options for the BarChart.
     */
    options: PropTypes.array,
};
