import chartXkcd from 'chart.xkcd';
import {Radar} from 'chart.xkcd-react';
import PropTypes from 'prop-types';
import {Component} from 'react';
/**
 * RadarChart is an chartXkcd-react component.
 * It takes `labels`, and `dataset` as inputs.
 * displays a RadarChart.
 * It also takes title,xLabel,yLabel,options as optional inputs.
 * user can pass chart.xkcd options except the legend positions
 */
export default class RadarChart extends Component {
    render() {
        const {id, labels, dataset, xLabel, yLabel, title, options} =
            this.props;

        return (
            <div id={id}>
                <Radar
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

RadarChart.defaultProps = {};

RadarChart.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A labels for RadarChart.
     */
    labels: PropTypes.array.isRequired,

    /**
     * The dataset for RadarChart.
     */
    dataset: PropTypes.array.isRequired,

    /**
     * The XLabel for RadarChart.
     */
    xLabel: PropTypes.string,

    /**
     * The YLabel for RadarChart.
     */
    yLabel: PropTypes.string,

    /**
     * The Title for RadarChart.
     */
    title: PropTypes.string,

    /**
     * Options for the RadarChart.
     */
    options: PropTypes.array,
};
