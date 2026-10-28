
/* 실습과제 14-5: Loc8r 홈페이지 */
const index = (req, res) => {
  const locations = [
    {
      id: '1',
      name: '스타벅스 금천시흥점',
      address: '서울시 금천구 시흥대로 164',
      rating: 5,
      distance: '5.8km',
      facilities: ['Hot drinks', 'Food', 'Premium wifi']
    },
    {
      id: '1',
      name: '스타벅스 금천독산점',
      address: '서울시 금천구 두산로 70',
      rating: 4,
      distance: '6.1km',
      facilities: ['Hot drinks', 'Food', 'Premium wifi']
    },
    {
      id: '1',
      name: '스타벅스 독산역점',
      address: '서울시 금천구 가산로 673',
      rating: 4,
      distance: '6.8km',
      facilities: ['Hot drinks', 'Food', 'Premium wifi']
    },
    {
      id: '1',
      name: '스타벅스 안양DT점',
      address: '경기도 안양시 만안구 경수대로 1397',
      rating: 5,
      distance: '6.8km',
      facilities: ['Hot drinks', 'Food', 'Premium wifi']
    }
  ];

  res.render('index', {
    title: 'Loc8r - Find places to work with wifi near you!',
    locations
  });
};

module.exports = {
  index
};
