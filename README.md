## Reminder

Reminder is a project that reminds you of certain tasks you need to do. You define the tasks you want to do and the frequency at which they should be done. For example, *I would need to water the plants every sundays*.

This project is the front-end of Reminder. To see the backend go to : https://github.com/Minifranger/reminder-backend

## Reminder Frontend

Simple React Bootstrap app that display the reminders of the day.

The website is hosted on aws. 

To display the website on a raspberry pi on startup, add the following command to the .config/lxsession/LXDE-pi/autostart file :

```
@chromium-browser --incognito --kiosk https://***.com/
```

