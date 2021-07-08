module.exports = {
  apps: [
    {
      name: 'LittleVictories',
      script: './server/src/index.ts',
    },
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-59-184-112.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/little-victories-key.pem',
      ref: 'origin/main',
      repo: 'git@github.com:ryguy-coder-guys/LittleVictoriesServer.git',
      path: '/home/ubuntu/LittleVictoriesServer',
      'post-deploy': 'pm2 startOrRestart ecosystem.config.js',
    },
  },
};
