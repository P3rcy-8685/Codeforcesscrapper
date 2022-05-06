var handle;
async function general(){
    handle=document.getElementById("handle").value;
    url="https://codeforces.com/api/user.info?handles="+handle
    var resp=await fetch(url);
    var data= await resp.json();
    console.log(data);
    if (data.status=="OK"){
        let p="Ye le "+handle+" ka data";
        document.getElementById("Data").innerHTML=p;
        p=data.result[0].contribution;
        document.getElementById("Contributions").innerHTML=handle+" has "+p+" contributions";
        p=data.result[0].lastOnlineTimeSeconds;
        p=new Date(p*1000)
        console.log(data);
        let m=p.getMinutes()
        let s=p.getSeconds()
        let x="Last Online: "+ p.getFullYear()+"/"+(p.getMonth()+1)+"/"+p.getDate()+" "+p.getHours()+" Hours "+ m+" minutes and "+s+" seconds";
        document.getElementById("time").innerHTML=x;
        p=data.result[0].firstName;
        x=data.result[0].lastName;
    
        if (p==undefined || x==undefined){
            document.getElementById("username").innerHTML="Bhai naam toh daalde apna";
        }
        else{
            document.getElementById("username").innerHTML="Name: "+p+" "+x;
        }
    }

    else{
        document.getElementById("Data").innerHTML="Bhai handle toh check karliya kar"
    }

    }
//This is part 1 done finally 
//LESSGOOOO

async function chart(){
    handle=document.getElementById("handle").value;
    url="https://codeforces.com/api/user.rating?handle="+handle
    var resp=await fetch(url);
    var data= await resp.json();
    console.log(data);
    if (data.status=="OK"){
        var p="Ye le "+handle+" ka Charts";
        document.getElementById("Data").innerHTML=p;
        const ctx= document.getElementById('myChart').getContext('2d');
        var ch=new chart(ctx,{
            type:"line",
            data: {
                labels:["Jan","Feb","Mar"],
                datasets:[
                    {
                        label:"2015",
                        data:[1,2,3]
                    }
                ]
            }
        })
    }
    else{
        document.getElementById("Data").innerHTML="Bhai handle toh check karliya kar"
    }

    }
    async function blog(){
        handle=document.getElementById("handle").value;
        url="https://codeforces.com/api/user.blogEntries?handle="+handle
        var resp=await fetch(url);
        var data= await resp.json();
        console.log(data);
        if (data.status=="OK"){
            var p="Ye le "+handle+" ka latest blog";
            document.getElementById("Data").innerHTML=p;
            var l=document.getElementById("link")
            l.href="https://codeforces.com/blog/entry/"+data.result[0].id
            l.innerHTML=data.result[0].title
            url="https://codeforces.com/api/blogEntry.comments?blogEntryId="+data.result[0].id
            var resp=await fetch(url);
            var data= await resp.json();
            if (data.status=="OK"){
                document.getElementById("time").innerHTML="Last Commment: "+ data.result[0].text}
            else{
                document.getElementById("time").innerHTML="No one commented (*sad music in background*)"

            }
        }
        else{
            document.getElementById("Data").innerHTML="Bhai ye blog nai likhta"
           
            }
        }
    

        async function friend(){
            handle=document.getElementById("handle").value;
            url="https://codeforces.com/api/user.rating?handle="+handle
            var resp=await fetch(url);
            var data= await resp.json();
            console.log(data);
            if (data.status=="OK"){
                var p="Ye le "+handle+" ka Charts";
                document.getElementById("Data").innerHTML=p;
                const ctx= document.getElementById('myChart').getContext('2d');
                var ch=new chart(ctx,{
                    type:"line",
                    data: {
                        labels:["Jan","Feb","Mar"],
                        datasets:[
                            {
                                label:"2015",
                                data:[1,2,3]
                            }
                        ]
                    }
                })
            }
            else{
                document.getElementById("Data").innerHTML="Bhai handle toh check karliya kar"
            }
        
            }
            async function contest(){
                handle=document.getElementById("handle").value;
                url="https://codeforces.com/api/user.rating?handle="+handle
                var resp=await fetch(url);
                var data= await resp.json();
                console.log(data);
        
                if (data.status=="OK"){

                    if(Object.keys(data.result).length>0){
                    document.getElementById("ta").style.display = "block";
                    var p="Ye le "+handle+" ka Previous Contests";
                    document.getElementById("Data").innerHTML=p;
                    var x=Object.keys(data.result).length
                    var j=1
                    for(let i=x-1;i>=0;i--){
                        document.getElementById("s"+j).innerHTML=j
                        document.getElementById("c"+j).innerHTML=data.result[i].contestName;
                        document.getElementById("r"+j).innerHTML=data.result[i].rank
                        j++
                        console.log(j)
                        if(j==4){
                            break;
                        }
                    } }
                    else{
                        document.getElementById("ta").style.display = "none";

                        document.getElementById("Data").innerHTML="Sadge bhai CP nai karte, tum cool nai ho"

                    }

                }  
                else{
                    document.getElementById("ta").style.display = "none";

                    document.getElementById("Data").innerHTML="Sadge bhai CP nai karte, tum cool nai ho"
                }
            
                }
async function hide(){
    document.getElementById("general").style.display = "none";
    document.getElementById("chartbutt").style.display = "none";
    document.getElementById("blogbutt").style.display = "none";
    document.getElementById("contbutt").style.display = "none";
    document.getElementById("friendbutt").style.display = "none";
    document.getElementById("goback").style.display = "block";

}
async function back(){
    document.getElementById("general").style.display = "inline";
    document.getElementById("chartbutt").style.display = "inline";
    document.getElementById("blogbutt").style.display = "inline";
    document.getElementById("contbutt").style.display = "inline";
    document.getElementById("friendbutt").style.display = "inline";
    document.getElementById("goback").style.display = "none";
    document.getElementById("Data").innerHTML="";
    document.getElementById("username").innerHTML="";
    document.getElementById("Contributions").innerHTML="";
    document.getElementById("time").innerHTML="";
    document.getElementById("demo").innerHTML="";
    document.getElementById("ta").style.display="none";
    document.getElementById("link").innerHTML="";


    

}