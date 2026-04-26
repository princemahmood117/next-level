## Steps to initialize a basic Backend setup using Typescript + Postgres



1\. node application initialize for package.json ---> *npm init -y*



2\. install necessary packages ---> *npm i express cors typescript tsx*



3\. To initialize a TypeScript project and generate a tsconfig.json ---> *npx tsc --init*



4\. to install typescript\_execute : *npm i tsx*





\-------------------------------------------------------------------------------------------------------

5\. inside **tsconfig.json**, modify the follwing :

&#x09;// uncomment rootdir and outdir

&#x09;// uncomment ("lib": \["esnext"], "types": \["node"])

&#x09;// install node type ---> *npm install -D @types/node*

&#x09;

&#x20;  **after posgres is installed** **:** \[follwing documentation]

&#x09;*// change module to : "module": "esnext","moduleResolution": "bundler",*

&#x09;		      *"target": "es2023", "esModuleInterop": true,*

&#x09;		      *"ignoreDeprecations": "6.0",*

&#x09;*after first object, write : "include": \["src/\*\*/\*"] -->* to include all the things after src

\-------------------------------------------------------------------------------------------------------





6\. create a folder 'src' and inside src - create server.ts + app.ts files



7\. inside app.ts- import express, cors and install their node\_types \[*npm i --save-dev @types/cors* + *npm i --save-dev @types/express*] \&\& initialize express : *const app = express()*





\---------------------------------------------------------------------------------------

8\. inside **package.json**, modify the following :

&#x09; // change the type from commonjs to module --> *"type": "module",*

&#x09; // add a dev script to run the server ---> *"dev": "tsx src/server.ts",*

\---------------------------------------------------------------------------------------





9\. POSTGRES intall : *"npm install prisma @types/pg --save-dev + npm install @prisma/client @prisma/adapter-pg pg dotenv"  \[now go to the package.json and tsconfig.json to modify]*



10\. initialize prisma (to see if prisma is installed correctly) ---> *npx prisma*  \[after the installation and modification is done]



11\. setup prisma ORM ---> *npx prisma init --datasource-provider postgresql --output ../generated/prisma  \[creates 'prisma.config.ts' file, prisma\_folder]*



12\. change the database name and password inside .env file



13\. changes inside schema.prisma file --> \[output   = "../src/generated/prisma"]



14\. now write a testing *model* inside schema.prisma and then run --> *npx prisma migrate dev --name init  \[to see if migration is working]*

&#x09;success\_message : "Your database is now in sync with your schema."



15\. create a folder lib and inside it create prisma.ts and write the code from the postgres documentation



16\. now connect the prisma by wrting "prisma.connet" inside server.ts file



17\. generate the prisma client ---> *npx prisma generate*



18\. install jwt type ---> *npm install -D @types/node*



19\. install bcrypt type ---> *npm i --save-dev @types/bcrypt*





## Better Auth - Authentication system



// better auth will provide User/Session models by default



1. install better-auth ---> *npm install better-auth*



2\. set better\_auth\_secret to env file



3\. set base\_url into env file  \[base\_url == backend server running on port (ex: localhost:5000)]



4\. create an Instance inside the lib folder \[lib/auth.ts]



5\. generates an ORM schema (models like: user, session, account, verification are created) ---> *npx auth@latest generate*



6\. now again migrate to update the schema ---> *npx prisma migrate* \[can use "npx prisma migrate reset" to reset the database if needed]



7\. mount the handler in *app.ts* file where right before "app.use(express.json())" ---> app.all("/api/auth/\*splat", toNodeHandler(auth));



8\. now check if the setup is correctly done ---> *"http://localhost:5000/api/auth/ok"*  \[run the url on browser, 'ok:true' means setup successfull]



