export default function() {
    this.namespace = '/api';

    this.get('/flashcards', function() {
        return {
            data: [{
                type: 'flashcards',
                id: 'grand-old-mansion',
                attributes: {
                    question: 'What is lion',
                    answer: 'Lion is a agressive and strong animal. King of desert!!!',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
                    }
                }, {
                type: 'flashcards',
                id: 'urban-living',
                attributes: {
                    question: 'What is lion',
                    answer: 'Lion is a agressive and strong animal. King of desert!!!',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
                    }
                }, {
                type: 'flashcards',
                id: 'downtown-charm',
                attributes: {
                    question: 'What is lion',
                    answer: 'Lion is a agressive and strong animal. King of desert!!!',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
                }
            }]
        };
    });

    let rentals = [{
    //   this.get('/rentals', function() {
    // return {
    //   data: [{
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
            question: 'What is lion?',
            answer: 'Lion is a strong and aggressive animal.',
            title: 'Grand Old Mansion',
            owner: 'Veruca Salt',
            city: 'San Francisco',
            category: 'Estate',
            bedrooms: 15,
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'rentals',
        id: 'urban-living',
        attributes: {
            question: 'Tell me about biology!',
            answer: 'Biology is a one scienc field.',
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          category: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'rentals',
        id: 'downtown-charm',
        attributes: {
            question: 'Do you know what love is?',
            answer: 'Love is true',
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          category: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }];
      this.get('/rentals', function(db, request) {
    if(request.queryParams.question !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.question.toLowerCase().indexOf(request.queryParams.question.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });

    let packs = [{
        type: 'packs',
        id: 'Chemistry',
        attributes: {
            title: 'Organic Chemistry: Proteins & Nucleic Acids',
            owner: 'Veruca Salt',
            // city: 'San Francisco',
            category: 'TEACHER',
            terms: 15,
            userimage: 'https://gimg.quizlet.com/-AzVJVfe_TK8/AAAAAAAAAAI/AAAAAAAAABk/zCTl3f4zxNE/photo.jpg?sz=16',
            image: 'https://o.quizlet.com/vJB2Em559uWHyrHniwZ-fQ.jpg'
            }
        }, {
        type: 'packs',
        id: 'Economics',
        attributes: {
            title: 'Germany Sentences of the Day',
            owner: 'Mike Teavee',
            // city: 'Seattle',
            category: 'TEACHER',
            terms: 2,
            image: 'https://o.quizlet.com/X3EV9UITbgLPHW1AQjMjpA.jpg'
            }
        }, {
        type: 'packs',
        id: 'downtown-charm',
        attributes: {
            title: 'Landmark Supreme Court Class',
            owner: 'Violet Beauregarde',
            // city: 'Portland',
            category: '',
            terms: 3,
            image: ''
            }
        },{
        type: 'packs',
        id: 'urban-living',
        attributes: {
            title: 'Urban Living',
            owner: 'Mike Teavee',
            // city: 'Seattle',
            category: '',
            terms: 1,
            image: 'https://o.quizlet.com/DV0cZJx4OONoFVB8KIzIWQ.jpg'
            }
        },{
        type: 'packs',
        id: 'urving',
        attributes: {
            title: 'Urban Living',
            owner: 'Mike Teavee',
            // city: 'Seattle',
            category: 'Condo',
            terms: 1,
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
            }
        },{
        type: 'packs',
        id: 'iving',
        attributes: {
            title: 'Urban Living',
            owner: 'Mike Teavee',
            // city: 'Seattle',
            category: 'Condo',
            terms: 1,
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
            }
        },{
        type: 'packs',
        id: 'living',
        attributes: {
            title: 'Urban Living',
            owner: 'Mike Teavee',
            // city: 'Seattle',
            category: 'Condo',
            terms: 1,
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
            }
        }]
    this.get('/packs', function(db, request) {
        if (request.queryParams.owner !== undefined) {
            let filteredPacks = packs.filter(function(i) {
                return i.attributes.owner.toLowerCase().indexOf(request.queryParams.owner.toLowerCase()) !== -1;
            });
            return {data: filteredPacks};
        } else {
            return {data:packs};
        }
    });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
