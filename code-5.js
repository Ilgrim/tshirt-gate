var a=document,e=a.createElement("canvas");a.body.appendChild(e);var f=[5,4,3],g=["#1abc9c","#2ecc71","#3498db"],ft="px Courier",ts="pixels.camp",bf="<<<----.>>++++.<+.>";rd=Math.random,mf=Math.floor;function h(d){return{c:18,b:18,x:691,y:491,g:0,i:0,a:d||9}}function k(d){return{c:18,b:70,x:"left"===d?150:1250,y:465,h:0,move:0,a:10}}bf+="---.<<---.>>>++.<+.";;var n={C:function(){t=this;t.l=e;t.t=t.l.getContext("2d");t.l.width=1400;t.l.height=1E3;t.l.style.width="700px";t.l.style.height="500px";t.j=k.call(t,"left");t.r=k.call(t,"right");t.m=h.call(t);t.r.a=8;t.D=t.o=!1;t.s=t.r;t.F=t.f=0;;t.color="#2c3e50";;m.H();m.G();ts+="/tee/"+"35c9238647f5302f"},B:function(d){m.t.font="50"+ft;m.t.fillStyle=this.color;m.t.fillRect(350,452,700,100);;m.t.fillStyle="#ffffff";m.t.fillText(d,700,515);setTimeout(function(){m=Object.assign({},n);m.C()},3E3)},H:function(){m.A();t=this;t.t.font="50"+ft;t.t.fillStyle=t.color;t.t.fillRect(350,452,700,100);;t.t.fillStyle="#ffffff";t.t.fillText("Press any key to begin",700,515)},update:function(){t=this;b=t.m;l=t.j;r=t.r;t.o||(0>=b.x&&m.v.call(t,r,l),b.x>=1400-b.c&&m.v.call(t,l,r),0>=b.y&&(b.i=2),b.y>=1E3-b.b&&(b.i=1),1===l.move?l.y-=l.a:2===l.move&&(l.y+=l.a),m.w.call(t)&&t.s&&(b.g=t.s===l?3:4,b.i=[1,2][Math.round(rd())],b.y=mf(1E3*rd()-200)+200,t.s=null),0>=l.y?l.y=0:l.y>=1E3-l.b&&(l.y=1E3-l.b),1===b.i?b.y-=b.a/1.5:2===b.i&&(b.y+=b.a/1.5),3===b.g?b.x-=b.a:4===b.g&&(b.x+=b.a),r.y>b.y-r.b/2&&(r.y=4===b.g?r.y-r.a/1.5:r.y-r.a/4),r.y<b.y-r.b/2&&(r.y=4===b.g?r.y+r.a/1.5:r.y+r.a/4),r.y>=1E3-r.b?r.y=1E3-r.b:0>=r.y&&(r.y=0),b.x-b.c<=l.x&&b.x>=l.x-l.c&&b.y<=l.y+l.b&&b.y+b.b>=l.y&&(b.x=l.x+b.c,b.g=4),b.x-b.c<=r.x&&b.x>=r.x-r.c&&b.y<=r.y+r.b&&b.y+b.b>=r.y&&(b.x=r.x-b.c,b.g=3));l.h===f[t.f]?f[t.f+1]?(t.color=t.u(),l.h=r.h=0,l.a+=.5,r.a+=1,b.a+=1,t.f+=1):(t.o=!0,setTimeout(function(){m.B(bf)},1E3)):r.h===f[t.f]&&(t.o=!0,setTimeout(function(){m.B("Game Over!")},1E3))},A:function(){t=this;c=t.t;b=t.m;l=t.j;r=t.r;c.clearRect(0,0,1400,1E3);c.fillStyle=t.color;c.fillRect(0,0,1400,1E3);c.fillStyle="#ffffff";c.fillRect(l.x,l.y,l.c,l.b);c.fillRect(r.x,r.y,r.c,r.b);m.w.call(t)&&c.fillRect(b.x,b.y,b.c,b.b);c.beginPath();c.setLineDash([7,15]);c.moveTo(700,860);c.lineTo(700,140);c.lineWidth=10;c.strokeStyle="#ffffff";c.stroke();c.font="100"+ft;c.textAlign="center";c.fillText(l.h.toString(),400,200);c.fillText(r.h.toString(),1E3,200);c.font="30"+ft;c.fillText("Round "+(m.f+1),700,35);c.font="40"+ft;c.fillText(f[m.f]?f[m.f]:f[m.f-1],700,100)},loop:function(){m.update();m.A();m.o||requestAnimationFrame(m.loop)},G:function(){a.addEventListener("keydown",function(d){!1===m.D&&(m.D=!0,window.requestAnimationFrame(m.loop));if(38===d.keyCode||87===d.keyCode)m.j.move=1;if(40===d.keyCode||83===d.keyCode)m.j.move=2});a.addEventListener("keyup",function(){m.j.move=0})},v:function(d,p){t=this;t.m=h.call(t,t.m.a);t.s=p;t.F=(new Date).getTime();d.h++},w:function(){return 1E3<=(new Date).getTime()-this.F},u:function(){var d=g[mf(rd()*g.length)];return d===this.color?m.u():d}},m=Object.assign({},n);m.C();