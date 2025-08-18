/* 
 * hexo theme meow
 * friend link scripts
 */

const initFriendLink = () => {
  const friendsContainer = document.querySelector('#friends-content');
  if (!friendsContainer) return;

  const listFriendsRandom = (classContainer, originClass) => {
    let list = originClass.list;
    if (originClass.class.random) meow.shuffleArray(list);

    list.forEach(friend => {
      let friendAvatar = friend.avatar;
      if (!friendAvatar.match(/^((https?:)?(\/\/[^/]+))/)) {
        friendAvatar = GLOBALCONFIG.root + friendAvatar;
      }
      classContainer.querySelector('.friends-class-list').innerHTML += `<div class="friends-item"><a href="${friend.url}" target="_blank" rel="nofollow"><div class="friends-item-avatar"><img src="${friendAvatar}" no-view alt="Avatar" /></div><div class="friends-item-info"><div class="friends-item-name">${friend.name}</div><div class="friends-item-desc">${friend.desc}</div></div></a></div>`;
    });
  };

  friendsData.friends.forEach(classModule => {
    const classElement = document.createElement('div');
    classElement.className = "friends-class";

    classElement.innerHTML = `<div class="friends-class-title">${classModule.class.name}<span>(${classModule.list.length})</span></div><div class="friends-class-desc">${classModule.class.desc}</div><div class="friends-class-list"></div>`;
    friendsContainer.appendChild(classElement);

    listFriendsRandom(classElement, classModule);

    friendsContainer.innerHTML += "<hr/>";
  });
};

export default initFriendLink;