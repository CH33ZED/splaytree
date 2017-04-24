            var a = document.getElementById("a");
            var z = document.getElementById("splay");
            var d = document.getElementById("splayed");
            var b = document.getElementById("clear"); 

            
            var draw = function(event){  
               clear();
               var e = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       e.setAttribute("x", 250 );
	       e.setAttribute("y", 50);
	       e.textContent = "19";
	       e.setAttribute("font-size","40");
	       a.appendChild(e); 

               var j = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       j.setAttribute("x", 375 );
	       j.setAttribute("y", 100);
	       j.textContent = "22";
	       j.setAttribute("font-size","40");
	       a.appendChild(j); 

               var t = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       t.setAttribute("x", 125 );
	       t.setAttribute("y", 100);
	       t.textContent = "11";
	       t.setAttribute("font-size","40");
	       a.appendChild(t); 

               var u = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       u.setAttribute("x", 175 );
	       u.setAttribute("y", 175);
	       u.textContent = "16";
	       u.setAttribute("font-size","40");
	       a.appendChild(u); 
               window.setTimeout( draw2, 5000 );
            }

            var draw2 = function(event){  
               clear();
               var e = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       e.setAttribute("x", 250 );
	       e.setAttribute("y", 50);
	       e.textContent = "19";
	       e.setAttribute("font-size","40");
	       a.appendChild(e); 

               var j = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       j.setAttribute("x", 375 );
	       j.setAttribute("y", 100);
	       j.textContent = "22";
	       j.setAttribute("font-size","40");
	       a.appendChild(j); 

               var t = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       t.setAttribute("x", 125 );
	       t.setAttribute("y", 100);
	       t.textContent = "16";
	       t.setAttribute("font-size","40");
	       a.appendChild(t); 

               var u = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       u.setAttribute("x", 50 );
	       u.setAttribute("y", 175);
	       u.textContent = "11";
	       u.setAttribute("font-size","40");
	       a.appendChild(u); 
               window.setTimeout( draw3, 5000 );
            }

            var draw3 = function(event){  
               clear();
               var e = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       e.setAttribute("x", 250 );
	       e.setAttribute("y", 50);
	       e.textContent = "16";
	       e.setAttribute("font-size","40");
	       a.appendChild(e); 

               var j = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       j.setAttribute("x", 375 );
	       j.setAttribute("y", 100);
	       j.textContent = "19";
	       j.setAttribute("font-size","40");
	       a.appendChild(j); 

               var t = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       t.setAttribute("x", 450 );
	       t.setAttribute("y", 175);
	       t.textContent = "22";
	       t.setAttribute("font-size","40");
	       a.appendChild(t); 

               var u = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       u.setAttribute("x", 125 );
	       u.setAttribute("y", 100);
	       u.textContent = "11";
	       u.setAttribute("font-size","40");
	       a.appendChild(u); 
            }

            var drew = function(event){  
               clear();
               var e = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       e.setAttribute("x", 250 );
	       e.setAttribute("y", 50);
	       e.textContent = "16";
	       e.setAttribute("font-size","40");
	       a.appendChild(e); 

               var j = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       j.setAttribute("x", 375 );
	       j.setAttribute("y", 100);
	       j.textContent = "19";
	       j.setAttribute("font-size","40");
	       a.appendChild(j); 

               var t = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       t.setAttribute("x", 450 );
	       t.setAttribute("y", 175);
	       t.textContent = "22";
	       t.setAttribute("font-size","40");
	       a.appendChild(t); 

               var u = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       u.setAttribute("x", 125 );
	       u.setAttribute("y", 100);
	       u.textContent = "11";
	       u.setAttribute("font-size","40");
	       a.appendChild(u); 

               var k = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       k.setAttribute("x", 300 );
	       k.setAttribute("y", 175);
	       k.textContent = "17";
	       k.setAttribute("font-size","40");
	       a.appendChild(k); 
               window.setTimeout( drew2, 5000 );
            }

            var drew2 = function(event){  
               clear();
               var e = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       e.setAttribute("x", 250 );
	       e.setAttribute("y", 50);
	       e.textContent = "19";
	       e.setAttribute("font-size","40");
	       a.appendChild(e); 

               var j = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       j.setAttribute("x", 375 );
	       j.setAttribute("y", 100);
	       j.textContent = "22";
	       j.setAttribute("font-size","40");
	       a.appendChild(j); 

               var t = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       t.setAttribute("x", 50 );
	       t.setAttribute("y", 175);
	       t.textContent = "11";
	       t.setAttribute("font-size","40");
	       a.appendChild(t); 

               var u = document.createElementNS("http://www.w3.org/2000/svg","text");	
	       u.setAttribute("x", 125 );
	       u.setAttribute("y", 100);
	       u.textContent = "16";
	       u.setAttribute("font-size","40");
	       a.appendChild(u); 
            }

            var clear = function(event){
               while(a.hasChildNodes()){
	        a.removeChild(a.childNodes[0]);
               }
            }
            
            z.addEventListener('click', draw);
            d.addEventListener('click', drew);
            b.addEventListener('click', clear);