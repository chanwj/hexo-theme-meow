function openPostReward(){
  'use strict';
  var rewardPanel = document.getElementById('reward-panel');
  rewardPanel.setAttribute('reward-show', true);
}

function closePostReward(){
  'use strict';
  var rewardPanel = document.getElementById('reward-panel');
  rewardPanel.removeAttribute('reward-show')
}