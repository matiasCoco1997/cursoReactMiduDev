import "./app.css";
import { TwitterFollowCard } from "./components";

export function App() {

  const users = [
    { id:1, userName: "matiasCoco1997", name:"Matías Coco", isFollowing: true }, 
    { id:2, userName: "mdo", name:"mdo", isFollowing: false }, 
    { id:3, userName: "midudev", name:"midudev", isFollowing: true }, 
    { id:4, userName: "Gentleman-Programming", name:"Gentleman", isFollowing: true }
  ];

  return (
    <section className="app">
      {
        users.map(user => {
          const { id, userName, name, isFollowing } = user;
          return (
            <TwitterFollowCard key={id} userName={userName} isFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  );
}
 /* <TwitterFollowCard userName="matiasCoco1997" isFollowing={true}>
        <h2>Matías Coco</h2>
      </TwitterFollowCard>

      <TwitterFollowCard userName="mdo" isFollowing={false}>
        <h2>mdo</h2>
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev" isFollowing={true}>
        <h2>Midu</h2>
      </TwitterFollowCard>

      <TwitterFollowCard userName="Gentleman-Programming" isFollowing={true}>
        <h2>Gentleman</h2>
      </TwitterFollowCard> */