import React from "react";
import "../Stylesheets/Teams.css";
import photoOne from "../assets/Images/photoOne.jpg";
import photoTwo from "../assets/Images/photoTwo.jpg";
import photoThree from "../assets/Images/photoThree.jpg";
const Teams = () => {
  const members = [
    {
      name: "John Smith",
      image: photoOne,
      desc: "Ut eu ex Lorem quis Lorem deserunt ullamco id pariatur dolor. Minim proident enim consectetur do. Dolor laboris cupidatat ipsum incididunt ea nisi aliqua. Consectetur aliquip commodo nostrud eiusmod. Esse cupidatat aliqua ea tempor nisi. Do dolore reprehenderit anim pariatur ipsum. Voluptate et deserunt veniam deserunt ut sit. Magna et sit elit laborum. Laboris est incididunt ipsum nisi reprehenderit enim veniam laborum ullamco eu.  ",
    },
    {
      name: "Elina Williams",
      image: photoTwo,
      desc: "Ipsum laborum incididunt quis anim aute nulla laboris cupidatat aute. Ea ad voluptate exercitation laboris cupidatat eu minim ut ut dolor. Culpa cillum aliqua sit velit eu. Eiusmod duis mollit fugiat exercitation irure Lorem ea ullamco aute non.Laborum ad et in magna. Adipisicing eu pariatur aliquip commodo commodo eu dolor adipisicing cupidatat laboris ipsum eu qui. Aliquip adipisicing minim laborum eu dolore ex aute adipisicing aute.  ",
    },
    {
      name: "Shawn Stark",
      image: photoThree,
      desc: "Mollit qui officia id dolor fugiat reprehenderit duis dolore. In sint qui labore incididunt. Tempor mollit voluptate cillum in eu irure.Id qui labore enim in nulla nostrud et cillum amet. Sint aliqua excepteur ad consequat sit id sit qui enim veniam dolore. Deserunt culpa pariatur nulla reprehenderit dolore.Pariatur non do cillum reprehenderit commodo nostrud ullamco officia duis dolore. Aute veniam veniam sit deserunt occaecat. Qui in occaecat est sit excepteur et enim esse cupidatat magna sunt incididunt.",
    },
  ];

  return (
    <div className="Teams-container">
      <h3 style={{fontWeight:"bold",marginBottom:"10px"}}>Teams</h3>
      <p style={{fontWeight:"600"}}>
        Sunt pariatur nulla sint sint deserunt tempor et quis tempor ea deserunt
        do pariatur laborum.Ut nulla sint laborum exercitation.Laboris quis
        minim amet qui ullamco velit amet ut adipisicing ullamco aliqua.
      </p>
      {members.map((elm, index) => {
        return (
          <div key={index} className="members">
            <div className="prof">
              <img src={elm.image}/>
              <p style={{fontWeight:"bold"}}>{elm.name}</p>
              <p style={{fontWeight:"500",color:"#afc0cc"}}>Designation Here</p>
            </div>
            <div className="description">{elm.desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Teams;
