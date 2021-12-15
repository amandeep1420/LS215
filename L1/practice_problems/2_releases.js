/*
> filter for objects that have both an id and title property
> transform each object into one only containing the id and title properties
*/

const processReleaseData = function processReleaseData(data) { // made some changes after reviewing solution syntax
  return data.filter(releaseObj => releaseObj.id > 0 && releaseObj.title)
             .map(releaseObj => ({id: releaseObj.id, title: releaseObj.title}));
};

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));

// worth studying the way they structured this


function processReleaseData2(data) {
  return data.filter(release => release.id && release.title)
             .map(release => {
               return {
                 id: release.id,
                 title: release.title,
               };
             });
}