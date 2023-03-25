import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router";
import { PageContainer } from "../container/PageContainer";
import { useState } from "react";
import axios from "../api/axios";
import none_axios from "axios";

const { kakao } = window;

export const JobDetailPage = () => {
  const { jobId } = useParams();

  const [job, setJob] = useState({});
  const [address, setAddress] = useState({
    x: 37.49555,
    y: 127.038726,
  });

  const searchAddress = async (address) => {
    try {
      const response = await none_axios.get(
        "https://dapi.kakao.com/v2/local/search/address.json",
        {
          params: {
            query: address,
          },
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_RESTKEY}`,
          },
        }
      );
      const data = response.data;
      console.log(data);
      let ax = data.document?.length > 0 ? data.documents[0].x : 37.49555;
      let ay = data.document?.length > 0 ? data.documents[0].y : 127.038726;
      setAddress({ x: ax, y: ay });
    } catch (error) {
      console.error("ERROR: ", error);
      setAddress({
        x: 37.49555,
        y: 127.038726,
      });
    }
  };

  const getJobInfo = async () => {
    try {
      const response = await axios.get(`/job/${jobId}`);
      const data = response.data;
      setJob(data);
      searchAddress(data.detailAddress);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(address.x, address.y), //지도의 중심좌표.
      level: 8, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    getJobInfo();
  }, []);

  const handleClickCopyBtn = () => {
    navigator.clipboard.writeText("010-1234-5678");
  };

  return (
    <PageContainer job>
      <JobDetailPageContainer>
        <DetailHeader>
          <div className="title">{job.title}</div>
          <div className="info">
            <div className="company">(주)핫시즈너</div>
            <div className="date">
              모집마감 {Math.floor(Math.random() * 10)}일전
            </div>
          </div>
          <div className="type">{job.category}</div>
        </DetailHeader>
        <DetailTime>
          <div className="title">모집 및 근무 조건</div>
          <div className="boxes">
            <div className="timebox">
              <div className="type">시급</div>
              <div className="value purple">{job.hourWage}</div>
            </div>
            <div className="timebox">
              <div className="type">근무 요일</div>
              <div className="value">{job.workTimeDto?.week}</div>
            </div>
            <div className="timebox">
              <div className="type">근무 시간</div>
              <div className="value">
                {job.workTimeDto?.startTime} ~ {job.workTimeDto?.endTime}
              </div>
            </div>
            <div className="timebox">
              <div className="type">근무 기간</div>
              <div className="value">{job.workPeriodType}</div>
            </div>
          </div>
        </DetailTime>
        <DetailInfo>
          <div className="infobox">
            <div className="type">모집인원</div>
            <div className="value">{job.recruitCount}</div>
          </div>
          <div className="infobox">
            <div className="type">성별</div>
            <div className="value">{job.gender}</div>
          </div>
          <div className="infobox">
            <div className="type">연령</div>
            <div className="value">75세 이하 노인</div>
          </div>
        </DetailInfo>
        <MabBox>
          <div className="mapinfo">
            <div className="title">근무지 정보</div>
            <div className="address">{job.detailAddress}</div>
            <div className="find">길찾기</div>
          </div>
          <div id="map"></div>
        </MabBox>
        <BottomNav onClick={handleClickCopyBtn}>번호 가져오기</BottomNav>
      </JobDetailPageContainer>
    </PageContainer>
  );
};

const JobDetailPageContainer = styled.div`
  height: 100%;
  div.purple {
    color: #7660d6;
  }
`;

const DetailHeader = styled.div`
  height: 75px;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  position: relative;
  div.title {
    font-size: 15px;
    margin-bottom: 5px;
  }
  div.info {
    font-size: 10px;
    display: flex;
    div.company {
      color: #797979;
      width: 70px;
    }
    div.date {
      color: #7660d6;
    }
  }
  div.type {
    position: absolute;
    right: 30px;
    top: 20px;
    border: 1px solid #d6d6d6;
    padding: 0 5px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #797979;
  }
`;

const DetailTime = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 0;
  height: 100px;
  border-bottom: 1px solid #d9d9d9;
  div.purple {
    color: #7660d6 !important;
  }
  div.title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  div.boxes {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  div.timebox {
    div.type {
      font-size: 10px;
      color: #797979;
      margin-bottom: 5px;
    }
    div.value {
      font-size: 14px;
      color: #222227;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const DetailInfo = styled.div`
  height: 100px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #d9d9d9;
  div.infobox {
    display: flex;
    font-size: 14px;
    margin: 5px 0;
  }
  div.type {
    width: 80px;
  }
  div.value {
    color: #7660d6;
    font-weight: 300;
  }
`;

const MabBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  div.mapinfo {
    font-size: 13px;
    div.address {
      color: #797979;
      margin-top: 10px;
    }
  }
  position: relative;
  div.find {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 42px;
    height: 25px;
    border: 1px solid #7660d6;
    border-radius: 3px;
    text-align: center;
    font-size: 10px;
    color: #7660d6;
    line-height: 25px;
  }

  div#map {
    margin-top: 30px;
    width: 100%;
    height: 300px;
  }
`;

const BottomNav = styled.div`
  width: 100%;
  max-width: 420px;
  height: 45px;
  background: linear-gradient(99.63deg, #9b4ce0 11.09%, #4778ca 98.86%);
  position: fixed;
  bottom: 0;
  z-index: 2000;
  font-size: 16px;
  line-height: 45px;
  text-align: center;
  color: white;
  font-weight: 500;
`;
