function valueAddedTax() {
  var value = document.getElementById("amount").value;
  var tax = 0.09;
  var vat = Number(value) * tax;
  var finalPrice = vat + Number(value);
  document.getElementById("demo1").innerHTML =
    " مالیات بر ارزش افزوده کل = " + vat;
  document.getElementById("demo2").innerHTML =
    " مبلغ نهایی بعد از مالیات بر ارزش افزوده کل = " + finalPrice;
}
function openLinks(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }