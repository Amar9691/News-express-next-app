
News EXpress Application with NextJS + React JS + GraphSQl + stepzen 

Please follow given step in order to run application in your local environment 

Step 1 => Please take pull from git repo 

          https://github.com/Amar9691/News-express-next-app.git


Step 2 => Install required packages to run application 


         NPM INSTALL 


Step 3 =>  Create mediastack account for news api 

          Please copy your api key and set in .env file 

          using following key 

          NEXT_PUBLIC_MEDIA_API_KEY=

Step 4 => Please step account at stepzen plaform and copy your api and step in env file 

          NEXT_PUBLIC_STEPZEN_API_KEY=


Step 5 => after all these steps it is time to setup stepzen in your term

          please run following command in terminal 

          stepzen login 

          it will ask you for username and admin api key so paste it from stepzen dashboard

Step 6 => run following command to import url 

         stepzen import curl  http://api.mediastack.com/v1/news?access_key=Your_API_KEY 

         replace Your_api_key with your mediastack api key 


Step 7 =>   Finally run stepzen start to load your inforamtion to stepzen dashboard 


step 8 = > Run your application using 

          NPM RUN DEV or Yarn dev

          

                
          


    
