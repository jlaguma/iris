# Iris React Test

The test consists out of 2 parts:
a. Server
b. Client

# Get Server running

1. cd iris-chart-server
2. yarn
3. yarn start

NOTE: Server will be running on port 8080

# Get Client running

1. cd iris-chart
2. yarn
3. yarn dev

NOTE: Client will be running on port 5173, so start the app by going to http://localhost:5173/

# Notes:

1. Obiously I could not use your http://test.dev.irisns.com end point due to CORS,
   hence the dedicated REST API providing a mock data taken manually from your end point.

2. I used Highcharts for a chart lib.

3. I used Material UI Table (DataGrid component).

4. I used Vite as a Create-React-App is deprecated.

5. This is just a quick thing. If building something serious, I'd obvioulsy do automated tests as well (Cypress).

James La Guma
