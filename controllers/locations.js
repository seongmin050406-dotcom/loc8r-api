
const locations = {
  '1': {
    _id: '1',
    name: '스타벅스 안양DT점',
    address: '경기도 안양시',
    reviews: []
  }
};

// 14-1: 리뷰 작성 폼 표시
const renderReviewForm = (req, res, location) => {
  res.render('location-review-form', {
    title: `Review ${location.name} on Loc8r`,
    pageHeader: {
      title: `Review ${location.name}`
    },
    location
  });
};

const addReview = (req, res) => {
  const location = locations[req.params.locationid];

  if (!location) {
    return res.status(404).send('장소를 찾을 수 없습니다.');
  }

  renderReviewForm(req, res, location);
};

// 14-2: 리뷰 제출 및 저장
// 14-3: 리뷰 내용 유효성 검사
const doAddReview = (req, res) => {
  const location = locations[req.params.locationid];

  if (!location) {
    return res.status(404).send('장소를 찾을 수 없습니다.');
  }

  const { author, rating, reviewText } = req.body;

  // 리뷰 내용이 비어 있으면 오류 표시
  if (typeof reviewText !== 'string' || !reviewText.trim()) {
    return res.status(400).render('error', {
      title: '400, something gone wrong',
      message: 'Validation failed',
      error: {
        status: 400,
        stack: 'Review validation failed: reviewText is required.'
      }
    });
  }

  if (
    typeof author !== 'string' ||
    !author.trim() ||
    !rating ||
    !Number.isFinite(Number(rating)) ||
    Number(rating) < 1 ||
    Number(rating) > 5
  ) {
    return res.status(400).render('error', {
      title: '400, something gone wrong',
      message: '작성자와 평점을 올바르게 입력해 주세요.',
      error: {
        status: 400,
        stack: 'Author and rating are required. Rating must be between 1 and 5.'
      }
    });
  }

  location.reviews.push({
    author: author.trim(),
    rating: Number(rating),
    reviewText: reviewText.trim(),
    createdOn: new Date().toLocaleString('ko-KR')
  });

  return res.redirect(`/location/${location._id}`);
};

// 14-2: 장소 상세 페이지와 리뷰 표시
const locationInfo = (req, res) => {
  const location = locations[req.params.locationid];

  if (!location) {
    return res.status(404).send('장소를 찾을 수 없습니다.');
  }

  return res.render('location-info', {
    title: location.name,
    location
  });
};

module.exports = {
  addReview,
  doAddReview,
  locationInfo
};
