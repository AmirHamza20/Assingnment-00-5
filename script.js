let copyCounter=0,
    heartCount=document.querySelector("#heartCount"),
    coinCount=document.querySelector("#coinCount"),
    copyHeaderBtn=document.querySelector("#copyHeaderBtn"),
    historyList=document.querySelector("#historyList"),
    clearHistory=document.querySelector("#clearHistory");

// card  loop
document.querySelectorAll(".card").forEach(card=>{
    let heartBtn = card.querySelector(".cardHeart"),
        copyBtn  = card.querySelector(".copyBtn"),
        callBtn  = card.querySelector(".callBtn"),
        serviceName = card.querySelector(".serviceName"),
        serviceNumber = card.querySelector(".serviceNumber");

    //  Heart 
    heartBtn.onclick=()=>{
        heartCount.textContent=parseInt(heartCount.textContent)+1;
    };

    // Copy
    copyBtn.onclick=()=>{
        navigator.clipboard.writeText(serviceNumber.textContent);
        copyCounter++;
        copyHeaderBtn.textContent=copyCounter+" Copy";
        alert("Number is Copied: "+serviceNumber.textContent);
    };

    //  Call
    callBtn.onclick=()=>{
        let coins=parseInt(coinCount.textContent);
        if(coins<20){ return alert("You don’t have enough coins to make the call. It requires 20 coins.!"); }

        if(confirm(`Service: ${serviceName.textContent}\nNumber: ${serviceNumber.textContent}\nIt will cost 20 coins to make this call. Proceed?`)){
            coinCount.textContent=coins-20;

            let li=document.createElement("li");
            li.className="text-gray-700 text-sm flex justify-between";
            li.innerHTML=`<span>${serviceName.textContent}<br><span class="text-gray-500">${serviceNumber.textContent}</span></span>
                          <span>${new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</span>`;
            historyList.prepend(li);
        }
    };
});

// Clear History
clearHistory.onclick=()=>historyList.innerHTML="";