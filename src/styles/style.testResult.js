import { styled } from "styled-components";

export const Page = styled.div`
  background-color: #f4f9dd;
  min-height: 100vh;
`;

export const ButtonContainer = styled.div`
  float: right;
  margin-top: 15px;
  margin-right: 20px;
`;

export const Button = styled.button`
  background-color: #102e54;
  color: white;
  border-radius: 18px;
  padding: 13px;
  margin-right: 5px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #09192e;
  }
`;

export const DetailButton = styled.button`
  cursor: pointer;
  background-color: #102e54;
  color: white;
  border-radius: 10px;
  margin-left: 125px;
  margin-top: 5px;

  padding: 7px;
  border: none;
  &:hover {
    background-color: #09192e;
  }
`;

export const TypeCharacter = styled.img`
  width: 250px;
  height: auto;
  margin-top: 115px;
`;

// 장소 추천
export const Place = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

export const Description = styled.pre`
  background-color: #e5d3a9;
  padding: 30px;
  text-align: center;
  line-height: 22px;
  margin-bottom: 10px;
  line-height: 30px;
  border-radius: 7px;
`;

export const GongjuTypeContainer = styled.div`
  margin-top: 64px;
`;

export const GongjuExName = styled.div`
  font-size: 30px;
  // margin-left: 250px;
  text-align: center;
  font-weight: 600;
  margin-top: 30px;
`;

export const GongjuTypeLabel = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const BoxLocation = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-left: 200px;
`;

export const ImageTitle = styled.li`
  margin-left: 9px;
`;

export const ImageContainer = styled.div`
  object-fit: cover;
  width: 300px;
  height: 200px;
  margin: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 5px;
`;

export const FooterTitle = styled.div`
  color: #503b3b;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 30px;
`;

export const GomgjuNickname = styled.div`
  font-size: 20px;
`;
