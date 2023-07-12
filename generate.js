const speakeasy = require("speakeasy");

const generate = ( secret, encoding = 'base32' ) => {
	let token;
	try {
		token = speakeasy.totp({
   	 		secret: secret,
    		encoding: 'base32'
		});

	} catch (error) { throw (error); }
	return (token);
}

module.exports = generate;