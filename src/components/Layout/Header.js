import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase/fire";
import { Link, useNavigate } from "@reach/router";

export default function Header() {
  const user = useContext(UserContext);
  const [showSignOut, setShowSignOut] = useState(false);
  const navigate = useNavigate();
  return (
    <Nav>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <Logo>BOOKMARKS</Logo>
      </Link>

      {user && (
        <ImageContainer>
          {showSignOut && <div style={{ color: "white" }}>Sign Out</div>}
          <Image
            onClick={() => {
              auth.signOut().then(() => navigate("/"));
            }}
            onMouseOver={() => setShowSignOut(true)}
            onMouseOut={() => setShowSignOut(false)}
            src={user.photoURL}
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
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-family: "Montserrat";
  font-weight: 900;
  letter-spacing: 20px;
  color: white;
`;

const Image = styled.img`
  height: 90px;
  width: 90px;
  border: 1px solid black;
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
