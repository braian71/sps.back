const jwt = require('jsonwebtoken');

const createJWT = (email) => {
	const token = jwt.sign({ email }, process.env.JWT_SECRET, {
		expiresIn: 5 * 86400,
		algorithm: process.env.HASH_ALG,
	});

	return token;
};

const verifyJWT = (token) => {
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		return decoded;
	} catch (err) {
		return null;
	}
};

module.exports = {
	createJWT,
	verifyJWT,
};
