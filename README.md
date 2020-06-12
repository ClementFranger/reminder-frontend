Simple React Bootstrap app that display the reminders of the day.

The website is hosted on aws. 

To dispaly the website on a raspberry pi on startup, add the following command to the .config/lxsession/LXDE-pi/autostart file :

```
@chromium-browser --incognito --kiosk https://master.***.amplifyapp.com/
```

