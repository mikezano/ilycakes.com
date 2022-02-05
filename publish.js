var shell = require('shelljs');

shell.exec('npm run build');
shell.exec('git checkout -B gh-pages');
shell.exec('git add -f build');
shell.exec("git commit -a  -m 'rebuild-website'");
shell.exec('git filter-branch -f --prune-empty --subdirectory-filter build');
shell.exec('git push -f origin gh-pages');
shell.exec('git checkout -');