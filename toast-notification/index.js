let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="bi bi-check-circle-fill"></i> Successfully submitted';
let errorMsg = '<i class="bi bi-check-circle-fill"></i> Please fix the error';
let invalidMsg = '<i class="bi bi-exclamation-circle-fill"></i> Invalid message';

function showToast(msg){
   let toast = document.createElement('div');
   
   toast.classList.add('toast');
   toast.innerHTML = msg;
   toastBox.appendChild(toast);

   if(msg.includes('error')){
    toast.classList.add("error");
   }

   if(msg.includes('Invalid')){
    toast.classList.add("invalid");
   }

   setTimeout(() => {
        toast.remove();
   },6000)
}