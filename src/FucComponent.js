import PropTypes from "prop-types";
import React from "react";

// API에게 Data를 받아왔다고 가정하면
const userName = [
  {
    id: 1,
    name: "Moon",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F091%2F2021%2F05%2F26%2FPEP20210526045801055_P2_20210526034213650.jpg&type=a340",
    rating: 5,
  },
  {
    id: 2,
    name: "Geun",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjZfMjUz%2FMDAxNjIyMDI2MDE5NTYy.vE6OtSc06kXanXbA_GKD6MIeQbkaDLX_jt0mkHCRl1og.ajcaX-uVtUIX88B1-Tosp7vAIjipVCPyPO-b09EMbFgg.JPEG.gyeyoung88%2Foutput_3961783931.jpg&type=a340",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Hui",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MjVfNTQg%2FMDAxNTg3ODA2OTIzMjM4.jKij6u9TKcOzWbD4isZAgqhhJfFJM5mToLb1-3V522kg.HWOEQmnbShTwa9y2DvouaQ1P8NHAeV40G2XTJ3Qh1CYg.JPEG.eyey88e%2F1587806922092.jpg&type=a340",
    rating: 4.8,
  },
];

function Emotion({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Emotion.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function FucComponent() {
  return (
    <div className="FucComponent">
      {userName.map((i) => (
        <Emotion key={i.id} name={i.name} picture={i.image} rating={i.rating} />
      ))}
    </div>
  );
}

export default FucComponent;
