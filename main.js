function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('.nav ul');
    menuIcon.classList.toggle('active');
    navUl.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    // Ambil tombol yang membuka modal
    var btn1 = document.getElementById("exploreBtn");
    var btn2 = document.getElementById("exploreBtn2");

    // Ambil elemen modal
    var modal1 = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");

    // Ambil elemen <span> yang menutup modal
    var span1 = modal1.getElementsByClassName("close")[0];
    var span2 = modal2.getElementsByClassName("close")[0];

    // Ketika tombol diklik, buka modal
    if (btn1) {
        btn1.onclick = function () {
            modal1.style.display = "block";
        }
    }

    if (btn2) {
        btn2.onclick = function () {
            modal2.style.display = "block";
        }
    }

    // Ketika <span> diklik, tutup modal
    if (span1) {
        span1.onclick = function () {
            modal1.style.display = "none";
        }
    }

    if (span2) {
        span2.onclick = function () {
            modal2.style.display = "none";
        }
    }

    // Ketika pengguna mengklik di luar modal, tutup modal
    window.onclick = function (event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        } else if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
});

// SPK SCROLL
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// logikan & modal hasil inputan SPK ikan tongkol
document.addEventListener('DOMContentLoaded', function () {
    var modalIkan = document.getElementById("modal-ikan");
    var btnIkan = document.getElementById("pilih-ikan");
    var spanIkan = document.getElementsByClassName("close-ikan")[0];

    // Ketika tombol "Pilih" ditekan, buka modal
    btnIkan.onclick = function (event) {
        event.preventDefault(); // Mencegah pengiriman form
        displayAnswersIkan();
        modalIkan.style.display = "block";
    }

    // Ketika tombol penutup modal diklik, tutup modal
    spanIkan.onclick = function () {
        modalIkan.style.display = "none";
    }

    // Ketika pengguna mengklik di luar modal, tutup modal
    window.onclick = function (event) {
        if (event.target == modalIkan) {
            modalIkan.style.display = "none";
        }
    }

    function displayAnswersIkan() {
        var totalScore = 0;
        var answers = [];
        var selects = document.querySelectorAll("form#ikan select");
        selects.forEach(function (select) {
            var value = parseInt(select.value);
            if (!isNaN(value)) {
                totalScore += value;
                answers.push(select.options[select.selectedIndex].text);
            } else {
                answers.push("Pilihan tidak valid");
            }
        });

        var quality = "";
        if (totalScore >= 48) {
            quality = "Kualitas Sangat Baik, Ikan tongkol yang dipilih memiliki kualitas yang sangat baik, cocok untuk diproses menjadi keripik ikan.";
        } else if (totalScore >= 36) {
            quality = "Kualitas Baik, Ikan tongkol yang dipilih memiliki kualitas yang cukup baik, mungkin bisa digunakan untuk keripik ikan dengan kualitas sedang.";
        } else if (totalScore >= 24) {
            quality = "Kualitas Cukup, Ikan tongkol yang dipilih memiliki kualitas kurang baik, mungkin perlu dipilih ikan lain untuk keripik ikan yang berkualitas.";
        } else {
            quality = "Kualitas Buruk, Ikan tongkol yang dipilih memiliki kualitas rendah, tidak cocok untuk diproses menjadi keripik ikan.";
        }

        var answersList = document.getElementById("answers-list-ikan");
        answersList.innerHTML = "";
        answers.forEach(function (answer) {
            var li = document.createElement("li");
            li.textContent = answer;
            answersList.appendChild(li);
        });

        var qualityElement = document.getElementById("quality-ikan");
        qualityElement.textContent = quality;
    }
});


// logikan & modal hasil inputan SPK UBI UNGU =================================================
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("modal-ubi");
    var btn = document.getElementById("pilih-ubi");
    var span = document.getElementsByClassName("close-ubi")[0];

    // Ketika tombol "Pilih" ditekan, buka modal
    btn.onclick = function (event) {
        event.preventDefault(); // Mencegah pengiriman form
        displayAnswers();
        modal.style.display = "block";
    }

    // Ketika tombol penutup modal diklik, tutup modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Ketika pengguna mengklik di luar modal, tutup modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function displayAnswers() {
        var totalScore = 0;
        var answers = [];
        var selects = document.querySelectorAll("form#ubi select");
        selects.forEach(function (select) {
            var value = parseInt(select.value);
            if (!isNaN(value)) {
                totalScore += value;
                answers.push(select.options[select.selectedIndex].text);
            } else {
                answers.push("Pilihan tidak valid");
            }
        });

        var quality = "";
        if (totalScore >= 48) {
            quality = "Kualitas Sangat Baik,ubi ungu yang dipilih memiliki kualitas yang sangat baik, cocok untuk diproses menjadi selai ubi ungu.";
        } else if (totalScore >= 36) {
            quality = "Kualitas Baik,ubi ungu yang dipilih memiliki kualitas yang cukup baik, mungkin bisa digunakan untuk selai ubi ungu dengan kualitas sedang.";
        } else if (totalScore >= 24) {
            quality = "Kualitas Cukup,ubi ungu yang dipilih memiliki kualitas kurang bagik, mungkin perlu dipilih ikan lain untuk selai ubi ungu yang berkualitas.";
        } else {
            quality = "Kualitas Buruk,ubi ungu yang dipilih memiliki kualitas rendah,tidak cocok untuk diproses menjadi selai ubi ungu";
        }

        var answersList = document.getElementById("answers-list-ubi");
        answersList.innerHTML = "";
        answers.forEach(function (answer) {
            var li = document.createElement("li");
            li.textContent = answer;
            answersList.appendChild(li);
        });

        var qualityElement = document.getElementById("quality-ubi");
        qualityElement.textContent = quality;
    }
});