# github-repo-exists

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