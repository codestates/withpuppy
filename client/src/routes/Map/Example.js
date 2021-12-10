import React from 'react';
import { useSelector } from 'react-redux';
import { selectMap } from 'redux/store';

function Example() {
  // ! mapData가 카카오 공식문서상에서 map에 해당되는 부분입니다.
  // # 해당 example을 참고삼아서 구현해주시면 될 것 같습니다.
  // var map = new kakao.maps.Map(mapContainer, mapOption);

  const { mapData } = useSelector(selectMap);
  console.log(mapData);

  return <div>hello</div>;
}

export default Example;
