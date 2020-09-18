let tabsHeader = document.querySelector('.tabs__header');
let tabsContentList = document.querySelectorAll('.tabs__content');
let tabsTabList = document.querySelectorAll('.tabs__tab');

function addTabsActiveClass(index) {
  tabsTabList[index].classList.add('tabs__tab_active');
  tabsContentList[index].classList.add('tabs__content_active');
}

function removeTabsActiveClass() {
  for(let i = 0; i < tabsTabList.length; i++) {
    tabsContentList[i].classList.remove('tabs__content_active');
    tabsTabList[i].classList.remove('tabs__tab_active');
  }
}

tabsHeader.addEventListener('click', function(event) {
  let target = event.target;

  if(target && target.classList.contains('tabs__tab')) {
    for(let i = 0; i < tabsTabList.length; i++) {
      if(target === tabsTabList[i]) {
        removeTabsActiveClass();
        addTabsActiveClass(i);
        break;
      }
    }
  }
})