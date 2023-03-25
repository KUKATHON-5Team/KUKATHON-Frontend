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
import { useNavigate } from "react-router-dom";

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

  const [jobs, setJobs] = useState({ job: [] });
  const [homes, setHomes] = useState({ home: "" });
  const [times, setTimes] = useState({ time: "" });

  const [active, setActive] = useState(false);
  const onApp = () => {
    setActive(!active);
  };

  const handleJobClick = (id) => {
    if (id === "TOTAL") {
      return;
    } else {
      setJobs({ ...jobs, job: [...jobs.job, id] });
    }
  };

  const handleHomeClick = (id) => {
    setHomes({ ...homes, home: id });
  };

  const handleTimeClick = (id) => {
    setTimes({ ...times, time: id });
  };

  const navigate = useNavigate();
  const handlePrint = () => {
    navigate("/joblist", { state: { regions, jobs, homes, times } });
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
          <div
            className={active ? "jobButton_on" : "jobButton_off"}
            id="TOTAL"
            onClick={() => {
              handleJobClick("TOTAL"), onApp();
            }}
          >
            <img src={total} />
            전체
          </div>
          <div
            className={
              jobs.job.includes("CLEANER") ? "jobButton_on" : "jobButton_off"
            }
            id="CLEANER"
            onClick={() => handleJobClick("CLEANER")}
          >
            <img src={clean} />
            청소
          </div>
          <div
            className={
              jobs.job.includes("SECURITY") ? "jobButton_on" : "jobButton_off"
            }
            id="SECURITY"
            onClick={() => handleJobClick("SECURITY")}
          >
            <img src={parking} />
            경비/주차
          </div>
          <div
            className={
              jobs.job.includes("MEDICAL") ? "jobButton_on" : "jobButton_off"
            }
            id="MEDICAL"
            onClick={() => handleJobClick("MEDICAL")}
          >
            <img src={care} />
            돌봄/의료
          </div>
        </div>
        <div className="selectJob2">
          <div
            className={
              jobs.job.includes("MART") ? "jobButton_on" : "jobButton_off"
            }
            id="MART"
            onClick={() => handleJobClick("MART")}
          >
            <img src={mart} />
            마트/편의점
          </div>
          <div
            className={
              jobs.job.includes("SIMPLEWORK") ? "jobButton_on" : "jobButton_off"
            }
            id="SIMPLEWORK"
            onClick={() => handleJobClick("SIMPLEWORK")}
          >
            <img src={labor} />
            단순노동
          </div>
          <div
            className={
              jobs.job.includes("MAKER") ? "jobButton_on" : "jobButton_off"
            }
            id="MAKER"
            onClick={() => handleJobClick("MAKER")}
          >
            <img src={Union} />
            소일거리
          </div>
          <div
            className={
              jobs.job.includes("ETC") ? "jobButton_on" : "jobButton_off"
            }
            id="ETC"
            onClick={() => handleJobClick("ETC")}
          >
            <img src={elses} />
            기타
          </div>
        </div>
        <div className="border"></div>
        <div className="homeWork">
          <div className="homeWorkTitle">재택 가능 여부</div>
          <div className="homeWorkSelect">
            <div
              className={
                homes.home.includes("yes") ? "workcheck_on" : "workcheck_off"
              }
              id="yes"
              onClick={() => handleHomeClick("yes")}
            >
              O
            </div>
            <div
              className={
                homes.home.includes("no") ? "workcheck_on" : "workcheck_off"
              }
              id="no"
              onClick={() => handleHomeClick("no")}
            >
              X
            </div>
          </div>
        </div>
        <div className="workTime">
          <div className="timeTitle">기간</div>
          <div className="timeSelect">
            <div
              className={
                times.time.includes("MORETHAN1WEEK")
                  ? "timeCheck_on"
                  : "timeCheck_off"
              }
              id="MORETHAN1WEEK"
              onClick={() => handleTimeClick("MORETHAN1WEEK")}
            >
              1주 이상
            </div>
            <div
              className={
                times.time.includes("MORETHAN1MONTH")
                  ? "timeCheck_on"
                  : "timeCheck_off"
              }
              id="MORETHAN1MONTH"
              onClick={() => handleTimeClick("MORETHAN1MONTH")}
            >
              1달 이상
            </div>
            <div
              className={
                times.time.includes("MORETHAN3MONTH")
                  ? "timeCheck_on"
                  : "timeCheck_off"
              }
              id="MORETHAN3MONTH"
              onClick={() => handleTimeClick("MORETHAN3MONTH")}
            >
              3달 이상
            </div>
            <div
              className={
                times.time.includes("MORETHAN6MONTH")
                  ? "timeCheck_on"
                  : "timeCheck_off"
              }
              id="MORETHAN6MONTH"
              onClick={() => handleTimeClick("MORETHAN6MONTH")}
            >
              6달 이상
            </div>
            <div
              className={
                times.time.includes("MORETHAN1YEAR")
                  ? "timeCheck_on"
                  : "timeCheck_off"
              }
              id="MORETHAN1YEAR"
              onClick={() => handleTimeClick("MORETHAN1YEAR")}
            >
              1년 이상
            </div>
            <div
              className={
                times.time.includes("MORETHAN3YEAR")
                  ? "timeCheck_on"
                  : "timeCheck_off"
              }
              id="MORETHAN3YEAR"
              onClick={() => handleTimeClick("MORETHAN3YEAR")}
            >
              3년 이상
            </div>
          </div>
        </div>
        <div className="selectButton">
          <button onClick={handlePrint}>조회하기</button>
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
    color: gray;
    height: 50px;
    line-height: 50px;
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
    margin-top: 22px;
    width: 100%;
    height: 75px;
    justify-content: space-around;
  }

  div.jobButton_off {
    border: 2px solid lightgray;
    width: 18%;
    font-size: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1b1b1b;
    img {
      width: 22px;
      height: 15px;
      margin-bottom: 10px;
      object-fit: contain;
    }
  }
  div.jobButton_on {
    border: 2px solid #9b4ce0;
    width: 18%;
    font-size: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1b1b1b;
    img {
      width: 22px;
      height: 15px;
      margin-bottom: 10px;
      object-fit: contain;
    }
  }
  div.border {
    width: 100%;
    height: 6px;
    background-color: #d6d6d6;
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
  div.workcheck_on {
    border: 2px solid #9b4ce0;
    width: 100%;
    height: 100%;
    color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.workcheck_off {
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
  div.timeCheck_on {
    border: 2px solid #9b4ce0;
    width: 64px;
    text-align: center;
    height: 100%;
    color: gray;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.timeCheck_off {
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
