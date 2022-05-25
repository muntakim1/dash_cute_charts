import chartXkcd from 'chart.xkcd';
import {Line} from 'chart.xkcd-react';
import PropTypes from 'prop-types';
import {Component} from 'react';
/**
 * LineChart is an chartXkcd-react component.
 * It takes `labels`, and `dataset` as inputs.
 * displays a LineChart.
 * It also takes title,xLabel,yLabel,options as optional inputs.
 * user can pass chart.xkcd options except the legend positions
 */
export default class LineChart extends Component {
    render() {
        const {id, labels, dataset, xLabel, yLabel, style, title, options} =
            this.props;

        return (
            <div id={id} style={{...style}}>
                <Line
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

LineChart.defaultProps = {};

LineChart.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A labels for lineChart.
     */
    labels: PropTypes.array.isRequired,

    /**
     * The dataset for LineChart.
     */
    dataset: PropTypes.array.isRequired,

    /**
     * The XLabel for LineChart.
     */
    xLabel: PropTypes.string,

    /**
     * The YLabel for LineChart.
     */
    yLabel: PropTypes.string,

    /**
     * The Title for LineChart.
     */
    title: PropTypes.string,

    /**
     * Options for the LineChart.
     */
    options: PropTypes.array,
    /**
     * Style for the LineChart.
     */
    style: PropTypes.array,
};
