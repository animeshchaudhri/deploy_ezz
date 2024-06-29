const simpleGit = require('simple-git');
// const repoUrl = 'https://github.com/username/repository.git';
// const accessToken = 'YOUR_ACCESS_TOKEN';

const git = simpleGit();

export const cloneUserRepo = (repoUrl, accessToken) => {
  git.clone(`https://${accessToken}:x-oauth-basic@${repoUrl}`, 'local-directory'
  .then(() => {
    console.log('Repository cloned successfully');
  })
  .catch((err) => {
    console.error('Failed to clone repository:', err);
  }));
}


