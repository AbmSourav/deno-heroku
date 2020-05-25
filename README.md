## Deno Boilerplate for Heroku deploy

### Instructions
1. Clone this Boilerplate: `git clone https://github.com/AbmSourav/deno-heroku.git`
3. Do your staffs...
4. Test on local server: `deno run --allow-net main.ts` 
*Note: you may also need to add other permission flugs according to your code.*
5. Create Heroku app with the buildpack: `heroku create AppName --buildpack https://github.com/AbmSourav/deno-diploy.git`
6. Deploy: `git push heroku master`
