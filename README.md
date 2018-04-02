# github-repo-exists
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Travis](https://travis-ci.org/molnarmark/github-repo-exists.svg?branch=master)

A *tiny* promise based library to check if a GitHub repository exists.

## Usage
```javascript
const repoExists = require('github-repo-exists');
repoExists('molnarmark/nimism.co').then(result => console.log(result));
//=> true

repoExists('molnarmark/does-not-exist').then(result => console.log(result));
//=> false
```

## License
- MIT