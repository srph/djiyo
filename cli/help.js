module.exports = function help() {
  console.log(`
    Usage
      $ djiyo install <directory>

    Options
      -h, --help
      -v, --version

    Example
      $ djiyo install .
      $ djiyo install /path/to/my/project/stylesheets
  `);
};