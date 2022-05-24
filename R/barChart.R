# AUTO GENERATED FILE - DO NOT EDIT

#' @export
barChart <- function(id=NULL, dataset=NULL, labels=NULL, options=NULL, title=NULL, xLabel=NULL, yLabel=NULL) {
    
    props <- list(id=id, dataset=dataset, labels=labels, options=options, title=title, xLabel=xLabel, yLabel=yLabel)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'BarChart',
        namespace = 'dash_cute_charts',
        propNames = c('id', 'dataset', 'labels', 'options', 'title', 'xLabel', 'yLabel'),
        package = 'dashCuteCharts'
        )

    structure(component, class = c('dash_component', 'list'))
}
