var scheduleTimes = [];
var scheduleFiles = [];
var scheduleCurrIndex = -1;
var scheduleRotIndex = -1;

function parseSchedule() {
	lines = $('#scheduleEvents').text();
	var scheduleLines = lines.split('\n');
	var idx = scheduleLines.indexOf("");
	while (idx != -1) {
		scheduleLines.splice(idx, 1);
		idx = scheduleLines.indexOf("");
	}
	
	for(var i=0; i<scheduleLines.length; i++) {
		sched = scheduleLines[i].split('|');
		scheduleTimes[i] = sched[0];
		scheduleFiles[i] = sched[1];
	}
};

function rotSched() {
	console.log(Date.now());
	console.log(Date.parse(scheduleTimes[scheduleCurrIndex+1]));
	if (Date.now() > Date.parse(scheduleTimes[scheduleCurrIndex+1])) {
		scheduleCurrIndex++;
		
		//Set BGImage of Now Playing panel
		$('#nowPlaying').css("background-image", "url("+scheduleFiles[scheduleCurrIndex]+")");
	}
	
	if (scheduleCurrIndex >= scheduleFiles.length-1) {
		//Set "Up Later" to black on the last 
		$('#comingUp').css("background-image", "none");
	} else {
		scheduleRotIndex++;
		if (scheduleRotIndex >= scheduleFiles.length) {
			scheduleRotIndex = scheduleCurrIndex+1;
		}
		
		//Set BGImage of Up Later panel
		$('#comingUp').css("background-image", "url("+scheduleFiles[scheduleRotIndex]+")");
	}
};