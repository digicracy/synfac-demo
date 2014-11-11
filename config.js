'use strict';

exports.port = process.env.PORT || 3000;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://sfdemo:G6eJkFfm46Qs@ep-twitter-dashboard-dedicated.m0.mongolayer.com:27017/synfac-demo'
};
exports.companyName = 'Synapse Factory';
exports.projectName = 'synfac demo';
exports.systemEmail = 'mvh@synfac.com';
exports.cryptoKey = 'VBXr6K3Lio8r';
exports.loginAttempts = {
  forIp: 50,
  forIpAndUser: 7,
  logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName +' Website',
    address: process.env.SMTP_FROM_ADDRESS || 'demo@mg.synfac.com'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'demo@mg.synfac.com',
    password: process.env.SMTP_PASSWORD || 'vPiiEx64pKSk',
    host: process.env.SMTP_HOST || 'smtp.mailgun.org',
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '4B2RtHZnEC1RyZlXa2JKmXt7G',
    secret: process.env.TWITTER_OAUTH_SECRET || 'ycpeIBgsIZYXNM5nsobWfcn4qTq5Y3EgngXcazxQFAEYReFEP8'
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '768495599883519',
    secret: process.env.FACEBOOK_OAUTH_SECRET || '3c363108d827baed4ae378f914ba47d0'
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  },
  google: {
    key: process.env.GOOGLE_OAUTH_KEY || '',
    secret: process.env.GOOGLE_OAUTH_SECRET || ''
  },
  tumblr: {
    key: process.env.TUMBLR_OAUTH_KEY || '',
    secret: process.env.TUMBLR_OAUTH_SECRET || ''
  }
};
