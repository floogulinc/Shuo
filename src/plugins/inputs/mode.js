module.exports = function(network, chan, cmd, args) {
	if (cmd != "mode" && cmd != "op" && cmd != "voice" && cmd != "deop" && cmd != "devoice") {
		return;
	} else if (args.length === 0) {
		return;
	}
	
	var target;
	var flags;
	var params;

	if (cmd != "mode") {
		params = args[0];
		flags = {
		     "op": "+o",
		  "voice": "+v",
		   "deop": "-o",
		"devoice": "-v"
		}[cmd];
		target = chan.name;
	} else if (args.length === 1) {
		return;
	} else if((args[0].slice(0, 1) == '+') || (args[0].slice(0, str.length) == '-')) {
		target = chan.name;
		flags = args[0];
		params = args.slice(1).join(" ");
	} else {
		target = args[0];
		flags = args[1];
		params = args.slice(2).join(" ");
	}
	var irc = network.irc;
	irc.mode(target, flags, params);
};
