const packagejson = require('./package.json');
const shell = require('shelljs');

const cleanVersionNumber = (version) =>
  version.charAt(0) === '^' || version.charAt(0) === '~'
    ? String(version.substring(1))
    : String(version);

const rawDependencies = Object.entries(packagejson.dependencies).map(
  ([key, value]) => ({
    name: key,
    path: key,
    version: value,
  })
);

const dependencies = [
  ...rawDependencies,
  {
    name: 'preact-debug',
    path: 'preact/debug',
    version: packagejson.dependencies.preact,
  },
  {
    name: 'preact-compat',
    path: 'preact/compat',
    version: packagejson.dependencies.preact,
  },
  {
    name: 'preact-hooks',
    path: 'preact/hooks',
    version: packagejson.dependencies.preact,
  },
];

console.log('\n Copying Dependencies\n');

shell.mkdir('-p', './src/@deps/');

dependencies.forEach((dep) => {
  console.log(
    `     node_modules/${dep.path}/  ->   src/@deps/${
      dep.name
    }@${cleanVersionNumber(dep.version)}/`
  );
  return shell.cp(
    '-rf',
    [`./node_modules/${dep.path}/dist/`],
    `./src/@deps/${dep.name}@${cleanVersionNumber(dep.version)}/`
  );
});

console.log('');
