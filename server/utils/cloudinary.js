const cloudinary = require("cloudinary")
  .v2;
  cloudinary.config({ 
    cloud_name: 'dbey3k0q1', 
    api_key: '292238923121722', 
    api_secret: 'QwaH1xMrWFEvWtXPkD7GEai5m5k' 
  });
module.exports = cloudinary;