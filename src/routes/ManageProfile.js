import { useState, useEffect, Component } from "react";
import Movie from "../components/Movie";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import * as common from "../CommonFunction.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function ManageProfile() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>넷플릭스를 시청할 프로필을 선택하세요.</h1>
      <div className={styles.row}>
        <figure
          onMouseEnter={common.profile_mouseIn}
          onMouseLeave={common.profile_mouseOut}
        >
          <img
            className={styles.profile_img}
            src="https://yt3.ggpht.com/LQFf-dk_iKNQpammhtOxRuS67QJhsWaEyg0OyFE5UD7PcatFaOzR6q23NnGkSbeMm0kYPeTD5w=s900-c-k-c0x00ffffff-no-rj"
          />
          <figcaption>
            <FontAwesomeIcon className={styles.edit_icon} icon={faEdit} />
          </figcaption>
        </figure>
        <figure
          onMouseEnter={common.profile_mouseIn}
          onMouseLeave={common.profile_mouseOut}
        >
          <img
            className={styles.profile_img}
            src="https://i.pinimg.com/236x/cb/24/f1/cb24f1478772b27702ff45e5490b6b6f.jpg"
          />
          <figcaption>
            <FontAwesomeIcon className={styles.edit_icon} icon={faEdit} />
          </figcaption>
        </figure>
        <figure
          onMouseEnter={common.profile_mouseIn}
          onMouseLeave={common.profile_mouseOut}
        >
          <img
            className={styles.profile_img}
            src="https://item.kakaocdn.net/do/579ba1722b47f8f99e52ab4461ae447b7f9f127ae3ca5dc7f0f6349aebcdb3c4"
          />
          <figcaption>
            <FontAwesomeIcon className={styles.edit_icon} icon={faEdit} />
          </figcaption>
        </figure>
        <figure
          onMouseEnter={common.profile_mouseIn}
          onMouseLeave={common.profile_mouseOut}
        >
          <img
            className={styles.profile_img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqkt-T7P7wZosqcFaetkHrwA_NAedCeA3sg&usqp=CAU"
          />
          <figcaption>
            <FontAwesomeIcon className={styles.edit_icon} icon={faEdit} />
          </figcaption>
        </figure>
        <button
          className={styles.plus_button}
          onMouseEnter={common.button_mouseIn}
          onMouseLeave={common.button_mouseOut}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <Link to="/">
          <button
            className={styles.profile_edit}
            onMouseEnter={common.button_mouseIn}
            onMouseLeave={common.button_mouseOut}
          >
            완료
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ManageProfile;
