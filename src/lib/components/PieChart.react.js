import chartXkcd from 'chart.xkcd';
import {Pie} from 'chart.xkcd-react';
import PropTypes from 'prop-types';
import {Component} from 'react';
/**
 * PieChart is an chartXkcd-react component.
 * It takes `labels`, and `dataset` as inputs.
 * displays a PieChart.
 * It also takes title,xLabel,yLabel,options as optional inputs.
 * user can pass chart.xkcd options except the legend positions
 */
export default class PieChart extends Component {
    render() {
        const {id, labels, dataset, xLabel, yLabel, title, options} =
            this.props;

        return (
            <div id={id}>
                <Pie
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

PieChart.defaultProps = {};

PieChart.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A labels for PieChart.
     */
    labels: PropTypes.array.isRequired,

    /**
     * The dataset for PieChart.
     */
    dataset: PropTypes.array.isRequired,

    /**
     * The XLabel for PieChart.
     */
    xLabel: PropTypes.string,

    /**
     * The YLabel for PieChart.
     */
    yLabel: PropTypes.string,

    /**
     * The Title for PieChart.
     */
    title: PropTypes.string,

    /**
     * Options for the PieChart.
     */
    options: PropTypes.array,
};
