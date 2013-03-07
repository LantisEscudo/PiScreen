var crawlerLines;
var crawlIndex = 0;

function marquee(a, b) {
    var width = b.width();
    var start_pos = a.width();
    var end_pos = -width;

    function scroll() {
        if (b.position().left <= -width) {
            rotateCrawl();
			b.css('left', start_pos);
            scroll();
			
        }
        else {
            time = (parseInt(b.position().left, 10) - end_pos) *
                (10000 / (start_pos - end_pos)); // Increase or decrease speed by changing value 10000
            b.animate({
                'left': -width
            }, time, 'linear', function() {
                scroll();
            });
        }
    }

    b.css({
        'width': width,
        'left': start_pos
    });
    scroll(a, b);
    
	function rotateCrawl()
	{
		crawlIndex++;
		if (crawlIndex == crawlerLines.length)	{	crawlIndex = 0;	}
	
		//Set Text
		b.text(crawlerLines[crawlIndex]);
		b.css('width', 'auto');
		width = b.width();
		b.css('width', width);
		start_pos = a.width();
		end_pos = -width;
	};

}

function loadCrawl() {
	lines = $('#crawler').text();
	crawlerLines = lines.split('\n');
	var idx = crawlerLines.indexOf("");
	while (idx != -1) {
		crawlerLines.splice(idx, 1);
		idx = crawlerLines.indexOf(""); //Strip nulls
	}
	
	crawlIndex = 0;
	
	//Set text
	$('#text').text(crawlerLines[crawlIndex]);
};