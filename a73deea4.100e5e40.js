(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),i=(n(0),n(172)),o={id:"admin",title:"Service admin",sidebar_label:"Admin"},s={id:"service/admin",isDocsHomePage:!1,title:"Service admin",description:"This section covers the admin functionality for managing the service. The admin dashboard can be accessed on the top navbar of the TRTL Apps website and is available to users who have been granted admin privalages, see the Role management section for more information.",source:"@site/docs/service/admin.md",permalink:"/docs/service/admin",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/service/admin.md",sidebar_label:"Admin",sidebar:"docs",previous:{title:"Service setup guide",permalink:"/docs/service/setup"},next:{title:"Apps overview",permalink:"/docs/apps/overview"}},c=[{value:"Admin overview",id:"admin-overview",children:[]},{value:"Role management",id:"role-management",children:[]},{value:"Wallet management",id:"wallet-management",children:[]},{value:"Reports",id:"reports",children:[]},{value:"Invitations",id:"invitations",children:[]},{value:"App inspector",id:"app-inspector",children:[]},{value:"Deposit inspector",id:"deposit-inspector",children:[]},{value:"Withdrawal inspector",id:"withdrawal-inspector",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section covers the admin functionality for managing the service. The admin dashboard can be accessed on the top navbar of the TRTL Apps website and is available to users who have been granted admin privalages, see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#role-management"}),"Role management")," section for more information."),Object(i.b)("h2",{id:"admin-overview"},"Admin overview"),Object(i.b)("p",null,"In the admin overview section you can few the current service configuration variables and manage the nodes the service uses. The currently selected node is automatically updated based on availability and its priority."),Object(i.b)("h2",{id:"role-management"},"Role management"),Object(i.b)("p",null,"This is where admins can assign and remove roles from service users. The first admin role is automatically assigned during the bootstrap process."),Object(i.b)("h2",{id:"wallet-management"},"Wallet management"),Object(i.b)("p",null,"Here you can check the current status of the service wallet and view the most recent wallet saved files. If for any reason you need to rewind the wallet to rescan blocks, you can do that here by supplying the ID of a checkpoint saved file to rewind to. Checkpoints are automatically saved on a periodic basis."),Object(i.b)("h2",{id:"reports"},"Reports"),Object(i.b)("p",null,"In the reports section you can view messages generated by the service, such as the most recent daemon errors encountered while sending transactions."),Object(i.b)("h2",{id:"invitations"},"Invitations"),Object(i.b)("p",null,"The service configuration has an invitation-only option which is enabled by default. In this mode users require an invitation code to create a new app. In this section you can view the currently available invitation codes as well as generate more."),Object(i.b)("h2",{id:"app-inspector"},"App inspector"),Object(i.b)("p",null,"Here you can search apps by ID and get an overview of a specific app as well its recent audit reports."),Object(i.b)("h2",{id:"deposit-inspector"},"Deposit inspector"),Object(i.b)("p",null,"The deposit inspector allows you to search for a deposit by ID and view its status history as it was processed."),Object(i.b)("h2",{id:"withdrawal-inspector"},"Withdrawal inspector"),Object(i.b)("p",null,"The withdrawal inspector allows you to search for a withdrawal by ID and view its status history as it was processed."))}d.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);