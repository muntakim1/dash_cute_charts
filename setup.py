import json
import os
from pathlib import Path

from setuptools import setup

with open("package.json") as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")
this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()
setup(
    name=package_name,
    version=package["version"],
    author=package["author"],
    packages=[package_name],
    url="https://github.com/muntakim1/dash_cute_charts",
    include_package_data=True,
    license=package["license"],
    long_description=long_description,
    long_description_content_type="text/markdown",
    description=package.get("description", package_name),
    install_requires=[],
    classifiers=[
        "Framework :: Dash",
    ],
)
