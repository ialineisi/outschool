// ===================== Fix Variables =====================
const ActiveAgeItemClass = "select-range__item--active"
const $ = document;
const openResponsiveRangeAge = "responsive-ageRangeBox__left"
const activeRangeBoxResponsive = "learnerAgeSelectionAndroid--active"
// ===================== End Fix Variables =====================

// ===================== Data Variable =========================
let Data = {
  minAge:0,
  maxAge:0
}
// ===================== End Data Variables =====================


// ====================== Common Functions ==========
const HandleOpenResponsiveBox = ()=>{
  addClass(activeRangeBoxResponsive,$.querySelector(".learnerAgeSelectionAndroid"))
 
}

const handleApply = ()=>{
  removeClass(activeRangeBoxResponsive,$.querySelector(`.learnerAgeSelectionAndroid`))

}

// ====================== End Common Functions ==========


// ===================== Fix Methods =====================

const clickHandler = (Elem,func)=>{
  console.log(Elem)
    Elem.addEventListener("click",func)
}

const removeClass = (Class,Elem)=>{
  Elem.classList.remove(Class)
}
const addClass = (Class,Elem)=>{
  Elem.classList.add(Class)
}
const checkElements = (NodeClass,type="single")=>{
  if(type == "single"){
    if($.querySelector(`.${NodeClass}`)){
        return {message: "ok"}
      }else{
        return {message: "not"}
      }
  }else{
    if($.querySelectorAll(`.${NodeClass}`)){
      return {message: "ok"}
    }else{
       return {message: "not"}
    }
  }
}
const fetchAttr = (Elem,Attr)=>{
  return {data: Elem.getAttribute(Attr)}
}
// ===================== End Fix Methods =====================

// ========================= Handling Open and Close Navbar =========================
const iconList = $.querySelectorAll(".footer-box-toggle h5 svg");
iconList.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    if (e.target.tagName === "svg") {
      e.target.parentElement.parentElement.classList.toggle("open");
    } else {
      e.target.parentElement.parentElement.parentElement.classList.toggle(
        "open"
      );
    }
  });
});

// ========================= Article Slider =========================
const articleSliderPrevBtn = $.querySelector(".slider-prev-btn");
const articleSliderNextBtn = $.querySelector(".slider-next-btn");
const articleSliderNextBtnBox = $.querySelector(".slider-next-btn-box");
const articleSliderPrevBtnBox = $.querySelector(".slider-prev-btn-box");
const articleSliderWrapper = $.querySelector(".article-slider__wrapper");

articleSliderPrevBtn.addEventListener("click", (e) => {
  articleSliderWrapper.scroll({
    left: 0,
    behavior: "smooth",
  });
  articleSliderPrevBtnBox.classList.remove("active");
  articleSliderNextBtnBox.classList.add("active");
});
articleSliderNextBtn.addEventListener("click", (e) => {
  articleSliderWrapper.scroll({
    left: 5000,
    behavior: "smooth",
  });
  articleSliderPrevBtnBox.classList.add("active");
  articleSliderNextBtnBox.classList.remove("active");
});

// ========================= Drop Down javascript handler =========================
let dropDown = $.querySelector(".search-dropdownBox");
let searchInput = $.querySelector(".navabar-searchBox__input");
searchInput.addEventListener("click", () => {
  dropDown.classList.toggle("search-dropdownBox--active");
});
$.body.addEventListener("click", (e) => {
  if (e.target !== searchInput) {
    if ($.querySelector(".search-dropdownBox--active")) {
      $.querySelector(".search-dropdownBox--active").classList.remove(
        "search-dropdownBox--active"
      );
    }
  }
});
// ========================= end Drop Down javascript handler =========================

// ========================= Start responsive menu coding =========================

let responsiveButton = $.querySelector(".responsive-btn");

let responsiveMenu = $.querySelector(".responsive-shadow");
let closeMenuIcons = $.querySelectorAll(".closeMenu");
const closeMenu = (e) => {
  $.querySelector(".responsive-shadow--active").classList.remove(
    "responsive-shadow--active"
  );
};

closeMenuIcons.forEach((closeMenuIcon) => {
  closeMenuIcon.addEventListener("click", closeMenu);
});

responsiveMenu.addEventListener("click", (e) => {
  if (e.target == responsiveMenu) {
    $.querySelector(".responsive-shadow--active").classList.remove(
      "responsive-shadow--active"
    );
  }
});

responsiveButton.addEventListener("click", () => {
  responsiveMenu.classList.add("responsive-shadow--active");
});
// ========================= end responsive menu coding =========================

// =========================  mega menu coding =========================

let megaMenu = $.querySelectorAll(".mega-menu");

megaMenu[2].style.right = "-12rem";
megaMenu[3].classList.add("mega-menu--right");
megaMenu[4].classList.add("mega-menu--right");
// ========================= end mega menu coding =========================


// ========================= coding select Age Range =========================
let selectAgeItems = $.querySelectorAll(".select-range__item");

selectAgeItems.forEach(selectAgeItem=>{
    selectAgeItem.addEventListener('click',()=>{
      console.log(checkElements(ActiveAgeItemClass,'single').message)
      if(checkElements(ActiveAgeItemClass,'single').message == 'ok'){
          removeClass(ActiveAgeItemClass,$.querySelector(`.${ActiveAgeItemClass}`))
      }
      Data.minAge = fetchAttr(selectAgeItem,'minAge')
      Data.maxAge = fetchAttr(selectAgeItem,'maxAge')

      addClass(ActiveAgeItemClass,selectAgeItem)
    })
})
// ========================= end coding select Age Range =========================
clickHandler($.querySelector(`.${openResponsiveRangeAge}`),HandleOpenResponsiveBox)
clickHandler($.querySelector(".learnerAgeSelectionAndroid-title"),()=>{
  removeClass(activeRangeBoxResponsive,$.querySelector(`.learnerAgeSelectionAndroid`))
})
clickHandler($.querySelector(".cancel-btn"),()=>{
  removeClass(activeRangeBoxResponsive,$.querySelector(`.learnerAgeSelectionAndroid`))

})
clickHandler($.querySelector(".apply-btn"),handleApply)
// ====================== learnaer Age Selection in mobile size ================

