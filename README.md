PiScreen
========

PiScreen is a digital signage project intended for use with rooms (such as
video rooms at conventions) that hold multiple events over the course of a 
day, showing the event happening in the room at the time in one panel, and 
a rotating slideshow of the upcoming events for the remainder of the day.  
Across the bottom of the screen is a text crawl that displays a rotating 
series of text notes.

It is intended for use on a Raspberry Pi using uzbl as the browser, but, as
a HTML/CSS/Javascript-based solution, can be used with any computer with
a browser that can be full-screened.

Usage
-----
Edit the main.html file, then open it in your browser of choice.  A shell
script to open a fullscreen uzbl browser is provided.

Scheduling information and filenames of the images you wish to display for
individual events are placed in the DIV with ID _scheduleEvents_, one per
line, in the format:

**MM/DD/YYYY HH:MM:SS|<em>filename</em>**

The time in each line should be the *start time* of the event.  The previous
entry in the list will be displayed until the start time is reached.

Filenames may be absolute or relative.

Entries to be displayed in the crawl should be placed in the _crawler_ DIV,
one per line, in the order you wish them to be displayed.  The crawl will loop
through the list in order, displaying one entry at a time. Empty lines will be 
removed before the loop starts.