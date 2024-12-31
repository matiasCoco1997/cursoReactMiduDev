/* eslint-disable react/prop-types */
export const EffectFollowMouse = ({mousePosition, enable}) => {

    const activeClass = enable ? "activar effectMouseFollower" : "desactivar";
    const mousePositionX = mousePosition.x;
    const mousePositionY = mousePosition.y;

    return(
        <div className={activeClass} style={{transform:`translate(${mousePositionX}px , ${mousePositionY}px)`}}></div>
    );
    
}