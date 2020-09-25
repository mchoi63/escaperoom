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

// journal answer
var book1 = document.getElementById("book1");
var book2 = document.getElementById("book2");
var book3 = document.getElementById("book3");
var book4 = document.getElementById("book4");
var book5 = document.getElementById("book5");
var book6 = document.getElementById("book6");
var book7 = document.getElementById("book7");
var book8 = document.getElementById("book8");
var bookcase = document.getElementById("bookcase");
var jou_ans = document.getElementById("jou_ans");
book4.addEventListener("change", function(e) {
  if (book4.checked && book5.checked && book7.checked && book8.checked) {
    if (book1.checked || book2.checked || book3.checked || book6.checked) {
      //do nothing
    }
    else {
      bookcase.style.display = "none";
      jou_ans.style.display = "block";
    }
  }
});
book6.addEventListener("change", function(e) {
  if (book4.checked && book5.checked && book7.checked && book8.checked) {
    if (book1.checked || book2.checked || book3.checked || book6.checked) {
      //do nothing
    }
    else {
      bookcase.style.display = "none";
      jou_ans.style.display = "block";
    }
  }
});
book7.addEventListener("change", function(e) {
  if (book4.checked && book5.checked && book7.checked && book8.checked) {
    if (book1.checked || book2.checked || book3.checked || book6.checked) {
      //do nothing
    }
    else {
      bookcase.style.display = "none";
      jou_ans.style.display = "block";
    }
  }
});
book8.addEventListener("change", function(e) {
  if (book4.checked && book5.checked && book7.checked && book8.checked) {
    if (book1.checked || book2.checked || book3.checked || book6.checked) {
      //do nothing
    }
    else {
      bookcase.style.display = "none";
      jou_ans.style.display = "block";
    }
  }
});

// password answer
var ans = document.getElementById("pass_answer");
var submit = document.getElementById("pass_btn");
submit.addEventListener("click", function(e) {
  if (ans.value == "50135") {
    window.location.href = "room_solved.html";
  }
  else {
    alert("Think again.");
  }
});
