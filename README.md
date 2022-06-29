## AiManager

## Instal on Digital Ocean

- Create a New App on Digital Ocean, make sure that's is an `static site`. 
- When you site it working correctly, test if works on with routes like. www.aimanager.online/tools


### Last step: solve the App reloading leads to 404 site

- Download current app spec from https://cloud.digitalocean.com/apps, in the settings tab you will find App Spec to app.yaml file
- Add `catchall_document: index.html` 
- Test if works on with routes like. www.aimanager.online/tools
- if not follow this steps: Using Cloud panel UI: Log in and click on App > Settings >> click on component name > scroll down to Custom page > Edit Custom page and select Catchall > Enter index.html in the page name block > Save

Example in next:
Next.js has a setting that worked for me: in next.config.js, set trailingSlashes: true. This generates the static page layout as /subpage/index.html, which can then be served at /subpage.

Source: (APP Platform: App reloading leads to 404 site)[https://www.digitalocean.com/community/questions/app-platform-app-reloading-leads-to-404-site]