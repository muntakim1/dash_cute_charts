import chartXkcd from 'chart.xkcd';
import {XY} from 'chart.xkcd-react';
import PropTypes from 'prop-types';
import {Component} from 'react';
/**
 * ScatterChart is an chartXkcd-react component.
 * It takes `labels`, and `dataset` as inputs.
 * displays a ScatterChart.
 * It also takes title,xLabel,yLabel,options as optional inputs.
 * user can pass chart.xkcd options except the legend positions
 */
export default class ScatterChart extends Component {
    render() {
        const {id, dataset, xLabel, yLabel, title, options} = this.props;

        return (
            <div id={id}>
                <XY
                    config={{
                        title: title, // optional
                        xLabel: xLabel, // optional
                        yLabel: yLabel, // optional
                        data: {
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
};
