"use strict";(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let c=document.querySelector('[fs-element="form"]'),u=document.querySelector('[fs-element="result-new-client-yearly-total"]'),d=document.querySelector('[fs-element="result-vip-yearly-total"]'),p=document.querySelector('[fs-element="result-supplement-yearly-total"]'),h=document.querySelector('[fs-element="result-coach-referral-yearly-total"]'),F=document.querySelector('[fs-element="result-overall-yearly-total"]'),T=document.getElementById("see-breakdown-link").parentElement,l=document.getElementById("breakdown-chart");l&&l.classList.add("table-responsive-lg");let r="",g=()=>{u.textContent="",d.textContent="",p.textContent="",h.textContent="",F.textContent="",r="",l.innerHTML=r};!c||!u||!d||!p||!h||!T||!l||(T.addEventListener("click",a=>{a.preventDefault(),l.innerHTML=r}),c.addEventListener("submit",a=>{a.preventDefault(),a.stopPropagation();let L=new FormData(c).get("amount-dd");if(!L)return;let e=parseInt(L);if(isNaN(e)||e<=0||e>=101){g();return}let D=124.5,E=34.5,P=.8,H=.07,I=17,f=1,k=1e3,y=12,q=e>10?11:4,C=0,v=0,s=0,b=0,o=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),i=0,m=0,t='<table class="table"><tr>';t+="<th>Month</th>",t+='<th>New&nbsp;Clients<br><span class="smtitle">per month</span></th>',t+='<th>New&nbsp;Client Revenue<br><span class="smtitle">new clients * $124.50</span></th>',t+='<th>VIP Client Revenue<br><span class="smtitle">VIP clients * $34.50</span></th>',t+='<th>Supplement<br><span class="smtitle">subs per month</span></th>',t+='<th>Supplement Revenue<br><span class="smtitle">subs * $17.00</span></th>',t+="</tr>";for(let n=0;n<y;n++){t+="<tr>";let M=0,R=0;n>0&&(M=P*e,i+=M,n>1&&(R=H*i,i-=R));let w=e*D,x=i*E;m+=w+x,C+=w,v+=x;let S=f*(n+1)*I;s+=S,t+="<td>"+Intl.DateTimeFormat("en",{month:"short"}).format(new Date(0,n))+"</td>",t+="<td>"+e.toFixed(0)+"</td>",t+="<td>"+o.format(w)+"</td>",t+="<td>"+o.format(x)+"</td>",t+="<td>"+f.toFixed(0)+"</td>",t+="<td>$"+S.toFixed(0)+"</td>",t+="</tr>"}m+=s,b=k*q,m+=b,t+='<tr class="totals_row">',t+="<td></td>",t+="<td>"+(e*y).toFixed(0)+"</td>",t+="<td>"+o.format(C)+"</td>",t+="<td>"+o.format(v)+"</td>",t+="<td>"+(f*y).toFixed(0)+"</td>",t+="<td>"+o.format(s)+"</td>",t+="</tr>",t+="</table>",r=t,F.textContent=m.toLocaleString("en",{maximumFractionDigits:0}),u.textContent=C.toLocaleString("en",{maximumFractionDigits:0}),d.textContent=v.toLocaleString("en",{maximumFractionDigits:0}),p.textContent=s.toLocaleString("en",{maximumFractionDigits:0}),h.textContent=b.toLocaleString("en",{maximumFractionDigits:0}),document.getElementById("breakdown-chart").innerHTML=""}))});})();
