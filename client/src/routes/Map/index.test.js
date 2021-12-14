//  <>
//       <MapHeader className="MapHeader" />
//       <MapMain>
//         <MapContainer ref={mapRef} searchPlace={place} className="MapContainer">
//           <SearchContainer className="inputForm" onSubmit={handleSubmit}>
//             <SearchBar
//               placeholder="장소 검색"
//               onChange={onChange}
//               value={inputText}
//             ></SearchBar>
//             <SearchBtn type="submit">검색</SearchBtn>
//           </SearchContainer>
//           <Btn onClick={openWalkHandler}>산책등록</Btn>
//           {isWalkOpen === true ? (
//             <Walk setIsWalkOpen={setIsWalkOpen}></Walk>
//           ) : null}
//         </MapContainer>
//         <UserContainer>
//           {isMarkerSelected ? (
//             <UserCard>
//               <UserInfo
//                 puppyName="강아지 이름 테스트 입니다"
//                 userName="사람 이름 테스트 입니다"
//                 puppyAge={7}
//                 introduceTo="소개글 테스트 입니다"
//               ></UserInfo>
//               <Reply className="flex-center-C Reply"></Reply>
//             </UserCard>
//           ) : (
//             <ContentTitle>
//               <MainText>핀을 클릭해서 친구들을 만나보세요</MainText>
//               <MainImg src={petchingPuppyImg} />
//             </ContentTitle>
//           )}
//         </UserContainer>
//       </MapMain>
//  </>

// const MapMain = styled.main`
//   display: flex;
//   height: calc(100vh - 7rem);
//   & .MapContainer {
//     flex: 0.65;
//   }

//   @media screen and (max-width: 900px) {
//     height: 100vh;
//     */ & .MapContainer {
//       min-height: 20rem;
//       /* max-height: 35rem; */
//     }
//   }
//   @media screen and (min-width: 1400px) {
//     & .MapContainer {
//       flex: 0.75;
//     }
//   }
// `;
// const MapContainer = styled.div`
//   position: relative;
//   min-height: 50rem;
// `;
// const UserContainer = styled.div`
//   width: 35%;
//   position: absolute;
//   padding: 0;
//   margin: 0;
//   right: 0;
//   z-index: 4;

//   @media screen and (max-width: 850px) {
//     display: none;
//   }
//   @media screen and (min-width: 1400px) {
//     width: 25%;
//   }
// `;

// const ContentTitle = styled.div`
//   text-align: center;
//   padding-top: 75%;
//   padding-bottom: 25%;
//   @media screen and (max-width: 900px) {
//     display: none;
//   }
// `;

// const MainText = styled.div`
//   font-size: 2.3rem;
//   color: ${({ theme }) => theme.colors.mainColor};
// `;

// const MainImg = styled.img`
//   width: 70%;
//   height: 70%;
// `;

// const UserCard = styled.section`
//   display: flex
//   flex-direction: row;
//   position: absolute;
//   padding-left: 3%;
//   height: calc(100vh - 7rem);
//   width: 100%;
//   color: ${({ theme }) => theme.colors.mainColor};
//    @media screen and (max-width: 900px) {
//     display: none;
//   }

//   & .UserInfo {
//     color: ${({ theme }) => theme.colors.mainColor};
//     flex: 0.2;
//   }

//   & .Reply {
//     flex: 0.8;
//   }

//   @media screen and (min-width: 567px) and (max-width: 900px) {
//     & .UserInfo {
//       flex: 0.3;
//     }

//     & .Reply {
//       flex: 0.7;
//     }
//   }
// `;
