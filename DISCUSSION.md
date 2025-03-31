# Changelog
- updated folder/file structure based on next.js documentation
- resolved console errors ( typing, keys, hydration )
- added advocate schema type 

# Approach

- get the app running 

- attempted to restructure the file paths to separate client server pattern but i'm not too familiar with next.js rules so I reverted and referenced next.js documentation

- get the database running ( spent some time troubleshooting error in docker image but it was a red herring, since there's no client the localhost:5432 wont return anything in browser; was able to to query psql and seed db with curl )
    - update advocates route to DATABASE_URL

- add error handling in fetch requests

- clean up console, terminal and lint errors

- update file system

- update front end

- refactored the fetch adovcates request and added error handling

- added loading state conditions

- renamed event variables for better naming convention

- cleaned up unnecesary console logs

- refactored html tags to better tag hiearchy and use cases

- added global styling and more standardized style for the components

- added searching state to conditionally render search text

- added stick table header

# Further improvements
* with scale in mind*
- Add a testing framework like jest and add test case for   
    - search functionality to confirm text on dom and
    - advocate fetch request to make sure it gets called on page load and data returns with mock

- Add pagination to "/api/advocates" to render a set number of advocates at a time 

- Add sorting to table
