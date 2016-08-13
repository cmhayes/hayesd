(function() {
    'use strict';

    angular.module('hayesd').constant('detailsConstants', {
        LOCATIONS: {
            LABRI: {
                name: 'L\'Abri at Linwood',
                role: 'Venue',
                address: '775 Sam Sharpe Rd, Linwood, NC 27299',
                details: 'The ceremony will be held at 5:00 PM in front of the pond at L\'Abri in Linwood, NC, with a cocktail hour and reception to follow. L\'Abri is located off of Exit 88 on I-85, about halfway between Concord and Greensboro.',
                images: [
                    {
                        img: '//s3.amazonaws.com/finallyhayesd.us/assets/images/labri1.jpg',
                        caption: 'Reception at the Barn'
                    },
                    {
                        img: '//s3.amazonaws.com/finallyhayesd.us/assets/images/labri2.jpg',
                        caption: 'Ceremony by the Pond'
                    },
                    {
                        img: '//s3.amazonaws.com/finallyhayesd.us/assets/images/labri3.jpg',
                        caption: 'First Meet at the Tree'
                    }
                ],
                map: '775+Sam+Sharpe+Rd+Linwood+NC+27299'
            },
            VILLAGE_INN: {
                name: 'Village Inn Event Center',
                role: 'Hotel',
                address: '6205 Ramada Drive, Clemmons, NC 27012',
                details: 'For anyone that is interested in staying in the area overnight, we have reserved a block of rooms for Friday, October 28th and Saturday, October 29th at the Village Inn Event Center in Clemmons, NC. The Village Inn Event Center is located about 30 minutes north of L\'Abri at Linwood. To receive the discounted rate, please make your reservations by September 28th and reference the group name "Hayes Wedding".',
                images: [
                    {
                        img: '//s3.amazonaws.com/finallyhayesd.us/assets/images/village1.jpg',
                        caption: 'Village Inn'
                    }
                ],
                map: '6205+Ramada+Drive+Clemmons+NC+27012'
            }
        }
    });
})();
