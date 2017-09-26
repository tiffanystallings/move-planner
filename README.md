# Move Planner

Combines the APIs for the New York Times, Wikipedia, and Google Maps to educate users on where they want to move.


## Requirements
An HTTP server to host the project folder locally. I use Python 3's http.server (SimpleHTTPServer in Python 2).


## Installation
Using Git Bash:

`$ git clone https://github.com/tiffanystallings/move-planner.git`

From a ZIP:
1. Visit the project's github [here](https://github.com/tiffanystallings/move-planner)
2. Click the **Clone or Download** dropdown box and select  
**Download ZIP**.
3. Open the ZIP and click **Extract All**. Select your preferred  folder and hit **Extract**.


## Usage
Navigate to move-planner project folder in your preferred CLI and start up your HTTP server.

In Python 3:

`$ python -m http.server`

In Python 2:

`$ python -m SimpleHTTPServer`

Once the server is up and running, navigate to [http://localhost:8000](http://localhost:8000). You should arrive at the Move Planner landing page.

Enter a location in the search bar and click search. You will see the banner update to an image relevant to your location, as well as New York Times articles and Wikipedia links related to that location.

General locations (such as cities and counties) make for better searches on New York Times and Wikipedia. However, the banner will always update to the specific address you provide.


## Contributions
This project was built as part of Udacity's Full Stack Web Developer Nanodegree. It would be in violation of the honor code for me to accept any direct contributions to the code.

However, if you have any advice or suggestions on how I might improve the code, please feel free to take out an Issue on the project's [github](https://github.com/tiffanystallings/project-restaurant-menu).