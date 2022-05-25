import chartXkcd from 'chart.xkcd';
import {StackedBar} from 'chart.xkcd-react';
import PropTypes from 'prop-types';
import {Component} from 'react';
/**
 * StackedBarChart is an chartXkcd-react component.
 * It takes `labels`, and `dataset` as inputs.
 * displays a StackedBarChart.
 * It also takes title,xLabel,yLabel,options as optional inputs.
 * user can pass chart.xkcd options except the legend positions
 */
export default class StackedBarChart extends Component {
    render() {
        const {id, labels, dataset, xLabel, yLabel, style, title, options} =
            this.props;

        return (
            <div id={id} style={{...style}}>
                <StackedBar
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

StackedBarChart.defaultProps = {};

StackedBarChart.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A labels for StackedBarChart.
     */
    labels: PropTypes.array.isRequired,

    /**
     * The dataset for StackedBarChart.
     */
    dataset: PropTypes.array.isRequired,

    /**
     * The XLabel for StackedBarChart.
     */
    xLabel: PropTypes.string,

    /**
     * The YLabel for StackedBarChart.
     */
    yLabel: PropTypes.string,

    /**
     * The Title for StackedBarChart.
     */
    title: PropTypes.string,

    /**
     * Options for the StackedBarChart.
     */
    options: PropTypes.array,
    /**
     * Style for the StackedBarChart.
     */
    style: PropTypes.array,
};
