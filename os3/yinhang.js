var Pcount;//进程的数量
var Scount;//需要资源数
var Max=[[]];//存储进程需要资源的矩阵
var Allocation=[[]];//存储进程已分配资源的矩阵
var Available=[];//存储剩余系统资源
var req=[];//进程请求资源,req[0]为进程的序号
var Finish=[];
var Work=[];
var in_p_count=document.getElementById('inPCount');
in_p_count.onblur=function(){
	Pcount=in_p_count.value*1
	//创建Pcount个div，挂载到#insun
	addElement(Pcount,'insun');
	addElement(Pcount,'inkm');
}
var in_s_count=document.getElementById('inSCount');
in_s_count.onblur=function(){
	Scount=in_s_count.value*1
	//创建Scount个div，挂载到#inkm
	
}
function addElement(count,str) {
	for(var i=0;i<count;i++){
		createElements('input',str);
	}
}
function createElements(str,elenemt) {//在elenemt末尾创建str元素
	var a=document.getElementById(elenemt);
	var b=document.createElement(str);
	var c=document.createElement('br');
	a.appendChild(b);
	a.appendChild(c);
}
function main(){
	var arrObjP=document.getElementsByTagName('input');
	for(var i=2;i<Pcount+2;i++){
		var string = arrObjP[i].value;
		Max[i-2]=string.split('.');
	}
	var arrObjS=document.getElementsByTagName('input');
	for(var i=2+Pcount;i<Pcount+2+Pcount;i++){
		var string = arrObjS[i].value;
		Allocation[i-2-Pcount]=string.split('.');
	}
}
function IsSafe(){
	console.log(Scount)
	var i,j,l,k;
	for(i=0;i<Scount;i++){
		if(Max[req[0][i]*1]*1<req[i+1]*1){
			alert('您输入的请求数超过进程的需求量');
			return 0;
		}
		if(Available[i]<req[i+1]){
			alert('您输入的请求数超过系统有的资源数')
			return 0;
		}		
	}
	for(i=0;i<Pcount;i++) {
		Finish[i]=0;		
	}
	var sunshine=0;
	for(i=0;i<Scount;i++){
		Available[i]=Available[i]*1+Allocation[req[0]*1][i]*1;	
		Allocation[req[0]*1][i]=0;
		Finish[req[0]*1]=1;
	}
	for(i=0;i<Scount;i++){
		Work[i]=Available[i];
	}
	var times=0;
	while(true){
		sunshine=0;
		for(j=0;j<Pcount;j++){
			sunshine=sunshine*1+Finish[j]*1;
		}
		j=0;
		if(sunshine==Pcount){//系统是安全的
			alert('系统是安全的');
			var inputObj= document.getElementsByTagName('input');
			console.log(inputObj)
			inputObj[2+req[0]*1].value='0.0.0';
			inputObj[2+req[0]*1+Pcount].value='0.0.0';
			var re=document.getElementById('request');
			for(i=0;i<Scount;i++) {
				Available[i]=Available[i]*1+req[i+1]*1;
			}
			var vv='';
			for(i=0;i<Scount;i++){
				vv=vv+Available[i]+'.';
			}
			re.value=vv;
			return;
		}else if(times==1000){//系统不安全
			alert('0');
			return;
		}else{
			for(i=0;i<Pcount;i++){
				times++;
				if(Finish[i]==0){//如果满足条件，尝试将资源分配给他，并且收回他的资源
					var ws1=(Max[i][0]*1-Allocation[i][0]*1)<=Work[0]*1;
					var ws2=(Max[i][1]*1-Allocation[i][1]*1)<=Work[1]*1;
					var ws3=(Max[i][2]*1-Allocation[i][2]*1)<=Work[2]*1;
					if(ws1 && ws2 && ws3){
						Work[j]=Work[j]*1+Allocation[i][j]*1;
						Finish[i]=1;
					}
				}
			}
		}
	}
	// for(i=0;i<Pcount;i++){
	// 	if(Finish[i]==1){ 
	// 		continue;
	// 	}
	// 	else{
	// 		for(j=0;j<Scount;j++){
	// 			if(Max[i][j]>Work[j]) {
	// 				break;
	// 			}
	// 		}
	// 		if(j==Scount){
	// 			Finish[i]=1;
	// 			for(k=0;k<Scount;k++) {
	// 				Work[k]+=Available[i][k];
	// 			}
	// 			p[l++]=i;
	// 			i=-1;
	// 		}
	// 		else {
	// 			continue;
	// 		}
	// 	}
	// 	// if(l==Pcount){ //系统是安全的
	// 	// 	alert('不可分配资源')
			
	// 	// 	return 1;
	// 	// }else{
			
	// 	// 	alert('系统是安全的')
	// 	// }
	//  }
}
var btn1=document.getElementById('button1');
btn1.onclick=function(){
	main()
	var res = document.getElementById('request');
	var request = document.getElementById('resave');
	Available=res.value.split('.');//剩余资源 
	req=request.value.split('.')//进程请求资源
	IsSafe();
}

