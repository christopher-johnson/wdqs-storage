window.console = window.console || {"log":function(){}};
module.exports = {
	storage: require("./storage.js"),
	version: {
		"wdqs-storage" : require("../package.json").version
	},
	nestedExists : function(obj) {
		var args = Array.prototype.slice.call(arguments, 1);

		for (var i = 0; i < args.length; i++) {
			if (!obj || !obj.hasOwnProperty(args[i])) {
				return false;
			}
			obj = obj[args[i]];
		}
		return true;
	}
};
