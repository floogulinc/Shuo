module.exports = function(network, chan, cmd, args) {
	if (cmd != "help") {
		return;
	}
	var irc = network.irc;
	irc.write('HELP');
};
