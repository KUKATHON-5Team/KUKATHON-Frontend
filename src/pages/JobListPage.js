import styled from "styled-components";
import { PageContainer } from "../container/PageContainer";

export const JobListPage = () => {
  const jobcount = 42;
  const jobs = [
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
    { title: "동대문 엽기 떡볶이", description: "음식 조리 및 주방보조" },
  ];

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
                <div>{el.title}</div>
                <div>{el.description}</div>
              </div>
            );
          })}
        </JobList>
      </JobListPageContainer>
    </PageContainer>
  );
};

const JobListPageContainer = styled.div`
  height: 100%;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
`;

const JobInfo = styled.div`
  display: flex;
  position: relative;
  div.jobinfo {
    color: black;
    line-height: 40px;
    font-weight: 600;
    padding: 0 10px;
    span {
      color: #9b4ce0;
    }
    height: 40px;
  }
  select {
    position: absolute;
    right: 5px;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  div.job {
    height: 200px;
    box-sizing: border-box;
    background-color: white;
    margin: 5px 0;
  }
  overflow-y: scroll;
`;
