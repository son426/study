import { useState, useEffect, Component } from "react";
import Movie from "../components/Movie";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>넷플릭스를 시청할 프로필을 선택하세요.</h1>
      <div className={styles.row}>
        <Link to="/movie">
          <img
            className={styles.profile_img}
            src="https://yt3.ggpht.com/LQFf-dk_iKNQpammhtOxRuS67QJhsWaEyg0OyFE5UD7PcatFaOzR6q23NnGkSbeMm0kYPeTD5w=s900-c-k-c0x00ffffff-no-rj"
          />

          <img
            className={styles.profile_img}
            src="https://i.pinimg.com/236x/cb/24/f1/cb24f1478772b27702ff45e5490b6b6f.jpg"
          />

          <img
            className={styles.profile_img}
            src="https://item.kakaocdn.net/do/579ba1722b47f8f99e52ab4461ae447b7f9f127ae3ca5dc7f0f6349aebcdb3c4"
          />

          <img
            className={styles.profile_img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqkt-T7P7wZosqcFaetkHrwA_NAedCeA3sg&usqp=CAU"
          />
        </Link>
        <button>+</button>
      </div>
      <div className={styles.row}>
        <button>프로필 관리</button>
      </div>
    </div>
  );
}

export default Profile;
