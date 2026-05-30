var sum =0;
function addExpense(){
    
    let name = document.getElementById("expense-name").value;
let amount = parseFloat(document.getElementById("expense-amount").value);

if(name == "" || isNaN(amount)){
    alert("Enter expense details");
    return;
}
sum += amount;
document.getElementById("expense-list").innerHTML+=
`
<div class = "expense-card">
<p>
${name}-${amount}
</p>
</div>
`;
document.getElementById("total").innerHTML=
`
Total: ₹${sum}
`;
document.getElementById("expense-name").value = "";
document.getElementById("expense-amount").value = "";
}
