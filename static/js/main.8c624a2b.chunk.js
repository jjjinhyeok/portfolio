(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{55:function(n,e,t){},56:function(n,e,t){},62:function(n,e,t){"use strict";t.r(e);var i,s=t(3),c=t.n(s),r=t(43),a=t.n(r),o=(t(55),t(8)),l=(t(56),t(7)),d=t(30),p=t(65),x=t(64),j=t(63),h=t(2),m=l.d.div(i||(i=Object(o.a)(["\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  height: 70px;\n  width: calc(100% - 100px);\n  justify-content: space-between;\n  padding: 0 50px;\n  // background: rgba(0, 0, 0, 0.5);\n\n  font-size: 24px;\n  font-weight: bold;\n  color: ",";\n  z-index: 10;\n\n  @media only screen and (max-width: 600px) {\n    display: none;\n  }\n\n  .home {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .btns {\n    display: flex;\n    gap: 20px;\n    font-size: 18px;\n    &>* {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    @media only screen and (max-width: 600px) {\n      display: none; \n    }\n  }\n\n  .progress {\n    @media only screen and (max-width: 600px) {\n      display: none; \n    }\n    position: fixed;\n    left: 0;\n    top: 70px;\n    width: 100%;\n    height: 2px;\n    background: black;\n  }\n"])),(function(n){return n.theme.colors.ls}));var b,f,u=function(){var n=Object(p.a)().scrollYProgress,e=[0,window.innerWidth],t=Object(x.a)(n,[0,1],e),i=Object(s.useContext)(l.a),c=Object(s.useState)(0),r=Object(d.a)(c,2),a=r[0],o=r[1],b=function(){var n=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight;o(n>e)};return Object(s.useEffect)((function(){window.addEventListener("scroll",b)}),[]),Object(h.jsxs)(m,{style:{background:a?i.colors.ls:"none",borderBottom:a?"1px solid ".concat(i.colors.main):"none",color:a?i.colors.ds:i.colors.ls},children:[Object(h.jsx)("div",{className:"home btn",onClick:function(){return window.scrollTo(0,0)},children:"Kim Jinhyeok"}),Object(h.jsxs)("div",{className:"btns",children:[Object(h.jsx)("div",{className:"btn-me btn",children:Object(h.jsx)("a",{href:"#aboutme",children:"About Me"})}),Object(h.jsx)("div",{className:"btn-skills btn",children:Object(h.jsx)("a",{href:"#skills",children:"Skills"})}),Object(h.jsx)("div",{className:"btn-projects btn",children:Object(h.jsx)("a",{href:"#projects",children:"Projects"})})]}),Object(h.jsx)(j.a.div,{className:"progress",style:{width:t}})]})},g=t(48),O=Object(l.e)(b||(b=Object(o.a)(["\n  50% {\n    opacity: 0;\n  }\n"]))),v=l.d.div(f||(f=Object(o.a)(["\n  height: 101vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: ",";\n  overflow: hidden;\n  \n  &>* {\n    position: absolute;\n  }\n\n  .text-box {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    z-index: 3;\n    color: ",";\n    gap: 50px;\n    &>* {\n      margin: 0 10px;\n    }\n    h1 {\n      font-size: 5rem;\n      @media only screen and (max-width: 600px) {\n        font-size: 3rem;\n      }\n    }\n    .line {\n      width: 90%;\n      height: 5px;\n      background-color: ",";\n    }\n    h2 {\n      font-size: 2rem;\n    }\n    h3 {\n      font-size: 1.5rem;\n    }\n  }\n\n  .wrap-img {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    // filter: brightness(0.5);\n    z-index: 2;\n\n    img {\n      width: 110%;\n      height: 110%;\n      object-fit: cover;\n      overflow: none;\n    }\n  }\n\n  .scroll-box {\n    font-size: 24px;\n    display: flex;\n    flex-direction: column;\n    bottom: 12px;\n    z-index: 3;\n    color: gray;\n    font-family: 'Poppins', sans-serif;\n    justify-content: center;\n    align-items: center;\n    animation: "," 2s step-end infinite;\n  }\n"])),(function(n){return n.theme.colors.ds}),(function(n){return n.theme.colors.ls}),(function(n){return n.theme.colors.da}),O);var w,y=function(){var n=Object(p.a)().scrollYProgress,e=Object(x.a)(n,[0,1],[0,3e3]);return Object(h.jsxs)(v,{children:[Object(h.jsxs)("div",{className:"text-box",children:[Object(h.jsx)("h1",{children:"Kim Jinhyeok"}),Object(h.jsx)("div",{className:"line"}),Object(h.jsx)("h2",{children:"web devloper portfolio"}),Object(h.jsx)("h3",{children:"\uc548\ub155\ud558\uc138\uc694. \uc800\ub294 \ucf54\ub529\uacfc \ubc30\uc6b0\ub294 \uac83\uc774 \uc990\uac81\uace0 \uc0dd\uc0b0\uc131\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4."})]}),Object(h.jsx)("div",{className:"wrap-img",children:Object(h.jsx)(j.a.img,{src:"/portfolio/macbook.jpg",alt:"macbook",style:{y:e}})}),Object(h.jsxs)("div",{className:"scroll-box",children:["Scroll",Object(h.jsx)(g.a,{})]})]})},N=t(49),k=t(24),z=t(18),S=l.d.div(w||(w=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .section {\n    @media only screen and (max-width: 600px) {\n      flex-direction: column;\n      width: 100%;\n    }\n    .wrap-article {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      @media only screen and (max-width: 600px) {\n        flex-direction: column;\n        width: 100%;\n      }\n      .wrap-wrap-photo {\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        padding-left: 50px;\n        padding-right: 80px;\n        @media only screen and (max-width: 600px) {\n          height: 30%;\n          padding-left: 100px;\n          margin-bottom: 30px;\n        }\n        .wrap-photo {\n          width: 300px;\n          height: 300px;\n          border-radius: 200px;\n          overflow: hidden;\n          border: 5px solid ",";\n          @media only screen and (max-width: 600px) {\n            width: 180px;\n            height: 180px;\n          }\n          img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n          }\n        }\n      }\n      .items {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 50px;\n        padding-left: 80px;\n        @media only screen and (max-width: 600px) {\n          flex-direction: column;\n          gap: 10px;\n          padding-left: 0;\n        }\n        .item {\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          flex: 1 1 40%;\n          @media only screen and (max-width: 600px) {\n            flex: 1 1 10%;\n          }\n          svg {\n            color: ",";\n          }\n          .wrap-text {\n            font-family: NanumGothic, sans-serif;\n            color: ",";\n            display: flex;\n            justify-content: flex-start;\n            align-items: start;\n            flex-direction: column;\n            margin-left: 10px;\n            gap: 5px;\n            .title {\n              font-size: 20px;\n              font-weight: bold;\n            }\n            .desc {\n              text-align: left;\n              font-size: 18px;\n            }\n            .link {\n              color: ",";\n              cursor: pointer;\n            }\n            .link:hover {\n              text-decoration: underline;\n            }\n          }\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.ls}),(function(n){return n.theme.colors.ds}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.ds}),(function(n){return n.theme.colors.ds}));var C,H=function(){return Object(h.jsx)(S,{children:Object(h.jsxs)("div",{className:"section",children:[Object(h.jsxs)("div",{className:"wrap-title",children:[Object(h.jsx)("div",{className:"wrap-icon",id:"aboutme",children:Object(h.jsx)(z.b,{size:"2.5rem"})}),Object(h.jsx)("div",{className:"wrap-text",children:"ABOUT ME"})]}),Object(h.jsxs)("div",{className:"wrap-article",children:[Object(h.jsx)("div",{className:"wrap-wrap-photo",children:Object(h.jsx)("div",{className:"wrap-photo",children:Object(h.jsx)("img",{src:"/portfolio/me.jpg",alt:"me"})})}),Object(h.jsx)("div",{className:"line"}),Object(h.jsxs)("div",{className:"items",children:[Object(h.jsxs)("div",{className:"name item",children:[Object(h.jsx)(k.c,{size:"50px"}),Object(h.jsxs)("div",{className:"wrap-text",children:[Object(h.jsx)("div",{className:"title",children:"\uc774\ub984"}),Object(h.jsx)("div",{className:"desc",children:"\uae40\uc9c4\ud601"})]})]}),Object(h.jsxs)("div",{className:"birth item",children:[Object(h.jsx)(k.a,{size:"50px"}),Object(h.jsxs)("div",{className:"wrap-text",children:[Object(h.jsx)("div",{className:"title",children:"\uc0dd\ub144\uc6d4\uc77c"}),Object(h.jsx)("div",{className:"desc",children:"1993.11.02"})]})]}),Object(h.jsxs)("div",{className:"address item",children:[Object(h.jsx)(k.d,{size:"50px"}),Object(h.jsxs)("div",{className:"wrap-text",children:[Object(h.jsx)("div",{className:"title",children:"\uc8fc\uc18c\uc9c0"}),Object(h.jsx)("div",{className:"desc",children:"\uc778\ucc9c\uad11\uc5ed\uc2dc"})]})]}),Object(h.jsxs)("div",{className:"phone item",children:[Object(h.jsx)(N.a,{size:"50px"}),Object(h.jsxs)("div",{className:"wrap-text",children:[Object(h.jsx)("div",{className:"title",children:"\uc5f0\ub77d\ucc98"}),Object(h.jsx)("div",{className:"desc",children:"010-9389-7831"})]})]}),Object(h.jsxs)("div",{className:"email item",children:[Object(h.jsx)(k.b,{size:"50px"}),Object(h.jsxs)("div",{className:"wrap-text",children:[Object(h.jsx)("div",{className:"title",children:"\uc774\uba54\uc77c"}),Object(h.jsx)("div",{className:"desc",style:{cursor:"text"},children:"snare909@gmail.com"})]})]}),Object(h.jsxs)("div",{className:"archiving item",children:[Object(h.jsx)(k.e,{size:"50px"}),Object(h.jsxs)("div",{className:"wrap-text",children:[Object(h.jsx)("div",{className:"title",children:"\uc544\uce74\uc774\ube59"}),Object(h.jsxs)("div",{className:"desc",children:[Object(h.jsx)("span",{className:"link",onClick:function(){window.open("https://github.com/devjinhyeok")},children:"github.com/devjinhyeok"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"link",onClick:function(){window.open("https://velog.io/@909snare")},children:"velog.io/@909snare"})]})]})]})]})]})]})})},E=l.d.div(C||(C=Object(o.a)(["\n  height: 100%;\n  width: 100%;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .section {\n    .wrap-title {\n      .wrap-text.light {\n        color: ",";\n      }\n    }\n    .wrap-article {\n      .items {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n        flex-wrap: wrap;\n        gap: 20px;\n        .item {\n          background: white;\n          padding: 15px 18px;\n          border-radius: 15px;\n          box-shadow:\n            0 2.8px 2.2px rgba(0, 0, 0, 0.134),\n            0 6.7px 5.3px rgba(0, 0, 0, 0.148),\n            0 12.5px 10px rgba(0, 0, 0, 0.16),\n            0 22.3px 17.9px rgba(0, 0, 0, 0.172),\n            0 41.8px 33.4px rgba(0, 0, 0, 0.186),\n            0 100px 80px rgba(0, 0, 0, 0.12);\n          .title {\n            font-size: 1.5rem;\n            text-align: left;\n            color: ",";\n            border-bottom: 1px solid ",";\n            margin-bottom: 15px;\n          }\n          .wrap-img {\n            width: 230px;\n            img {\n              width: 100%;\n              height: 100%;\n            }\n          }\n        }\n      }\n    }\n  }\n\n"])),(function(n){return n.theme.colors.ds}),(function(n){return n.theme.colors.ls}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.main}));var P,D=function(){var n={y:10};return Object(h.jsx)(E,{children:Object(h.jsxs)("div",{className:"section",children:[Object(h.jsxs)("div",{className:"wrap-title",children:[Object(h.jsx)("div",{className:"wrap-icon",id:"skills",children:Object(h.jsx)(z.b,{size:"2.5rem"})}),Object(h.jsx)("div",{className:"wrap-text light",children:"SKILLS"})]}),Object(h.jsx)("div",{className:"wrap-article",children:Object(h.jsxs)("div",{className:"items",children:[Object(h.jsxs)(j.a.div,{className:"frontend item",whileHover:n,children:[Object(h.jsx)("div",{className:"title",children:"Front-end"}),Object(h.jsx)("div",{className:"wrap-img",children:Object(h.jsx)("img",{src:"/portfolio/frontend.png",alt:"frontend"})})]}),Object(h.jsxs)(j.a.div,{className:"backend item",whileHover:n,children:[Object(h.jsx)("div",{className:"title",children:"Back-end"}),Object(h.jsx)("div",{className:"wrap-img",children:Object(h.jsx)("img",{src:"/portfolio/backend.png",alt:"backend"})})]}),Object(h.jsxs)(j.a.div,{className:"deployment item",whileHover:n,children:[Object(h.jsx)("div",{className:"title",children:"Deployment"}),Object(h.jsx)("div",{className:"wrap-img",children:Object(h.jsx)("img",{src:"/portfolio/deploy.png",alt:"deployment"})})]}),Object(h.jsxs)(j.a.div,{className:"version item",whileHover:n,children:[Object(h.jsx)("div",{className:"title",children:"Version control"}),Object(h.jsx)("div",{className:"wrap-img",children:Object(h.jsx)("img",{src:"/portfolio/version.png",alt:"version"})})]})]})})]})})},A=t(42),G=l.d.div(P||(P=Object(o.a)(["\n  height: 100%;\n  width: 100%;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .section {\n    .wrap-title {\n    }\n    .wrap-article {\n      .items {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 3rem;\n        flex-direction: column;\n        .item {\n          background: ",";\n          padding: 30px 40px;\n          @media only screen and (max-width: 600px) {\n            padding: 28px 13px;\n          }\n          border-radius: 30px;\n          box-shadow: 1rem 1rem 1rem 0 rgba(68,68,68,.2);\n          .wrap-title {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            .title {\n              font-size: 2.7rem;\n              font-weight: bold;\n              color: ",";\n            }\n            .sub {\n              font-size: 1rem;\n              color: ",";\n              font-family: nanumGothic, sans-serif;\n              font-weight: bold;\n            }\n          }\n          .wrap-desc {\n            display: flex;\n            justify-content: center;\n            align-items: flex-start;\n            gap: 40px;\n            @media only screen and (max-width: 600px) {\n              flex-direction: column;\n            }\n            .wrap-gall {\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              flex: 1 1 40%;\n              position: relative;\n              .wrap-img {\n                width: 100%;\n                height: 500px;\n                img {\n                  width: 100%;\n                  height: 100%;\n                  object-fit: cover;\n                }\n              }\n              .btn {\n                position: absolute;\n                filter: drop-shadow(1px 2px 1px rgb(0 0 0 / 0.4));\n                background: white;\n                border-radius: 30px;\n                width: 40px;\n                height: 40px;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n              }\n              .prev {\n                left: 0;\n                margin-left: 10px;\n              }\n              .next {\n                right: 0;\n                margin-right: 10px;\n              }\n            }\n            .desc {\n              display: flex;\n              flex: 1 1 40%;\n              justify-content: center;\n              align-items: flex-start;;\n              flex-direction: column;\n              font-size: 1rem;\n              font-family: nanumGothic, sans-serif;\n              color: ",";\n              .text {\n                padding-bottom: 1rem;\n                border-bottom: 1px solid ",";\n                white-space: pre-line;\n                text-align: left;\n              }\n              .points {\n                display: flex;\n                flex-direction: column;\n                margin-top: 1rem;\n                gap: 0.7rem;\n                .point {\n                  display: flex;\n                  .head {\n                    display: flex;\n                    width: 100px;\n                    font-weight: 900;\n                    margin-left: 10px;\n                  }\n                  .para {\n                    display: flex;\n                    flex: 1 1 30%;\n                    text-align: left;\n                  }\n                  .link {\n                    cursor: pointer;\n                  }\n                  .link:hover {\n                    text-decoration: underline;\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.la}),(function(n){return n.theme.colors.ls}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.main}));function T(n){var e=n.imgs,t=Object(s.useState)(0),i=Object(d.a)(t,2),c=i[0],r=i[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a.div,{className:"prev btn",onClick:function(){r(0===c?e.length-1:c-1)},whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(h.jsx)(A.b,{size:"20px",color:"red"})}),Object(h.jsx)(j.a.div,{className:"next btn",onClick:function(){c===e.length-1?r(0):r(c+1)},whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(h.jsx)(A.a,{size:"20px"})}),Object(h.jsx)("div",{className:"wrap-img",children:Object(h.jsx)("img",{src:e[c],alt:e[c]})})]})}var B,I=function(){return Object(h.jsx)(G,{children:Object(h.jsxs)("div",{className:"section",children:[Object(h.jsxs)("div",{className:"wrap-title",children:[Object(h.jsx)("div",{className:"wrap-icon",id:"projects",children:Object(h.jsx)(z.b,{size:"2.5rem"})}),Object(h.jsx)("div",{className:"wrap-text light",children:"PROJECTS"})]}),Object(h.jsx)("div",{className:"wrap-article",children:Object(h.jsx)("div",{className:"items",children:[{title:"\ud0c0\uc784\ub77c\uc778 \ud615\uc2dd\uc758 SNS",sub:"2021.07 ~ 2021.09 / \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8",imgs:["/portfolio/screenshots/1001.png","/portfolio/screenshots/1002.png","/portfolio/screenshots/1003.png","/portfolio/screenshots/1004.png","/portfolio/screenshots/1005.png"],text:"\ud398\uc774\uc2a4\ubd81, \ud2b8\uc704\ud130\uc640 \uac19\uc774 \ud0c0\uc784\ub77c\uc778\uc744 \uba54\uc778\uc73c\ub85c \ub178\ucd9c\ud558\ub294 \ud615\uc2dd\uc758 SNS \uc785\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc778 \uac8c\uc2dc\ud310\ucc98\ub7fc \ub370\uc774\ud130\uc758 CRUD\ub97c \ud3ec\ud568\ud558\ub418, \uc2e4\uc2dc\uac04 \ucc44\ud305\uacfc \uac19\uc740 \uc11c\ube44\uc2a4\ub97c \uad6c\ud604\ud558\uace0 \uc2f6\uc5b4\uc11c \uacc4\ud68d\ud55c \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \n\n\uc2e4\uc2dc\uac04 \ucc44\ud305\uacfc \uc54c\ub9bc\uc744 \uad6c\ud604\ud558\uba70, \uc6f9\uc18c\ucf13\uc5d0 \ub300\ud55c \uac1c\ub150\uacfc Socket.IO \ub77c\uc774\ube0c\ub7ec\ub9ac\uc744 \uc774\uc6a9\ud55c \uad6c\ud604\uae4c\uc9c0 \uc775\ud790 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ub610 \uad6c\uae00 API\uc758 \uc18c\uc15c \ub85c\uadf8\uc778\uacfc, JWT\ub97c \uc774\uc6a9\ud55c \uc138\uc158 \uad00\ub9ac\uae4c\uc9c0 \ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \n\n\ubc31\uc5d4\ub4dc\uc5d0\uc11c, \uc5b4\ub5bb\uac8c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c REST API \uc6d0\uce59\uc5d0 \uc785\uac01\ud558\uc5ec \ub124\uc774\ubc0d\ud560\uc9c0\uc5d0 \ub300\ud574\uc11c\ub3c4 \uace0\ubbfc\ud574\ubcfc \uc218 \uc788\ub294 \uae30\ud68c\uc600\uc2b5\ub2c8\ub2e4. ",points:[{head:"\uc8fc\uc694 \uae30\ub2a5",para:"\uc88b\uc544\uc694 \ubc0f \ub313\uae00, \uc2e4\uc2dc\uac04 \ucc44\ud305, \ucc44\ud305 \ubc0f \uac8c\uc2dc\uae00 \uc54c\ub9bc, \uac8c\uc2dc\uae00 \uac80\uc0c9, \uad6c\uae00\uc744 \ud1b5\ud55c \uc18c\uc15c \ub85c\uadf8\uc778, \ub2e4\ud06c \ubaa8\ub4dc \uc9c0\uc6d0"},{head:"GitHub",para:"https://github.com/devjinhyeok/sns-using-react-nodejs"},{head:"\ub3c4\uba54\uc778",para:"http://surn.o-r.kr"},{head:"Front-end",para:"React"},{head:"Back-end",para:"Node.js, Express, MongoDB"},{head:"Deployment",para:"GCP(Linux VM)"}]},{title:"\uc911\uace0\ucc28 \ub9e4\ub9e4 \uc0ac\uc774\ud2b8",sub:"2020.10 ~ 2020.11 / 4\uc778 \ud300 \ud504\ub85c\uc81d\ud2b8",imgs:["/portfolio/screenshots/2001.png","/portfolio/screenshots/2002.png","/portfolio/screenshots/2003.png","/portfolio/screenshots/2004.png","/portfolio/screenshots/2005.png"],text:"\ud559\uc6d0\uc5d0\uc11c \uc218\ub8cc\ud55c Java \uac15\uc758\uc758 \ucd5c\uc885 \ud504\ub85c\uc81d\ud2b8\ub85c \uc9c4\ud589\ud55c \uc911\uace0\ucc28 \ub9e4\ub9e4 \uc6f9\uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ub2e8\uc21c\ud55c \uac8c\uc2dc\ud310\uc774 \uc544\ub2cc \ucc28\ub7c9, \ud68c\uc6d0, \uac70\ub798 \uc815\ubcf4 \ub4f1\uc758 \uc5ec\ub7ec DB \ud14c\uc774\ube14\uc744 \uc694\uad6c\ud588\uae30\uc5d0 \uc120\uc815\ud55c \uc8fc\uc81c\uc600\uace0 \uadf8\uc5d0 \ub9de\uac8c \ud14c\uc774\ube14 \uac04\uc758 \uad00\uacc4\ub97c \uc704\ud55c \ucc38\uc870\ud0a4, \uc678\ub798\ud0a4\ub97c \uc0ac\uc6a9\ud574 \ubcfc \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \n\n4\uc778 \ud611\uc5c5 \ud504\ub85c\uc81d\ud2b8\uc600\uace0 \uac1c\ubc1c\ud560 \ubd84\ub7c9\uc774 \uc801\uc9c0 \uc54a\uc558\uae30\uc5d0 \ub098\ub984\ub300\ub85c\uc758 \uccb4\uacc4\uc801\uc778 \ud504\ub85c\uc138\uc2a4\ub97c \uc9c4\ud589\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud070 \ud2c0\uc744 \uc7a1\uae30 \uc704\ud55c IA(Information Architecture)\uc744 \uc791\uc131\ud558\uace0, UI\ub97c \uc9c1\uc811 \uad6c\ud604\ud558\uae30 \uc804 Uxpin\uc744 \uc774\uc6a9\ud55c \ubaa9\uc5c5\ub3c4 \uadf8\ub838\uc2b5\ub2c8\ub2e4. Github\ub97c \ud1b5\ud55c \uc18c\uc2a4 \uacf5\uc720\uc640 \ubd84\uc5c5\uc73c\ub85c \ud611\uc5c5\uc758 \uae30\ubcf8\uc744 \ubc30\uc6b8 \uc218 \uc788\ub294 \uae30\ud68c\uc600\uc2b5\ub2c8\ub2e4. ",points:[{head:"\uc8fc\uc694 \uae30\ub2a5",para:"\ucc28\ub7c9 \uc911\uace0 \ub9e4\ubb3c \uc870\ud68c \ubc0f \uc608\uc57d, \uc0ac\uc774\ud2b8 \uad00\ub9ac\uc790 \uba54\ub274, \ucee4\ubba4\ub2c8\ud2f0 \uac8c\uc2dc\ud310"},{head:"GitHub",para:"https://github.com/devjinhyeok/kpark"},{head:"Front-end",para:"JSP"},{head:"Back-end",para:"Spring, Oracle"},{head:"Deployment",para:"AWS(EC2(Windows), RDS)"}]},{title:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \ud398\uc774\uc9c0",sub:"2021.09 ~ 2021.10 / \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8",imgs:["/portfolio/screenshots/3001.png","/portfolio/screenshots/3002.png","/portfolio/screenshots/3003.png"],text:" \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc6a9\ub3c4\ub85c \uc81c\uc791\ud55c React \uae30\ubc18\uc758 \uc6f9\uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \uc11c\ubc84\uac00 \ud544\uc694 \uc5c6\ub294 \uc815\ubcf4 \ud45c\ud604\uc744 \uc704\ud55c \uc815\uc801 \ud398\uc774\uc9c0 \uc600\uae30\uc5d0 GitHub Pages\uc5d0 \ud638\uc2a4\ud305 \ud588\uc2b5\ub2c8\ub2e4. \ub610 CSS\ub97c \uc774\uc6a9\ud55c \ubc18\uc751\ud615 \uc6f9 \ub514\uc790\uc778\uc5d0 \uc9d1\uc911\ud560 \uc218 \uc788\ub294 \uae30\ud68c\uc600\uc2b5\ub2c8\ub2e4. framer-motion \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc774\uc6a9\ud55c \uc560\ub2c8\uba54\uc774\uc158\uc744 \ubc84\ud2bc\uacfc \uba54\uc778 \uc774\ubbf8\uc9c0 \uc2a4\ud06c\ub864 \uc778\ud130\ub799\uc158\uc5d0 \uc801\uc6a9\ud588\uc2b5\ub2c8\ub2e4. ",points:[{head:"\uc8fc\uc694 \uae30\ub2a5",para:"\ubc18\uc751\ud615 \uc6f9 \ub514\uc790\uc778, \uc2a4\ud06c\ub864 \uc778\ud130\ub799\uc158"},{head:"GitHub",para:"https://github.com/devjinhyeok/portfolio"},{head:"\ub3c4\uba54\uc778",para:"https://devjinhyeok.github.io/portfolio"},{head:"Front-end",para:"React"},{head:"Deployment",para:"GitHub Pages"}]}].map((function(n,e){return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsxs)("div",{className:"wrap-title",children:[Object(h.jsx)("div",{className:"title",children:n.title}),Object(h.jsx)("div",{className:"sub",children:n.sub})]}),Object(h.jsxs)("div",{className:"wrap-desc",children:[Object(h.jsx)("div",{className:"wrap-gall",children:Object(h.jsx)(T,{imgs:n.imgs})}),Object(h.jsxs)("div",{className:"desc",children:[Object(h.jsx)("div",{className:"text",children:n.text}),Object(h.jsx)("div",{className:"points",children:n.points.map((function(n,e){return"GitHub"!==n.head&&"\ub3c4\uba54\uc778"!==n.head?Object(h.jsxs)("div",{className:"point",children:[Object(h.jsx)(z.a,{}),Object(h.jsx)("div",{className:"head",children:n.head}),Object(h.jsx)("div",{className:"para",children:n.para})]},e):Object(h.jsxs)("div",{className:"point",children:[Object(h.jsx)(z.a,{}),Object(h.jsx)("div",{className:"head",children:n.head}),Object(h.jsx)("div",{className:"para link",onClick:(i=n.para,function(){window.open(i)}),children:(t=n.para,t.slice(t.indexOf("/")+2))})]},e);var t,i}))})]})]})]},e)}))})})]})})},F=t(50),J=l.d.div(B||(B=Object(o.a)(["\n  background: ",";\n  color: ",";\n  height: 180px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n\n  .wrap-button {\n    cursor: pointer;\n    text-decoration: underline;\n    color: ",";\n    a:active {\n      color: #000;\n    }\n  }\n\n  .wrap-text {\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.ls}),(function(n){return n.theme.colors.ls}));var L,R=function(){return Object(h.jsxs)(J,{children:[Object(h.jsx)("div",{className:"wrap-button",onClick:function(){window.open("https://github.com/devjinhyeok")},children:Object(h.jsx)(F.a,{size:"70px"})}),Object(h.jsx)("div",{className:"wrap-text",children:"\xa9 2021. Kim Jinhyeok. All rights reserved."})]})},M=l.d.div(L||(L=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  \n  // title \uacf5\ud1b5 \uc2a4\ud0c0\uc77c\n  .section {\n    padding: 50px 0;\n    width: 1200px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    .wrap-title {\n      margin-bottom: 30px;\n      height: 5rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      gap: 10px;\n      .wrap-icon {\n        color: ",";\n      }\n      .wrap-text {\n        color: ",";\n        font-size: 2.8rem;\n        font-family: BlackHans, sans-serif;\n        border-bottom: 1px solid ",";\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.main}));var K,U,W=function(){return Object(s.useEffect)((function(){document.querySelectorAll('a[href^="#"]').forEach((function(n){n.addEventListener("click",(function(n){console.log("anchor!"),n.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))}),[]),Object(h.jsxs)(M,{children:[Object(h.jsx)(u,{}),Object(h.jsx)(y,{}),Object(h.jsx)(H,{}),Object(h.jsx)(D,{}),Object(h.jsx)(I,{}),Object(h.jsx)(R,{})]})},V=Object(l.c)(K||(K=Object(o.a)(["\n"]))),q=Object(l.c)(U||(U=Object(o.a)(["\n  body {\n    text-align: center;\n    font-family: DoHyeon, sans-serif;\n    padding: 0;\n    margin: 0;\n    cursor: default;\n  }\n  .btn {\n    cursor: pointer;\n  }\n  a {\n    text-decoration: none; \n    outline: none;\n    color: inherit;\n  }\n  img {\n    user-drag: none;\n    -webkit-user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n  }\n  \n"])));var Y=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(l.b,{theme:{colors:{ls:"#f6f6eb",lsD:"#ddddb3",la:"#d68d4c",main:"#8ea3a6",da:"#957c6b",ds:"#563e38",black:"#191919"}},children:[Object(h.jsx)(V,{}),Object(h.jsx)(q,{}),Object(h.jsx)(W,{})]})})},Q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(e){var t=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),i(n),s(n),c(n),r(n)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root")),Q()}},[[62,1,2]]]);
//# sourceMappingURL=main.8c624a2b.chunk.js.map