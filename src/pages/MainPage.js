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

const cookies = new Cookies();

const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const MainPage = () => {
  const [user, setUser] = useState({});

  const [datas, setDatas] = useState({ job: [], home: [], time: [] });
  const [isActive, setIsActive] = useState("");

  const onAdd = (e) => {
    setIsActive((prev) => {
      return e.target.id;
    });
  };

  const handleJobClick = (id) => {
    setDatas({ ...datas, job: [...datas.job, id] });
  };

  const handleHomeClick = (id) => {
    setDatas({ ...datas, home: [...datas.home, id] });
  };

  const handleTimeClick = (id) => {
    setDatas({ ...datas, time: [...datas.time, id] });
  };

  const handlePrint = () => {
    console.log(datas);
  }

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

  useEffect(() => { }, []);

  const jobs = [{ name: '전체', id: 'total', img: 'total' }]

  return (
    <PageContainer topnav navbar>
      <MainPageContainer>
        <div className="slogan">
          <div className="main">내일을 같이하며, 내 일을 가치있게!</div>
          <div className="sub">조건을 설정하여 어르신에게 특화된 알바를 찾아보세요!</div>
        </div>
        <div className="selectRegion">
          <div className="regionToggle">맞춤지역</div>
          <div className="regionToggle">맞춤지역</div>
          <div className="regionToggle">맞춤지역</div>
        </div>

        <div className="selectJob1">
          <div className={datas.job.includes('total') ? 'jobButton_on' : 'jobButton_off'} id="total" onClick={() => handleJobClick("total")}><img src={total} />전체</div>
          <div className={datas.job.includes('clean') ? 'jobButton_on' : 'jobButton_off'} id="clean" onClick={() => handleJobClick("clean")}><img src={clean} />청소</div>
          <div className={datas.job.includes('parking') ? 'jobButton_on' : 'jobButton_off'} id="parking" onClick={() => handleJobClick("parking")}><img src={parking} />경비/주차</div>
          <div className={datas.job.includes('care') ? 'jobButton_on' : 'jobButton_off'} id="care" onClick={() => handleJobClick("care")}><img src={care} />돌봄/의료</div>
        </div>
        <div className="selectJob2">
          <div className={datas.job.includes('mart') ? 'jobButton_on' : 'jobButton_off'} id="mart" onClick={() => handleJobClick("mart")}><img src={mart} />마트/편의점</div>
          <div className={datas.job.includes('labor') ? 'jobButton_on' : 'jobButton_off'} id="labor" onClick={() => handleJobClick("labor")}><img src={labor} />단순노동</div>
          <div className={datas.job.includes('Union') ? 'jobButton_on' : 'jobButton_off'} id="Union" onClick={() => handleJobClick("Union")}><img src={Union} />소일거리</div>
          <div className={datas.job.includes('elses') ? 'jobButton_on' : 'jobButton_off'} id="elses" onClick={() => handleJobClick("elses")}><img src={elses} />기타</div>
        </div>
        <div className="border"></div>
        <div className="homeWork">
          <div className="homeWorkTitle">재택 가능 여부</div>
          <div className="homeWorkSelect">
            <div className={datas.home.includes('yes') ? 'workcheck_on' : 'workcheck_off'} id="yes" onClick={() => handleHomeClick("yes")}>O</div>
            <div className={datas.home.includes('no') ? 'workcheck_on' : 'workcheck_off'} id="no" onClick={() => handleHomeClick("no")}>X</div>
          </div>
        </div>
        <div className="workTime">
          <div className="timeTitle">기간</div>
          <div className="timeSelect">
            <div className={datas.time.includes('oneMonthOver') ? 'timeCheck_on' : 'timeCheck_off'} id="oneMonthOver" onClick={() => handleTimeClick("oneMonthOver")}>1개월 이상</div>
            <div className={datas.time.includes('threeMonthOver') ? 'timeCheck_on' : 'timeCheck_off'} id="threeMonthOver" onClick={() => handleTimeClick("threeMonthOver")}>3개월 이상</div>
            <div className={datas.time.includes('sixMonthOver') ? 'timeCheck_on' : 'timeCheck_off'} id="sixMonthOver" onClick={() => handleTimeClick("sixMonthOver")}>6개월 이상</div>
            <div className={datas.time.includes('oneYearOver') ? 'timeCheck_on' : 'timeCheck_off'} id="oneYearOver" onClick={() => handleTimeClick("maroneYearOvert")}>1년 이상</div>
            <div className={datas.time.includes('threeYearOver') ? 'timeCheck_on' : 'timeCheck_off'} id="threeYearOver" onClick={() => handleTimeClick("threeYearOver")}>3년 이상</div>
            <div className={datas.time.includes('discuss') ? 'timeCheck_on' : 'timeCheck_off'} id="discuss" onClick={() => handleTimeClick("discuss")}>협의</div>
          </div>
        </div>
        <div className="selectButton">
          <button onClick={handlePrint}>조회하기</button>
        </div>
      </MainPageContainer>
    </PageContainer >
  );
};

