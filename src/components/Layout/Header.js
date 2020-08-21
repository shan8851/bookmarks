import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase/fire";
import { Link } from "@reach/router";

export default function Header() {
  const user = useContext(UserContext);
  const [showSignOut, setShowSignOut] = useState(false);

  return (
    <Nav>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <Logo>BOOKMARKS</Logo>
      </Link>

      {user && (
        <ImageContainer>
          {showSignOut && <div>Sign Out</div>}
          <Image
            onClick={() => {
              auth.signOut();
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
  background-color: #e0e0e0;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 20px;
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
