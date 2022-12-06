# Angular 15 CLI incorrect websocket URL

## Pre-requisites
- Nodejs LTS
- .NET 7 SDK (brew install --cask dotnet-sdk)

## Run
- cd to `Proxy` and `dotnet run`
  - dotnet CLI might ask you to trust certificates and require admin password so it can run on 443 port. You can change the port in `Proxy/Properties/launchSettings.json` if you can't get it to work
- cd to `web-apps` and `npm run start:command-center`
- Navigate to `https://localhost/command-center` and observe console logs
- ![ng serve behind a reverse proxy](./websocket_url_failed.png)
  

