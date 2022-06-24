from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in bdalumni/__init__.py
from bdalumni import __version__ as version

setup(
	name="bdalumni",
	version=version,
	description="Evolution Soluciones",
	author="Evolution Soluciones",
	author_email="avelazco@evolutionsoluciones.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
