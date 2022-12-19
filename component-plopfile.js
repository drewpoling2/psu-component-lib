/* eslint-disable no-undef */
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Atomic Design component creation logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter the component name',
      },
    ],
    actions: function () {
      var actions = [];

      actions.push(
        //the test template needs updated
        // {
        //   type: 'add',
        //   path: './src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
        //   templateFile: 'plop-templates/test.js.hbs',
        // },
        {
          type: 'add',
          path: './src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
          templateFile: 'plop-templates/component.jsx.hbs',
        },
        {
          type: 'add',
          path: './src/components/{{pascalCase name}}/index.js',
          templateFile: 'plop-templates/index.js.hbs',
        },
        {
          type: 'add',
          path: './src/stories/{{pascalCase name}}.stories.jsx',
          templateFile: 'plop-templates/stories.jsx.hbs',
        }
      );

      return actions;
    },
  });
};
