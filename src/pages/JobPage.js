import { useEffect } from "react";
import styled from "styled-components";
import { PageContainer } from "../container/PageContainer";
import axios from "axios";

const { kakao } = window;

export const JobPage = () => {
  const searchAddress = async (address) => {
    try {
      const response = await axios.get(
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
      console.log(data.documents[0].x, data.documents[0].y);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.49555, 127.038726), //지도의 중심좌표.
      level: 8, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <PageContainer>
      <JobPageContainer>
        <div id="map"></div>
        <button
          onClick={() => {
            searchAddress("서울 용산구 한강대로23길 55 3층");
          }}
        >
          주소 검색
        </button>
      </JobPageContainer>
    </PageContainer>
  );
};

const JobPageContainer = styled.div`
  height: 100%;
  div#map {
    width: 300px;
    height: 200px;
  }
`;
