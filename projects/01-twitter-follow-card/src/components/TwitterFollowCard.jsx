import { useState } from 'react';
import PropTypes from 'prop-types';


TwitterFollowCard.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};

export function TwitterFollowCard({
  children,
  userName,
  isFollowing
}) {
  const [followState, setFollowState] = useState(isFollowing);

  const imgSrc = `https://unavatar.io/github/${userName}`;
  const imgAlt = `user image - ${userName}`;
  const user = `@${userName}`;
  const followButtonText = followState ? "Siguiendo" : "Seguir";
  const followButtonClassName = followState ? "tw-followCard-button is-following" : "tw-followCard-button";

  const hadleClick = () => {
    setFollowState(!followState);
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imgSrc} alt={imgAlt} />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-infoUserName">{user}</span>
        </div>
      </header>
      <aside>
        <button className={followButtonClassName} onClick={hadleClick} >
          <span className='tw-followCard-text'>{followButtonText} </span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}



