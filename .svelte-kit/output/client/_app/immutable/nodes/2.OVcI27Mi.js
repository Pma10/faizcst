import{a as r,t as c}from"../chunks/disclose-version.CHxFa33J.js";import{i as q}from"../chunks/legacy.C2Xvecfh.js";import{p as x,e as D,j as R,k as d,g as p,i as v,r as f,t as C,m as F}from"../chunks/runtime.C0OIpZUk.js";import{s as I,a as T,b as j}from"../chunks/store.twnAGfoI.js";import{o as z,i as u}from"../chunks/index-client.Dx5syebS.js";import{w as L}from"../chunks/index.B3bRtxDF.js";var S=c('<p class="loading svelte-cic2qh">Loading...</p>'),A=c(`<div class="countdown svelte-cic2qh"><h1>For Faiz's CST</h1> </div>`),B=c('<div class="background svelte-cic2qh"><!> <!></div>');function O(h,g){x(g,!1);const _=I(),o=()=>j(a,"$timeRemaining",_),$=new Date("2025-11-13T09:00:00");let e=F(!0);const a=L({days:0,hours:0,minutes:0,seconds:0,milliseconds:0}),l=()=>{const s=$-new Date;if(s>0){const i=Math.floor(s/864e5),b=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),M=Math.floor(s%(1e3*60*60)/(1e3*60)),y=Math.floor(s%(1e3*60)/1e3),k=s%1e3;a.set({days:i,hours:b,minutes:M,seconds:y,milliseconds:k})}else a.set({days:0,hours:0,minutes:0,seconds:0,milliseconds:0})};z(()=>{R(e,!1),l();const t=setInterval(l,10);return()=>clearInterval(t)}),q();var n=B(),m=p(n);u(m,()=>d(e),t=>{var s=S();r(t,s)});var w=v(m,2);u(w,()=>!d(e),t=>{var s=A(),i=v(p(s));f(s),C(()=>T(i,` ${o().days??""}d
        ${o().hours??""}h
        ${o().minutes??""}m
        ${o().seconds??""}s
        ${o().milliseconds??""}ms`)),r(t,s)}),f(n),r(h,n),D()}export{O as component};