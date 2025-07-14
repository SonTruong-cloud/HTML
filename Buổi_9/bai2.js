function kiemtra(){
    var mgn = parseInt(document.getElementsByName("msg")[0].values);
    if (mgn < 2) 
    {
        alert('Không phải số nguyên tố')
        return;
    }
    for (var i = 2; i <= Math.sqrt(mgn); i++) {
      if (mgn % i == 0)
        {
        alert('Là số nguyên tố')
        return
        } 
    }
    alert('Là số nguyên tố')
}