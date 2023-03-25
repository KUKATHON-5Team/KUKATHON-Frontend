import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import formAxios from "../api/formAxios";
import { PageContainer } from "../container/PageContainer";
import { Cookies } from "react-cookie";
import total from "../assets/img/total.png";
import clean from "../assets/img/clean.png";
import care from "../assets/img/care.png";
import elses from "../assets/img/elses.png";
import mart from "../assets/img/mart.png";
import parking from "../assets/img/parking.png";
import Union from "../assets/img/Union.png";
import labor from "../assets/img/labor.png";
import RegionModal from "../components/RegionModal";

const cookies = new Cookies();

const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const MainPage = () => {
  const [user, setUser] = useState({});
  const [regions, setRegions] = useState({
    big: "",
    middle: "",
    small: "",
  });
  const [regionmodals, setRegionmodals] = useState({
    big: false,
    middle: false,
    small: false,
  });
  const handleClickRegionBtn = (size) => {
    setRegionmodals({ ...regionmodals, [size]: !regionmodals.size });
  };

  const getUserInfo = async () => {
    try {
      const response = await axios.get("/test");
      const data = response.data;
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const setUserInfo = () => {
    axios
      .post("/user", {
        name: "jwo0o0",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.error("ERROR: ", err));
  };

  const login = () => {
    formAxios
      .post("/login", {
        username: "test",
        password: "test",
      })
      .then((res) => {
        console.log("로그인", res.headers[""]);
        setCookie("JSESSIONID", "B63CE861F599E85A2FCD69A32FDD8E42", {
          secure: true,
          sameSite: "none",
        });
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  };

  useEffect(() => {}, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageContainer topnav>
      <MainPageContainer>
        <div className="slogan">
          <div className="main">내일을 같이하며, 내 일을 가치있게!</div>
          <div className="sub">
            조건을 설정하여 어르신에게 특화된 알바를 찾아보세요!
          </div>
        </div>
        <div className="selectRegion">
          <RegionModal
            size={"big"}
            regionmodals={regionmodals}
            isOpen={regionmodals.big}
            setIsOpen={setRegionmodals}
            regions={regions}
            setRegions={setRegions}
          />
          <RegionModal
            size={"middle"}
            regionmodals={regionmodals}
            isOpen={regionmodals.middle}
            setIsOpen={setRegionmodals}
            bigger={regions.big}
            regions={regions}
            setRegions={setRegions}
          />
          <RegionModal
            size={"small"}
            regionmodals={regionmodals}
            isOpen={regionmodals.small}
            setIsOpen={setRegionmodals}
            bigger={regions.middle}
            regions={regions}
            setRegions={setRegions}
          />
          <div
            className="regionToggle"
            onClick={() => {
              handleClickRegionBtn("big");
            }}
          >
            {regions.big ? regions.big : "맞춤지역"}
          </div>
          <div
            className="regionToggle"
            onClick={() => {
              handleClickRegionBtn("middle");
            }}
          >
            {regions.middle ? regions.middle : "맞춤지역"}
          </div>
          <div
            className="regionToggle"
            onClick={() => {
              handleClickRegionBtn("small");
            }}
          >
            {regions.small ? regions.small : "맞춤지역"}
          </div>
        </div>
        <div className="selectJob1">
          <div className="jobButton">
            <img src={total} />
            전체
          </div>
          <div className="jobButton">
            <img src={clean} />
            청소
          </div>
          <div className="jobButton">
            <img src={parking} />
            경비/주차
          </div>
          <div className="jobButton">
            <img src={care} />
            돌봄/의료
          </div>
        </div>
        <div className="selectJob2">
          <div className="jobButton">
            <img src={mart} />
            마트/편의점
          </div>
          <div className="jobButton">
            <img src={labor} />
            단순노동
          </div>
          <div className="jobButton">
            <img src={Union} />
            소일거리
          </div>
          <div className="jobButton">
            <img src={elses} />
            기타
          </div>
        </div>
        <div className="border"></div>
        <div className="homeWork">
          <div className="homeWorkTitle">재택 가능 여부</div>
          <div className="homeWorkSelect">
            <div className="workcheck">O</div>
            <div className="workcheck">X</div>
          </div>
        </div>
        <div className="workTime">
          <div className="timeTitle">기간</div>
          <div className="timeSelect">
            <div className="timeCheck">1개월 이상</div>
            <div className="timeCheck">3개월 이상</div>
            <div className="timeCheck">6개월 이상</div>
            <div className="timeCheck">1년 이상</div>
            <div className="timeCheck">3년 이상</div>
            <div className="timeCheck">협의</div>
          </div>
        </div>
        <div className="selectButton">
          <button>조회하기</button>
        </div>
      </MainPageContainer>
    </PageContainer>
  );
};

const MainPageContainer = styled.div`
  // color: ${({ theme }) => theme.colors.mainColor};
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  align-items: center;

  div.slogan {
    font-size: 20px;
    height: 80px;
    background-image: linear-gradient(to right, #9b4ce0, #4778ca);
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  div.main {
    font-weight: bold;
    margin-bottom: 5px;
    margin-left: 20px;
  }
  div.sub {
    font-size: 10px;
    margin-left: 20px;
  }
  div.selectRegion {
    width: 80%;
    height: 50px;
    // border: 1px solid black;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  div.regionToggle {
    border: 1px solid lightgray;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    color: gray;
  }
  div.selectJob1 {
    display: flex;
    margin-top: 30px;
    width: 100%;
    height: 75px;
    justify-content: space-around;
  }
  div.selectJob2 {
    display: flex;
    margin-top: 20px;
    width: 100%;
    height: 75px;
    justify-content: space-around;
  }
  div.jobButton {
    border: 1px solid lightgray;
    width: 18%;
    font-size: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      width: 25px;
      height: 15px;
      margin-left: 25px;
      margin-bottom: 10px;
    }
  }
  div.border {
    width: 100%;
    height: 6px;
    background-color: lightgray;
    margin-top: 50px;
  }
  div.homeWork {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    margin-left: -50px;
  }
  div.homeWorkTitle {
    font-size: 16px;
    font-weight: bold;
    margin-top: 4px;
  }
  div.homeWorkSelect {
    display: flex;
    margin-left: 30px;
    width: 124px;
    height: 32px;
    justify-content: space-around;
    align-items: center;
  }
  div.workcheck {
    border: 2px solid lightgray;
    width: 100%;
    height: 100%;
    color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.workTime {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
  }
  div.timeTitle {
    font-size: 16px;
    font-weight: bold;
    margin-top: 4px;
    margin-left: 20px;
  }
  div.timeSelect {
    display: flex;
    margin-left: 30px;
    width: 248px;
    height: 32px;
    align-items: center;
    flex-wrap: wrap;
    min-width: 270px;
  }
  div.timeCheck {
    border: 2px solid lightgray;
    width: 64px;
    text-align: center;
    height: 100%;
    color: gray;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.selectButton {
    margin-top: 80px;

    button {
      width: 298px;
      height: 45px;
      border-radius: 5px;
      border: none;
      background-image: linear-gradient(to right, #9b4ce0, #4778ca);
      color: white;
      font-weight: bold;
    }
  }
`;
