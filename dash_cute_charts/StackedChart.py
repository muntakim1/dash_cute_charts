# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class StackedChart(Component):
    """A StackedChart component.
StackedBarChart is an chartXkcd-react component.
It takes `labels`, and `dataset` as inputs.
displays a StackedBarChart.
It also takes title,xLabel,yLabel,options as optional inputs.
user can pass chart.xkcd options except the legend positions

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- dataset (list; required):
    The dataset for StackedBarChart.

- labels (list; required):
    A labels for StackedBarChart.

- options (list; optional):
    Options for the StackedBarChart.

- title (string; optional):
    The Title for StackedBarChart.

- xLabel (string; optional):
    The XLabel for StackedBarChart.

- yLabel (string; optional):
    The YLabel for StackedBarChart."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, labels=Component.REQUIRED, dataset=Component.REQUIRED, xLabel=Component.UNDEFINED, yLabel=Component.UNDEFINED, title=Component.UNDEFINED, options=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'dataset', 'labels', 'options', 'title', 'xLabel', 'yLabel']
        self._type = 'StackedChart'
        self._namespace = 'dash_cute_charts'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'dataset', 'labels', 'options', 'title', 'xLabel', 'yLabel']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['dataset', 'labels']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(StackedChart, self).__init__(**args)