const MainPageContainer = styled.div`
  // color: ${({ theme }) => theme.colors.mainColor};
  display : flex;
  flex-direction : column;
  position: relative;
  height: 100%;
  align-items : center;

  div.slogan {
    font-size: 20px;
    height: 80px;
    background-image : linear-gradient(to right, #9B4CE0, #4778CA);
    width : 100%;
    color : white;
    display : flex;
    flex-direction : column;
    justify-content : center;
  }
  div.main {
    font-weight : bold;
    margin-bottom : 5px;
    margin-left : 20px;
  }
  div.sub {
    font-size: 10px;
    margin-left : 20px;
  }
  div.selectRegion {
    width : 80%;
    height : 50px;
    // border: 1px solid black;
    margin-top : 30px;
    display :flex;
    flex-direction : row;
    justify-content : center;
  }
  div.regionToggle { 
    border : 1px solid lightgray;
    width : 100%;
    text-align : center;
    padding-top : 10px;
    color : gray;
  }
  div.selectJob1{
    display : flex;
    margin-top : 30px;
    width : 100%;
    height : 75px;
    justify-content : space-around;
  }
  div.selectJob2{
    display : flex;
    margin-top : 20px;
    width : 100%;
    height : 75px;
    justify-content : space-around;
  }
  div.jobButton_off { 
    border : 1px solid lightgray;
    width : 18%;
    font-size : 12px;
    text-align : center;
    display : flex;
    flex-direction : column;
    justify-content : center;

    img { 
      width : 25px; 
      height : 15px;
      margin-left : 25px;
      margin-bottom : 10px;
    }
  }
  div.jobButton_on { 
    border : 4px solid #9B4CE0;
    width : 18%;
    font-size : 12px;
    text-align : center;
    display : flex;
    flex-direction : column;
    justify-content : center;

    img { 
      width : 25px; 
      height : 15px;
      margin-left : 25px;
      margin-bottom : 10px;
    }
  }
  div.border { 
    width: 100%;
    height : 6px;
    background-color : lightgray;
    margin-top : 50px;
  }
  div.homeWork { 
    display : flex;
    flex-direction : row;
    margin-top : 40px;
    margin-left : -50px;
  }
  div.homeWorkTitle {
    font-size : 16px;
    font-weight : bold;
    margin-top : 4px;
  }
  div.homeWorkSelect {
    display : flex;
    margin-left : 30px;
    width : 124px;
    height : 32px;
    justify-content : space-around;
    align-items : center;
  }
  div.workcheck_on { 
    border : 4px solid #9B4CE0;
    width : 100%;
    height : 100%;
    color : lightgray;
    display : flex;
    justify-content : center;
    align-items : center;
  }
  div.workcheck_off { 
    border : 2px solid lightgray;
    width : 100%;
    height : 100%;
    color : lightgray;
    display : flex;
    justify-content : center;
    align-items : center;
  }
  div.workTime { 
    display : flex;
    flex-direction : row;
    margin-top : 40px;
  }
  div.timeTitle {
    font-size : 16px;
    font-weight : bold;
    margin-top : 4px;
    margin-left : 20px;
  }
  div.timeSelect {
    display : flex;
    margin-left : 30px;
    width : 248px;
    height : 32px;
    align-items : center;
    flex-wrap : wrap;
    min-width : 270px;
  }
  div.timeCheck_on { 
    border : 4px solid #9B4CE0;
    width : 64px;
    text-align : center;
    height : 100%;
    color : gray;
    font-size : 10px;
    display : flex;
    align-items : center;
    justify-content : center;
  }
  div.timeCheck_off { 
    border : 2px solid lightgray;
    width : 64px;
    text-align : center;
    height : 100%;
    color : gray;
    font-size : 10px;
    display : flex;
    align-items : center;
    justify-content : center;
  }
  div.selectButton {
    margin-top : 80px;

    button { 
      width : 298px;
      height : 45px;
      border-radius : 5px;
      border : none;
      background-image : linear-gradient(to right, #9B4CE0, #4778CA);
      color : white;
      font-weight : bold;
    }
  }


`;
