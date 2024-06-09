Module.register("MMM-SimpleDate", {
	// these are the default values that can be overridden in your config/config.js
	defaults: {
		dateDivId: "SimpleDate",
		dateOutput: "Loading... or something went wrong :(",
		dateFormat: 'h:mm:ss a',
		updateInterval: 1, // seconds
	},

	// external dependency: https://momentjs.com/
	getScripts: function () {
		return ['moment.js'];
	},

	// html template to inject date and place in DOM
	getTemplate() {
		return "MMM-SimpleDate.njk";
	},

	// pass config to MagicMirror to override
	getTemplateData() {
		return this.config;
	},

	// uses momentjs and config.dateFormat to return a custom formatted date string
	getSimpleDate: function (dateFormat) {
		const currentDate = moment();
		const formattedDate = currentDate.format(dateFormat);
		return formattedDate;
	},

	// every config.updateInterval seconds, run getSimpleDate(config.dateFormat)
	// to get the current date string and update the DOM
	start: function () {
		var self = this;
		self.config.dateOutput = self.getSimpleDate(self.config.dateFormat);
		setInterval(function () {
			self.config.dateOutput = self.getSimpleDate(self.config.dateFormat);
			self.updateDom();
		}, this.config.updateInterval * 1000)
	},
});
