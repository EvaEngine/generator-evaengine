const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const fg = require('fast-glob');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to the ${chalk.red('EvaEngine.js project')} generator!`)
    );

    const prompts = [
      {
        name: 'project',
        message: 'Your project name, will create a same name folder to save source codes',
        required: true
      },
      {
        name: 'github',
        message: 'Your project name on github, such as foo/bar',
        required: false
      },
      {
        name: 'npm',
        message: 'Your project name on npm',
        required: false
      },
      {
        name: 'docker',
        message: 'Your project name on docker hub, such as foo/bar',
        required: false
      },
      {
        name: 'evaqueue',
        type: 'confirm',
        message: 'Use EvaQueue in your project?',
        default: true,
        required: true
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  default() {
    this.composeWith(require.resolve('generator-license'), {
      licensePrompt: 'Which license do you want to use?',
      defaultLicense: 'MIT'
    });

    if (path.basename(this.destinationPath()) !== this.props.project) {
      this.log(
        `Your generator must be inside a folder named ${this.props.project}
        I'll automatically create this folder.`
      );
      mkdirp(this.props.project);
      this.destinationRoot(this.destinationPath(this.props.project));
    }
  }

  writing() {
    const templates = fg.sync([this.templatePath('**/*')]);
    const templatesRoot = this.templatePath();
    templates.forEach((templatePath) => {
      const templateRelativePath = templatePath.replace(templatesRoot + path.sep, '');
      const paths = templateRelativePath.split(path.sep);
      const templateName = paths.pop();
      if (!templateName.startsWith('_')) {
        return true;
      }
      if (paths.length > 0) {
        mkdirp(this.destinationPath(paths.join(path.sep)));
      }
      this.fs.copyTpl(
        templatePath,
        this.destinationPath([...paths, templateName.slice(1)].join(path.sep)),
        this.props
      );
      return true;
    });

    if (this.props.evaqueue) {
      this.composeWith(require.resolve('../evaqueue'));
    }
  }
};
