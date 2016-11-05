# NEWARE: a React, Redux, Firebase App

currently living at: 🌍 [https://ne.hightops.co](https://ne.hightops.co/)

Seemingly 100% of write operations on the internet are protected by authentication... and for someone that uses a password manager, if I find myself on a public computer or a friend's device, I kinda can't do much except read stuff and visit websites. But sometimes I really want to remember a link or write a note for later... so I made n e ware. 

It didn't really need redux/thunk but I used it anyway since I wanted to make sure I had a good handle of how these libraries work. Now all my state is stored in one place. Nice. 

Also, it is deployed using [surge.sh](https://surge.sh) -- an awesome service to quickly deploy clientside apps super fast.

for deploying used surge, I needed to create a 200 catch all as explained [here](https://surge.sh/help/adding-a-200-page-for-client-side-routing) so that the client side routing would work...

This way, if you create a note at the URL https://ne.hightops.co/test you can go straight to that URL later on.

I also have a service that runs every 24 hours that checks the database for posts older than 24 hours and deletes them. So all posts on neware are temporary.
