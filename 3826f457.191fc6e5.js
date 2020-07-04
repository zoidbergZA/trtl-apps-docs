(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var i=t(2),r=t(9),o=(t(0),t(172)),a={id:"setup",title:"Service setup guide",sidebar_label:"Setup guide"},c={id:"service/setup",isDocsHomePage:!1,title:"Service setup guide",description:"Fork the repo on Github to get started.",source:"@site/docs/service/setup.md",permalink:"/docs/service/setup",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/service/setup.md",sidebar_label:"Setup guide",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/"},next:{title:"Service admin",permalink:"/docs/service/admin"}},l=[{value:"Create firebase project",id:"create-firebase-project",children:[{value:"Install dependencies",id:"install-dependencies",children:[]}]},{value:"Deploying to App Engine",id:"deploying-to-app-engine",children:[{value:"Secure the endpoints",id:"secure-the-endpoints",children:[]}]},{value:"Setup the firebase environment",id:"setup-the-firebase-environment",children:[]},{value:"Configure Angular Environment variables",id:"configure-angular-environment-variables",children:[]},{value:"Deploying to firebase",id:"deploying-to-firebase",children:[{value:"Production environment",id:"production-environment",children:[]},{value:"Development environment (optional)",id:"development-environment-optional",children:[]}]},{value:"Bootstrap the service",id:"bootstrap-the-service",children:[]}],p={rightToc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Fork the repo on ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/turtlecoin/trtl-apps"}),"Github")," to get started."),Object(o.b)("h2",{id:"create-firebase-project"},"Create firebase project"),Object(o.b)("p",null,"Go to the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://console.firebase.google.com"}),"Firebase console")," and create a new project."),Object(o.b)("p",null,"Upgrade your firebase to the ",Object(o.b)("inlineCode",{parentName:"p"},"blaze")," plan, needed for making outbound function calls."),Object(o.b)("p",null,"Enable the following firebase modules:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Authentication with email/password sign-in method"),Object(o.b)("li",{parentName:"ul"},"Create a firestore database and select a region"),Object(o.b)("li",{parentName:"ul"},"Enable Storage"),Object(o.b)("li",{parentName:"ul"},"Enable Functions"),Object(o.b)("li",{parentName:"ul"},"Enable Hosting")),Object(o.b)("h4",{id:"development-project-optional"},"development project (optional)"),Object(o.b)("p",null,"Repeat the steps above to create a firebase project for a development environment."),Object(o.b)("h3",{id:"install-dependencies"},"Install dependencies"),Object(o.b)("p",null,"Open a terminal and navigate to the root directory of your project."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," in the ",Object(o.b)("em",{parentName:"p"},"root")," directory."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," in the ",Object(o.b)("em",{parentName:"p"},"/functions")," directory."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," in the ",Object(o.b)("em",{parentName:"p"},"/app_engine")," directory."),Object(o.b)("h2",{id:"deploying-to-app-engine"},"Deploying to App Engine"),Object(o.b)("p",null,"Run the commands below in the ",Object(o.b)("inlineCode",{parentName:"p"},"app_engine")," directory."),Object(o.b)("p",null,"Perform the build step:"),Object(o.b)("p",null,"  ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build")),Object(o.b)("p",null,"gcloud configurations:"),Object(o.b)("p",null,"  run the following command to create a configuration"),Object(o.b)("p",null,"  ",Object(o.b)("inlineCode",{parentName:"p"},"gcloud init")),Object(o.b)("p",null,"  or select an existing configuration using"),Object(o.b)("p",null,"  ",Object(o.b)("inlineCode",{parentName:"p"},"gcloud config configurations activate my-config")),Object(o.b)("p",null,"  list existing configurations using"),Object(o.b)("p",null,"  ",Object(o.b)("inlineCode",{parentName:"p"},"gcloud config configurations list")),Object(o.b)("p",null,"  visit ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.google.com/sdk/gcloud/reference/config/configurations"}),"for more information on configurations"),"."),Object(o.b)("p",null,"Deploy your app for a specific environment:"),Object(o.b)("p",null,"  ",Object(o.b)("inlineCode",{parentName:"p"},"gcloud app deploy app-production.yaml")),Object(o.b)("p",null,"  ",Object(o.b)("inlineCode",{parentName:"p"},"gcloud app deploy app-development.yaml")," (optional)"),Object(o.b)("h3",{id:"secure-the-endpoints"},"Secure the endpoints"),Object(o.b)("p",null,"In the GCP menu, navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"Security -> Identity-Aware Proxy"),". Turn on the ",Object(o.b)("inlineCode",{parentName:"p"},"IAP")," toggle for the App Engine resource.\nSelect the app engine resource and click ",Object(o.b)("inlineCode",{parentName:"p"},"ADD MEMBER")," on the right-hand menu and add the firebase default service account email address. Give the new member the ",Object(o.b)("inlineCode",{parentName:"p"},"IAP-secured Web App User")," role. Members added here will have access to call the app engine API enpoints."),Object(o.b)("h2",{id:"setup-the-firebase-environment"},"Setup the firebase environment"),Object(o.b)("p",null,"Sign in to firebase using the CLI: ",Object(o.b)("inlineCode",{parentName:"p"},"firebase login")),Object(o.b)("p",null,"Download the project service account key file in the firebase console: ",Object(o.b)("inlineCode",{parentName:"p"},"Settings -> Project settings -> Service Accounts")," and select ",Object(o.b)("inlineCode",{parentName:"p"},"Generate new private key"),". Rename the file to ",Object(o.b)("inlineCode",{parentName:"p"},"gcp_account_key.json"),". Upload this json file to the project's storage bucket in the root directory."),Object(o.b)("p",null,"Set your service master password in the environment variables: ",Object(o.b)("inlineCode",{parentName:"p"},'firebase functions:config:set serviceadmin.password="YOUR ADMIN PASSWORD"'),"\nPick a strong password and keep it safely backed up, this is the password used to encrypt the service wallet file."),Object(o.b)("p",null,"In the project's GCP console, click ",Object(o.b)("inlineCode",{parentName:"p"},"Security -> Identity-Aware Proxy"),". In the context menu select ",Object(o.b)("inlineCode",{parentName:"p"},"Edit OAuth client"),". Copy the ",Object(o.b)("inlineCode",{parentName:"p"},"Client ID")," field for use in the next step."),Object(o.b)("p",null,"Set the following values in the environment variables:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'firebase functions:config:set appengine.target_audience="YOUR CLIENT ID"')),Object(o.b)("p",null,"Set SendGrid API key for admin emails (optional)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'firebase functions:config:set sendgrid.apikey="YOUR SENDGRID API KEY"')),Object(o.b)("h2",{id:"configure-angular-environment-variables"},"Configure Angular Environment variables"),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"environment.ts")," and ",Object(o.b)("inlineCode",{parentName:"p"},"environment.prod.ts")," variables for your project's development and production environments. The Firebase config information can be found in the firebase ",Object(o.b)("inlineCode",{parentName:"p"},"console -> project settings -> firebase SDK snippet -> config"),"."),Object(o.b)("h2",{id:"deploying-to-firebase"},"Deploying to firebase"),Object(o.b)("h3",{id:"production-environment"},"Production environment"),Object(o.b)("p",null,"Build the angular project using ",Object(o.b)("inlineCode",{parentName:"p"},"ng build --prod")),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"firebase use production")," to switch to the production firebase project."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"firebase deploy")," to deploy the project."),Object(o.b)("p",null,"For a single command, you can also use the -P flag: ",Object(o.b)("inlineCode",{parentName:"p"},"firebase deploy -P production"),"."),Object(o.b)("h3",{id:"development-environment-optional"},"Development environment (optional)"),Object(o.b)("p",null,"Build the angular project using ",Object(o.b)("inlineCode",{parentName:"p"},"ng build")),Object(o.b)("p",null,"Run the angular front-end locally using ",Object(o.b)("inlineCode",{parentName:"p"},"ng serve")),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"firebase use development")," to switch to the development firebase project."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"firebase deploy")," to deploy the project."),Object(o.b)("p",null,"For a single command, you can also use the -P flag: ",Object(o.b)("inlineCode",{parentName:"p"},"firebase deploy -P development"),"."),Object(o.b)("h2",{id:"bootstrap-the-service"},"Bootstrap the service"),Object(o.b)("p",null,"Create a new user account with your email address, we will give this user service admin rights in a later step."),Object(o.b)("p",null,"Open ",Object(o.b)("em",{parentName:"p"},"functions")," tab, copy the URL of the bootstrap function."),Object(o.b)("p",null,"Send a GET request to the bootstrap URL passing in the email address of the user you created earlier as an 'admin' query parameter. Example cURL request:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"curl --location --request GET 'BOOTSTRAP_URL?admin=ADMIN_EMAIL_ADDRESS'")),Object(o.b)("p",null,"If the service bootstrapped succesfully, it will send an OK response. see the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/service/admin"}),"Admin")," section for information on service admin functionality."))}b.isMDXComponent=!0},172:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),d=i,m=s["".concat(a,".").concat(d)]||s[d]||u[d]||o;return t?r.a.createElement(m,c(c({ref:n},p),{},{components:t})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);