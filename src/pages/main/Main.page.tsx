import React from "react";
import { MainContainer, CardContainer } from "./Main.styles";
import CardComponent from '../../components/card/Card.component';

import MyImage from "../../assets/images/my_image.png";

const MainPage: React.FC = () => {
  return (
    <MainContainer>
      <CardContainer>
        <CardComponent title="서브 프로젝트 개발일지 03서브 프로젝트 개발일지 03서브 프로젝트 개발일지 03서브 프로젝트 개발일지 03서브 프로젝트 개발일지 03서브 프로젝트 개발일지 03" date="2020.07.24" likeCount={37} commentCount={41} imgSrc={MyImage}/>
        <CardComponent title="서브 프로젝트 개발일지 02" date="2020.07.20" likeCount={35} commentCount={37} imgSrc={MyImage}/>
        <CardComponent title="서브 프로젝트 개발일지 01" date="2020.07.18" likeCount={35} commentCount={30} imgSrc={MyImage}/>
        <CardComponent title="서브 프로젝트 세팅" date="2020.07.12" likeCount={34} commentCount={29} imgSrc={MyImage}/>
        <CardComponent title="서브 프로젝트 조사" date="2020.07.11" likeCount={28} commentCount={25} imgSrc={MyImage}/>
        <CardComponent title="서브 프로젝트 준비" date="2020.07.10" likeCount={30} commentCount={10} imgSrc={MyImage}/>
        <CardComponent title="v2-blog 반성 03" date="2020.07.08" likeCount={24} commentCount={12} imgSrc={MyImage}/>
        <CardComponent title="v2-blog 반성 02" date="2020.07.04" likeCount={1} commentCount={16} imgSrc={MyImage}/>
        <CardComponent title="v2-blog 반성 01" date="2020.06.26" likeCount={2} commentCount={15} imgSrc={MyImage}/>
        <CardComponent title="v2-blog 개발 일지 07 - 마무리" date="2020.06.20" likeCount={0} commentCount={12} imgSrc={MyImage}/>
        <CardComponent title="v2-blog 개발 일지 06" date="2020.06.19" likeCount={4} commentCount={8} imgSrc={MyImage}/>
        <CardComponent title="v2-blog 개발 일지 05" date="2020.06.15" likeCount={10} commentCount={6} imgSrc={MyImage}/>
        <CardComponent title="v2-blog 개발 일지 04" date="2020.06.14" likeCount={7} commentCount={7} imgSrc={MyImage}/>
        <CardComponent title="v2-blog 개발 일지 03" date="2020.06.12" likeCount={2} commentCount={4} imgSrc={MyImage}/>
        <CardComponent title="v2-blog 개발 일지 02" date="2020.06.11" likeCount={1} commentCount={1} imgSrc={MyImage}/>
        <CardComponent title="v2-blog 개발 일지 01" date="2020.06.09" likeCount={4} commentCount={3} imgSrc={MyImage}/>
      </CardContainer>
    </MainContainer>
  );
};

export default MainPage;
