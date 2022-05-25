import chartXkcd from 'chart.xkcd';
import {XY} from 'chart.xkcd-react';
import PropTypes from 'prop-types';
import {Component} from 'react';
/**
 * PieChart is an chartXkcd-react component.
 * It takes `labels`, and `dataset` as inputs.
 * displays a PieChart.
 * It also takes title,xLabel,yLabel,options as optional inputs.
 * user can pass chart.xkcd options except the legend positions
 */
export default class ScatterChart extends Component {
    render() {
        const {id, labels, dataset, xLabel, yLabel, style, title, options} =
            this.props;

        return (
            <div id={id} style={{...style}}>
                <XY
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

ScatterChart.defaultProps = {};

ScatterChart.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A labels for ScatterChart.
     */
    labels: PropTypes.array.isRequired,

    /**
     * The dataset for ScatterChart.
     */
    dataset: PropTypes.array.isRequired,

    /**
     * The XLabel for ScatterChart.
     */
    xLabel: PropTypes.string,

    /**
     * The YLabel for ScatterChart.
     */
    yLabel: PropTypes.string,

    /**
     * The Title for ScatterChart.
     */
    title: PropTypes.string,

    /**
     * Options for the ScatterChart.
     */
    options: PropTypes.array,
    /**
     * Style for the ScatterChart.
     */
    style: PropTypes.array,
};
