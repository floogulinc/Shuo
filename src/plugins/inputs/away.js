module.exports = function(network, chan, cmd, args) {
	if (cmd != "away") {
		return;
	}
	var irc = network.irc;
	if (args.length !== 0) {
		var msg = args.join(" ");
		irc.write('AWAY ' + msg);
	} else {
		irc.write('AWAY');
	}
};
