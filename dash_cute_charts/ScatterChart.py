# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ScatterChart(Component):
    """A ScatterChart component.
ScatterChart is an chartXkcd-react component.
It takes `labels`, and `dataset` as inputs.
displays a ScatterChart.
It also takes title,xLabel,yLabel,options as optional inputs.
user can pass chart.xkcd options except the legend positions

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- dataset (list; required):
    The dataset for ScatterChart.

- options (list; optional):
    Options for the ScatterChart.

- title (string; optional):
    The Title for ScatterChart.

- xLabel (string; optional):
    The XLabel for ScatterChart.

- yLabel (string; optional):
    The YLabel for ScatterChart."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, dataset=Component.REQUIRED, xLabel=Component.UNDEFINED, yLabel=Component.UNDEFINED, title=Component.UNDEFINED, options=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'dataset', 'options', 'title', 'xLabel', 'yLabel']
        self._type = 'ScatterChart'
        self._namespace = 'dash_cute_charts'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'dataset', 'options', 'title', 'xLabel', 'yLabel']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['dataset']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ScatterChart, self).__init__(**args)
