
module DashCuteCharts
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/barchart.jl")
include("jl/linechart.jl")
include("jl/piechart.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_cute_charts",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_cute_charts.min.js",
    external_url = "https://unpkg.com/dash_cute_charts@0.0.1/dash_cute_charts/dash_cute_charts.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_cute_charts.min.js.map",
    external_url = "https://unpkg.com/dash_cute_charts@0.0.1/dash_cute_charts/dash_cute_charts.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
