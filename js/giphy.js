var setParam = function (cat, limit) {
	var config = {
		cat: cat,
		limit: limit
	};
	return config;
};

// set category and limit of items
var settings = setParam('haha', 50);

var url = 'http://api.giphy.com/v1/gifs/search?q=' + settings.cat + '&api_key=dc6zaTOxFJmzC&limit=' + settings.limit;

var getRandomGif = function (obj) {
	var random = Math.ceil(Math.random() * settings.limit);
	var randomGif = obj.data[random].id;
	var url = 'http://i.giphy.com/' + randomGif + '.gif';
	return url;
};

var createElem = function ({
	parent: parent,
	containerID: containerID,
	containerClass: containerClass,
	gif: gif
}) {

	if (!arguments[0].parent) {
		arguments[0].parent = 'body';
	}
	if (!arguments[0].containerID) {
		arguments[0].containerID = 'giphy';
	}
	if (!arguments[0].containerClass) {
		arguments[0].containerClass = 'giphy';
	}

	var settings = {
		parent: arguments[0].parent,
		containerClass: arguments[0].containerClass,
		containerID: arguments[0].containerID
	};

	var $parent = $(settings.parent);

	$('<div/>', {
		id: settings.containerID,
		class: settings.containerClass,
		css: {
			'background-image': 'url(' + gif + ')'
		}
	}).appendTo($parent);


};

$.getJSON(url, function (data) {
	var gif = getRandomGif(data);
	createElem({
		gif: gif
	});
});
