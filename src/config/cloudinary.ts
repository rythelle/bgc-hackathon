cloudinary.config({ 
  cloud_name: 'hvhkubo4v', 
  api_key: '238925292791816', 
  api_secret: 'YLGO92DKppAOBhhJ8WILqCozHdI' 
});

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });