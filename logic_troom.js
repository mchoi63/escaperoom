// popup functions
function inv_picture(e) {
  var pic = document.getElementById("pic");
  pic.style.display = "block";
  document.addEventListener("click", function(e) {
    var inside_pic = pic.contains(e.target);
    if (inside_pic) {
      // do nothing
    }
    else {
      pic.style.display = "none";
    }
  });
}
function inv_memo(e) {
  var memo = document.getElementById("mem");
  memo.style.display = "block";
  document.addEventListener("click", function(e) {
    var inside_memo = memo.contains(e.target);
    if (inside_memo) {
      // do nothing
    }
    else {
      memo.style.display = "none";
    }
  });
}
function inv_desktop(e) {
  var desktop = document.getElementById("des");
  desktop.style.display = "block";
  document.addEventListener("click", function(e) {
    var inside_des = desktop.contains(e.target);
    if (inside_des) {
      // do nothing
    }
    else {
      desktop.style.display = "none";
    }
  });
}
function inv_journal(e) {
  var journal = document.getElementById("jou");
  journal.style.display = "block";
  document.addEventListener("click", function(e) {
    var inside_jou = journal.contains(e.target);
    if (inside_jou) {
      // do nothing
    }
    else {
      journal.style.display = "none";
    }
  });
}
function inv_password(e) {
  var password = document.getElementById("pass");
  password.style.display = "block";
  document.addEventListener("click", function(e) {
    var inside_pass = password.contains(e.target);
    if (inside_pass) {
      // do nothing
    }
    else {
      password.style.display = "none";
    }
  });
}

// desktop answer
var ans = document.getElementById("des_answer");
var submit = document.getElementById("des_btn");
submit.addEventListener("click", function(e) {
  if (ans.value == "3") {
    window.location.href = "throom.html";
  }
  else {
    alert("Think again.");
  }
});
