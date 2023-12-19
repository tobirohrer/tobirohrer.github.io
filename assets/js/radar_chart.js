function RadarChart(t,e,a){function r(t,e){t.each(function(){for(var t,a=d3.select(this),r=a.text().split(/\s+/).reverse(),n=[],l=0,i=1.4,s=a.attr("y"),o=a.attr("x"),c=parseFloat(a.attr("dy")),d=a.text(null).append("tspan").attr("x",o).attr("y",s).attr("dy",c+"em");t=r.pop();)n.push(t),d.text(n.join(" ")),d.node().getComputedTextLength()>e&&(n.pop(),d.text(n.join(" ")),n=[t],d=a.append("tspan").attr("x",o).attr("y",s).attr("dy",++l*i+c+"em").text(t))})}var n={w:600,h:600,margin:{top:20,right:20,bottom:20,left:20},levels:3,maxValue:0,labelFactor:1.25,wrapWidth:60,opacityArea:.35,dotRadius:4,opacityCircles:.1,strokeWidth:2,roundStrokes:!1,color:d3.scale.category10()};if(void 0!==a)for(var l in a)"undefined"!=typeof a[l]&&(n[l]=a[l]);var i=Math.max(n.maxValue,d3.max(e,function(t){return d3.max(t.map(function(t){return t.value}))})),s=e[0].map(function(t){return t.axis}),o=s.length,c=Math.min(n.w/2,n.h/2),d=d3.format("%"),p=2*Math.PI/o,u=d3.scale.linear().range([0,c]).domain([0,i]);d3.select(t).select("svg").remove();var f=d3.select(t).append("svg").attr("width",n.w+n.margin.left+n.margin.right).attr("height",n.h+n.margin.top+n.margin.bottom).attr("class","radar"+t).append("g").attr("transform","translate("+(n.w/2+n.margin.left)+","+(n.h/2+n.margin.top)+")"),y=f.append("defs").append("filter").attr("id","glow"),h=(y.append("feGaussianBlur").attr("stdDeviation","2.5").attr("result","coloredBlur"),y.append("feMerge")),x=(h.append("feMergeNode").attr("in","coloredBlur"),h.append("feMergeNode").attr("in","SourceGraphic"),f.append("g").attr("class","axisWrapper"));x.selectAll(".levels").data(d3.range(1,n.levels+1).reverse()).enter().append("circle").attr("class","gridCircle").attr("r",function(t){return c/n.levels*t}).style("fill","#CDCDCD").style("stroke","#CDCDCD").style("fill-opacity",n.opacityCircles).style("filter","url(#glow)"),x.selectAll(".axisLabel").data(d3.range(1,n.levels+1).reverse()).enter().append("text").attr("class","axisLabel").attr("x",4).attr("y",function(t){return-t*c/n.levels}).attr("dy","0.4em").style("font-size","10px").attr("fill","#737373").text(function(t){return d(i*t/n.levels)});var v=x.selectAll(".axis").data(s).enter().append("g").attr("class","axis");v.append("line").attr("x1",0).attr("y1",0).attr("x2",function(t,e){return u(1.1*i)*Math.cos(p*e-Math.PI/2)}).attr("y2",function(t,e){return u(1.1*i)*Math.sin(p*e-Math.PI/2)}).attr("class","line").style("stroke","white").style("stroke-width","2px"),v.append("text").attr("class","legend").style("font-size","11px").attr("text-anchor","middle").attr("dy","0.35em").attr("x",function(t,e){return u(i*n.labelFactor)*Math.cos(p*e-Math.PI/2)}).attr("y",function(t,e){return u(i*n.labelFactor)*Math.sin(p*e-Math.PI/2)}).text(function(t){return t}).call(r,n.wrapWidth);var g=d3.svg.line.radial().interpolate("linear-closed").radius(function(t){return u(t.value)}).angle(function(t,e){return e*p});n.roundStrokes&&g.interpolate("cardinal-closed");var m=f.selectAll(".radarWrapper").data(e).enter().append("g").attr("class","radarWrapper");m.append("path").attr("class","radarArea").attr("d",function(t){return g(t)}).style("fill",function(t,e){return n.color(e)}).style("fill-opacity",n.opacityArea).on("mouseover",function(){d3.selectAll(".radarArea").transition().duration(200).style("fill-opacity",.1),d3.select(this).transition().duration(200).style("fill-opacity",.7)}).on("mouseout",function(){d3.selectAll(".radarArea").transition().duration(200).style("fill-opacity",n.opacityArea)}),m.append("path").attr("class","radarStroke").attr("d",function(t){return g(t)}).style("stroke-width",n.strokeWidth+"px").style("stroke",function(t,e){return n.color(e)}).style("fill","none").style("filter","url(#glow)"),m.selectAll(".radarCircle").data(function(t){return t}).enter().append("circle").attr("class","radarCircle").attr("r",n.dotRadius).attr("cx",function(t,e){return u(t.value)*Math.cos(p*e-Math.PI/2)}).attr("cy",function(t,e){return u(t.value)*Math.sin(p*e-Math.PI/2)}).style("fill",function(t,e,a){return n.color(a)}).style("fill-opacity",.8),f.selectAll(".radarCircleWrapper").data(e).enter().append("g").attr("class","radarCircleWrapper").selectAll(".radarInvisibleCircle").data(function(t){return t}).enter().append("circle").attr("class","radarInvisibleCircle").attr("r",1.5*n.dotRadius).attr("cx",function(t,e){return u(t.value)*Math.cos(p*e-Math.PI/2)}).attr("cy",function(t,e){return u(t.value)*Math.sin(p*e-Math.PI/2)}).style("fill","none").style("pointer-events","all").on("mouseover",function(t){newX=parseFloat(d3.select(this).attr("cx"))-10,newY=parseFloat(d3.select(this).attr("cy"))-10,M.attr("x",newX).attr("y",newY).text(d(t.value)).transition().duration(200).style("opacity",1)}).on("mouseout",function(){M.transition().duration(200).style("opacity",0)});var M=f.append("text").attr("class","tooltip").style("opacity",0)}