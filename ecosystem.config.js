module.exports = {
  apps : [{
    script: 'bin/www',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host: '141.94.223.66',
      ref  : 'origin/master',
      repo: 'https://github.com/kevin-smrt/GCORP',
      path: '/home/ubuntu/mp2-deploy',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
