const genId1 = require('ttui_xid');
const genId2 = require('juam_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|qMPusEl19w|' + genId2()).digest('base64');
}


module.exports = generateKey;
