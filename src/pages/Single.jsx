import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} />
            </Link>
            <img src={Delete} />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nihil
          numquam?
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nihil
          numquam? Enim quidem obcaecati a harum, laborum sunt, repellat
          pariatur numquam, quibusdam aspernatur praesentium. Eum blanditiis
          laborum consectetur nobis accusamus?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nihil
          numquam? Enim quidem obcaecati a harum, laborum sunt, repellat
          pariatur numquam, quibusdam aspernatur praesentium. Eum blanditiis
          laborum consectetur nobis accusamus?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nihil
          numquam? Enim quidem obcaecati a harum, laborum sunt, repellat
          pariatur numquam, quibusdam aspernatur praesentium. Eum blanditiis
          laborum consectetur nobis accusamus?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
