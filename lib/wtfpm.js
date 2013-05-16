var which = require('which'),
    async = require('async');

module.exports = function (callback) {
  var binaries = {
    "quill": "quill",
    "apt": "apt-get",
    "yum": "yum",
    "npm": "npm",
    "rpm": "rpm",
    "dpkg": "dpkg",
    "brew": "brew",
    "pkgin": "pkgin"
  };

  async.filter(Object.keys(binaries), function (key, next) {
    which(binaries[key], function (err) {
      return next(!err);
    });
  }, function (managers) {
    callback(null, managers);
  });
};
