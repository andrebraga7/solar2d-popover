const button = document.getElementById('popoverBtn');
const popover = document.getElementById('popover');


button.addEventListener('click', handleOpenPopover);
popover.addEventListener('click', handleClosePopover);

function handleOpenPopover() {
  if (popover.matches(":popover-open")) {
    popover.hidePopover();
    return
  }
  
  if (!popover.matches(":popover-open")) {
    popover.showPopover();
  }
}

function handleClosePopover() {
  popover.hidePopover();
}
