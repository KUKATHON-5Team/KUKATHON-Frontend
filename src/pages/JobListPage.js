import styled from "styled-components";
import { PageContainer } from "../container/PageContainer";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { JobScrapModal } from "../components/JobScrapModal";

export const JobListPage = () => {
  const jobcount = 42;
  const jobs = [
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageContainer topnav>
      <JobListPageContainer>
        <JobInfo>
          <div className="jobinfo">
            조건에 맞는 알바가 <span>{jobcount}</span>건 있어요!
          </div>
          <select>
            <option value="최신순">최신순</option>
            <option value="시급높은순">시급높은순</option>
            <option value="마감순">마감순</option>
            <option value="인기순">인기순</option>
          </select>
        </JobInfo>
        <JobList>
          {jobs?.map((el, idx) => {
            return (
              <div key={idx} className="job">
                <div className="imgcontainer">
                  <div className="img">이미지</div>
                  <div className="address">서울시 강서구 염창동</div>
                </div>
                <div className="info">
                  <div className="company">(주) 핫시즈너</div>
                  <div className="title">{el.title}</div>
                  <div className="time">월,수,금 | 09:00 ~ 17:00</div>
                  <div className="description">{el.description}</div>
                  <div className="pay">
                    <span>시급</span> 10,000
                  </div>
                </div>
                <LikeBtnContainer>
                  <div>3시간전</div>
                  <button
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <AiOutlineHeart />
                  </button>
                </LikeBtnContainer>
              </div>
            );
          })}
        </JobList>
        <JobScrapModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </JobListPageContainer>
    </PageContainer>
  );
};

const JobListPageContainer = styled.div`
  height: 100%;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
`;

const JobInfo = styled.div`
  display: flex;
  position: relative;
  div.jobinfo {
    color: #222227;
    line-height: 60px;
    font-weight: 600;
    padding: 0 20px;
    span {
      color: #9b4ce0;
    }
    height: 60px;
  }
  select {
    position: absolute;
    right: 10px;
    height: 30px;
    background-color: white;
    border: 1px solid #9b4ce0;
    outline: none;
    margin-top: 13px;
    border-radius: 5px;
    color: #222227;
    font-size: 10px;
    font-weight: 600;
  }
`;

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  div.job {
    height: 160px;
    box-sizing: border-box;
    background-color: white;
    margin: 8px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    position: relative;
  }
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.29);
    border-radius: 100px;
  }
  div.imgcontainer {
    width: 100px;
    margin-right: 15px;
    div.img {
      width: 100px;
      height: 100px;
      border: 1px solid lightgray;
      margin-bottom: 5px;
    }
    div.address {
      font-size: 8px;
      color: #797979;
      font-weight: 500;
      width: 100%;
      text-align: center;
    }
  }
  div.info {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 180px;
    height: 160px;
    padding-top: 20px;
    margin-left: 10px;
    div.company {
      font-size: 8px;
      color: #797979;
      margin-bottom: 5px;
    }
    div.title {
      font-size: 12px;
      font-weight: 600;
      color: black;
      margin-bottom: 5px;
    }
    div.time {
      color: #797979;
      font-size: 8px;
      margin-bottom: 30px;
    }
    div.description {
      font-size: 12px;
      margin-bottom: 3px;
    }
    div.pay {
      font-size: 8px;
      span {
        color: red;
      }
    }
  }
`;

const LikeBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 8px;
    color: #9b4ce0;
    font-weight: 600;
  }
  button {
    background-color: transparent;
    border: none;
    svg {
      fill: #d9d9d9;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
  position: absolute;
  top: 20px;
  right: 10px;
`;
