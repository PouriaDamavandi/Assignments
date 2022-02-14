// Nav Sidebar JS codes !

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

       //  Vat calculating Scripts
        //break your code in 2 functions like this :
      // function getVat(fee) {
      //   var vatRatio = 0.09;
      //   return fee * vatRatio;
      // }


      
      
      function valueAddedTax() {
        let value = document.getElementById("amount").value;
        document.getElementById("demo1").innerHTML =
          " مالیات بر ارزش افزوده کل = " + getVat(value);
        document.getElementById("demo2").innerHTML =
          " مبلغ نهایی بعد از مالیات بر ارزش افزوده کل = " + (Number(value) + getVat(value));

      }

      function getVat(amount) {
        let percent = 0.09;
      let tax = Number(amount) * percent;
        return Number(tax);
      }
 

      //  BMI Calculating Scripts !

      function getBmiData() {
        let height = document.getElementById("height").value;
        let weight = document.getElementById("weight").value;
        let bmi = calcBmi(height,weight);
        // document.getElementById("bmi").innerHTML = bmi;
        if (bmi < 18.5) {
          document.getElementById("bmi").innerHTML =
            "کمبود وزن داری باید وزنتو افزایش بدی! =" + bmi;
        } if (bmi >= 18.5 && bmi < 24.5) {
          document.getElementById("bmi").innerHTML =
            "کاملا سالمی باید به همین منوال ادامه بدی =" + bmi;
        }
      } if (bmi >= 24.5 && bmi < 29.9) {
        document.getElementById("bmi").innerHTML =
          "اضافه وزن داری اگه رسیدگی نکنی به مرض چاقی دچار میشی! =" + bmi;
      }
     if (bmi >= 29.9) {
      document.getElementById("bmi").innerHTML =
        "دچار مرض چاقی شدی باید تحت نظر یه دکتر تغذیه رژیم مناسب بگیری! =" + bmi;
    }
      

      function calcBmi(height,weight) {
        var bmi = weight / (height * height);
        return bmi;
      }


      // Radius Calculating Scripts !

      function calcArea() {
        var p = 3.14;
        var r = 23;
        var area = r * r * p;
        document.getElementById("demo3").innerHTML = area;
      }
      function getData() {
        alert(document.getElementById("demo3").innerHTML);
      }

      function calcTax(fee) {
        var darsad = 0.09;
        var tax = fee * darsad;
        var total = fee + tax;

        return total;
      }