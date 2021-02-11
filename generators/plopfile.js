module.exports = function (plop) {

  plop.setGenerator('controller', {
    description: 'application controller',

    // inquirer prompts
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name?'
    }],

    // actions to perform
    actions: [{
      type: 'add',
      path: '../src/components/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/index.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/stories.tsx',
      templateFile: 'templates/stories.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/test.tsx',
      templateFile: 'templates/test.ts.hbs',
    }
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/styles.ts',
      templateFile: 'templates/styles.tsx.hbs',
    }]
  });

};
