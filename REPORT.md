# email
The solution took me around 5 days to complete. I had just a few minutes each day to work on the project.
The first part of the solution was quite simple. I created a container to house both the search bar and the date container. I positioned the date container absolute to the parent container. I adjusted the height for mobile view.
The calendar and all its subsequent classes were repeated for the second section. The dummy emails were made with HTML tables. The images were inserted through CSS using pseudo selctors (before and after);
For the mobile view, Table was set to display: flex and the rows set to grid. Images here were also inserted using Pseudo classes(before and after);
The first thing I did with Javascript was to limit the amount you could scroll to on mobile phones. It only shows you the dummy HTML emails. I did this to imitate the mockup.
Thes second thing I did was to use Javascript to dynamically change the text when the screen size decreases. Just like on the mockup, some of the texts were different for the mobile view.
The last thing I did was to add an input text bar which you could use to search for emails. I used Javascript to make this dynamic first by adding a 'keydown' event listener to the search bar, converting the body of emails to a nodelist to loop through and match the value of the text. If the value matches any email in the dummy HTML file, it is displayed.
