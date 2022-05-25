# AUTO GENERATED FILE - DO NOT EDIT

#' @export
scatterChart <- function(id=NULL, dataset=NULL, options=NULL, title=NULL, xLabel=NULL, yLabel=NULL) {
    
    props <- list(id=id, dataset=dataset, options=options, title=title, xLabel=xLabel, yLabel=yLabel)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ScatterChart',
        namespace = 'dash_cute_charts',
        propNames = c('id', 'dataset', 'options', 'title', 'xLabel', 'yLabel'),
        package = 'dashCuteCharts'
        )

    structure(component, class = c('dash_component', 'list'))
}
