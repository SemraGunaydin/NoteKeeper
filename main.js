// ! Months
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

//! HTML den gelen elemanlar
const addBox =document.querySelector(".add-box");
const popupBoxContainer=document.querySelector(".popup-box");
const popupBox=document.querySelector(".popup");
const closeBtn=document.querySelector("header i");
const form =document.querySelector("form");

// ! Fonksiyonlar ve olay izleyicileri

// AddBox'a tiklaninca bir fonksiyon tetiklenmesi
addBox.addEventListener("click",()=>{
    // PopupBoxContainer ve popupBox'a bir class ekleme
    popupBoxContainer.classList.add("show");
    popupBox.classList.add("show");
    // arka plandaki sayfa kaydirilmasini engellemek icin
    document.querySelector("body").style.overflow="hidden";
});

// CloseBtn'e tiklayinca popupBoxContainer ve popup'a eklenen classlari kaldirma

closeBtn.addEventListener("click",()=>{
    popupBoxContainer.classList.remove("show");
    popupBox.classList.remove("show");
    // arka plandaki sayfanin kaydilmasini tekrar aktif et
    document.querySelector("body").style.overflow="auto";

});


// form'a bir olay izleyisi ekle ve form icerisindeki verilere eris

form.addEventListener("submit",(e)=>{
    // form gonderildiginde sayfa yenilemesini engelle
    e.preventDefault();

    // form icerisindeki elemanlara erisme
    let titleInput=e.target[0];
    let descriptionInput=e.target[1];

    // form elemanlarinin icerisindeki degerlere ulasma
    let title =titleInput.value.trim();
    let description=descriptionInput.value.trim();

    // Eger title ve description degeri yoksa uyari ver
    if (!title && !description){
        alert("lutfen formdaki gerekli kisimlari doldurunuz!");
    } 
        // Eger title ve description degeri varsa gerekli bilgileri olustur
        const date =new Date();

        let day =date.getDate();
        let year =date.getFullYear();
        let month = months[date.getMonth()]; // guncel tarihin gelmesi icinkullanilir
    
        // Elde edilen verileri bor note objesi altinda toplama

        let noteInfo ={
            title,
            description,
            date:`${month} ${day},${year}`,
        };

});