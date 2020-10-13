const Generator = require('plop')

module.exports = function (plop) {
  const cwd = process.cwd()
  plop.setGenerator('component', {
    description: 'react component files',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'react component name'
    }],
    actions: [
      {
          type: 'add',
          path: `${cwd}/src/components/{{dashCase name}}/index.ts`,
          templateFile: './templates/index.ts'
      },
      {
          type: 'add',
          path: `${cwd}/src/components/{{dashCase name}}/{{pascalCase name}}.tsx`,
          templateFile: './templates/component.tsx'
      },
      {
          type: 'add',
          path: `${cwd}/src/components/{{dashCase name}}/{{pascalCase name}}.stories.tsx`,
          templateFile: './templates/stories.tsx'
      },
      {
          type: 'add',
          path: `${cwd}/src/components/{{dashCase name}}/{{pascalCase name}}.test.tsx`,
          templateFile: './templates/test.tsx'
      }
    ]
  })
}
