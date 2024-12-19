const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);
	return hash;
};

const verifyPassword = (password, dbpass) => {
	return bcrypt.compareSync(password, dbpass);
};

module.exports = {
	hashPassword,
	verifyPassword,
};
