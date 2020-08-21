import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase/fire";
import { Link, useNavigate } from "@reach/router";
import { FaPlus } from "react-icons/fa";

export default function Header() {
  const user = useContext(UserContext);
  const [showSignOut, setShowSignOut] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const navigate = useNavigate();
  return (
    <Nav>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <Logo>BOOKMARKS</Logo>
      </Link>

      {user && (
        <ImageContainer>
          {showAdd && <div style={{ color: "white" }}>Add Bookmark</div>}
          <FaPlus
            style={{ cursor: "pointer" }}
            onMouseOver={() => setShowAdd(true)}
            onMouseOut={() => setShowAdd(false)}
            color="white"
            size={30}
          />
          {showSignOut && <div style={{ color: "white" }}>Sign Out</div>}
          <Image
            onClick={() => {
              auth.signOut().then(() => navigate("/"));
            }}
            onMouseOver={() => setShowSignOut(true)}
            onMouseOut={() => setShowSignOut(false)}
            src={
              user.photoURL ||
              "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
            }
            alt="profile-pic"
          />
        </ImageContainer>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: black;
  @media (max-width: 600px) {
    height: 100px;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-family: "Montserrat";
  font-weight: 900;
  letter-spacing: 20px;
  color: white;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    letter-spacing: 10px;
  }
`;

const Image = styled.img`
  height: 90px;
  width: 90px;
  border: 1px solid black;
  border-radius: 50%;
  margin: 5px 10px;
  cursor: pointer;
  @media (max-width: 600px) {
    height: 60px;
    width: 60px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
