import React, { useEffect } from "react";
import styles from "./user.module.css";
import { useSelector } from "react-redux";
import { Chip } from "../styled";
import { selectTrue } from "../helper";
import { useNavigate } from "react-router-dom";

const User = () => {
  const store = useSelector((store) => store.app);
  const navigate = useNavigate();

  const chips = selectTrue(store.genre);

  if( !store.user ){
    return null
  }

  return (
    <div className={styles.box}>
      <div className={styles.pfp}>
        <img
          src="https://s3-alpha-sig.figma.com/img/fb40/f748/ece2d5643cf2ffbd07a4d6221e0c51ff?Expires=1701648000&Signature=iZvbyEDVdfX53LC6eF9KT9hk61P1~IHhss8CyQKeZuN3UPlBUwIykLEzOdUL0Xn1wbbwWgkOXUV8TqH~PdrNR-jRFw-UAnuulPhFxLtKhNmb9meTyNm9s1G9HaegFqXdTXUCxOLEjZNQChd-q5mfZet2DrbTyVNYY7noKgUY0EvsDHXg23fTi0XZdEMt3qbP0vb8P06dJOpv17yDVGPRP9cKPEfxMzCG2wRCC8uXADZLuV40mzF1AVUiLdHE~dSi-XAIlsaPitIIK3uCbLfVYTzhZAFSs6noEa1UJ4M-tmrrx2gYA4W6TK5hihEjHSIIhWYOKs7ByKo5O-nmQrrb2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
      <div>
        <div>
          <p>{store.user.name}</p>
          <p>{store.user.email}</p>
          <h2>{store.user.username}</h2>
        </div>
        <div className={styles.chips}>
          {chips.map((m) => (
            <Chip key={m.id} $bgColor="#9F94FF">
              <p>{m.id}</p>
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
